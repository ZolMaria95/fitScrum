import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

export interface PendienteDateData {
  title: string;
  ticket: string;
  dueDate?: string; // YYYY-MM-DD
  dueTime?: string; // HH:mm
}
export interface PendienteDateResult {
  dueDate: string;
  dueTime: string;
}

/** Pide fecha + hora para el recordatorio de un ticket pendiente. */
@Component({
  selector: 'app-pendiente-date-dialog',
  imports: [FormsModule, MatDialogModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatDatepickerModule],
  template: `
    <h2 mat-dialog-title>{{ data.title }}</h2>
    <mat-dialog-content class="pdd">
      <div class="pdd-ticket">Ticket #{{ data.ticket }}</div>
      <p class="pdd-hint">¿Cuándo querés que te recuerde analizar este ticket?</p>

      <div class="pdd-row">
        <mat-form-field appearance="outline" class="grow">
          <mat-label>Fecha</mat-label>
          <input matInput [matDatepicker]="dp" [(ngModel)]="date" />
          <mat-datepicker-toggle matIconSuffix [for]="dp"></mat-datepicker-toggle>
          <mat-datepicker #dp></mat-datepicker>
        </mat-form-field>

        <mat-form-field appearance="outline" class="time">
          <mat-label>Hora</mat-label>
          <input matInput type="time" [(ngModel)]="time" />
        </mat-form-field>
      </div>
    </mat-dialog-content>

    <mat-dialog-actions align="end">
      <button mat-button mat-dialog-close>Cancelar</button>
      <button mat-flat-button color="primary" (click)="save()" [disabled]="!date || !time">Guardar</button>
    </mat-dialog-actions>
  `,
  styles: `
    .pdd { min-width: 320px; }
    .pdd-ticket { font-weight: 700; color: var(--brand, #048abf); margin-bottom: 4px; }
    .pdd-hint { font-size: 13px; color: var(--mat-sys-on-surface-variant); margin: 0 0 12px; }
    .pdd-row { display: flex; gap: 10px; }
    .grow { flex: 1; }
    .time { width: 120px; }
  `,
})
export class PendienteDateDialog {
  private readonly ref = inject(MatDialogRef<PendienteDateDialog>);
  readonly data = inject<PendienteDateData>(MAT_DIALOG_DATA);

  date: Date | null = this.data.dueDate ? new Date(this.data.dueDate + 'T00:00:00') : new Date();
  time = this.data.dueTime || '09:00';

  save(): void {
    if (!this.date || !this.time) return;
    const d = this.date;
    const p = (n: number) => String(n).padStart(2, '0');
    const dueDate = `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
    this.ref.close({ dueDate, dueTime: this.time } as PendienteDateResult);
  }
}
