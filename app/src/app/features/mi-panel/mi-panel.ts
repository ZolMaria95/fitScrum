import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-mi-panel',
  imports: [MatCardModule],
  template: `
    <mat-card class="ph" appearance="outlined">
      <h2>Mi Panel</h2>
      <p>Pendiente de portar (Fase 2+). Visible solo para Scrum Master / MSC001.</p>
    </mat-card>
  `,
  styles: `.ph { padding: 24px; max-width: 720px; }`,
})
export class MiPanel {}
