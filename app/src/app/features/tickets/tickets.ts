import { Component, OnDestroy, TemplateRef, computed, effect, inject, signal, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../../core/services/auth.service';
import { DataService } from '../../core/services/data.service';
import { HelpdeskService } from '../../core/services/helpdesk.service';
import { ShellService } from '../../core/services/shell.service';
import { CardDetailDialog } from '../board/card-detail-dialog/card-detail-dialog';
import { TicketMessagesDialog } from './ticket-messages-dialog/ticket-messages-dialog';
import { AssignTicketDialog } from './assign-ticket-dialog/assign-ticket-dialog';
import { TicketCard } from './ticket-card/ticket-card';
import { CLASIF_COLOR, CLASIF_ORDER, PRIORITY_ACTIONS } from './helpdesk.constants';
import { Ticket } from './ticket-utils';

type Tab = 'prioritarios' | 'todos' | 'asignados' | 'generales' | 'estadisticas';

interface StatRow {
  key: string;
  count: number;
  pct: string;
  color: string;
}

/** Vista Tickets (grid de cards del Helpdesk). Port de js/helpdesk-panel.js. */
@Component({
  selector: 'app-tickets',
  imports: [
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatPaginatorModule,
    MatProgressBarModule,
    TicketCard,
  ],
  templateUrl: './tickets.html',
  styleUrl: './tickets.scss',
})
export class Tickets implements OnDestroy {
  private readonly hd = inject(HelpdeskService);
  private readonly data = inject(DataService);
  private readonly auth = inject(AuthService);
  private readonly dialog = inject(MatDialog);
  private readonly snack = inject(MatSnackBar);
  private readonly shell = inject(ShellService);

  /** Panel de filtros que se publica al drawer del shell. */
  readonly filtersTpl = viewChild<TemplateRef<unknown>>('filtersTpl');

  readonly tickets = this.hd.tickets;
  readonly syncStatus = this.hd.syncStatus;
  readonly loading = this.hd.loading;
  readonly statusNames = this.hd.statusNames;
  // Tab "Generales" (set completo, perezoso y paginado, sin mensajes).
  readonly allTickets = this.hd.allTickets;
  readonly loadingGenerales = this.hd.loadingGenerales;
  readonly hasMoreGenerales = this.hd.hasMoreGenerales;
  readonly generalesStatus = this.hd.generalesStatus;
  /** Estados elegibles en el menú: nunca se permite cambiar a ABIERTO. */
  readonly statusOptions = computed(() => this.statusNames().filter((s) => s.trim().toUpperCase() !== 'ABIERTO'));
  readonly CLASIF_COLOR = CLASIF_COLOR;

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

  // Paginación por páginas: se renderiza SOLO la página actual (reduce scroll/DOM).
  readonly pageIndex = signal(0);
  readonly pageSize = signal(12);

  // Notas / acciones / pendientes (se leen reactivamente del DataService).
  readonly notes = signal(this.data.getHdNotes());
  readonly actions = signal(this.data.getHdActions());
  readonly pendientes = signal(this.data.getHdPendientes());

  constructor() {
    // Catálogo de estados (para el menú de cambio de estado de cada card).
    this.hd.getTicketStatuses();
    // Publica los filtros de esta vista en el drawer del shell.
    effect(() => this.shell.setFilters(this.filtersTpl() ?? null));
  }

  ngOnDestroy(): void {
    this.shell.clear();
  }

  private get myId(): string {
    return String(this.auth.session()?.id || '').trim().toUpperCase();
  }

  // ── Conjunto base según la tab / búsqueda ──
  private readonly base = computed<Ticket[]>(() => {
    const remote = this.remoteResult();
    if (remote) return [remote];
    // Generales: set completo perezoso (el filtro por nº lo aplica rows()).
    if (this.tab() === 'generales') return this.allTickets();
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
      generales: this.allTickets().length,
    };
  });

  /** Total del universo de la tab actual (denominador de "X de Y"). */
  readonly tabTotal = computed(() => (this.tab() === 'generales' ? this.allTickets().length : this.counts().all));
  /** ¿La tab actual ya tiene datos cargados? (para el estado vacío). */
  readonly tabHasData = computed(() => (this.tab() === 'generales' ? this.allTickets().length > 0 : this.tickets().length > 0));

  /** Nº de tickets que ya tienen una tarea creada en el board (ocultan "Crear tarea"). */
  readonly ticketsEnBoard = computed(() => new Set(this.data.stories().map((s) => String(s.ticket)).filter(Boolean)));

  // Opciones de los filtros (sobre el universo de la tab, sin filtrar).
  readonly optClientes = computed(() => [...new Set(this.base().map((t) => t.clienteRaw))].sort());
  readonly optAcciones = computed(() => [...new Set(this.base().map((t) => t.accion))].sort());
  readonly optClasifs = computed(() => CLASIF_ORDER.filter((c) => this.base().some((t) => t.clasificacion === c)));
  readonly optEstatus = computed(() => [...new Set(this.base().map((t) => t.estatus).filter(Boolean))].sort());

  // Búsqueda dentro de cada filtro (selects con muchas opciones).
  readonly buscarCliente = signal('');
  readonly buscarAccion = signal('');
  readonly buscarClasif = signal('');
  readonly buscarEstatus = signal('');
  private fOpt(list: string[], term: string): string[] {
    const t = term.trim().toLowerCase();
    return t ? list.filter((x) => x.toLowerCase().includes(t)) : list;
  }
  readonly optClientesF = computed(() => this.fOpt(this.optClientes(), this.buscarCliente()));
  readonly optAccionesF = computed(() => this.fOpt(this.optAcciones(), this.buscarAccion()));
  readonly optClasifsF = computed(() => this.fOpt(this.optClasifs(), this.buscarClasif()));
  readonly optEstatusF = computed(() => this.fOpt(this.optEstatus(), this.buscarEstatus()));

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

  // ── Paginación ──
  /** Página actual acotada al rango válido del set filtrado. */
  readonly clampedPageIndex = computed(() => {
    const pages = Math.max(1, Math.ceil(this.rows().length / this.pageSize()));
    return Math.min(this.pageIndex(), pages - 1);
  });
  /** Solo las filas de la página actual (lo único que se renderiza en la tabla). */
  readonly pagedRows = computed<Ticket[]>(() => {
    const start = this.clampedPageIndex() * this.pageSize();
    return this.rows().slice(start, start + this.pageSize());
  });
  /** Longitud para el paginador. En Generales (carga perezosa) se suma una página
   *  extra mientras haya más, para mantener habilitado "Siguiente". */
  readonly paginatorLength = computed(() =>
    this.tab() === 'generales'
      ? this.rows().length + (this.hasMoreGenerales() ? this.pageSize() : 0)
      : this.rows().length,
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

  setTab(t: Tab): void {
    this.tab.set(t);
    this.pageIndex.set(0);
    // Generales se carga perezoso al entrar la primera vez.
    if (t === 'generales' && !this.allTickets().length && !this.loadingGenerales()) {
      this.hd.syncGenerales();
    }
  }

  /** Navegación del paginador. En Generales pide al API la página que falte. */
  onPage(e: PageEvent): void {
    this.pageSize.set(e.pageSize);
    this.pageIndex.set(e.pageIndex);
    if (this.tab() === 'generales') {
      const need = (e.pageIndex + 1) * e.pageSize;
      if (this.allTickets().length < need && this.hasMoreGenerales() && !this.loadingGenerales()) {
        this.hd.loadMoreGenerales();
      }
    }
  }

  clearFilters(): void {
    this.filterCliente.set('');
    this.filterAccion.set('');
    this.filterClasif.set('');
    this.filterEstatus.set('');
    this.filterTicket.set('');
    this.remoteResult.set(null);
    this.buscarCliente.set('');
    this.buscarAccion.set('');
    this.buscarClasif.set('');
    this.buscarEstatus.set('');
    this.pageIndex.set(0);
  }

  onSearchInput(value: string): void {
    const v = value.trim();
    this.filterTicket.set(v);
    this.remoteResult.set(null);
    this.pageIndex.set(0);
    clearTimeout(this.searchTimer);
    if (!v || !/^\d+$/.test(v)) return;
    this.searchTimer = setTimeout(async () => {
      // Ya está en memoria (en cualquiera de los dos sets) → no consultar al API.
      if (this.tickets().some((t) => String(t.ticket).includes(v))) return;
      if (this.allTickets().some((t) => String(t.ticket).includes(v))) return;
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

  async changeStatus(t: Ticket, estado: string): Promise<void> {
    if (estado === t.estatus) return;
    const ok = await this.hd.setTicketStatus(t.ticket, estado);
    this.snack.open(
      ok ? `Ticket #${t.ticket} → ${estado}` : `No se pudo cambiar el estado del ticket #${t.ticket}.`,
      ok ? '' : 'OK',
      { duration: ok ? 2500 : 4000 },
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
  onGuardarNota(t: Ticket, texto: string): void {
    this.data.setHdNote(t.ticket, texto);
    this.notes.set({ ...this.data.getHdNotes() });
  }
}
