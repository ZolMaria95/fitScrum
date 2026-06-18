import { Component, ElementRef, afterNextRender, inject, viewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

export interface ComposeData {
  /** HTML inicial a editar (borrador previo). */
  html?: string;
  /** Texto del encabezado del diálogo. */
  titulo?: string;
}

/**
 * Editor de respuesta en pop-up: área amplia con formato básico
 * (negrita / cursiva / subrayado). Devuelve el HTML editado al cerrar con
 * "Listo", o `undefined` si se cancela.
 */
@Component({
  selector: 'app-compose-dialog',
  imports: [MatDialogModule, MatButtonModule, MatIconModule, MatTooltipModule],
  templateUrl: './compose-dialog.html',
  styleUrl: './compose-dialog.scss',
})
export class ComposeDialog {
  private readonly ref = inject(MatDialogRef<ComposeDialog, string>);
  private readonly data = inject<ComposeData>(MAT_DIALOG_DATA);

  readonly titulo = this.data.titulo || 'Redactar respuesta';
  readonly editor = viewChild.required<ElementRef<HTMLElement>>('editor');

  constructor() {
    afterNextRender(() => {
      const el = this.editor().nativeElement;
      el.innerHTML = this.data.html || '';
      el.focus();
      // Cursor al final del contenido existente.
      const sel = window.getSelection();
      if (sel) {
        const range = document.createRange();
        range.selectNodeContents(el);
        range.collapse(false);
        sel.removeAllRanges();
        sel.addRange(range);
      }
    });
  }

  /** Aplica negrita/cursiva/subrayado a la selección sin perder el foco. */
  format(cmd: 'bold' | 'italic' | 'underline'): void {
    this.editor().nativeElement.focus();
    document.execCommand(cmd, false);
  }

  /**
   * Al pegar, conserva negrita/cursiva/subrayado (y saltos/enlaces) pero descarta
   * colores, fuentes y demás "ruido" de Word/web. Si no hay HTML, pega texto plano.
   */
  onPaste(e: ClipboardEvent): void {
    const data = e.clipboardData;
    if (!data) return;
    e.preventDefault();
    const html = data.getData('text/html');
    const limpio = html
      ? sanitizePasted(html)
      : escapeText(data.getData('text/plain')).replace(/\r?\n/g, '<br>');
    document.execCommand('insertHTML', false, limpio);
  }

  done(): void {
    const el = this.editor().nativeElement;
    // Si solo quedó el espacio en blanco, devuelve vacío.
    this.ref.close(el.textContent?.trim() || el.querySelector('img') ? el.innerHTML : '');
  }
}

/** Escapa caracteres HTML de un texto plano. */
function escapeText(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

/**
 * Reduce el HTML pegado a un subconjunto seguro conservando el formato básico:
 * negrita, cursiva, subrayado, saltos de línea y enlaces. Convierte estilos
 * inline (font-weight/font-style/text-decoration) en sus etiquetas y descarta
 * el resto (colores, fuentes, tamaños, clases…).
 */
function sanitizePasted(html: string): string {
  const doc = new DOMParser().parseFromString(html, 'text/html');
  return serialize(doc.body).replace(/(<br>\s*)+$/, '').trim();
}

function serialize(node: Node): string {
  let out = '';
  node.childNodes.forEach((child) => {
    if (child.nodeType === Node.TEXT_NODE) {
      out += escapeText(child.textContent || '');
      return;
    }
    if (child.nodeType !== Node.ELEMENT_NODE) return;
    const el = child as HTMLElement;
    const tag = el.tagName.toLowerCase();
    if (tag === 'br') {
      out += '<br>';
      return;
    }
    if (tag === 'script' || tag === 'style') return;

    let frag = serialize(el);
    const style = (el.getAttribute('style') || '').toLowerCase();
    const peso = /font-weight:\s*(\d+|bold)/.exec(style)?.[1];
    const bold = tag === 'b' || tag === 'strong' || peso === 'bold' || (!!peso && +peso >= 600);
    const italic = tag === 'i' || tag === 'em' || /font-style:\s*italic/.test(style);
    const underline = tag === 'u' || /text-decoration:[^;]*underline/.test(style);

    if (tag === 'a') {
      const href = el.getAttribute('href') || '';
      if (/^https?:/i.test(href)) frag = `<a href="${href}">${frag}</a>`;
    }
    if (bold) frag = `<b>${frag}</b>`;
    if (italic) frag = `<i>${frag}</i>`;
    if (underline) frag = `<u>${frag}</u>`;
    // Bloques → un salto al final para no pegar todo en una línea.
    if (tag === 'p' || tag === 'div' || tag === 'li' || tag === 'tr') frag += '<br>';
    out += frag;
  });
  return out;
}
