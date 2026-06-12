import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Sort, MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AuthService } from '../../core/services/auth.service';
import { DataService } from '../../core/services/data.service';
import { HelpdeskService } from '../../core/services/helpdesk.service';
import { CardDetailDialog } from '../board/card-detail-dialog/card-detail-dialog';
import { TicketMessagesDialog } from './ticket-messages-dialog/ticket-messages-dialog';
import { AssignTicketDialog } from './assign-ticket-dialog/assign-ticket-dialog';
import { CLASIF_COLOR, CLASIF_ORDER, PRIORITY_ACTIONS } from './helpdesk.constants';
import { Ticket } from './ticket-utils';

type Tab = 'prioritarios' | 'todos' | 'asignados' | 'estadisticas';

interface StatRow {
  key: string;
  count: number;
  pct: string;
  color: string;
}

/** Vista Tickets (tabla del Helpdesk). Port de js/helpdesk-panel.js. */
@Component({
  selector: 'app-tickets',
  imports: [
    FormsModule,
    MatTableModule,
    MatSortModule,
    MatTabsModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatProgressBarModule,
    MatTooltipModule,
  ],
  templateUrl: './tickets.html',
  styleUrl: './tickets.scss',
})
export class Tickets {
  private readonly hd = inject(HelpdeskService);
  private readonly data = inject(DataService);
  private readonly auth = inject(AuthService);
  private readonly dialog = inject(MatDialog);
  private readonly snack = inject(MatSnackBar);

  readonly tickets = this.hd.tickets;
  readonly syncStatus = this.hd.syncStatus;
  readonly loading = this.hd.loading;
  readonly CLASIF_COLOR = CLASIF_COLOR;

  readonly displayedColumns = [
    'ticket', 'nota', 'cliente', 'asunto', 'fechaUltimoMensaje', 'ultimoMensaje',
    'tipo', 'nombreAsignado', 'estatus', 'modulo', 'fechaIngreso',
    'diasSinMovimiento', 'diasDesdeIngreso', 'clasificacion', 'accion',
  ];

  // ── Estado de la vista ──
  readonly tab = signal<Tab>('prioritarios');
  readonly filterCliente = signal('');
  readonly filterAccion = signal('');
  readonly filterClasif = signal('');
  readonly filterEstatus = signal('');
  readonly filterTicket = signal('');
  readonly remoteResult = signal<Ticket | null>(null);
  readonly sortCol = signal('fechaUltimoMensaje');
  readonly sortDir = signal<'asc' | 'desc' | ''>('desc');
  private searchTimer: any = null;

  // Notas / acciones / pendientes (se leen reactivamente del DataService).
  readonly notes = signal(this.data.getHdNotes());
  readonly actions = signal(this.data.getHdActions());
  readonly pendientes = signal(this.data.getHdPendientes());
  readonly editingNote = signal<string | null>(null);
  noteDraft = '';

  private get myId(): string {
    return String(this.auth.session()?.id || '').trim().toUpperCase();
  }

  // ── Conjunto base según la tab / búsqueda ──
  private readonly base = computed<Ticket[]>(() => {
    const remote = this.remoteResult();
    if (remote) return [remote];
    const all = this.tickets();
    if (this.filterTicket()) return all; // búsqueda por nº: ignora la tab
    if (this.tab() === 'asignados') return all.filter((t) => t.usuarioAsignado === this.myId);
    if (this.tab() === 'prioritarios') return all.filter((t) => PRIORITY_ACTIONS.has(t.accion));
    return all;
  });

  readonly counts = computed(() => {
    const all = this.tickets();
    const uid = this.myId;
    return {
      prio: all.filter((t) => PRIORITY_ACTIONS.has(t.accion)).length,
      all: all.length,
      asignados: uid ? all.filter((t) => t.usuarioAsignado === uid).length : 0,
    };
  });

  // Opciones de los filtros (sobre el universo de la tab, sin filtrar).
  readonly optClientes = computed(() => [...new Set(this.base().map((t) => t.clienteRaw))].sort());
  readonly optAcciones = computed(() => [...new Set(this.base().map((t) => t.accion))].sort());
  readonly optClasifs = computed(() => CLASIF_ORDER.filter((c) => this.base().some((t) => t.clasificacion === c)));
  readonly optEstatus = computed(() => [...new Set(this.base().map((t) => t.estatus).filter(Boolean))].sort());

  readonly rows = computed<Ticket[]>(() => {
    let base = this.base();
    if (!this.remoteResult()) {
      const cli = this.filterCliente(), acc = this.filterAccion(), cla = this.filterClasif();
      const est = this.filterEstatus(), tic = this.filterTicket();
      base = base.filter(
        (t) =>
          (!cli || t.clienteRaw === cli) &&
          (!acc || t.accion === acc) &&
          (!cla || t.clasificacion === cla) &&
          (!est || t.estatus === est) &&
          (!tic || String(t.ticket).includes(tic)),
      );
    }
    return this.sortRows(base);
  });

  readonly hasFilters = computed(
    () => !!(this.filterCliente() || this.filterAccion() || this.filterClasif() || this.filterEstatus() || this.filterTicket() || this.remoteResult()),
  );

  readonly stats = computed(() => {
    const all = this.tickets();
    const total = all.length;
    const acc = (sel: (t: Ticket) => string) => {
      const m = new Map<string, number>();
      all.forEach((t) => m.set(sel(t), (m.get(sel(t)) || 0) + 1));
      return m;
    };
    const toRows = (m: Map<string, number>, useColor: boolean): StatRow[] =>
      [...m.entries()]
        .filter(([, v]) => v > 0)
        .sort((a, b) => b[1] - a[1])
        .map(([key, count]) => ({
          key,
          count,
          pct: total ? ((count / total) * 100).toFixed(1) + '%' : '0%',
          color: useColor ? CLASIF_COLOR[key] || '#757575' : 'inherit',
        }));
    return {
      total,
      porClasif: toRows(acc((t) => t.clasificacion), true),
      porCliente: toRows(acc((t) => t.clienteRaw), false),
      porEstatus: toRows(acc((t) => t.estatus), false),
    };
  });

  private sortRows(arr: Ticket[]): Ticket[] {
    const col = this.sortCol();
    const dir = this.sortDir();
    if (!col || !dir) return arr;
    return [...arr].sort((a, b) => {
      let va: any = a[col], vb: any = b[col];
      if (typeof va === 'string' && va && /^\d{4}-\d{2}-\d{2}/.test(va)) {
        va = new Date(va).getTime() || 0;
        vb = new Date(vb || '').getTime() || 0;
      }
      if (typeof va === 'number') return dir === 'asc' ? va - vb : vb - va;
      const cmp = String(va || '').toLowerCase().localeCompare(String(vb || '').toLowerCase());
      return dir === 'asc' ? cmp : -cmp;
    });
  }

  // ── Acciones ──
  sync(): void {
    this.hd.sync();
  }

  onSort(s: Sort): void {
    this.sortCol.set(s.active);
    this.sortDir.set(s.direction);
  }

  setTab(t: Tab): void {
    this.tab.set(t);
  }

  clearFilters(): void {
    this.filterCliente.set('');
    this.filterAccion.set('');
    this.filterClasif.set('');
    this.filterEstatus.set('');
    this.filterTicket.set('');
    this.remoteResult.set(null);
  }

  onSearchInput(value: string): void {
    const v = value.trim();
    this.filterTicket.set(v);
    this.remoteResult.set(null);
    clearTimeout(this.searchTimer);
    if (!v || !/^\d+$/.test(v)) return;
    this.searchTimer = setTimeout(async () => {
      if (this.tickets().some((t) => String(t.ticket).includes(v))) return; // ya está en memoria
      const t = await this.hd.searchTicketRemote(v);
      if (t) this.remoteResult.set(t);
    }, 450);
  }

  // ── Crear tarea desde el ticket (mismo modal del board) ──
  openTicketTask(t: Ticket): void {
    this.dialog.open(CardDetailDialog, {
      data: {
        story: null,
        prefill: {
          ticket: t.ticket,
          client: t.clientId,
          clientName: t.clienteRaw,
          title: t.asunto,
          assignee: t.usuarioAsignado,
          assigneeName: t.nombreAsignado,
        },
      },
      width: '560px',
      maxWidth: '95vw',
    });
  }

  openConversation(t: Ticket): void {
    this.dialog.open(TicketMessagesDialog, { data: { ticket: t }, width: '720px', maxWidth: '96vw' });
  }

  openAssign(t: Ticket): void {
    this.dialog.open(AssignTicketDialog, { data: { ticket: t }, width: '440px', maxWidth: '95vw' });
  }

  copyTicket(t: Ticket): void {
    navigator.clipboard?.writeText(String(t.ticket)).then(
      () => this.snack.open(`Copiado #${t.ticket}`, '', { duration: 1500 }),
      () => {},
    );
  }

  // ── Interacciones inline ──
  isAction(t: Ticket): boolean {
    return !!this.actions()[t.ticket];
  }
  isPending(t: Ticket): boolean {
    return !!this.pendientes()[t.ticket];
  }
  toggleAction(t: Ticket): void {
    this.data.setHdAction(t.ticket, !this.isAction(t));
    this.actions.set({ ...this.data.getHdActions() });
  }
  togglePending(t: Ticket): void {
    if (this.isPending(t)) this.data.removeHdPendiente(t.ticket);
    else this.data.setHdPendiente(t.ticket, { ticket: t.ticket, asunto: t.asunto, clienteRaw: t.clienteRaw });
    this.pendientes.set({ ...this.data.getHdPendientes() });
  }
  noteOf(t: Ticket): string {
    return this.notes()[t.ticket] || '';
  }
  startNote(t: Ticket): void {
    this.noteDraft = this.noteOf(t);
    this.editingNote.set(t.ticket);
  }
  saveNote(t: Ticket): void {
    this.data.setHdNote(t.ticket, this.noteDraft);
    this.notes.set({ ...this.data.getHdNotes() });
    this.editingNote.set(null);
  }
  cancelNote(): void {
    this.editingNote.set(null);
  }

  // ── Formato ──
  fmtDate(iso: string): string {
    if (!iso) return '';
    const [d, h = ''] = iso.split('T');
    return h ? `${d} ${h.slice(0, 5)}` : d;
  }
  diasColor(n: number): string {
    return n > 7 ? '#C00000' : n > 3 ? '#FF8C00' : '#2E7D32';
  }
  trunc(s: string, n: number): string {
    return s && s.length > n ? s.slice(0, n) + '…' : s || '';
  }
}
