import { HttpClient, HttpContext, HttpParams } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HD_SAFE } from '../interceptors/helpdesk-auth.interceptor';
import { CLIENTES_VALIDOS } from '../../features/tickets/helpdesk.constants';
import {
  Ticket,
  applyMessages,
  clasificar,
  evaluarFechas,
  mapTicket,
  ticketAttachIds,
} from '../../features/tickets/ticket-utils';

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

export interface HdClient {
  id: string;
  name: string;
}

const HD_CLIENTS_LS_KEY = 'fit-daily_hd_clients';
const HD_STATUS_LS_KEY = 'fit-daily_hd_statuses';

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

  /** Clientes del Helpdesk (signal). Arranca con el cache de localStorage y se
   *  llena con la consulta al API. Alimenta el campo Cliente del modal y resuelve
   *  el nombre/color de cliente en las cards del board. */
  private readonly _clients = signal<HdClient[]>(this.seedClients());
  readonly clients = this._clients.asReadonly();
  private clientsPromise: Promise<HdClient[]> | null = null;

  // ── Tickets ──
  private readonly _tickets = signal<Ticket[]>([]);
  readonly tickets = this._tickets.asReadonly();
  readonly syncStatus = signal<{ msg: string; type: 'idle' | 'loading' | 'ok' | 'error' }>({ msg: '', type: 'idle' });
  readonly loading = signal(false);

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

  /**
   * Catálogo completo de clientes del Helpdesk. Consulta al API (por analogía con
   * /users/catalog) y cachea en memoria + localStorage. Es la fuente del campo
   * Cliente del modal; el legacy usaba un JSON local estático de 14 clientes.
   */
  getClients(): Promise<HdClient[]> {
    return (this.clientsPromise ??= this.fetchAllClients());
  }

  private async fetchAllClients(): Promise<HdClient[]> {
    const endpoints = ['/clients/catalog', '/clients', '/clients/', '/clients/list', '/clients/all', '/companies'];
    for (const ep of endpoints) {
      try {
        const data = await firstValueFrom(
          this.http.get<any>(`${this.base}${ep}`, { context: new HttpContext().set(HD_SAFE, true) }),
        );
        const items: any[] = Array.isArray(data) ? data : data?.items || data?.data || data?.clients || data?.results || [];
        if (!items.length) continue;

        const map = new Map<string, string>();
        for (const c of items) {
          const id = String(c.client_id ?? c.id ?? c.code ?? '').trim();
          if (!id) continue;
          if (c.client_status === false || c.status === false) continue; // inactivo
          const name = String(
            c.client_description || c.description || c.name || c.razon_social || c.business_name || id,
          ).trim();
          if (!map.has(id)) map.set(id, name);
        }
        if (!map.size) continue;

        const clients = [...map.entries()]
          .map(([id, name]) => ({ id, name }))
          .sort((a, b) => a.name.localeCompare(b.name, 'es'));
        this._clients.set(clients);
        this.saveClients(clients);
        return clients;
      } catch {
        /* prueba el siguiente endpoint */
      }
    }
    return this._clients();
  }

  // ── Tickets: sync, mensajes, adjuntos, envío ──────────────────────────
  private setStatus(msg: string, type: 'idle' | 'loading' | 'ok' | 'error'): void {
    this.syncStatus.set({ msg, type });
  }

  private async fetchPage(offset: number): Promise<any[]> {
    try {
      const data = await firstValueFrom(
        this.http.get<any>(`${this.base}/tickets/tickets?limit=40&offset=${offset}&modified_date_order=desc`),
      );
      return data?.items || [];
    } catch {
      return [];
    }
  }

  /** Sincroniza tickets: 6 páginas, filtra clientes válidos, clasifica y carga
   *  el último mensaje de cada uno en lotes. Port de sync() de helpdesk-panel.js. */
  async sync(): Promise<void> {
    if (this.loading()) return;
    this.loading.set(true);
    this.setStatus('Cargando tickets (6 páginas)...', 'loading');
    try {
      const offsets = [0, 40, 80, 120, 160, 200];
      const pages = await Promise.all(offsets.map((o) => this.fetchPage(o)));
      const raw = pages.flat();

      const filtrados = raw
        .filter((t) => CLIENTES_VALIDOS.has(String(t.cliente || '').trim().toUpperCase()))
        .filter((t) => {
          const est = String(t.estado || '').toUpperCase();
          return !est.includes('APROBADO') && !est.includes('CERRADO POR EL CLIENTE');
        });

      // Fase 1: sin mensajes, feedback inmediato.
      const tickets = filtrados.map(mapTicket).map(evaluarFechas).map(clasificar);
      this._tickets.set([...tickets]);
      this.setStatus(`${tickets.length} tickets cargados. Obteniendo mensajes...`, 'loading');

      // Fase 2: mensajes en lotes de 10.
      const BATCH = 10;
      for (let i = 0; i < tickets.length; i += BATCH) {
        const lote = tickets.slice(i, i + BATCH);
        await Promise.all(
          lote.map(async (t) => {
            const msgs = await this.fetchMessages(t.ticket);
            applyMessages(t, msgs);
            evaluarFechas(t);
            clasificar(t);
          }),
        );
        this._tickets.set([...tickets]);
        this.setStatus(`Mensajes: ${Math.min(i + BATCH, tickets.length)} / ${tickets.length}...`, 'loading');
      }

      this.setStatus(`✓ ${tickets.length} tickets — ${new Date().toLocaleTimeString('es-ES')}`, 'ok');
    } catch (err: any) {
      const msg = err?.message || '';
      const esRed = /fetch|failed|load failed|network|0/i.test(msg);
      this.setStatus(esRed ? 'No se pudo conectar al proxy. Ejecuta: python proxy.py' : `Error: ${msg}`, 'error');
    } finally {
      this.loading.set(false);
    }
  }

  /** Mensajes crudos de un ticket. */
  async fetchMessages(ticketId: string): Promise<any[]> {
    try {
      const data = await firstValueFrom(
        this.http.get<any>(`${this.base}/tickets/${ticketId}/messages?limit=50`, {
          context: new HttpContext().set(HD_SAFE, true),
        }),
      );
      return Array.isArray(data)
        ? data
        : Array.isArray(data?.items)
          ? data.items
          : Array.isArray(data?.messages)
            ? data.messages
            : Array.isArray(data?.data)
              ? data.data
              : [];
    } catch {
      return [];
    }
  }

  /** Ticket crudo completo (para adjuntos a nivel ticket que el listado no trae). */
  async fetchTicketRaw(ticketId: string): Promise<any> {
    try {
      const raw = await firstValueFrom(
        this.http.get<any>(`${this.base}/tickets/tickets/${ticketId}`, { context: new HttpContext().set(HD_SAFE, true) }),
      );
      return Array.isArray(raw) ? raw[0] : raw?.item || raw?.data || raw;
    } catch {
      return null;
    }
  }

  /** Busca un ticket por número directamente en el API (no estaba en memoria). */
  async searchTicketRemote(ticketId: string): Promise<Ticket | null> {
    try {
      const raw = await firstValueFrom(
        this.http.get<any>(`${this.base}/tickets/tickets/${ticketId}`, { context: new HttpContext().set(HD_SAFE, true) }),
      );
      const data = Array.isArray(raw) ? raw[0] : raw?.item || raw?.data || raw;
      if (!data || !data.ticket_id) return null;
      const t = clasificar(evaluarFechas(mapTicket(data)));
      applyMessages(t, await this.fetchMessages(t.ticket));
      evaluarFechas(t);
      clasificar(t);
      return t;
    } catch {
      return null;
    }
  }

  /** URL blob (con auth) de un adjunto, para `<img>`/descarga. */
  async attachmentUrl(attachId: string): Promise<string | null> {
    try {
      const blob = await firstValueFrom(
        this.http.get(`${this.base}/attachments/${attachId}`, {
          responseType: 'blob',
          context: new HttpContext().set(HD_SAFE, true),
        }),
      );
      return URL.createObjectURL(blob);
    } catch {
      return null;
    }
  }

  private async uploadAttachment(file: File): Promise<string> {
    const fd = new FormData();
    fd.append('file', file);
    const data = await firstValueFrom(
      this.http.post<any>(`${this.base}/attachments`, fd, { context: new HttpContext().set(HD_SAFE, true) }),
    );
    return data.id || data.attach_id || data.attachment_id;
  }

  /** Envía un mensaje al ticket (sube adjuntos primero). Devuelve true si ok.
   *  Form-urlencoded (igual que el resto de escrituras del API). */
  async sendMessage(ticketId: string, detail: string, files: File[] = []): Promise<boolean> {
    try {
      const attach_ids: string[] = [];
      for (const f of files) attach_ids.push(await this.uploadAttachment(f));
      let body = new HttpParams().set('detail', detail);
      for (const id of attach_ids) body = body.append('attach_ids', id);
      await firstValueFrom(
        this.http.post(`${this.base}/tickets/${ticketId}/messages`, body, {
          context: new HttpContext().set(HD_SAFE, true),
        }),
      );
      return true;
    } catch {
      return false;
    }
  }

  /** Ids de adjunto a nivel ticket (cachea en el ticket si hay que pedir el raw). */
  async ticketAttachmentIds(t: Ticket): Promise<string[]> {
    if (Array.isArray(t.adjuntosTicket) && t.adjuntosTicket.length) return t.adjuntosTicket;
    const raw = await this.fetchTicketRaw(t.ticket);
    const ids = ticketAttachIds(raw);
    t.adjuntosTicket = ids;
    return ids;
  }

  /**
   * Asigna un ticket a un empleado en el API. Igual que el Helpdesk web:
   * PUT /tickets/tickets/:id con el form-urlencoded `assigned_user_id`. Devuelve
   * true si el PUT respondió OK.
   */
  async assignTicket(ticketId: string, userId: string): Promise<boolean> {
    if (!ticketId || !userId) return false;
    const want = String(userId).trim().toUpperCase();
    try {
      const body = new HttpParams().set('assigned_user_id', want);
      await firstValueFrom(
        this.http.put(`${this.base}/tickets/tickets/${ticketId}`, body, {
          context: new HttpContext().set(HD_SAFE, true),
        }),
      );
      this.updateTicketAssignee(ticketId, want);
      return true;
    } catch {
      return false;
    }
  }

  // ── Catálogo de estados (nombre → ticket_status_id) ──
  private statusMap: Record<string, string> = this.readStatusCache();
  private statusesPromise: Promise<Record<string, string>> | null = null;
  /** Nombres de estado disponibles (para el menú de cambio de estado). */
  readonly statusNames = signal<string[]>(Object.keys(this.statusMap));

  /** Catálogo de estados del API: { 'EN PROCESO': '003', ... }. Consulta + cache. */
  getTicketStatuses(): Promise<Record<string, string>> {
    return (this.statusesPromise ??= this.fetchAllStatuses());
  }

  private async fetchAllStatuses(): Promise<Record<string, string>> {
    const endpoints = ['/ticket-statuses/catalog', '/ticket-statuses'];
    for (const ep of endpoints) {
      try {
        const data = await firstValueFrom(
          this.http.get<any>(`${this.base}${ep}`, { context: new HttpContext().set(HD_SAFE, true) }),
        );
        const items: any[] = Array.isArray(data) ? data : data?.items || data?.data || data?.statuses || data?.results || [];
        if (!items.length) continue;
        const map: Record<string, string> = {};
        for (const c of items) {
          const id = String(c.ticket_status_id ?? c.id ?? c.status_id ?? c.code ?? '').trim();
          const name = String(c.description || c.status_description || c.name || c.estado || c.status || '').trim().toUpperCase();
          if (id && name) map[name] = id;
        }
        if (!Object.keys(map).length) continue;
        this.statusMap = map;
        this.statusNames.set(Object.keys(map));
        this.saveStatusCache(map);
        return map;
      } catch {
        /* prueba el siguiente endpoint */
      }
    }
    return this.statusMap;
  }

  private readStatusCache(): Record<string, string> {
    try {
      return JSON.parse(localStorage.getItem(HD_STATUS_LS_KEY) || '{}') || {};
    } catch {
      return {};
    }
  }
  private saveStatusCache(map: Record<string, string>): void {
    try {
      localStorage.setItem(HD_STATUS_LS_KEY, JSON.stringify(map));
    } catch {
      /* storage no disponible */
    }
  }

  /**
   * Cambia el estado del ticket en el API. El estado se escribe por código:
   * PUT /tickets/tickets/:id con `ticket_status_id` form-urlencoded. Traduce el
   * nombre del estado a su código vía el catálogo (getTicketStatuses). Best-effort.
   */
  async setTicketStatus(ticketId: string, estadoNombre: string): Promise<boolean> {
    if (!ticketId || !estadoNombre) return false;
    const map = await this.getTicketStatuses();
    const id = map[estadoNombre.trim().toUpperCase()];
    if (!id) {
      console.warn('[HD status] sin código para', estadoNombre, '— catálogo:', map);
      return false;
    }
    try {
      const body = new HttpParams().set('ticket_status_id', id);
      await firstValueFrom(
        this.http.put(`${this.base}/tickets/tickets/${ticketId}`, body, {
          context: new HttpContext().set(HD_SAFE, true),
        }),
      );
      // Reflejar en el ticket en memoria (si está cargado en la tabla).
      const arr = this.tickets();
      const idx = arr.findIndex((t) => t.ticket === ticketId);
      if (idx >= 0) {
        const t: Ticket = { ...arr[idx], estatus: estadoNombre };
        evaluarFechas(t);
        clasificar(t);
        const next = [...arr];
        next[idx] = t;
        this._tickets.set(next);
      }
      return true;
    } catch {
      return false;
    }
  }

  /** Refleja la asignación en el ticket en memoria (nombre + re-clasificación). */
  private updateTicketAssignee(ticketId: string, userId: string): void {
    const arr = this.tickets();
    const idx = arr.findIndex((t) => t.ticket === ticketId);
    if (idx < 0) return;
    const u = this._users().find((x) => x.id === userId);
    const t: Ticket = { ...arr[idx], usuarioAsignado: userId, nombreAsignado: u?.name || userId };
    evaluarFechas(t);
    clasificar(t);
    const next = [...arr];
    next[idx] = t;
    this._tickets.set(next);
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

  private seedClients(): HdClient[] {
    try {
      const cached = JSON.parse(localStorage.getItem(HD_CLIENTS_LS_KEY) || '[]');
      if (Array.isArray(cached) && cached.length) {
        return cached.map((c: any) => ({ id: String(c.id), name: c.name || String(c.id) }));
      }
    } catch {
      /* cache corrupto */
    }
    return [];
  }

  private saveClients(clients: HdClient[]): void {
    try {
      localStorage.setItem(HD_CLIENTS_LS_KEY, JSON.stringify(clients));
    } catch {
      /* storage lleno / no disponible */
    }
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
