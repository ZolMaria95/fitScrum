import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HD_SAFE } from '../interceptors/helpdesk-auth.interceptor';

const HD_USERS_LS_KEY = 'fit-daily_hd_users';
const HD_ROLES_LS_KEY = 'fit-daily_hd_roles';

// Seed de empleados conocidos del Helpdesk. Solo es el fallback offline: la
// fuente real es la consulta al catálogo de usuarios del API (/users/catalog).
const EMPLEADOS = [
  'JPHP001', 'VINC001', 'MSC001', 'FSGC001', 'ORLR001',
  'KIMA001', 'KDLS001', 'BMHJ001', 'DSGS001', 'JCEO001', 'CUC001', 'JFQV001',
];

// Roles de empleado asignable. Se filtra SOLO por role_description: client_id /
// client_description NO sirven (los empleados internos de Soft Warehouse los
// tienen apuntando a su propia empresa y no son clientes).
const ROLES_EMPLEADO = ['SOPORTE', 'ADMINISTRADOR', 'SUPERVISOR'];

export interface HdUser {
  id: string;
  name: string;
  role: string;
}

/**
 * Cliente del API del Helpdesk (vía proxy). El Bearer y el manejo de 401/403 lo
 * añade helpdeskAuthInterceptor. El port completo de js/helpdesk-panel.js (sync,
 * tickets, mensajes, adjuntos) llega en la Fase 2.
 */
@Injectable({ providedIn: 'root' })
export class HelpdeskService {
  private readonly http = inject(HttpClient);
  readonly base = `${environment.helpdeskProxyUrl}/api/v1`;

  private roles: Record<string, string> = this.readRoles();

  /** Empleados del Helpdesk (signal). Arranca con cache/semilla y se enriquece
   *  con la consulta al API. Sirve para el dropdown de asignados y los avatares. */
  private readonly _users = signal<HdUser[]>(this.seedUsers());
  readonly hdUsers = this._users.asReadonly();

  private loadPromise: Promise<HdUser[]> | null = null;

  /** Perfil del usuario en sesión. */
  me() {
    return this.http.get(`${this.base}/users/me`);
  }

  /**
   * Lista de empleados asignables del Helpdesk. Consulta INDEPENDIENTE al
   * endpoint de usuarios del API (no depende del sync de tickets) y cachea el
   * resultado en memoria + localStorage para próximas aperturas. Port de
   * _tryFetchAllHdUsers + getHdUsers de js/helpdesk-panel.js.
   */
  getHdUsers(): Promise<HdUser[]> {
    return (this.loadPromise ??= this.fetchAll());
  }

  private async fetchAll(): Promise<HdUser[]> {
    // /users/catalog es el catálogo de usuarios asignables que usa el Helpdesk web
    // (la cuenta sí tiene permiso, a diferencia de /users que devuelve 403).
    const endpoints = ['/users/catalog', '/users', '/users/', '/users/list', '/users/all', '/employees'];
    for (const ep of endpoints) {
      try {
        const data = await firstValueFrom(
          this.http.get<any>(`${this.base}${ep}`, { context: new HttpContext().set(HD_SAFE, true) }),
        );
        const items: any[] = Array.isArray(data) ? data : data?.items || data?.data || data?.users || data?.results || [];
        if (!items.length) continue;

        // La lista la define el API: solo empleados con rol asignable.
        const map = new Map<string, string>();
        for (const u of items) {
          const id = String(u.user_id || u.id || u.username || '').trim().toUpperCase();
          if (!id || u.user_status === false) continue; // sin id o inactivo
          // Incluir por rol (SOPORTE / ADMINISTRADOR / SUPERVISOR), sin mirar client_*:
          // los empleados internos de Soft Warehouse tienen client_id/client_description llenos.
          const roleRaw = String(u.role_description || u.role || '').trim();
          if (!ROLES_EMPLEADO.some((r) => roleRaw.toUpperCase().includes(r))) continue;

          const name = String(
            u.person_name || u.full_name || u.name || u.display_name || u.person_alias || u.username || id,
          ).trim();
          this.roles[id] = roleRaw;
          const prev = map.get(id);
          if (name && (!prev || prev === id)) map.set(id, name);
          else if (!prev) map.set(id, id);
        }
        // Este endpoint no trajo empleados con rol → probar el siguiente.
        if (!map.size) continue;

        const users = [...map.entries()]
          .map(([id, name]) => ({ id, name, role: this.roles[id] || '' }))
          .sort((a, b) => (a.name || a.id).localeCompare(b.name || b.id, 'es'));

        this.saveRoles();
        this._users.set(users);
        this.saveUsers(users);
        return users;
      } catch {
        /* prueba el siguiente endpoint */
      }
    }
    // Ningún endpoint respondió (proxy caído / sin permiso): queda el cache/semilla.
    return this._users();
  }

  // ── Cache (localStorage) ──────────────────────────────────────────────
  private seedUsers(): HdUser[] {
    try {
      const cached = JSON.parse(localStorage.getItem(HD_USERS_LS_KEY) || '[]');
      if (this.looksLikeHd(cached)) {
        return cached.map((u: any) => ({ id: u.id, name: u.name || u.id, role: this.roles[u.id] || u.role || '' }));
      }
    } catch {
      /* cache corrupto */
    }
    return EMPLEADOS.map((id) => ({ id, name: id, role: this.roles[id] || '' })).sort((a, b) => a.id.localeCompare(b.id));
  }

  /** Heurística: el cache debe tener IDs en formato Helpdesk (XXX001), no IDs locales. */
  private looksLikeHd(arr: any): boolean {
    if (!Array.isArray(arr) || !arr.length) return false;
    const hdRx = /^[A-Z]+\d+$/;
    const hits = arr.filter((u: any) => u && typeof u.id === 'string' && hdRx.test(u.id)).length;
    return hits >= Math.max(1, Math.floor(arr.length / 2));
  }

  private saveUsers(users: HdUser[]): void {
    try {
      localStorage.setItem(HD_USERS_LS_KEY, JSON.stringify(users.map((u) => ({ id: u.id, name: u.name }))));
    } catch {
      /* storage lleno / no disponible */
    }
  }

  private readRoles(): Record<string, string> {
    try {
      return JSON.parse(localStorage.getItem(HD_ROLES_LS_KEY) || '{}') || {};
    } catch {
      return {};
    }
  }

  private saveRoles(): void {
    try {
      localStorage.setItem(HD_ROLES_LS_KEY, JSON.stringify(this.roles));
    } catch {
      /* storage lleno / no disponible */
    }
  }
}
