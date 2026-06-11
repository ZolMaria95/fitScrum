// Modelo de ticket + funciones puras (port de js/helpdesk-panel.js).
import { AUTO_PATTERN, EMPLEADOS, TIPO_NOMBRE } from './helpdesk.constants';

export interface Ticket {
  ticket: string;
  tipoId: string;
  tipo: string;
  clienteRaw: string;
  clientId: string; // client_id del API (para asociar al board)
  usuarioIngreso: string;
  nombreIngreso: string;
  usuarioAsignado: string;
  nombreAsignado: string;
  orden: number;
  estatus: string;
  asunto: string;
  modulo: string;
  fechaAsignacion: string;
  fechaIngreso: string;
  fechaMod: string;
  usuarioUltimaMod: string;
  adjuntosTicket: string[];
  ultimoMensaje: string;
  fechaUltimoMensaje: string;
  usuarioUltimoMsg: string;
  reciente: boolean;
  diasSinMovimiento: number;
  diasDesdeIngreso: number;
  sinAsignar: boolean;
  recienteMensaje: boolean;
  tieneMensaje: boolean;
  clasificacion: string;
  accion: string;
  // índice para sort dinámico por columna
  [k: string]: unknown;
}

export function stripHtml(str: string): string {
  const div = document.createElement('div');
  div.innerHTML = String(str || '');
  return (div.textContent || div.innerText || '').replace(/\s+/g, ' ').trim();
}

/** Quita scripts, handlers on* y javascript: del HTML de un mensaje (port de _safeHtml). */
export function safeHtml(html: string): string {
  return String(html || '')
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/\son\w+\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]*)/gi, '')
    .replace(/href\s*=\s*(?:"javascript:[^"]*"|'javascript:[^']*')/gi, 'href="#"');
}

/** Escanea el ticket crudo en busca de ids de adjunto (campos attach/adjunto/archivo). */
export function ticketAttachIds(t: any): string[] {
  if (!t || typeof t !== 'object') return [];
  const ids: string[] = [];
  const push = (v: unknown) => {
    if (v !== null && v !== undefined && v !== '') ids.push(String(v));
  };
  Object.entries(t).forEach(([k, v]) => {
    if (!/attach|adjunt|archivo/i.test(k)) return;
    if (Array.isArray(v)) v.forEach(push);
    else if (typeof v === 'string' || typeof v === 'number') push(v);
  });
  return [...new Set(ids)].filter((id) => /^\d+$/.test(id));
}

export function mapTicket(t: any): Ticket {
  return {
    ticket: String(t.ticket_id || ''),
    tipoId: t.ticket_type_id || '',
    tipo: TIPO_NOMBRE[t.ticket_type_id] || t.ticket_type_id || '',
    clienteRaw: String(t.cliente || '').trim().toUpperCase(),
    clientId: String(t.client_id ?? '').trim(),
    usuarioIngreso: t.entry_user_id || '',
    nombreIngreso: t.entry_person || '',
    usuarioAsignado: String(t.assigned_user_id || '').trim().toUpperCase(),
    nombreAsignado: t.assigned_person || '',
    orden: parseInt(t.priority || 999, 10),
    estatus: t.estado || '',
    asunto: t.subject || '',
    modulo: t.modulo || '',
    fechaAsignacion: t.assigned_date || '',
    fechaIngreso: t.entry_date || '',
    fechaMod: t.modified_date || '',
    usuarioUltimaMod: t.assigned_user_id || '',
    adjuntosTicket: ticketAttachIds(t),
    ultimoMensaje: '',
    fechaUltimoMensaje: '',
    usuarioUltimoMsg: '',
    reciente: false,
    diasSinMovimiento: 0,
    diasDesdeIngreso: 0,
    sinAsignar: false,
    recienteMensaje: false,
    tieneMensaje: false,
    clasificacion: '',
    accion: '',
  };
}

/** Toma el último mensaje no-automático del ticket (port de _applyMessages). */
export function applyMessages(ticket: Ticket, mensajes: any[]): void {
  for (let j = mensajes.length - 1; j >= 0; j--) {
    const m = mensajes[j];
    if (m.system_message === false && m.detail && String(m.detail).trim() && !AUTO_PATTERN.test(m.detail)) {
      ticket.ultimoMensaje = stripHtml(m.detail);
      ticket.fechaUltimoMensaje = m.entry_date || '';
      ticket.usuarioUltimoMsg = m.entry_user_id || '';
      break;
    }
  }
}

export function evaluarFechas(t: Ticket): Ticket {
  const ahora = new Date();
  const fechaMod = new Date(t.fechaMod);
  const fechaIng = new Date(t.fechaIngreso);
  const fechaMsg = new Date(t.fechaUltimoMensaje);
  const diffMod = (ahora.getTime() - fechaMod.getTime()) / 864e5;
  const diffIng = (ahora.getTime() - fechaIng.getTime()) / 864e5;
  const diffMsg = (ahora.getTime() - fechaMsg.getTime()) / 864e5;

  t.reciente = !isNaN(fechaMod.getTime()) && diffMod <= 2;
  t.diasSinMovimiento = isNaN(diffMod) ? 0 : Math.floor(diffMod);
  t.diasDesdeIngreso = isNaN(diffIng) ? Math.floor(diffMod) : Math.floor(diffIng);
  t.sinAsignar = !t.usuarioAsignado || t.usuarioAsignado === 'SIN ASIGNAR';
  t.recienteMensaje = !isNaN(fechaMsg.getTime()) && diffMsg <= 2;
  t.tieneMensaje = !!t.ultimoMensaje.trim();
  return t;
}

/** Clasifica el ticket en categoría + acción (port de _clasificar). */
export function clasificar(t: Ticket): Ticket {
  const { orden, reciente, estatus, sinAsignar, diasDesdeIngreso, recienteMensaje, tieneMensaje } = t;
  const est = estatus.toUpperCase();

  const esCambioPrioridad = AUTO_PATTERN.test(t.ultimoMensaje);
  const esCambioEstatusAuto = /el usuario .+ cambi[oó] (el |la asignaci[oó]n)/i.test(t.ultimoMensaje);
  const esAutoMensaje = esCambioPrioridad || esCambioEstatusAuto;

  if (esCambioPrioridad) {
    t.clasificacion = 'SIN ACCION';
    t.accion = 'CAMBIO DE PRIORIDAD';
  } else if (esCambioEstatusAuto) {
    t.clasificacion = 'SIN ACCION';
    t.accion = 'CAMBIO DE ESTATUS';
  } else if (est.includes('ENTREGADO')) {
    t.clasificacion = 'CLIENTE PENDIENTE';
    t.accion = 'NO REQUIERE ATENCION';
  } else if (est.includes('INFO PENDIENTE CLIENTE')) {
    t.clasificacion = 'CLIENTE PENDIENTE';
    t.accion = 'ESPERANDO RESPUESTA DEL CLIENTE';
  } else if (sinAsignar && diasDesdeIngreso > 3) {
    t.clasificacion = 'VERIFICAR MOTIVO DE NO ASIGNACION';
    t.accion = 'SIN ASIGNAR MUCHOS DIAS - REVISAR CAUSA';
  } else if (sinAsignar && diasDesdeIngreso > 1) {
    t.clasificacion = 'SIN ASIGNAR';
    t.accion = 'REQUIERE REVISION';
  } else if (sinAsignar) {
    t.clasificacion = 'SIN ASIGNAR';
    t.accion = 'ASIGNAR TECNICO';
  } else if (orden === 1 && reciente) {
    t.clasificacion = 'URGENTE';
    t.accion = 'ATENDER INMEDIATAMENTE';
  } else if (orden <= 2 && reciente) {
    t.clasificacion = 'ALTA PRIORIDAD';
    t.accion = 'REVISAR HOY';
  } else if (reciente) {
    t.clasificacion = 'RECIENTE';
    t.accion = 'VALIDAR CAMBIOS';
  } else if (recienteMensaje && tieneMensaje) {
    t.clasificacion = 'REQUIERE REVISION';
    t.accion = 'MENSAJE RECIENTE PENDIENTE';
  } else if (orden === 1 && !reciente) {
    t.clasificacion = 'CRITICO SIN MOVIMIENTO';
    t.accion = 'ESCALAR INMEDIATAMENTE';
  } else if (est.includes('INFO PENDIENTE')) {
    t.clasificacion = 'CLIENTE PENDIENTE';
    t.accion = 'ESPERAR RESPUESTA CLIENTE';
  } else {
    t.clasificacion = 'SIN ACCION';
    t.accion = 'NO REQUIERE ATENCION';
  }

  // Si el último comentario fue de un empleado FitBank, sobreescribir acción.
  const ultimoUsuario = (t.usuarioUltimoMsg || t.usuarioUltimaMod || '').trim().toUpperCase();
  if (!esAutoMensaje && EMPLEADOS.has(ultimoUsuario) && !est.includes('EN PROCESO')) {
    t.accion = 'COMENTARIO ENVIADO POR FITBANK';
  }
  if (t.accion === 'COMENTARIO ENVIADO POR FITBANK' && t.clasificacion === 'SIN ASIGNAR') {
    t.accion = 'ASIGNAR TECNICO';
  }

  t.clasificacion = t.clasificacion.toUpperCase();
  t.accion = t.accion.toUpperCase();
  return t;
}
