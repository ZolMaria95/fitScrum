import { Component, computed, inject, signal } from '@angular/core';
import { CdkDragDrop, DragDropModule } from '@angular/cdk/drag-drop';
import { firstValueFrom } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AuthService } from '../../core/services/auth.service';
import { Client, DataService, Story } from '../../core/services/data.service';
import { HelpdeskService } from '../../core/services/helpdesk.service';
import { CardDetailDialog } from './card-detail-dialog/card-detail-dialog';
import { ConfirmDialog } from './confirm-dialog/confirm-dialog';
import {
  PRIORITY_LABELS,
  Priority,
  STATUS_LABELS,
  Status,
  WorkDeps,
  canStartWork,
  dueInfo,
  progColor,
  resolveMember,
  roundUp5,
} from './board-utils';

type PriorityFilter = 'all' | Priority;

interface Column {
  status: Status;
  label: string;
  cards: Story[];
}

/**
 * Board Kanban (port de js/board.js). Render reactivo por signals de DataService,
 * drag & drop con CDK, filtros y modal de detalle (MatDialog). Las integraciones
 * con el Helpdesk (estado HD, conversación, auto-asignación) llegan en la Fase 2.
 */
@Component({
  selector: 'app-board',
  imports: [
    DragDropModule,
    MatCardModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatSelectModule,
    MatCheckboxModule,
    MatIconModule,
    MatProgressBarModule,
    MatTooltipModule,
  ],
  templateUrl: './board.html',
  styleUrl: './board.scss',
})
export class Board {
  private readonly data = inject(DataService);
  private readonly auth = inject(AuthService);
  private readonly helpdesk = inject(HelpdeskService);
  private readonly dialog = inject(MatDialog);
  private readonly snack = inject(MatSnackBar);

  constructor() {
    // Carga los empleados del Helpdesk (consulta independiente + cache) para que
    // los avatares resuelvan nombre/rol de tareas asignadas a un user_id del API.
    this.helpdesk.getHdUsers();
  }

  // ── Helpers expuestos al template ──
  readonly resolveMember = (id: string | null | undefined) =>
    resolveMember(id, this.data.team(), this.helpdesk.hdUsers());
  readonly dueInfo = dueInfo;
  readonly progColor = progColor;
  readonly STATUS_LABELS = STATUS_LABELS;
  readonly PRIORITY_LABELS = PRIORITY_LABELS;
  readonly PRIORITY_FILTERS: PriorityFilter[] = ['all', 'alta', 'media', 'baja'];

  // ── Filtros (signals locales) ──
  readonly priorityFilter = signal<PriorityFilter>('all');
  readonly clientFilter = signal<string>('all');
  readonly activeAssignees = signal<Set<string>>(new Set());

  // ── Permisos ──
  readonly puedeGestionarTodo = this.auth.puedeGestionarTodo;
  readonly puedeBorrarBoard = this.auth.puedeBorrarBoard;
  private get myId(): string {
    return String(this.auth.session()?.id || '').trim().toUpperCase();
  }

  // ── Estado derivado ──
  readonly clients = computed(() => this.data.clients());

  /** Base visible: tareas del sprint activo, ocultando DONE aprobadas pasado 1 día. */
  readonly visibleStories = computed<Story[]>(() => {
    const active = this.data.sprints().active;
    const cutoff = new Date();
    cutoff.setDate(cutoff.getDate() - 1);
    const cutoffStr = cutoff.toISOString().split('T')[0];
    return this.data
      .stories()
      .filter((s) => s.sprint === active)
      .filter((s) => !(s.status === 'done' && s.approved && (s.approvedDate || '') < cutoffStr));
  });

  /** Chips de asignado: ids presentes en la base visible (antes de filtrar). */
  readonly assigneeChips = computed(() => {
    const ids = [...new Set(this.visibleStories().map((s) => s.assignee).filter(Boolean))] as string[];
    return ids.map((id) => this.resolveMember(id)).filter((m): m is NonNullable<typeof m> => !!m);
  });

  readonly columns = computed<Column[]>(() => {
    const prio = this.priorityFilter();
    const client = this.clientFilter();
    const assignees = this.activeAssignees();
    const filtered = this.visibleStories().filter((s) => {
      if (prio !== 'all' && s.priority !== prio) return false;
      if (client !== 'all' && s.client !== client) return false;
      if (assignees.size > 0 && !(!s.assignee || assignees.has(s.assignee))) return false;
      return true;
    });
    return (Object.keys(STATUS_LABELS) as Status[]).map((status) => ({
      status,
      label: STATUS_LABELS[status],
      cards: filtered.filter((s) => s.status === status),
    }));
  });

  private get workDeps(): WorkDeps {
    return { data: this.data, auth: this.auth, dialog: this.dialog, snack: this.snack };
  }

  // ── Filtros ──
  setPriority(f: PriorityFilter): void {
    this.priorityFilter.set(f);
    this.activeAssignees.set(new Set()); // paridad con el legacy
  }
  toggleAssignee(id: string): void {
    const s = new Set(this.activeAssignees());
    s.has(id) ? s.delete(id) : s.add(id);
    this.activeAssignees.set(s);
  }
  clearAssignees(): void {
    this.activeAssignees.set(new Set());
  }
  setClientFilter(id: string): void {
    this.clientFilter.set(id);
  }
  clientOf(id: string | null): Client | undefined {
    return id ? this.data.getClient(id) : undefined;
  }

  // ── Drag & drop ──
  canDrag(card: Story): boolean {
    if (this.puedeGestionarTodo()) return true;
    const owner = String(card.assignee || '').trim().toUpperCase();
    return !!owner && owner === this.myId;
  }

  async drop(event: CdkDragDrop<Story[]>, target: Status): Promise<void> {
    const task = event.item.data as Story;
    if (!task || task.status === target) return;
    if (task.status === 'todo' && target === 'in_progress') {
      const ok = await canStartWork(task, this.workDeps);
      if (!ok) return; // bloqueado/cancelado: el signal recompone y la card vuelve a To Do
    }
    this.data.updateStoryStatus(task.id, target);
  }

  // ── Acciones de card ──
  openDetail(card: Story): void {
    this.dialog.open(CardDetailDialog, { data: { story: card }, width: '560px', maxWidth: '95vw' });
  }
  openNew(): void {
    this.dialog.open(CardDetailDialog, { data: { story: null }, width: '560px', maxWidth: '95vw' });
  }

  onProgressChange(card: Story, value: string): void {
    this.data.updateStoryProgress(card.id, roundUp5(parseInt(value, 10) || 0));
  }

  waitingDays(card: Story): number | null {
    if (!card.waitingClient || !card.waitingDate) return null;
    return Math.floor((Date.now() - new Date(card.waitingDate + 'T00:00:00').getTime()) / 864e5);
  }
  toggleWaiting(card: Story): void {
    this.data.setWaitingClient(card.id, !card.waitingClient);
  }

  onCert(card: Story, checked: boolean): void {
    if (checked) this.data.updateStoryStatus(card.id, 'done');
  }
  onApprove(card: Story, checked: boolean): void {
    if (checked) this.data.approveStory(card.id);
    else this.data.unapproveStory(card.id);
  }

  async deleteCard(card: Story): Promise<void> {
    const ok = await firstValueFrom(
      this.dialog
        .open(ConfirmDialog, {
          data: {
            title: 'Eliminar tarea',
            message: `Vas a eliminar la tarea:\n\n"${card.title}"\n\nEsta acción NO se puede deshacer.`,
            confirmText: 'Eliminar',
            danger: true,
            requireWord: 'BORRAR',
          },
        })
        .afterClosed(),
    );
    if (ok) this.data.deleteStory(card.id);
  }

  async clearBoard(): Promise<void> {
    const active = this.data.sprints().active;
    const ids = this.data.getStoriesBySprint(active).map((s) => s.id);
    if (!ids.length) {
      this.snack.open('No hay tareas en el sprint.', 'OK', { duration: 3000 });
      return;
    }
    const ok = await firstValueFrom(
      this.dialog
        .open(ConfirmDialog, {
          data: {
            title: 'Borrar board',
            message: `Vas a eliminar ${ids.length} tarea(s) del sprint activo.\n\nEsta acción NO se puede deshacer.`,
            confirmText: 'Borrar todo',
            danger: true,
            requireWord: 'BORRAR',
          },
        })
        .afterClosed(),
    );
    if (ok) ids.forEach((id) => this.data.deleteStory(id));
  }
}
