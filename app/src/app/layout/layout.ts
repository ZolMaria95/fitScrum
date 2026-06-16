import { Component, DestroyRef, computed, effect, inject, signal } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { filter, map, startWith } from 'rxjs';
import { AuthService } from '../core/services/auth.service';
import { DataService } from '../core/services/data.service';
import { ShellService } from '../core/services/shell.service';

/**
 * Shell responsive: menú hamburguesa lateral (`mat-sidenav`). En escritorio el
 * panel queda fijo; en móvil/tablet (o en Board, vía `collapsibleNav`) es overlay
 * con botón ☰. El drawer muestra arriba los filtros que publica la vista activa
 * ([ShellService]) y debajo los submenús de navegación.
 */
@Component({
  selector: 'app-layout',
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    NgTemplateOutlet,
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    MatSidenavModule,
    MatIconModule,
  ],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout {
  private readonly auth = inject(AuthService);
  private readonly data = inject(DataService);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  private readonly breakpoints = inject(BreakpointObserver);
  private readonly snack = inject(MatSnackBar);
  private readonly destroyRef = inject(DestroyRef);
  readonly shell = inject(ShellService);

  readonly session = this.auth.session;
  readonly puedeVerMiPanel = this.auth.puedeVerMiPanel;

  private readonly isDesktop = toSignal(this.breakpoints.observe('(min-width: 900px)').pipe(map((r) => r.matches)), {
    initialValue: typeof window !== 'undefined' && window.innerWidth >= 900,
  });

  /** Rutas que ocultan el menú aun en escritorio (Board: Kanban a ancho completo). */
  private readonly collapsibleNav = toSignal(
    this.router.events.pipe(
      filter((e) => e instanceof NavigationEnd),
      startWith(null),
      map(() => this.deepestData()['collapsibleNav'] === true),
    ),
    { initialValue: false },
  );

  /** Panel fijo (mode side, siempre abierto, sin ☰). */
  readonly fixed = computed(() => this.isDesktop() && !this.collapsibleNav());
  readonly mode = computed<'side' | 'over'>(() => (this.fixed() ? 'side' : 'over'));
  readonly opened = signal(false);

  constructor() {
    // Carga los datos (Firebase/localStorage) y arranca el sync en tiempo real.
    this.data.ensureInit().then(() => {
      this.data.startStreaming();
      this.checkReminders();
    });
    // Recordatorios de tickets pendientes: revisa cada 5 min (capta la hora/relevo de día).
    const timer = setInterval(() => this.checkReminders(), 5 * 60 * 1000);
    this.destroyRef.onDestroy(() => clearInterval(timer));

    // El drawer sigue al modo: abierto si es fijo, cerrado si es overlay.
    effect(() => this.opened.set(this.fixed()));

    // En overlay, cerrar el drawer al navegar.
    this.router.events
      .pipe(
        filter((e) => e instanceof NavigationEnd),
        takeUntilDestroyed(),
      )
      .subscribe(() => {
        if (!this.fixed()) this.opened.set(false);
      });
  }

  private deepestData(): Record<string, any> {
    let r = this.route.snapshot.firstChild;
    let data: Record<string, any> = {};
    while (r) {
      data = { ...data, ...r.data };
      r = r.firstChild;
    }
    return data;
  }

  /** Alerta recurrente de tickets pendientes cuya fecha/hora ya llegó (1 vez por día,
   *  hasta que se pause o se redefina la fecha en el panel de Pendientes). */
  private checkReminders(): void {
    const now = Date.now();
    const p = (n: number) => String(n).padStart(2, '0');
    const t = new Date();
    const todayStr = `${t.getFullYear()}-${p(t.getMonth() + 1)}-${p(t.getDate())}`;

    const pend = this.data.getHdPendientes();
    const due = Object.values(pend).filter((x: any) => {
      if (!x.dueDate || x.paused || x.lastAlerted === todayStr) return false;
      const at = new Date(`${x.dueDate}T${x.dueTime || '09:00'}:00`).getTime();
      return at <= now;
    }) as any[];
    if (!due.length) return;

    due.forEach((x) => this.data.updateHdPendiente(x.ticket, { lastAlerted: todayStr }));
    const msg =
      due.length === 1
        ? `Ticket #${due[0].ticket} pendiente de analizar.`
        : `Tenés ${due.length} tickets pendientes de analizar.`;
    this.snack
      .open(msg, 'Ver pendientes', { duration: 12000 })
      .onAction()
      .subscribe(() => this.router.navigate(['/pendientes']));
  }

  async logout(): Promise<void> {
    await this.auth.logout();
    this.router.navigate(['/login']);
  }
}
