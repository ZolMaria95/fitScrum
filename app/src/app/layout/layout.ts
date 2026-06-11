import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AuthService } from '../core/services/auth.service';
import { DataService } from '../core/services/data.service';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, MatToolbarModule, MatButtonModule, MatMenuModule, MatIconModule],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout {
  private readonly auth = inject(AuthService);
  private readonly data = inject(DataService);
  private readonly router = inject(Router);

  readonly session = this.auth.session;
  readonly puedeVerMiPanel = this.auth.puedeVerMiPanel;

  constructor() {
    // Carga los datos (Firebase/localStorage) y arranca el sync en tiempo real.
    this.data.ensureInit().then(() => this.data.startStreaming());
  }

  async logout(): Promise<void> {
    await this.auth.logout();
    this.router.navigate(['/login']);
  }
}
