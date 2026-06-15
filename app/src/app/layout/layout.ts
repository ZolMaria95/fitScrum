import { Component, computed, effect, inject, signal } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
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
    this.data.ensureInit().then(() => this.data.startStreaming());

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

  async logout(): Promise<void> {
    await this.auth.logout();
    this.router.navigate(['/login']);
  }
}
