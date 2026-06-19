import { Component, ElementRef, inject, signal, viewChild } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AuthService } from '../../../core/services/auth.service';
import { HelpdeskService } from '../../../core/services/helpdesk.service';
import { ComposeDialog } from '../compose-dialog/compose-dialog';
import { EMPLEADOS } from '../helpdesk.constants';
import { Ticket, clipboardToHtml, insertCodeBlock, mapTicket, safeHtml, stripHtml } from '../ticket-utils';
import { estadoStyle } from '../tickets-card-utils';

interface ConvMsg {
  autor: string;
  tipo: 'sys' | 'emp' | 'cli';
  fecha: string;
  html: SafeHtml | null;
  adjuntos: { id: string; nombre: string }[];
}

export interface TicketMessagesData {
  /** Número de ticket. Alternativa a pasar el objeto Ticket completo. */
  ticketId?: string;
  /** Ticket completo (si el llamador lo tiene, evita una consulta para el header). */
  ticket?: Ticket;
}

/** Conversación completa de un ticket: mensajes, adjuntos, lightbox y composer. */
@Component({
  selector: 'app-ticket-messages-dialog',
  imports: [MatDialogModule, MatButtonModule, MatIconModule, MatProgressBarModule, MatTooltipModule],
  templateUrl: './ticket-messages-dialog.html',
  styleUrl: './ticket-messages-dialog.scss',
})
export class TicketMessagesDialog {
  private readonly hd = inject(HelpdeskService);
  private readonly auth = inject(AuthService);
  private readonly router = inject(Router);
  private readonly dialogRef = inject(MatDialogRef<TicketMessagesDialog>);
  private readonly dialog = inject(MatDialog);
  private readonly sanitizer = inject(DomSanitizer);
  private readonly snack = inject(MatSnackBar);
  private readonly data = inject<TicketMessagesData>(MAT_DIALOG_DATA);

  readonly ticketId = this.data.ticketId || this.data.ticket?.ticket || '';
  readonly estadoStyle = estadoStyle;
  private ticketObj: Ticket | null = this.data.ticket ?? null;
  readonly header = signal({
    cliente: this.data.ticket?.clienteRaw || '',
    estatus: this.data.ticket?.estatus || '',
    asunto: this.data.ticket?.asunto || '',
  });
  readonly loading = signal(true);
  readonly sessionExpired = signal(false);
  readonly messages = signal<ConvMsg[]>([]);
  readonly ticketAttachments = signal<string[]>([]);
  readonly lightbox = signal<string | null>(null);

  // Paginación de mensajes: se procesa/hidrata solo el bloque más reciente y los
  // anteriores se cargan bajo demanda (no todo junto). `cursor` = índice del más
  // viejo ya mostrado dentro de `sortedRaw` (orden ascendente por fecha).
  private static readonly CHUNK = 15;
  readonly hasOlder = signal(false);
  readonly loadingOlder = signal(false);
  private sortedRaw: any[] = [];
  private cursor = 0;

  // Editor de respuesta con formato (contenteditable): escribir/pegar/dar
  // formato aquí ya viaja como HTML, así el mensaje conserva el formato.
  readonly composerInput = viewChild.required<ElementRef<HTMLElement>>('composerInput');
  composerFiles: File[] = [];
  readonly sending = signal(false);
  readonly sendStatus = signal('');

  constructor() {
    this.load();
  }

  private async load(): Promise<void> {
    this.loading.set(true);
    // Verifica la sesión antes de pedir nada: si expiró, las llamadas HD_SAFE
    // devolverían vacío ("Sin mensajes") en vez de avisar. Mejor pedir re-login.
    if (!(await this.auth.verifySession())) {
      this.sessionExpired.set(true);
      this.loading.set(false);
      return;
    }
    // Si no vino el ticket completo (p. ej. abierto desde la card), trae el header.
    if (!this.ticketObj && this.ticketId) {
      const raw = await this.hd.fetchTicketRaw(this.ticketId);
      if (raw) {
        this.ticketObj = mapTicket(raw);
        this.header.set({ cliente: this.ticketObj.clienteRaw, estatus: this.ticketObj.estatus, asunto: this.ticketObj.asunto });
      }
    }
    const msgs = await this.hd.fetchMessages(this.ticketId);
    this.sortedRaw = [...msgs].sort(
      (a, b) => new Date(a.entry_date || 0).getTime() - new Date(b.entry_date || 0).getTime(),
    );
    this.cursor = this.sortedRaw.length;
    this.messages.set([]);
    this.loading.set(false);
    // Muestra el bloque más reciente; los anteriores se cargan bajo demanda.
    await this.loadOlder();
    // Adjunto a nivel ticket (no de un mensaje) → botón de descarga.
    if (this.ticketObj) this.hd.ticketAttachmentIds(this.ticketObj).then((ids) => this.ticketAttachments.set(ids));
  }

  /** Procesa (e hidrata imágenes de) el bloque inmediatamente anterior y lo antepone. */
  async loadOlder(): Promise<void> {
    if (this.loadingOlder() || this.cursor <= 0) return;
    this.loadingOlder.set(true);
    const start = Math.max(0, this.cursor - TicketMessagesDialog.CHUNK);
    const slice = this.sortedRaw.slice(start, this.cursor);
    const procesados = (await Promise.all(slice.map((m) => this.procesar(m)))).filter(
      (m): m is ConvMsg => !!m,
    );
    this.messages.set([...procesados, ...this.messages()]);
    this.cursor = start;
    this.hasOlder.set(this.cursor > 0);
    this.loadingOlder.set(false);
  }

  /** Cierra la conversación y va al login (sesión expirada). */
  goToLogin(): void {
    this.dialogRef.close();
    this.router.navigate(['/login']);
  }

  private esEmpleado(m: any): boolean {
    const role = String(m.entry_user_role || '').trim().toUpperCase();
    if (role) return !role.includes('CLIENTE');
    return EMPLEADOS.has(String(m.entry_user_id || '').trim().toUpperCase());
  }

  private attachsDeMensaje(m: any): { id: string; nombre: string }[] {
    const ids: any[] = [];
    if (m.attach_id) ids.push(m.attach_id);
    if (Array.isArray(m.attach_ids)) ids.push(...m.attach_ids);
    const seen = new Set<string>();
    const out: { id: string; nombre: string }[] = [];
    ids.forEach((id) => {
      const s = String(id);
      if (id && !seen.has(s)) {
        seen.add(s);
        out.push({ id: s, nombre: `adjunto_${s.slice(-6)}` });
      }
    });
    return out;
  }

  /** Reemplaza el src de las imágenes embebidas por blob URLs con auth. */
  private async hidratarImgs(html: string): Promise<string> {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    const imgs = [...doc.querySelectorAll('img[src]')];
    for (const img of imgs) {
      const src = img.getAttribute('src') || '';
      const m = /attachments\/(\d+)/.exec(src);
      if (m) {
        const url = await this.hd.attachmentUrl(m[1]);
        if (url) img.setAttribute('src', url);
      }
    }
    return doc.body.innerHTML;
  }

  private async procesar(m: any): Promise<ConvMsg | null> {
    const esSys = m.system_message === true;
    let html = safeHtml(m.detail || '');
    const texto = stripHtml(html).trim();
    const adjuntos = this.attachsDeMensaje(m);
    if (!texto && !html.includes('<img') && !adjuntos.length) return null;
    if (html.includes('<img')) html = await this.hidratarImgs(html);
    return {
      autor: esSys ? 'Sistema' : m.entry_user_id || '—',
      tipo: esSys ? 'sys' : this.esEmpleado(m) ? 'emp' : 'cli',
      fecha: m.entry_date ? String(m.entry_date).replace('T', ' ').slice(0, 16) : '',
      html: texto || html.includes('<img') ? this.sanitizer.bypassSecurityTrustHtml(html) : null,
      adjuntos,
    };
  }

  onConvClick(e: MouseEvent): void {
    const target = e.target as HTMLElement;
    if (target.tagName === 'IMG') {
      const src = (target as HTMLImageElement).src;
      if (src) this.lightbox.set(src);
    }
  }

  async openAttachment(id: string, nombre: string): Promise<void> {
    const url = await this.hd.attachmentUrl(id);
    if (!url) {
      this.snack.open('No se pudo abrir el adjunto.', 'OK', { duration: 3000 });
      return;
    }
    const a = document.createElement('a');
    a.href = url;
    a.download = nombre;
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 10000);
  }

  onFiles(e: Event): void {
    const input = e.target as HTMLInputElement;
    this.composerFiles = input.files ? [...input.files] : [];
  }

  /** Aplica negrita/cursiva/subrayado a la selección del editor inline. */
  format(cmd: 'bold' | 'italic' | 'underline'): void {
    this.composerInput().nativeElement.focus();
    document.execCommand(cmd, false);
  }

  /** Marca la selección como bloque de código (monoespaciado, conserva sangría). */
  codeBlock(): void {
    insertCodeBlock(this.composerInput().nativeElement);
  }

  /**
   * Al pegar, inserta HTML saneado (conserva formato, descarta el ruido que el
   * backend tiraba y publicaba el mensaje vacío). Sin esto se pegaba el HTML
   * crudo del portapapeles.
   */
  onPaste(e: ClipboardEvent): void {
    const data = e.clipboardData;
    if (!data) return;
    e.preventDefault();
    const limpio = clipboardToHtml(data.getData('text/html'), data.getData('text/plain'));
    document.execCommand('insertHTML', false, limpio);
  }

  /** Abre el editor en un pop-up amplio con el contenido actual y lo devuelve al cerrar. */
  async openComposer(): Promise<void> {
    const el = this.composerInput().nativeElement;
    const html = await firstValueFrom(
      this.dialog
        .open(ComposeDialog, {
          data: { html: el.innerHTML },
          width: '720px',
          maxWidth: '95vw',
          autoFocus: false,
        })
        .afterClosed(),
    );
    if (html === undefined) return; // cancelado
    el.innerHTML = html;
    el.focus();
  }

  async send(): Promise<void> {
    const el = this.composerInput().nativeElement;
    const detail = el.innerHTML.trim();
    const vacio = !el.textContent?.trim() && !el.querySelector('img');
    if (vacio && !this.composerFiles.length) {
      this.sendStatus.set('Escribe un mensaje o adjunta un archivo.');
      return;
    }
    this.sending.set(true);
    this.sendStatus.set('Enviando...');
    const ok = await this.hd.sendMessage(this.ticketId, detail, this.composerFiles);
    this.sending.set(false);
    if (ok) {
      el.innerHTML = '';
      this.composerFiles = [];
      this.sendStatus.set('Enviado ✓');
      this.load();
    } else {
      this.sendStatus.set('Error al enviar.');
    }
  }
}
