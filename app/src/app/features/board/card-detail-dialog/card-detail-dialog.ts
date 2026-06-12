import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { firstValueFrom } from 'rxjs';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../../../core/services/auth.service';
import { DataService, Story } from '../../../core/services/data.service';
import { HdClient, HdUser, HelpdeskService } from '../../../core/services/helpdesk.service';
import { ConfirmDialog } from '../confirm-dialog/confirm-dialog';
import {
  PRIORITY_LABELS,
  Priority,
  STATUSES,
  STATUS_LABELS,
  Status,
  canStartWork,
  progColor,
  resolveMember,
  roundUp5,
} from '../board-utils';

export interface CardDetailData {
  /** null → crear una tarea nueva. */
  story: Story | null;
  /** Valores iniciales al crear desde un ticket (número, cliente, asunto, asignado). */
  prefill?: {
    ticket?: string;
    client?: string;
    clientName?: string;
    title?: string;
    assignee?: string;
    assigneeName?: string;
  };
}

/** Modal de detalle/edición de una tarea (port de _openDetail en js/board.js). */
@Component({
  selector: 'app-card-detail-dialog',
  imports: [
    FormsModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatChipsModule,
    MatIconModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './card-detail-dialog.html',
  styleUrl: './card-detail-dialog.scss',
})
export class CardDetailDialog {
  private readonly data = inject(DataService);
  private readonly auth = inject(AuthService);
  private readonly helpdesk = inject(HelpdeskService);
  private readonly dialog = inject(MatDialog);
  private readonly snack = inject(MatSnackBar);
  private readonly ref = inject(MatDialogRef<CardDetailDialog>);
  private readonly input = inject<CardDetailData>(MAT_DIALOG_DATA);

  readonly story = this.input.story;
  readonly isNew = !this.story;

  readonly STATUSES = STATUSES;
  readonly STATUS_LABELS = STATUS_LABELS;
  readonly PRIORITIES: Priority[] = ['alta', 'media', 'baja'];
  readonly PRIORITY_LABELS = PRIORITY_LABELS;

  // Cliente actual (modo edición), resuelto local → API para mostrar el chip.
  get client(): { id: string; name: string; color?: string } | null {
    const id = this.story?.client;
    if (!id) return null;
    const local = this.data.getClient(id) as { id: string; name: string; color?: string } | undefined;
    if (local) return local;
    const api = this.helpdesk.clients().find((c) => c.id === id);
    return api ? { id: api.id, name: api.name } : { id, name: id };
  }

  // Clientes del API (consulta independiente + cache). Fallback a los locales
  // mientras el API responde, para que el buscador tenga algo de inmediato.
  readonly clientes = signal<HdClient[]>(this.initialClients());
  readonly clientFilter = signal('');
  clientModel: HdClient | string | null = null;
  private clientTouched = false;
  readonly filteredClients = computed<HdClient[]>(() => {
    const f = this.clientFilter().toLowerCase().trim();
    const list = this.clientes();
    if (!f) return list;
    return list.filter((c) => c.name.toLowerCase().includes(f) || c.id.toLowerCase().includes(f));
  });

  // Empleados asignables: consulta independiente al API del Helpdesk (con cache).
  // Arranca con el cache/semilla del servicio para respuesta inmediata.
  readonly assignees = signal<HdUser[]>(this.ensureCurrent(this.helpdesk.hdUsers()));

  // ── Buscador de asignado (MatAutocomplete) ──
  readonly assigneeFilter = signal('');
  /** Valor enlazado al input: HdUser cuando hay selección, string mientras se escribe. */
  assigneeModel: HdUser | string | null = null;
  private assigneeTouched = false;

  readonly filteredAssignees = computed<HdUser[]>(() => {
    const f = this.assigneeFilter().toLowerCase().trim();
    const list = this.assignees();
    if (!f) return list;
    return list.filter((m) => m.name.toLowerCase().includes(f) || m.id.toLowerCase().includes(f));
  });

  constructor() {
    this.syncAssigneeModel();
    // Refresca desde el API y vuelve a garantizar que el asignado actual aparezca.
    this.helpdesk.getHdUsers().then((users) => {
      this.assignees.set(this.ensureCurrent(users));
      if (!this.assigneeTouched) this.syncAssigneeModel();
    });
    // Clientes del API para el buscador; sincroniza el cliente pre-cargado (prefill).
    this.syncClientModel();
    this.helpdesk.getClients().then((cs) => {
      if (cs.length) this.clientes.set(cs);
      if (!this.clientTouched) this.syncClientModel();
    });
  }

  private syncClientModel(): void {
    const id = this.clientId;
    if (!id) {
      this.clientModel = null;
      return;
    }
    this.clientModel = this.clientes().find((c) => c.id === id) ?? { id, name: this.input.prefill?.clientName || id };
  }

  private initialClients(): HdClient[] {
    const api = this.helpdesk.clients();
    if (api.length) return api;
    return this.data.getClients().map((c) => ({ id: c.id, name: c.name }));
  }

  displayClient = (c: HdClient | string | null): string => (!c ? '' : typeof c === 'string' ? c : c.name);

  onClientInput(val: HdClient | string | null): void {
    this.clientTouched = true;
    this.clientFilter.set(typeof val === 'string' ? val : '');
  }

  onClientPicked(val: HdClient | null): void {
    this.clientTouched = true;
    this.clientId = val?.id ?? '';
    this.clientModel = val;
    this.clientFilter.set('');
  }

  // ── Consulta del ticket → autocompleta el modal (solo nueva tarea) ──
  readonly ticketLoading = signal(false);
  private lastLookup = '';

  async lookupTicket(): Promise<void> {
    const num = this.ticket.trim();
    if (!num || !/^\d+$/.test(num) || num === this.lastLookup) return;
    this.lastLookup = num;
    this.ticketLoading.set(true);
    const t = await this.helpdesk.searchTicketRemote(num);
    this.ticketLoading.set(false);
    if (!t) {
      this.snack.open(`No se encontró el ticket #${num}.`, 'OK', { duration: 3000 });
      return;
    }
    // Título = asunto del ticket
    if (t.asunto) this.title = t.asunto;
    // Cliente
    this.clientTouched = true;
    this.clientId = t.clientId || '';
    this.clientModel = this.clientId
      ? (this.clientes().find((c) => c.id === this.clientId) ?? { id: this.clientId, name: t.clienteRaw || this.clientId })
      : null;
    // Asignado
    this.assigneeTouched = true;
    this.assignee = t.usuarioAsignado || '';
    this.assigneeModel = this.assignee
      ? (this.assignees().find((u) => u.id === this.assignee) ?? { id: this.assignee, name: t.nombreAsignado || this.assignee, role: '' })
      : null;
  }

  /** Garantiza que el asignado actual esté en la lista aunque el API no lo traiga. */
  private ensureCurrent(users: HdUser[]): HdUser[] {
    const cur = this.story?.assignee;
    if (!cur || users.some((u) => u.id === cur)) return users;
    const m = resolveMember(cur, this.data.getTeam(), users);
    return m ? [{ id: m.id, name: m.name, role: m.role }, ...users] : users;
  }

  /** Pinta en el input el asignado actual (resuelto a HdUser para mostrar el nombre). */
  private syncAssigneeModel(): void {
    const cur = this.assignee;
    this.assigneeModel = cur
      ? (this.assignees().find((u) => u.id === cur) ?? { id: cur, name: this.input.prefill?.assigneeName || cur, role: '' })
      : null;
  }

  displayAssignee = (m: HdUser | string | null): string => {
    if (!m) return '';
    if (typeof m === 'string') return m;
    return `${m.name}${m.id ? ' · ' + m.id : ''}`;
  };

  onAssigneeInput(val: HdUser | string | null): void {
    this.assigneeTouched = true;
    this.assigneeFilter.set(typeof val === 'string' ? val : '');
  }

  onAssigneePicked(val: HdUser | null): void {
    this.assigneeTouched = true;
    this.assignee = val?.id ?? '';
    this.assigneeModel = val;
    this.assigneeFilter.set('');
  }

  // ── Modelo del formulario ──
  title = this.story?.title ?? this.input.prefill?.title ?? '';
  priority: Priority = (this.story?.priority as Priority) ?? 'media';
  description = this.story?.description ?? '';
  status: Status = (this.story?.status as Status) ?? 'todo';
  dueDate = this.story?.dueDate ?? '';
  assignee = this.story?.assignee ?? this.input.prefill?.assignee ?? '';
  ticket = this.story?.ticket ?? this.input.prefill?.ticket ?? '';
  clientId = this.story?.client ?? this.input.prefill?.client ?? '';
  readonly progress = signal<number>(this.story?.progress ?? 0);

  // Prioridad editable solo en To Do / In Progress (estado original).
  readonly editable = this.status === 'todo' || this.status === 'in_progress';

  // Regla: una tarea que ya salió de To Do no puede volver a To Do.
  readonly salioDeTodo = !this.isNew && this.story!.status !== 'todo';

  readonly progBarColor = computed(() => progColor(this.progress()));

  onProgress(value: string): void {
    this.progress.set(Math.min(100, Math.max(0, parseInt(value, 10) || 0)));
  }

  async save(): Promise<void> {
    const title = this.title.trim();
    if (!title) {
      this.snack.open('El título no puede quedar vacío.', 'OK', { duration: 3000 });
      return;
    }
    const pct = roundUp5(this.progress());
    const assignee = this.assignee || null;

    if (this.isNew) {
      const ticket = this.ticket.trim();
      this.data.addStory({
        title,
        priority: this.priority,
        description: this.description.trim(),
        status: this.status,
        dueDate: this.dueDate,
        assignee,
        client: this.clientId || null,
        ticket,
        progress: pct,
      });
      this.maybeAssignHd(ticket, assignee, this.input.prefill?.assignee ?? null);
      this.ref.close(true);
      return;
    }

    const task = this.story!;
    // Regla: una tarea que ya salió de To Do no puede volver a To Do.
    if (this.salioDeTodo && this.status === 'todo') {
      this.snack.open('Una tarea que ya salió de To Do no puede volver.', 'OK', { duration: 3000 });
      return;
    }
    // Paso todo → in_progress exige validación (WIP + permisos + confirmación).
    if (task.status === 'todo' && this.status === 'in_progress') {
      const ok = await canStartWork(task, { data: this.data, auth: this.auth, dialog: this.dialog, snack: this.snack });
      if (!ok) return; // el modal queda abierto sin guardar
    }
    this.data.updateStoryTitle(task.id, title);
    this.data.updateStoryDescription(task.id, this.description.trim());
    this.data.updateStoryProgress(task.id, pct);
    this.data.updateStoryStatus(task.id, this.status);
    this.data.updateStoryDueDate(task.id, this.dueDate);
    this.data.updateStoryAssignee(task.id, assignee);
    if (this.editable) this.data.updateStoryPriority(task.id, this.priority);
    // Si la tarea tiene ticket y cambió el asignado → reflejar en el Helpdesk.
    this.maybeAssignHd(task.ticket, assignee, task.assignee);
    this.ref.close(true);
  }

  /** Asigna el ticket asociado al empleado en el API (si hay ticket y cambió el asignado). */
  private maybeAssignHd(ticket: string, assignee: string | null, prev?: string | null): void {
    if (!ticket || !assignee || assignee === prev) return;
    this.helpdesk.assignTicket(ticket, assignee).then((ok) => {
      if (ok) this.snack.open(`Ticket #${ticket} asignado a ${assignee} en el Helpdesk.`, '', { duration: 2500 });
      else this.snack.open(`No se pudo asignar el ticket #${ticket} en el Helpdesk.`, 'OK', { duration: 4000 });
    });
  }

  async remove(): Promise<void> {
    if (!this.story) return;
    const ok = await firstValueFrom(
      this.dialog
        .open(ConfirmDialog, {
          data: {
            title: 'Eliminar tarea',
            message: `Vas a eliminar la tarea:\n\n"${this.story.title}"\n\nEsta acción NO se puede deshacer.`,
            confirmText: 'Eliminar',
            danger: true,
            requireWord: 'BORRAR',
          },
        })
        .afterClosed(),
    );
    if (ok) {
      this.data.deleteStory(this.story.id);
      this.ref.close(true);
    }
  }
}
