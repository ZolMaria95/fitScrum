import { firstValueFrom } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../../core/services/auth.service';
import { DataService, Story, TeamMember } from '../../core/services/data.service';
import { ConfirmDialog } from './confirm-dialog/confirm-dialog';

// ── Constantes de estado (port de js/board.js) ──────────────────────────
export const STATUSES = ['todo', 'in_progress', 'review', 'done'] as const;
export type Status = (typeof STATUSES)[number];

export const STATUS_LABELS: Record<Status, string> = {
  todo: 'To Do',
  in_progress: 'In Progress',
  review: 'En Certificación',
  done: 'Finalizado',
};

export type Priority = 'alta' | 'media' | 'baja';
export const PRIORITY_LABELS: Record<Priority, string> = { alta: 'Alta', media: 'Media', baja: 'Baja' };

// ── Resolución de asignado y avatares (sin dependencias del Helpdesk) ────
const AVATAR_PALETTE = [
  '#04BAF0', '#27AE60', '#F29E3B', '#9B59B6', '#E74C3C',
  '#1ABC9C', '#2980B9', '#F2811D', '#8E44AD', '#16A085', '#C0392B', '#D35400',
];

export function colorFor(id: string): string {
  let h = 0;
  const s = String(id || '');
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
  return AVATAR_PALETTE[h % AVATAR_PALETTE.length];
}

export function initialsFromName(name: string): string {
  const parts = String(name || '').trim().split(/\s+/).filter(Boolean);
  if (!parts.length) return '?';
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[1][0]).toUpperCase();
}

export interface ResolvedMember {
  id: string;
  name: string;
  color: string;
  label: string;
  role: string;
}

/** Resuelve el asignado: primero el equipo local (data/users.json), luego los
 *  empleados del Helpdesk (API). Port de _resolveMember de js/board.js. */
export function resolveMember(
  id: string | null | undefined,
  team: TeamMember[],
  hdUsers: { id: string; name: string; role?: string }[] = [],
): ResolvedMember | null {
  if (!id) return null;
  const t = team.find((m) => m.id === id);
  if (t) return { id: t.id, name: t.name || t.id, color: t.color || colorFor(t.id), label: t.id, role: t.role || '' };
  const u = hdUsers.find((x) => x.id === id);
  const name = u ? u.name : id;
  return { id, name, color: colorFor(id), label: initialsFromName(name), role: u?.role || '' };
}

// ── Progreso ─────────────────────────────────────────────────────────────
export function progColor(pct: number): string {
  if (pct === 0) return '#E0E0E0';
  if (pct <= 25) return '#F29E3B';
  if (pct <= 50) return '#F2811D';
  if (pct <= 75) return '#04BAF0';
  return '#27AE60';
}

/** Redondea al siguiente múltiplo de 5 (regla de negocio del progreso). */
export function roundUp5(n: number): number {
  const raw = Math.min(100, Math.max(0, Math.floor(n) || 0));
  return raw % 5 === 0 ? raw : Math.min(100, raw + (5 - (raw % 5)));
}

// ── Vencimiento ──────────────────────────────────────────────────────────
export interface DueInfo {
  str: string;
  overdue: boolean;
  soon: boolean;
  diffDays: number | null;
  badge: string;
}

export function dueInfo(dueDate: string | null | undefined, status: string): DueInfo {
  if (!dueDate) return { str: '', overdue: false, soon: false, diffDays: null, badge: '' };
  const d = new Date(dueDate + 'T00:00:00');
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const diffDays = Math.ceil((d.getTime() - today.getTime()) / 864e5);
  const active = status !== 'done';
  const overdue = active && d < today;
  const soon = active && !overdue && diffDays <= 3;
  const str = d.toLocaleDateString('es-ES', { day: '2-digit', month: 'short' });
  let badge = '';
  if (soon) badge = diffDays === 0 ? 'hoy' : diffDays === 1 ? 'mañana' : `${diffDays}d`;
  return { str, overdue, soon, diffDays, badge };
}

// ── canStartWork: límite WIP + permisos + confirmación (port board.js:68) ──
export interface WorkDeps {
  data: DataService;
  auth: AuthService;
  dialog: MatDialog;
  snack: MatSnackBar;
}

/**
 * Valida el paso todo → in_progress. Devuelve true si se permite (y asigna la
 * tarea cuando corresponde), false para abortar. Async porque la confirmación
 * pasa por un MatDialog.
 */
export async function canStartWork(task: Story, d: WorkDeps): Promise<boolean> {
  const session = d.auth.session();
  const myId = String(session?.id || '').trim().toUpperCase();
  const isHelpdesk = myId === 'MSC001';

  // Solo el técnico asignado o Helpdesk pueden iniciar una tarea desde To Do.
  if (!isHelpdesk && task.assignee && myId !== String(task.assignee).trim().toUpperCase()) {
    d.snack.open('Solo el técnico asignado puede iniciar esta tarea.', 'OK', { duration: 4000 });
    return false;
  }

  // Técnico efectivo que trabajará la tarea
  let assigneeId = task.assignee;
  if (!assigneeId) {
    if (isHelpdesk) {
      d.snack.open('Esta tarea no tiene técnico asignado. Asigna un técnico antes de iniciarla.', 'OK', { duration: 4000 });
      return false;
    }
    assigneeId = session?.id ?? null; // quien la mueve es el asignado
  }

  // Límite WIP: máximo 2 tareas en progreso por técnico (en el sprint actual)
  const active = d.data.sprints().active;
  const enProgreso = d.data
    .getStoriesBySprint(active)
    .filter((s) => s.status === 'in_progress' && s.assignee === assigneeId).length;
  if (enProgreso >= 2) {
    const nombre = (d.data.getMember(assigneeId || '') || {}).name || assigneeId;
    d.snack.open(`${nombre} ya tiene ${enProgreso} tareas en progreso. Debe cerrar alguna antes de iniciar otra.`, 'OK', { duration: 5000 });
    return false;
  }

  // Confirmación de inicio
  const ok = await firstValueFrom(
    d.dialog
      .open(ConfirmDialog, {
        data: { title: 'Iniciar tarea', message: `¿Deseas iniciar a trabajar en "${task.title}"?`, confirmText: 'Iniciar' },
      })
      .afterClosed(),
  );
  if (!ok) return false;

  // Si estaba sin asignar y la mueve un técnico → asignársela
  if (!task.assignee && assigneeId) d.data.updateStoryAssignee(task.id, assigneeId);
  return true;
}
