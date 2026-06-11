import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-pendientes',
  imports: [MatCardModule],
  template: `
    <mat-card class="ph" appearance="outlined">
      <h2>Pendientes</h2>
      <p>Pendiente de portar (Fase 2+).</p>
    </mat-card>
  `,
  styles: `.ph { padding: 24px; max-width: 720px; }`,
})
export class Pendientes {}
