import { Injectable, computed, signal } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HelpdeskProfile, Session } from '../models/session';

const SESSION_KEY = 'fit-daily_session';

interface TeamMember { id: string; name?: string; role?: string; color?: string; }

/**
 * Autenticación contra el API del Helpdesk (vía proxy) + sesión local.
 * Porta js/helpdesk-auth.js y la lógica de sesión/permisos de js/app.js.
 * La sesión vive en localStorage 'fit-daily_session' (misma clave que el legacy).
 */
@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly base = `${environment.helpdeskProxyUrl}/api/v1`;

  private readonly _session = signal<Session | null>(this.readSession());
  readonly session = this._session.asReadonly();

  readonly isAuthenticated = computed(() => !!this._session());
  readonly esMSC001       = computed(() => (this._session()?.id || '').trim().toUpperCase() === 'MSC001');
  readonly esSupervisor   = computed(() => (this._session()?.apiRole || '').trim().toUpperCase().includes('SUPERVISOR'));
  readonly esScrumMaster  = computed(() => this._session()?.role === 'Scrum Master');
  // Mi Panel (Sol): Scrum Master o MSC001 (≡ isHelpdesk del legacy)
  readonly puedeVerMiPanel = computed(() => this.esScrumMaster() || this.esMSC001());
  // Borrar board completo: solo MSC001
  readonly puedeBorrarBoard = computed(() => this.esMSC001());
  // Borrar / mover cualquier card: MSC001 o Supervisor
  readonly puedeGestionarTodo = computed(() => this.esMSC001() || this.esSupervisor());

  get token(): string | null { return this._session()?.token ?? null; }

  private readSession(): Session | null {
    try { return JSON.parse(localStorage.getItem(SESSION_KEY) || 'null'); }
    catch { return null; }
  }

  /** Login: POST /auth/login → access_token; luego GET /users/me → perfil. */
  async login(usernameOrEmail: string, password: string): Promise<Session> {
    const r = await fetch(`${this.base}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username_or_email: usernameOrEmail, password, force_logout: 'true' }),
    });
    if (!r.ok) throw new Error(`Login fallido (${r.status}): ${await r.text()}`);
    const { access_token } = await r.json();

    const me = await fetch(`${this.base}/users/me`, { headers: { Authorization: `Bearer ${access_token}` } });
    if (!me.ok) throw new Error(`No se pudo cargar el perfil (${me.status})`);
    const profile: HelpdeskProfile = await me.json();

    const local = await this.lookupTeam(profile.user_id);
    const session: Session = {
      id: profile.user_id,
      name: local?.name || profile.person_name || profile.person_alias || profile.user_id,
      role: local?.role || profile.role_description || 'Usuario',
      apiRole: profile.role_description || '',
      color: local?.color || this.colorFor(profile.user_id),
      email: profile.email || '',
      token: access_token,
    };
    localStorage.setItem(SESSION_KEY, JSON.stringify(session));
    this._session.set(session);
    return session;
  }

  /** Logout: notifica al server (best-effort) y limpia la sesión local. */
  async logout(): Promise<void> {
    const t = this.token;
    if (t) {
      try { await fetch(`${this.base}/auth/logout`, { method: 'POST', headers: { Authorization: `Bearer ${t}` } }); }
      catch { /* ignore */ }
    }
    this.clearSession();
  }

  /** Limpia la sesión (lo usa el interceptor en 401/403). */
  clearSession(): void {
    localStorage.removeItem(SESSION_KEY);
    this._session.set(null);
  }

  // Enriquecimiento con el equipo local (data/users.json) — color/rol del proyecto.
  private async lookupTeam(userId: string): Promise<TeamMember | null> {
    try {
      const r = await fetch('data/users.json');
      if (!r.ok) return null;
      const data = await r.json();
      return (data.users || []).find((u: TeamMember) => u.id === userId) || null;
    } catch { return null; }
  }

  // Color HSL estable a partir del user_id (mismo algoritmo que login.html).
  private colorFor(userId: string): string {
    let hash = 0;
    for (let i = 0; i < userId.length; i++) hash = userId.charCodeAt(i) + ((hash << 5) - hash);
    return `hsl(${Math.abs(hash) % 360}, 55%, 45%)`;
  }
}
