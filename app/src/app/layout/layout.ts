import { Component, DestroyRef, ElementRef, afterNextRender, afterRenderEffect, computed, inject, signal, viewChild } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDialog } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { filter, map } from 'rxjs';
import { AuthService } from '../core/services/auth.service';
import { DataService } from '../core/services/data.service';
import { ShellService } from '../core/services/shell.service';
import { ReminderAlertDialog, ReminderItem } from '../features/pendientes/reminder-alert-dialog/reminder-alert-dialog';

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
  private readonly breakpoints = inject(BreakpointObserver);
  private readonly dialog = inject(MatDialog);
  private readonly destroyRef = inject(DestroyRef);
  readonly shell = inject(ShellService);

  /** Evita apilar varias alertas de recordatorio a la vez. */
  private alertOpen = false;
  /** AudioContext perezoso para el sonido de la alerta. */
  private audioCtx: AudioContext | null = null;

  readonly session = this.auth.session;
  readonly puedeVerMiPanel = this.auth.puedeVerMiPanel;

  private readonly isDesktop = toSignal(this.breakpoints.observe('(min-width: 900px)').pipe(map((r) => r.matches)), {
    initialValue: typeof window !== 'undefined' && window.innerWidth >= 900,
  });

  /** Panel fijo (mode `side`, siempre abierto) en escritorio; overlay (`over`) en móvil.
   *  Depende SOLO del breakpoint — NUNCA de la ruta/pantalla — para que el modo sea
   *  idéntico en todas las vistas. (Antes Board usaba `over` en escritorio vía
   *  `collapsibleNav`: esa inconsistencia de modo entre rutas dejaba el contenido
   *  `inert` pegado al navegar en círculo. En `side` Material no aplica focus-trap/inert.) */
  readonly fixed = computed(() => this.isDesktop());
  readonly mode = computed<'side' | 'over'>(() => (this.fixed() ? 'side' : 'over'));
  /** Estado manual del drawer (botón ☰) cuando es overlay; en modo fijo se ignora. */
  readonly drawerOpen = signal(false);
  /** Abierto = fijo (side, siempre abierto) o abierto manualmente en overlay. Derivar
   *  `opened` y `mode` de `fixed()` juntos evita que el drawer se abra en modo `over`
   *  durante la transición (lo que dejaba el contenido `inert` en zoneless). */
  readonly opened = computed(() => this.fixed() || this.drawerOpen());

  /** Contenido del shell (para limpiar un `inert` que Material pudo dejar pegado). */
  private readonly shellContent = viewChild<ElementRef<HTMLElement>>('shellContent');

  constructor() {
    // Carga los datos (Firebase/localStorage) y arranca el sync en tiempo real.
    this.data.ensureInit().then(() => {
      this.data.startStreaming();
      this.checkReminders();
    });
    // Recordatorios de tickets pendientes: revisa cada 30s para que la alerta salte
    // cerca de la hora exacta (la lista vive en memoria, sin costo de red).
    const timer = setInterval(() => this.checkReminders(), 30 * 1000);
    this.destroyRef.onDestroy(() => clearInterval(timer));

    // Desbloquea el audio con la primera interacción del usuario (política de
    // autoplay): así el sonido de la alerta sí suena cuando llegue la hora.
    if (typeof window !== 'undefined') {
      const unlock = () => {
        try { this.ensureAudio()?.resume(); } catch { /* sin audio */ }
        window.removeEventListener('pointerdown', unlock);
        window.removeEventListener('keydown', unlock);
      };
      window.addEventListener('pointerdown', unlock);
      window.addEventListener('keydown', unlock);
      this.destroyRef.onDestroy(() => {
        window.removeEventListener('pointerdown', unlock);
        window.removeEventListener('keydown', unlock);
      });
    }

    // Red de seguridad (zoneless): el contenido SOLO debe quedar inerte cuando hay
    // un drawer overlay ABIERTO encima (over + opened). En cualquier otro caso —modo
    // fijo (side), o drawer cerrado (incluido el cierre al navegar en over)— debe ser
    // interactivo. En zoneless Material a veces no quita el `inert` al cerrar/cambiar
    // de modo, dejando la derecha "viva pero muerta" hasta recargar. Dos coberturas:
    //  1) afterRenderEffect: reacciona a cambios de fixed/opened (cerrar drawer, resize).
    afterRenderEffect(() => {
      const interactivo = this.fixed() || !this.opened(); // inerte solo si over + abierto
      const el = this.shellContent()?.nativeElement;
      if (el && interactivo) el.removeAttribute('inert');
    });
    //  2) MutationObserver: quita `inert` apenas Material lo ponga (lo setea tarde,
    //     después del render, por eso el efecto solo no alcanza).
    afterNextRender(() => {
      const el = this.shellContent()?.nativeElement;
      if (!el) return;
      const strip = () => {
        if ((this.fixed() || !this.opened()) && el.hasAttribute('inert')) el.removeAttribute('inert');
      };
      strip();
      const obs = new MutationObserver(strip);
      obs.observe(el, { attributes: true, attributeFilter: ['inert'] });
      this.destroyRef.onDestroy(() => obs.disconnect());
    });

    // En overlay, cerrar el drawer al navegar.
    this.router.events
      .pipe(
        filter((e) => e instanceof NavigationEnd),
        takeUntilDestroyed(),
      )
      .subscribe(() => {
        if (!this.fixed()) this.drawerOpen.set(false);
      });
  }

  /** Alerta de tickets pendientes cuya fecha/hora ya llegó: diálogo visible en
   *  cualquier página (desde el shell) + sonido. Cada ticket alerta 1 vez por día,
   *  hasta que se pause o se redefina la fecha en el panel de Pendientes. */
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
    // Si ya hay una alerta abierta, no marcar ni apilar: estos vencidos saldrán
    // en el siguiente chequeo, cuando se cierre la alerta actual.
    if (this.alertOpen) return;

    due.forEach((x) => this.data.updateHdPendiente(x.ticket, { lastAlerted: todayStr }));
    this.playAlertSound();

    const items: ReminderItem[] = due.map((x) => ({ ticket: x.ticket, clienteRaw: x.clienteRaw, asunto: x.asunto, nota: x.nota }));
    this.alertOpen = true;
    this.dialog
      .open(ReminderAlertDialog, { data: { items }, width: '460px', maxWidth: '95vw', autoFocus: false })
      .afterClosed()
      .subscribe((r) => {
        this.alertOpen = false;
        // Lleva a Pendientes resaltando los tickets que acaban de sonar.
        if (r === 'ver') {
          this.router.navigate(['/pendientes'], { queryParams: { resaltar: items.map((i) => i.ticket).join(',') } });
        }
      });
  }

  /** Crea (perezoso) el AudioContext del sonido de alerta. */
  private ensureAudio(): AudioContext | null {
    if (this.audioCtx) return this.audioCtx;
    const Ctx = (window as any).AudioContext || (window as any).webkitAudioContext;
    if (!Ctx) return null;
    this.audioCtx = new Ctx();
    return this.audioCtx;
  }

  /** Sonido "ding-dong" de la alerta (Web Audio, sin archivo). */
  private playAlertSound(): void {
    try {
      const ctx = this.ensureAudio();
      if (!ctx) return;
      if (ctx.state === 'suspended') ctx.resume();
      const tones: [number, number][] = [ [880, 0], [660, 0.18] ];
      for (const [freq, offset] of tones) {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.value = freq;
        const t0 = ctx.currentTime + offset;
        gain.gain.setValueAtTime(0.0001, t0);
        gain.gain.exponentialRampToValueAtTime(0.35, t0 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, t0 + 0.55);
        osc.connect(gain).connect(ctx.destination);
        osc.start(t0);
        osc.stop(t0 + 0.6);
      }
    } catch {
      /* autoplay bloqueado o sin Web Audio: la alerta visual igual aparece */
    }
  }

  async logout(): Promise<void> {
    await this.auth.logout();
    this.router.navigate(['/login']);
  }
}
