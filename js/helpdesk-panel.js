const HelpdeskPanel = (() => {
  const _proxyUrl = window.HELPDESK_PROXY_URL && !window.HELPDESK_PROXY_URL.includes('TU-WORKER')
    ? window.HELPDESK_PROXY_URL : 'http://localhost:3001';
  const BASE = _proxyUrl + '/api/v1';

  // ── Constantes (igual que el flujo n8n) ───────────────
  const CLIENTES_VALIDOS = new Set([
    'COOPERATIVA DE AHORRO Y CREDITO ERCO',
    'COAC CAPCPE GUALAQUIZA',
    'COAC LA DOLOROSA DURAN',
    'PADRE JULIAN LORENTE',
    'COAC CACEL',
    'COAC 4 RIOS',
    'LITARGMODE CIA LTDA',
    'COAC COPAC AUSTRO LTDA',
    'BANCO DEL AUSTRO',
    'VAZCREDIT',
    'COAC SENOR DE GIRON',
    'COAC SEÑOR DE GIRON',
  ]);

  const CLIENT_MAP = {
    'COOPERATIVA DE AHORRO Y CREDITO ERCO': 'erco',
    'COAC CAPCPE GUALAQUIZA':               'gualaquiza',
    'COAC LA DOLOROSA DURAN':               'dolorosa',
    'PADRE JULIAN LORENTE':                 'julian',
    'COAC CACEL':                           'cacel',
    'COAC 4 RIOS':                          '4rios',
    'LITARGMODE CIA LTDA':                  'litarg',
    'COAC COPAC AUSTRO LTDA':               'copac_austro',
    'BANCO DEL AUSTRO':                     'austro',
    'VAZCREDIT':                            'vazcredit',
    'COAC SENOR DE GIRON':                  'giron',
    'COAC SEÑOR DE GIRON':                  'giron',
  };

  const CLASIF_COLOR = {
    'URGENTE':                           '#FF4444',
    'CRITICO SIN MOVIMIENTO':            '#C00000',
    'ALTA PRIORIDAD':                    '#FF8C00',
    'RECIENTE':                          '#2196F3',
    'REQUIERE REVISION':                 '#FF5722',
    'CLIENTE PENDIENTE':                 '#9C27B0',
    'VERIFICAR MOTIVO DE NO ASIGNACION': '#FF6D00',
    'SIN ASIGNAR':                       '#FFC107',
    'SIN ACCION':                        '#757575',
    'COMENTARIO ENVIADO POR FITBANK':    '#00897B',
  };

  const CLASIF_ORDER = [
    'URGENTE','CRITICO SIN MOVIMIENTO','ALTA PRIORIDAD','RECIENTE',
    'REQUIERE REVISION','CLIENTE PENDIENTE','VERIFICAR MOTIVO DE NO ASIGNACION',
    'SIN ASIGNAR','COMENTARIO ENVIADO POR FITBANK','SIN ACCION',
  ];

  const PRIORITY_ACTIONS = new Set([
    'ASIGNAR TECNICO',
    'REQUIERE REVISION',
    'ESCALAR INMEDIATAMENTE',
    'ATENDER INMEDIATAMENTE',
    'REVISAR HOY',
  ]);

  const EMPLEADOS = new Set([
    'JPHP001','VINC001','MSC001','FSGC001','ORLR001',
    'KIMA001','KDLS001','BMHJ001','DSGS001','JCEO001','CUC001','JFQV001',
  ]);

  const TIPO_NOMBRE = { '001': 'INCIDENCIA', '002': 'REQUERIMIENTO', '003': 'CONSULTA' };
  const AUTO_PATTERN = /el usuario .+ (cambi[oó]|ualizó .+ asun)/i;

  // ── Estado ────────────────────────────────────────────
  let _tickets       = [];
  let _loading       = false;
  let _tab           = 'prioritarios';
  let _filterCliente = '';
  let _filterAccion  = '';
  let _filterClasif  = '';

  // ── Auth token (cacheado 50 min en sessionStorage) ────
  const TOKEN_KEY = 'fit-daily_hd_token';
  async function _getToken() {
    const cached = JSON.parse(sessionStorage.getItem(TOKEN_KEY) || 'null');
    if (cached && Date.now() < cached.exp) return cached.token;

    const r = await fetch(`${BASE}/auth/login`, {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username_or_email: window.HD_USERNAME || 'HELPDESK1',
        password:          window.HD_PASSWORD || '',
        force_logout:      'true',
      }),
    });
    if (!r.ok) throw new Error(`Helpdesk login failed: ${r.status}`);
    const { access_token } = await r.json();
    sessionStorage.setItem(TOKEN_KEY, JSON.stringify({
      token: access_token,
      exp:   Date.now() + 50 * 60 * 1000,
    }));
    return access_token;
  }

  // ── Fetch páginas ─────────────────────────────────────
  async function _fetchPage(offset) {
    try {
      const token = await _getToken();
      const r = await fetch(
        `${BASE}/tickets/tickets?limit=40&offset=${offset}&modified_date_order=desc`,
        { headers: { Authorization: `Bearer ${token}` } },
      );
      if (!r.ok) return [];
      return (await r.json()).items || [];
    } catch (_) { return []; }
  }

  // ── Fetch mensajes de un ticket ───────────────────────
  async function _fetchMessages(ticketId) {
    try {
      const token = await _getToken();
      const r = await fetch(`${BASE}/tickets/${ticketId}/messages?limit=50`,
        { headers: { Authorization: `Bearer ${token}` } },
      );
      if (!r.ok) return [];
      const data = await r.json();
      return Array.isArray(data) ? data : [];
    } catch (_) { return []; }
  }

  function _stripHtml(str) {
    return String(str || '')
      .replace(/<[^>]*>/g, '')
      .replace(/&nbsp;/gi, ' ').replace(/&amp;/gi, '&')
      .replace(/&lt;/gi, '<').replace(/&gt;/gi, '>')
      .replace(/&quot;/gi, '"').replace(/\s+/g, ' ').trim();
  }

  // ── Mapear ticket crudo → objeto normalizado ──────────
  function _mapTicket(t) {
    return {
      ticket:             String(t.ticket_id || ''),
      tipoId:             t.ticket_type_id || '',
      tipo:               TIPO_NOMBRE[t.ticket_type_id] || t.ticket_type_id || '',
      clienteRaw:         String(t.cliente || '').trim().toUpperCase(),
      usuarioIngreso:     t.entry_user_id   || '',
      nombreIngreso:      t.entry_person    || '',
      usuarioAsignado:    String(t.assigned_user_id  || '').trim().toUpperCase(),
      nombreAsignado:     t.assigned_person || '',
      orden:              parseInt(t.priority || 999, 10),
      estatus:            t.estado          || '',
      asunto:             t.subject         || '',
      modulo:             t.modulo          || '',
      fechaAsignacion:    t.assigned_date   || '',
      fechaIngreso:       t.entry_date      || '',
      fechaMod:           t.modified_date   || '',
      usuarioUltimaMod:   t.assigned_user_id || '',
      // campos de mensaje (se llenan luego)
      ultimoMensaje:      '',
      fechaUltimoMensaje: '',
      usuarioUltimoMsg:   '',
      // campos calculados
      reciente:           false,
      diasSinMovimiento:  0,
      diasDesdeIngreso:   0,
      sinAsignar:         false,
      recienteMensaje:    false,
      tieneMensaje:       false,
      clasificacion:      '',
      accion:             '',
    };
  }

  // ── Aplicar mensajes (lógica "Aplicar Mensajes" del flujo) ──
  function _applyMessages(ticket, mensajes) {
    for (let j = mensajes.length - 1; j >= 0; j--) {
      const m = mensajes[j];
      if (
        m.system_message === false &&
        m.detail && String(m.detail).trim() &&
        !AUTO_PATTERN.test(m.detail)
      ) {
        ticket.ultimoMensaje      = _stripHtml(m.detail);
        ticket.fechaUltimoMensaje = m.entry_date    || '';
        ticket.usuarioUltimoMsg   = m.entry_user_id || '';
        break;
      }
    }
  }

  // ── Evaluar fechas (lógica "Evaluar Fecha" del flujo) ─
  function _evaluarFechas(t) {
    const ahora     = new Date();
    const fechaMod  = new Date(t.fechaMod);
    const fechaIng  = new Date(t.fechaIngreso);
    const fechaMsg  = new Date(t.fechaUltimoMensaje);
    const diffMod   = (ahora - fechaMod)  / 864e5;
    const diffIng   = (ahora - fechaIng)  / 864e5;
    const diffMsg   = (ahora - fechaMsg)  / 864e5;

    t.reciente           = !isNaN(fechaMod.getTime()) && diffMod <= 2;
    t.diasSinMovimiento  = isNaN(diffMod) ? 0 : Math.floor(diffMod);
    t.diasDesdeIngreso   = isNaN(diffIng) ? Math.floor(diffMod) : Math.floor(diffIng);
    t.sinAsignar         = !t.usuarioAsignado || t.usuarioAsignado === 'SIN ASIGNAR';
    t.recienteMensaje    = !isNaN(fechaMsg.getTime()) && diffMsg <= 2;
    t.tieneMensaje       = !!t.ultimoMensaje.trim();
    return t;
  }

  // ── Clasificar (lógica "Clasificar" del flujo) ────────
  function _clasificar(t) {
    const { orden, reciente, estatus, sinAsignar, diasDesdeIngreso, recienteMensaje, tieneMensaje } = t;
    const est = estatus.toUpperCase();

    const esCambioPrioridad   = AUTO_PATTERN.test(t.ultimoMensaje);
    const esCambioEstatusAuto = /el usuario .+ cambi[oó] (el |la asignaci[oó]n)/i.test(t.ultimoMensaje);
    const esAutoMensaje       = esCambioPrioridad || esCambioEstatusAuto;

    if (esCambioPrioridad) {
      t.clasificacion = 'SIN ACCION'; t.accion = 'CAMBIO DE PRIORIDAD';
    } else if (esCambioEstatusAuto) {
      t.clasificacion = 'SIN ACCION'; t.accion = 'CAMBIO DE ESTATUS';
    } else if (est.includes('ENTREGADO')) {
      t.clasificacion = 'CLIENTE PENDIENTE'; t.accion = 'NO REQUIERE ATENCION';
    } else if (est.includes('INFO PENDIENTE CLIENTE')) {
      t.clasificacion = 'CLIENTE PENDIENTE'; t.accion = 'ESPERANDO RESPUESTA DEL CLIENTE';
    } else if (sinAsignar && diasDesdeIngreso > 3) {
      t.clasificacion = 'VERIFICAR MOTIVO DE NO ASIGNACION'; t.accion = 'SIN ASIGNAR MUCHOS DIAS - REVISAR CAUSA';
    } else if (sinAsignar && diasDesdeIngreso > 1) {
      t.clasificacion = 'SIN ASIGNAR'; t.accion = 'REQUIERE REVISION';
    } else if (sinAsignar) {
      t.clasificacion = 'SIN ASIGNAR'; t.accion = 'ASIGNAR TECNICO';
    } else if (orden === 1 && reciente) {
      t.clasificacion = 'URGENTE'; t.accion = 'ATENDER INMEDIATAMENTE';
    } else if (orden <= 2 && reciente) {
      t.clasificacion = 'ALTA PRIORIDAD'; t.accion = 'REVISAR HOY';
    } else if (reciente) {
      t.clasificacion = 'RECIENTE'; t.accion = 'VALIDAR CAMBIOS';
    } else if (recienteMensaje && tieneMensaje) {
      t.clasificacion = 'REQUIERE REVISION'; t.accion = 'MENSAJE RECIENTE PENDIENTE';
    } else if (orden === 1 && !reciente) {
      t.clasificacion = 'CRITICO SIN MOVIMIENTO'; t.accion = 'ESCALAR INMEDIATAMENTE';
    } else if (est.includes('INFO PENDIENTE')) {
      t.clasificacion = 'CLIENTE PENDIENTE'; t.accion = 'ESPERAR RESPUESTA CLIENTE';
    } else {
      t.clasificacion = 'SIN ACCION'; t.accion = 'NO REQUIERE ATENCION';
    }

    // Si el último comentario fue de un empleado FitBank, sobreescribir acción
    const ultimoUsuario = (t.usuarioUltimoMsg || t.usuarioUltimaMod || '').trim().toUpperCase();
    if (!esAutoMensaje && EMPLEADOS.has(ultimoUsuario) && !est.includes('EN PROCESO')) {
      t.accion = 'COMENTARIO ENVIADO POR FITBANK';
    }
    if (t.accion === 'COMENTARIO ENVIADO POR FITBANK' && t.clasificacion === 'SIN ASIGNAR') {
      t.accion = 'ASIGNAR TECNICO';
    }

    t.clasificacion = t.clasificacion.toUpperCase();
    t.accion        = t.accion.toUpperCase();
    return t;
  }

  // ── Sincronizar ───────────────────────────────────────
  async function sync() {
    if (_loading) return;
    _loading = true;
    _setStatus('Conectando a Helpdesk...', 'loading');

    try {
      _setStatus('Cargando tickets (6 páginas)...', 'loading');

      const offsets = [0, 40, 80, 120, 160, 200];
      const pages   = await Promise.all(offsets.map(o => _fetchPage(o)));
      const raw     = pages.flat();

      const filtrados = raw
        .filter(t => CLIENTES_VALIDOS.has(String(t.cliente || '').trim().toUpperCase()))
        .filter(t => {
          const est = String(t.estado || '').toUpperCase();
          return !est.includes('APROBADO') && !est.includes('CERRADO POR EL CLIENTE');
        });

      // Fase 1: mostrar sin mensajes para dar feedback inmediato
      _tickets = filtrados.map(_mapTicket).map(_evaluarFechas).map(_clasificar);
      _setStatus(`${_tickets.length} tickets cargados. Obteniendo mensajes...`, 'loading');
      _render();

      // Fase 2: cargar mensajes en lotes de 10
      const BATCH = 10;
      for (let i = 0; i < _tickets.length; i += BATCH) {
        const lote = _tickets.slice(i, i + BATCH);
        await Promise.all(lote.map(async t => {
          const msgs = await _fetchMessages(t.ticket);
          _applyMessages(t, msgs);
          _evaluarFechas(t);
          _clasificar(t);
        }));
        _setStatus(`Mensajes: ${Math.min(i + BATCH, _tickets.length)} / ${_tickets.length}...`, 'loading');
        _render();
      }

      _setStatus(`✓ ${_tickets.length} tickets — ${new Date().toLocaleTimeString('es-ES')}`, 'ok');
      _render();
    } catch (err) {
      const msg = err.message || '';
      const esRed = /fetch|failed|load failed|network/i.test(msg);
      _setStatus(
        esRed
          ? 'No se pudo conectar al proxy. Ejecuta: python proxy.py'
          : `Error: ${msg}`,
        'error'
      );
    } finally {
      _loading = false;
    }
  }

  // ── Status bar ────────────────────────────────────────
  function _setStatus(msg, type) {
    const el = document.getElementById('hd-status');
    if (!el) return;
    el.className   = `hd-status hd-status-${type}`;
    el.textContent = msg;
  }

  // ── Render principal ──────────────────────────────────
  function render() {
    const list = document.getElementById('hd-list');
    if (!list) return;
    if (!_tickets.length) {
      list.innerHTML = `<div class="hd-empty">Haz clic en <strong>↻ Sincronizar</strong> para cargar los tickets de Helpdesk.</div>`;
      return;
    }
    _render();
  }

  function _render() {
    if (_tab === 'estadisticas') { _renderStats(); return; }
    // No destruir un editor de nota abierto durante el ciclo de sincronización
    if (document.querySelector('.hd-note-editor-wrap')) return;

    const list = document.getElementById('hd-list');
    if (!list) return;

    const isPrio = _tab === 'prioritarios';

    // Actualizar contadores
    const cntPrio = _tickets.filter(t => PRIORITY_ACTIONS.has(t.accion)).length;
    const el1 = document.getElementById('hd-count-prio');
    const el2 = document.getElementById('hd-count-all');
    if (el1) el1.textContent = cntPrio;
    if (el2) el2.textContent = _tickets.length;

    // Filas base según pestaña
    let base = isPrio ? _tickets.filter(t => PRIORITY_ACTIONS.has(t.accion)) : _tickets;

    // Valores únicos para los selects (sobre el universo sin filtrar)
    const clientes  = [...new Set(base.map(t => t.clienteRaw))].sort();
    const acciones  = [...new Set(base.map(t => t.accion))].sort();
    const clasifs   = CLASIF_ORDER.filter(c => base.some(t => t.clasificacion === c));

    // Aplicar filtros
    if (_filterCliente) base = base.filter(t => t.clienteRaw    === _filterCliente);
    if (_filterAccion)  base = base.filter(t => t.accion        === _filterAccion);
    if (_filterClasif)  base = base.filter(t => t.clasificacion === _filterClasif);

    const sorted = [...base].sort((a, b) => b.diasSinMovimiento - a.diasSinMovimiento);

    const optCliente = `<option value="">Todos los clientes (${clientes.length})</option>` +
      clientes.map(c => `<option value="${c}" ${_filterCliente === c ? 'selected' : ''}>${c}</option>`).join('');

    const optAccion = `<option value="">Todas las acciones</option>` +
      acciones.map(a => `<option value="${a}" ${_filterAccion === a ? 'selected' : ''}>${a}</option>`).join('');

    const optClasif = `<option value="">Todas las clasificaciones</option>` +
      clasifs.map(c => `<option value="${c}" ${_filterClasif === c ? 'selected' : ''} style="color:${CLASIF_COLOR[c] || '#757575'}">${c}</option>`).join('');

    const notes   = AppData.getHdNotes();
    const actions = AppData.getHdActions();

    const bodyHTML = sorted.length
      ? sorted.map(t => _rowHTML(t, notes, actions)).join('')
      : `<tr><td colspan="15" class="hd-no-results">Sin resultados para los filtros aplicados.</td></tr>`;

    list.innerHTML = `
      <div class="hd-filters">
        <label class="hd-filter-label">Cliente
          <select class="hd-filter-select" id="hd-sel-cliente">${optCliente}</select>
        </label>
        <label class="hd-filter-label">Acción
          <select class="hd-filter-select" id="hd-sel-accion">${optAccion}</select>
        </label>
        <label class="hd-filter-label">Clasificación
          <select class="hd-filter-select" id="hd-sel-clasif">${optClasif}</select>
        </label>
        <span class="hd-filter-count">${sorted.length} ticket${sorted.length !== 1 ? 's' : ''}</span>
        ${(_filterCliente || _filterAccion || _filterClasif) ? `<button class="hd-filter-clear" id="hd-btn-clear">✕ Limpiar</button>` : ''}
      </div>
      <div class="hd-table-wrap">
        <table class="hd-table">
          <thead>
            <tr>
              <th>Ticket</th>
              <th class="hd-th-resumen">Resumen</th>
              <th>Cliente</th>
              <th>Asunto</th>
              <th>Fecha Últ. Msg</th>
              <th>Último Mensaje</th>
              <th>Tipo</th>
              <th>Asignado a</th>
              <th>Estatus</th>
              <th>Módulo</th>
              <th>F. Ingreso</th>
              <th title="Días sin movimiento">Días mov.</th>
              <th title="Días desde ingreso">Días ing.</th>
              <th>Clasificación</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>${bodyHTML}</tbody>
        </table>
      </div>`;

    // Eventos de filtros
    document.getElementById('hd-sel-cliente')?.addEventListener('change', e => {
      _filterCliente = e.target.value;
      _render();
    });
    document.getElementById('hd-sel-accion')?.addEventListener('change', e => {
      _filterAccion = e.target.value;
      _render();
    });
    document.getElementById('hd-sel-clasif')?.addEventListener('change', e => {
      _filterClasif = e.target.value;
      _render();
    });
    document.getElementById('hd-btn-clear')?.addEventListener('click', () => {
      _filterCliente = '';
      _filterAccion  = '';
      _filterClasif  = '';
      _render();
    });

    list.querySelectorAll('.hd-ticket-btn').forEach(btn => {
      btn.addEventListener('click', () => _abrirModalTarea(btn.dataset.ticket));
    });

    list.querySelectorAll('.hd-msg-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const t = _tickets.find(x => x.ticket === btn.dataset.ticket);
        if (t) _abrirModalMensaje(t);
      });
    });

    list.querySelectorAll('.hd-note-cell').forEach(cell => {
      cell.addEventListener('click', () => _openHdNote(cell));
      _attachActionBtn(cell);
    });
  }

  function _attachActionBtn(cell) {
    const btn = cell.querySelector('.hd-action-btn');
    if (!btn) return;
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const ticketId    = btn.dataset.ticket;
      const isNowActive = !AppData.getHdActions()[String(ticketId)];
      AppData.setHdAction(ticketId, isNowActive);
      const row = cell.closest('tr');
      if (row) row.classList.toggle('hd-row-action', isNowActive);
      btn.classList.toggle('hd-action-active', isNowActive);
      btn.textContent = isNowActive ? '🔴 Acción' : 'Acción';
      btn.title = isNowActive
        ? 'Acción pendiente — clic para quitar'
        : 'Marcar acción pendiente';
    });
  }

  function _noteDisplay(ticketId, notes, actions) {
    const note      = notes[String(ticketId)]   || '';
    const isAction  = !!(actions || {})[String(ticketId)];
    const preview   = note.length > 38 ? note.slice(0, 38) + '…' : note;
    return `
      <div class="hd-note-text">
        ${note
          ? `<span class="hd-note-preview" title="${note.replace(/"/g, '&quot;')}">${preview}</span>`
          : `<span class="hd-note-empty">+ Nota</span>`}
      </div>
      <button class="hd-action-btn${isAction ? ' hd-action-active' : ''}" data-ticket="${ticketId}"
              title="${isAction ? 'Acción pendiente — clic para quitar' : 'Marcar acción pendiente'}">
        ${isAction ? '🔴 Acción' : 'Acción'}
      </button>`;
  }

  function _openHdNote(cell) {
    if (cell.querySelector('.hd-note-editor-wrap')) return; // ya abierto
    const ticketId = cell.dataset.ticket;
    const existing = AppData.getHdNotes()[String(ticketId)] || '';

    cell.innerHTML = `
      <div class="hd-note-editor-wrap" onclick="event.stopPropagation()">
        <textarea class="hd-note-editor-ta" rows="3" placeholder="Escribe un resumen o nota...">${existing}</textarea>
        <div class="hd-note-editor-btns">
          <button class="hd-note-ok">✓ Guardar</button>
          <button class="hd-note-cancel">✕</button>
        </div>
      </div>`;

    const ta = cell.querySelector('.hd-note-editor-ta');
    ta.focus(); ta.setSelectionRange(ta.value.length, ta.value.length);

    function _commit() {
      AppData.setHdNote(ticketId, ta.value);
      _restoreCell(cell, ticketId);
    }
    function _discard() { _restoreCell(cell, ticketId); }

    cell.querySelector('.hd-note-ok').addEventListener('click', e => { e.stopPropagation(); _commit(); });
    cell.querySelector('.hd-note-cancel').addEventListener('click', e => { e.stopPropagation(); _discard(); });
    ta.addEventListener('keydown', e => {
      if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) _commit();
      if (e.key === 'Escape') _discard();
    });
  }

  function _restoreCell(cell, ticketId) {
    const notes   = AppData.getHdNotes();
    const actions = AppData.getHdActions();
    cell.innerHTML = _noteDisplay(ticketId, notes, actions);
    _attachActionBtn(cell);
    // El listener original de _render() sigue activo en el nodo — no agregar otro
  }

  function _rowHTML(t, notes, actions) {
    const isAction = !!(actions || {})[String(t.ticket)];
    const cColor   = CLASIF_COLOR[t.clasificacion] || '#757575';
    const dColor   = t.diasSinMovimiento > 7 ? '#C00000' : t.diasSinMovimiento > 3 ? '#FF8C00' : '#2E7D32';
    const diColor  = t.diasDesdeIngreso  > 7 ? '#C00000' : t.diasDesdeIngreso  > 3 ? '#FF8C00' : '#2E7D32';
    const asunto   = t.asunto.length > 55 ? t.asunto.slice(0, 55) + '…' : t.asunto;
    const msg      = t.ultimoMensaje.length > 60 ? t.ultimoMensaje.slice(0, 60) + '…' : t.ultimoMensaje;
    const fIngreso = t.fechaIngreso  ? t.fechaIngreso.split('T')[0]      : '';
    const fMsg     = t.fechaUltimoMensaje ? t.fechaUltimoMensaje.split('T')[0] : '';
    const msgBg    = t.recienteMensaje ? 'background:#FFF3E0' : '';
    const msgFg    = t.recienteMensaje ? 'color:#E65100;font-weight:600' : '';
    const msgTxt   = t.tieneMensaje    ? 'font-weight:600;color:#1A237E' : 'color:#9E9E9E';

    return `
      <tr class="hd-row${isAction ? ' hd-row-action' : ''}">
        <td><button class="hd-ticket-btn" data-ticket="${t.ticket}">#${t.ticket}</button></td>
        <td class="hd-note-cell" data-ticket="${t.ticket}">${_noteDisplay(t.ticket, notes, actions)}</td>
        <td class="hd-cell-sm">${t.clienteRaw}</td>
        <td class="hd-cell-asunto" title="${t.asunto.replace(/"/g,'&quot;')}">${asunto}</td>
        <td class="hd-cell-sm" style="${msgBg}"><span style="${msgFg}">${fMsg}</span></td>
        <td class="hd-cell-msg">${t.ultimoMensaje
          ? `<button class="hd-msg-btn" data-ticket="${t.ticket}" style="${msgTxt}">${msg}</button>`
          : '<span style="color:#9E9E9E">—</span>'}</td>
        <td class="hd-cell-xs">${t.tipo}</td>
        <td class="hd-cell-sm">${t.nombreAsignado || '—'}</td>
        <td class="hd-cell-sm">${t.estatus}</td>
        <td class="hd-cell-sm">${t.modulo}</td>
        <td class="hd-cell-xs">${fIngreso}</td>
        <td class="hd-cell-num" style="color:${dColor}">${t.diasSinMovimiento}</td>
        <td class="hd-cell-num" style="color:${diColor}">${t.diasDesdeIngreso}</td>
        <td class="hd-cell-clasif" style="color:${cColor}">${t.clasificacion}</td>
        <td class="hd-cell-accion">${t.accion}</td>
      </tr>`;
  }

  // ── Estadísticas ──────────────────────────────────────
  function _renderStats() {
    const list = document.getElementById('hd-list');
    if (!list || !_tickets.length) return;

    const stats = { porClasif: {}, porCliente: {}, porEstatus: {} };
    CLASIF_ORDER.forEach(c => stats.porClasif[c] = 0);

    _tickets.forEach(t => {
      stats.porClasif[t.clasificacion]  = (stats.porClasif[t.clasificacion]  || 0) + 1;
      stats.porCliente[t.clienteRaw]    = (stats.porCliente[t.clienteRaw]    || 0) + 1;
      stats.porEstatus[t.estatus]       = (stats.porEstatus[t.estatus]       || 0) + 1;
    });

    const total = _tickets.length;
    const pct   = n => total ? (n / total * 100).toFixed(1) + '%' : '0%';

    function _tableRows(map, useClasifColor) {
      return Object.entries(map)
        .filter(([, v]) => v > 0)
        .sort((a, b) => b[1] - a[1])
        .map(([k, v], i) => {
          const bg    = i % 2 === 0 ? '#EBF3FB' : '#ffffff';
          const color = useClasifColor ? (CLASIF_COLOR[k] || '#757575') : '#222';
          return `<tr style="background:${bg}">
            <td style="padding:6px 10px;color:${color};font-weight:${useClasifColor ? 700 : 400}">${k}</td>
            <td style="padding:6px 10px;text-align:center;font-weight:600">${v}</td>
            <td style="padding:6px 10px;text-align:center;color:#555">${pct(v)}</td>
          </tr>`;
        }).join('');
    }

    function _statsTable(title, map, useClasifColor) {
      return `
        <div class="hd-stats-block">
          <div class="hd-stats-title">${title}</div>
          <table class="hd-stats-tbl">
            <thead><tr>
              <th>${title.split(' ')[1] || 'Valor'}</th>
              <th>Tickets</th>
              <th>% Total</th>
            </tr></thead>
            <tbody>${_tableRows(map, useClasifColor)}</tbody>
            <tfoot><tr>
              <td style="padding:6px 10px;font-weight:700;background:#1F3864;color:#fff">TOTAL</td>
              <td style="padding:6px 10px;text-align:center;font-weight:700;background:#1F3864;color:#fff">${total}</td>
              <td style="padding:6px 10px;text-align:center;font-weight:700;background:#1F3864;color:#fff">100%</td>
            </tr></tfoot>
          </table>
        </div>`;
    }

    list.innerHTML = `
      <div class="hd-stats-header">
        RESUMEN EJECUTIVO — Total tickets activos: <strong>${total}</strong>
      </div>
      <div class="hd-stats-grid">
        ${_statsTable('Por Clasificación', stats.porClasif, true)}
        ${_statsTable('Por Cliente',       stats.porCliente, false)}
        ${_statsTable('Por Estatus',       stats.porEstatus, false)}
      </div>`;
  }

  // ── Modal: ver mensaje completo ───────────────────────
  function _abrirModalMensaje(t) {
    let overlay = document.getElementById('hd-modal-msg');
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.id        = 'hd-modal-msg';
      overlay.className = 'modal-overlay';
      overlay.innerHTML = `
        <div class="modal hd-msg-modal">
          <div class="modal-header">
            <div>
              <span class="modal-id-badge" id="hd-msg-ticket"></span>
              <span id="hd-msg-meta" style="font-size:11px;color:var(--text-muted);margin-left:10px"></span>
            </div>
            <button class="modal-close" id="hd-msg-close">✕</button>
          </div>
          <div class="modal-body">
            <div id="hd-msg-asunto" class="hd-msg-asunto"></div>
            <div class="hd-msg-label">Último mensaje</div>
            <div id="hd-msg-body" class="hd-msg-body"></div>
          </div>
        </div>`;
      document.body.appendChild(overlay);

      document.getElementById('hd-msg-close').addEventListener('click', () => overlay.classList.add('hidden'));
      overlay.addEventListener('click', e => { if (e.target === overlay) overlay.classList.add('hidden'); });
    }

    const fecha = t.fechaUltimoMensaje ? t.fechaUltimoMensaje.split('T')[0] : '';
    document.getElementById('hd-msg-ticket').textContent = `#${t.ticket}`;
    document.getElementById('hd-msg-meta').textContent   = [fecha, t.usuarioUltimoMsg].filter(Boolean).join(' · ');
    document.getElementById('hd-msg-asunto').textContent = t.asunto;
    document.getElementById('hd-msg-body').textContent   = t.ultimoMensaje;

    overlay.classList.remove('hidden');
  }

  // ── Crear tarea desde ticket ──────────────────────────
  function _abrirModalTarea(ticketNum) {
    const t = _tickets.find(x => x.ticket === ticketNum);
    if (!t) return;

    const existente = AppData.getAllStories().find(s => String(s.ticket) === ticketNum);
    if (existente) {
      alert(`El ticket #${ticketNum} ya existe como tarea ${existente.id}.`);
      return;
    }

    const prioMap  = t.orden <= 1 ? 'alta' : t.orden <= 2 ? 'alta' : t.orden <= 3 ? 'media' : 'baja';
    const clientId = CLIENT_MAP[t.clienteRaw] || null;
    const team     = AppData.getTeam();
    const clients  = AppData.getClients();

    document.getElementById('ns-client').innerHTML =
      `<option value="">Seleccionar cliente...</option>` +
      clients.map(c => `<option value="${c.id}" ${c.id === clientId ? 'selected' : ''}>${c.name}</option>`).join('');
    document.getElementById('ns-assignee').innerHTML =
      team.map(m => `<option value="${m.id}">${m.name}</option>`).join('');

    document.getElementById('ns-ticket').value   = ticketNum;
    document.getElementById('ns-title').value    = t.asunto;
    document.getElementById('ns-priority').value = prioMap;
    document.getElementById('ns-description').value = '';
    document.getElementById('ns-duedate').value  = '';

    const statusEl       = document.getElementById('ticket-search-status');
    statusEl.textContent = clientId
      ? `✓ Datos cargados desde Helpdesk — completa asignado y fecha.`
      : `Cliente "${t.clienteRaw}" no mapeado — selecciónalo manualmente.`;
    statusEl.className   = clientId ? 'ticket-search-status ok' : 'ticket-search-status warn';

    document.getElementById('modal-new-story').classList.remove('hidden');
  }

  // ── Setup ─────────────────────────────────────────────
  function setup() {
    document.querySelectorAll('.hd-tab').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.hd-tab').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        _tab = btn.dataset.hdtab;
        _render();
      });
    });
    document.getElementById('btn-sync-helpdesk')?.addEventListener('click', sync);
  }

  function getClientPendingTickets() {
    return _tickets.filter(t => t.clasificacion === 'CLIENTE PENDIENTE' && t.diasSinMovimiento >= 3);
  }

  function getPendingActionTickets() {
    const actions = AppData.getHdActions();
    return _tickets.filter(t => !!actions[String(t.ticket)]);
  }

  return { sync, render, setup, getClientPendingTickets, getPendingActionTickets };
})();
