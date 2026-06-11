import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HelpdeskService } from '../../../core/services/helpdesk.service';
import { EMPLEADOS } from '../helpdesk.constants';
import { Ticket, safeHtml, stripHtml } from '../ticket-utils';

interface ConvMsg {
  autor: string;
  tipo: 'sys' | 'emp' | 'cli';
  fecha: string;
  html: SafeHtml | null;
  adjuntos: { id: string; nombre: string }[];
}

export interface TicketMessagesData {
  ticket: Ticket;
}

/** Conversación completa de un ticket: mensajes, adjuntos, lightbox y composer. */
@Component({
  selector: 'app-ticket-messages-dialog',
  imports: [FormsModule, MatDialogModule, MatButtonModule, MatIconModule, MatProgressBarModule],
  templateUrl: './ticket-messages-dialog.html',
  styleUrl: './ticket-messages-dialog.scss',
})
export class TicketMessagesDialog {
  private readonly hd = inject(HelpdeskService);
  private readonly sanitizer = inject(DomSanitizer);
  private readonly snack = inject(MatSnackBar);
  private readonly data = inject<TicketMessagesData>(MAT_DIALOG_DATA);

  readonly ticket = this.data.ticket;
  readonly loading = signal(true);
  readonly messages = signal<ConvMsg[]>([]);
  readonly ticketAttachments = signal<string[]>([]);
  readonly lightbox = signal<string | null>(null);

  composerText = '';
  composerFiles: File[] = [];
  readonly sending = signal(false);
  readonly sendStatus = signal('');

  constructor() {
    this.load();
  }

  private async load(): Promise<void> {
    this.loading.set(true);
    const msgs = await this.hd.fetchMessages(this.ticket.ticket);
    const sorted = [...msgs].sort(
      (a, b) => new Date(a.entry_date || 0).getTime() - new Date(b.entry_date || 0).getTime(),
    );
    const procesados = await Promise.all(sorted.map((m) => this.procesar(m)));
    this.messages.set(procesados.filter((m): m is ConvMsg => !!m));
    this.loading.set(false);
    this.hd.ticketAttachmentIds(this.ticket).then((ids) => this.ticketAttachments.set(ids));
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

  async send(): Promise<void> {
    const detail = this.composerText.trim().replace(/\n/g, '<br>');
    if (!detail && !this.composerFiles.length) {
      this.sendStatus.set('Escribe un mensaje o adjunta un archivo.');
      return;
    }
    this.sending.set(true);
    this.sendStatus.set('Enviando...');
    const ok = await this.hd.sendMessage(this.ticket.ticket, detail, this.composerFiles);
    this.sending.set(false);
    if (ok) {
      this.composerText = '';
      this.composerFiles = [];
      this.sendStatus.set('Enviado ✓');
      this.load();
    } else {
      this.sendStatus.set('Error al enviar.');
    }
  }
}
