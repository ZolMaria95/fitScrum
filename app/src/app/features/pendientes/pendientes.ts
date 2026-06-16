import { Component, computed, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { firstValueFrom } from 'rxjs';
import { DataService } from '../../core/services/data.service';
import { TicketMessagesDialog } from '../tickets/ticket-messages-dialog/ticket-messages-dialog';
import { PendienteDateDialog, PendienteDateResult } from './pendiente-date-dialog/pendiente-date-dialog';

interface PendItem {
  ticket: string;
  clienteRaw?: string;
  asunto?: string;
  addedAt?: string;
  dueDate?: string; // YYYY-MM-DD
  dueTime?: string; // HH:mm
  paused?: boolean;
  lastAlerted?: string | null;
}

/** Convierte fecha+hora del recordatorio a Date (o null si no hay fecha). */
export function pendienteDueAt(p: { dueDate?: string; dueTime?: string }): Date | null {
  return p.dueDate ? new Date(`${p.dueDate}T${(p.dueTime || '09:00')}:00`) : null;
}

/** Tickets marcados como pendientes (⏸) con recordatorio fecha/hora. Port de js/pendientes.js. */
@Component({
  selector: 'app-pendientes',
  imports: [MatButtonModule, MatIconModule, MatMenuModule, MatTooltipModule],
  templateUrl: './pendientes.html',
  styleUrl: './pendientes.scss',
})
export class Pendientes {
  private readonly data = inject(DataService);
  private readonly dialog = inject(MatDialog);

  private readonly pend = signal<Record<string, PendItem>>(this.data.getHdPendientes());

  constructor() {
    this.data.ensureInit().then(() => this.pend.set({ ...this.data.getHdPendientes() }));
  }

  readonly items = computed<PendItem[]>(() =>
    Object.values(this.pend()).sort((a, b) => {
      const da = pendienteDueAt(a)?.getTime() ?? Infinity;
      const db = pendienteDueAt(b)?.getTime() ?? Infinity;
      if (da !== db) return da - db; // recordatorio más próximo primero
      return (b.addedAt || '').localeCompare(a.addedAt || '');
    }),
  );

  private refresh(): void { this.pend.set({ ...this.data.getHdPendientes() }); }

  // ── Estado del recordatorio ──
  isDue(it: PendItem): boolean {
    if (it.paused) return false;
    const at = pendienteDueAt(it);
    return !!at && at.getTime() <= Date.now();
  }
  estado(it: PendItem): 'pausado' | 'vencido' | 'programado' | 'sin-fecha' {
    if (!it.dueDate) return 'sin-fecha';
    if (it.paused) return 'pausado';
    return this.isDue(it) ? 'vencido' : 'programado';
  }

  // ── Formato ──
  fmtDateTime(it: PendItem): string {
    if (!it.dueDate) return '—';
    const at = pendienteDueAt(it)!;
    return at.toLocaleString('es-ES', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' });
  }
  fmtAdded(iso?: string): string { return iso ? iso.split('T')[0] : ''; }
  trunc(s: string | undefined, n: number): string { return s && s.length > n ? s.slice(0, n) + '…' : s || '—'; }

  // ── Acciones ──
  openConversation(ticket: string): void {
    this.dialog.open(TicketMessagesDialog, { data: { ticketId: ticket }, width: '720px', maxWidth: '96vw' });
  }
  pausar(it: PendItem): void {
    this.data.updateHdPendiente(it.ticket, { paused: true });
    this.refresh();
  }
  reanudar(it: PendItem): void {
    // Reanudar limpia el "alertado hoy" para que pueda volver a saltar.
    this.data.updateHdPendiente(it.ticket, { paused: false, lastAlerted: null });
    this.refresh();
  }
  async postergar(it: PendItem): Promise<void> {
    const res = (await firstValueFrom(
      this.dialog
        .open(PendienteDateDialog, {
          data: { title: 'Postergar recordatorio', ticket: it.ticket, dueDate: it.dueDate, dueTime: it.dueTime },
          width: '420px',
          maxWidth: '95vw',
        })
        .afterClosed(),
    )) as PendienteDateResult | undefined;
    if (!res) return;
    this.data.updateHdPendiente(it.ticket, { dueDate: res.dueDate, dueTime: res.dueTime, paused: false, lastAlerted: null });
    this.refresh();
  }
  remove(ticket: string): void {
    this.data.removeHdPendiente(ticket);
    this.refresh();
  }
}
