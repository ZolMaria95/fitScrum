import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DataService, Story } from '../../core/services/data.service';
import { HelpdeskService } from '../../core/services/helpdesk.service';
import { CardDetailDialog } from '../board/card-detail-dialog/card-detail-dialog';
import { Ticket } from '../tickets/ticket-utils';

const STATUS_LABELS: Record<string, string> = {
  todo: 'To Do',
  in_progress: 'En progreso',
  review: 'En certificación',
  done: 'Finalizado',
};

function today(): Date { const d = new Date(); d.setHours(0, 0, 0, 0); return d; }
function diffDays(dueDate: string): number {
  return Math.ceil((new Date(dueDate + 'T00:00:00').getTime() - today().getTime()) / 864e5);
}

/** Mi Panel (Scrum Master): seguimiento diario. Port de js/sol-panel.js. */
@Component({
  selector: 'app-mi-panel',
  imports: [FormsModule, MatButtonModule, MatIconModule, MatProgressBarModule, MatTooltipModule],
  templateUrl: './mi-panel.html',
  styleUrl: './mi-panel.scss',
})
export class MiPanel {
  private readonly data = inject(DataService);
  private readonly hd = inject(HelpdeskService);
  private readonly dialog = inject(MatDialog);

  readonly STATUS_LABELS = STATUS_LABELS;
  readonly loading = this.hd.loading;

  // Estado local reactivo de los mapas planos del DataService.
  private readonly actions = signal(this.data.getHdActions());
  private readonly hdNotes = signal(this.data.getHdNotes());
  private readonly solNotes = signal(this.data.getSolNotes());
  readonly editingNote = signal<string | null>(null);
  noteDraft = '';

  constructor() {
    // El dashboard necesita el panorama completo. Carga amplia siempre: la vista
    // Tickets pudo dejar una página filtrada (server-side) en el servicio compartido.
    this.data.ensureInit();
    this.hd.loadAll();
  }

  refresh(): void {
    this.hd.loadAll();
  }

  // ── Bloque 1: Acciones pendientes (tickets marcados con Acción) ──
  readonly acciones = computed<Ticket[]>(() => {
    const flags = this.actions();
    return this.hd.tickets().filter((t) => !!flags[String(t.ticket)]);
  });
  hdNoteOf(ticket: string): string { return this.hdNotes()[ticket] || ''; }
  realizado(ticket: string): void {
    this.data.setHdAction(ticket, false);
    this.actions.set({ ...this.data.getHdActions() });
  }

  // ── Bloque 2: Notificar al cliente (CLIENTE PENDIENTE 3+ días) ──
  readonly clientePendiente = computed<Ticket[]>(() =>
    this.hd
      .tickets()
      .filter((t) => t.clasificacion === 'CLIENTE PENDIENTE' && t.diasSinMovimiento >= 3)
      .sort((a, b) => b.diasSinMovimiento - a.diasSinMovimiento),
  );
  solNoteOf(ticket: string): string { return this.solNotes()[ticket] || ''; }
  startNote(ticket: string): void {
    this.noteDraft = this.solNoteOf(ticket);
    this.editingNote.set(ticket);
  }
  saveNote(ticket: string): void {
    this.data.setSolNote(ticket, this.noteDraft);
    this.solNotes.set({ ...this.data.getSolNotes() });
    this.editingNote.set(null);
  }
  cancelNote(): void { this.editingNote.set(null); }
  trunc(s: string, n: number): string { return s && s.length > n ? s.slice(0, n) + '…' : s || ''; }

  // ── Bloque 3: Próximos a vencer (tareas no Done, vencen en ≤3 días) ──
  readonly soon = computed<Story[]>(() =>
    this.data
      .stories()
      .filter((s) => s.status !== 'done' && !!s.dueDate && diffDays(s.dueDate) <= 3)
      .sort((a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime()),
  );

  // ── Bloque 4: Por asignar (tareas en To Do SIN asignado en el board) ──
  readonly porAsignar = computed<Story[]>(() => this.data.stories().filter((s) => s.status === 'todo' && !s.assignee));

  // ── Helpers de stories ──
  memberOf(id: string | null) { return id ? this.data.getMember(id) : undefined; }
  clientOf(id: string | null): { id: string; name: string; color?: string } | undefined {
    if (!id) return undefined;
    const c = this.data.getClient(id) as { id: string; name: string; color?: string } | undefined;
    return c ? { id: c.id, name: c.name, color: c.color } : undefined;
  }

  dueInfo(s: Story): { label: string; critical: boolean } {
    const d = diffDays(s.dueDate);
    if (d < 0) return { label: `${Math.abs(d)}d vencida`, critical: true };
    if (d === 0) return { label: 'Hoy', critical: true };
    if (d === 1) return { label: 'Mañana', critical: false };
    return { label: `${d}d`, critical: false };
  }

  openStory(s: Story): void {
    this.dialog.open(CardDetailDialog, { data: { story: s }, width: '560px', maxWidth: '95vw' });
  }
}
