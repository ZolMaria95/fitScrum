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
  let _filterTicket  = '';
  let _sortCol       = 'diasSinMovimiento';
  let _sortDir       = 'desc';
  let _remoteResult  = null; // Ticket encontrado por búsqueda remota (no se persiste en _tickets)

  // Localiza un ticket en la lista sincronizada o en el resultado de búsqueda remota
  function _findTicket(ticketId) {
    return _tickets.find(x => x.ticket === ticketId)
        || (_remoteResult && _remoteResult.ticket === ticketId ? _remoteResult : null);
  }

  // ── Fetch páginas ─────────────────────────────────────
  async function _fetchPage(offset) {
    try {
      const r = await HelpdeskAuth.fetchWithAuth(
        `${BASE}/tickets/tickets?limit=40&offset=${offset}&modified_date_order=desc`,
      );
      if (!r.ok) return [];
      return (await r.json()).items || [];
    } catch (_) { return []; }
  }

  // ── Fetch mensajes de un ticket ───────────────────────
  async function _fetchMessages(ticketId) {
    try {
      const r = await HelpdeskAuth.fetchWithAuth(
        `${BASE}/tickets/${ticketId}/messages?limit=50`,
      );
      if (!r.ok) return [];
      const data = await r.json();
      return Array.isArray(data) ? data : [];
    } catch (_) { return []; }
  }

  // ── Sanitizar HTML del mensaje (quitar scripts/eventos) ─
  function _safeHtml(html) {
    return String(html || '')
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
      .replace(/\son\w+\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]*)/gi, '')
      .replace(/href\s*=\s*(?:"javascript:[^"]*"|'javascript:[^']*')/gi, 'href="#"');
  }

  // ── Extraer adjuntos desde mensajes (campos + HTML) ───
  function _extractAttachments(mensajes) {
    const adj  = [];
    const seen = new Set();

    // DEBUG: mostrar TODOS los campos disponibles de cada mensaje
    console.log('[Helpdesk] === Estructura de mensajes ===');
    console.log('[Helpdesk] Total:', mensajes.length);
    if (mensajes[0]) {
      console.log('[Helpdesk] Claves en msg[0]:', Object.keys(mensajes[0]));
    }
    mensajes.forEach((m, i) => {
      // DEBUG: si el texto sugiere adjunto, dumpear el objeto entero
      const txt = String(m.detail || '').toLowerCase();
      if (txt.includes('adjunt') || txt.includes('habilit') || txt.includes('.zip') || txt.includes('archivo')) {
        console.log(`[Helpdesk] msg[${i}] (posible adjunto):`, m);
      }

      // Método 1: campos del API real → attach_id (string) y attach_ids (array)
      const ids = [];
      if (m.attach_id)  ids.push(m.attach_id);
      if (Array.isArray(m.attach_ids)) ids.push(...m.attach_ids);
      ids.forEach(id => {
        if (id && !seen.has(id)) {
          seen.add(id);
          adj.push({ id, nombre: `adjunto_${String(id).slice(-6)}`, tamaño: 0 });
        }
      });

      // Método 2: links /attachments/{id} en el HTML del mensaje
      const html = m.detail || '';
      const RE   = /\/attachments\/(\d+)/g;
      let match;
      while ((match = RE.exec(html)) !== null) {
        const id = match[1];
        if (seen.has(id)) continue;
        seen.add(id);
        const aMatch = new RegExp(`href="[^"]*attachments/${id}"[^>]*>([^<]+)<`, 'i').exec(html);
        const nombre = aMatch ? aMatch[1].trim() : `adjunto_${id}`;
        adj.push({ id, nombre, tamaño: 0 });
      }
    });

    console.log('[Helpdesk] adjuntos extraídos:', adj);
    return adj;
  }

  // ── Interceptar links de adjunto en el DOM renderizado ─
  function _hydrateAttachLinks(container) {
    container.querySelectorAll('a[href*="/attachments/"]').forEach(a => {
      const match = a.href.match(/\/attachments\/(\d+)/);
      if (!match) return;
      const id     = match[1];
      const nombre = a.textContent.trim() || a.download || `adjunto_${id}`;
      a.href        = '#';
      a.title       = `Descargar ${nombre}`;
      a.addEventListener('click', e => {
        e.preventDefault();
        _downloadAttachment(id, nombre);
      });
    });
  }

  // ── Descargar adjunto con auth (lee nombre real del header) ──
  async function _downloadAttachment(id, nombreFallback) {
    try {
      const r = await HelpdeskAuth.fetchWithAuth(`${BASE}/attachments/${id}`);
      if (!r.ok) { alert('No se pudo descargar el archivo.'); return; }

      // Intentar leer nombre real desde Content-Disposition
      let nombre = nombreFallback || `adjunto_${id}`;
      const cd = r.headers.get('content-disposition') || '';
      const mFn = /filename\*?=(?:UTF-8'')?["']?([^";\s]+)/i.exec(cd);
      if (mFn) nombre = decodeURIComponent(mFn[1]);

      // Si no hay extensión, derivar del content-type
      if (!/\.[a-z0-9]{1,5}$/i.test(nombre)) {
        const ct = (r.headers.get('content-type') || '').split(';')[0].trim();
        const ext = {
          'application/zip': 'zip', 'application/x-zip-compressed': 'zip',
          'application/pdf': 'pdf', 'image/jpeg': 'jpg', 'image/png': 'png',
          'image/gif': 'gif', 'image/webp': 'webp',
          'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': 'xlsx',
          'application/vnd.ms-excel': 'xls',
          'application/vnd.openxmlformats-officedocument.wordprocessingml.document': 'docx',
          'application/msword': 'doc', 'text/plain': 'txt', 'text/csv': 'csv',
        }[ct];
        if (ext) nombre += '.' + ext;
      }

      const blob = await r.blob();
      const url  = URL.createObjectURL(blob);
      const a    = document.createElement('a');
      a.href = url; a.download = nombre; a.click();
      setTimeout(() => URL.revokeObjectURL(url), 10000);
    } catch (e) { alert('Error al descargar: ' + e.message); }
  }

  // ── Cargar imágenes con auth (reemplaza src con blob) ──
  async function _hydrateImages(container) {
    const imgs = container.querySelectorAll('img[src]');
    for (const img of imgs) {
      const src = img.getAttribute('src');
      if (!src || src.startsWith('blob:') || src.startsWith('data:')) continue;
      img.style.opacity = '0.4';
      try {
        const url = src.startsWith('http') ? src : `${_proxyUrl}${src.startsWith('/') ? '' : '/'}${src}`;
        const r   = await HelpdeskAuth.fetchWithAuth(url);
        if (r.ok) {
          const blob  = await r.blob();
          img.src     = URL.createObjectURL(blob);
          img.style.opacity = '1';
          img.className     = 'hd-conv-img';
        } else {
          img.remove();
        }
      } catch (_) { img.remove(); }
    }
  }

  // ── Auto-cargar adjuntos: detecta tipo y los muestra inline ──
  async function _hydrateAttachments(container) {
    const buttons = container.querySelectorAll('button[data-attach-id]');
    for (const btn of buttons) {
      const id = btn.dataset.attachId;
      btn.disabled = true;
      btn.textContent = '⏳ cargando...';
      try {
        const r = await HelpdeskAuth.fetchWithAuth(`${BASE}/attachments/${id}`);
        if (!r.ok) { btn.textContent = '⚠ no disponible'; continue; }

        // Nombre real del header
        const cd = r.headers.get('content-disposition') || '';
        const mFn = /filename\*?=(?:UTF-8'')?["']?([^";\s]+)/i.exec(cd);
        const ct  = (r.headers.get('content-type') || '').split(';')[0].trim();
        let nombre = mFn ? decodeURIComponent(mFn[1]) : `adjunto_${String(id).slice(-6)}`;
        if (!/\.[a-z0-9]{1,5}$/i.test(nombre)) {
          const ext = {
            'application/zip':'zip','application/x-zip-compressed':'zip',
            'application/pdf':'pdf','image/jpeg':'jpg','image/png':'png',
            'image/gif':'gif','image/webp':'webp',
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet':'xlsx',
            'application/vnd.ms-excel':'xls',
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document':'docx',
            'application/msword':'doc','text/plain':'txt','text/csv':'csv',
          }[ct];
          if (ext) nombre += '.' + ext;
        }

        const blob = await r.blob();
        const url  = URL.createObjectURL(blob);

        // Si es imagen → reemplazar botón con <img>
        if (ct.startsWith('image/')) {
          const img = document.createElement('img');
          img.src = url;
          img.className = 'hd-conv-img';
          img.title = nombre;
          img.style.cursor = 'zoom-in';
          img.addEventListener('click', () => window.open(url, '_blank'));
          btn.replaceWith(img);
        } else {
          // No-imagen → actualizar botón con nombre real
          const ext = nombre.split('.').pop().toLowerCase();
          const ico = ext === 'pdf' ? '📄' :
                      ['xlsx','xls','csv'].includes(ext) ? '📊' :
                      ['docx','doc'].includes(ext) ? '📝' :
                      ['zip','rar','7z','tar','gz'].includes(ext) ? '🗜' : '📎';
          const kb  = blob.size ? ` · ${(blob.size / 1024).toFixed(0)} KB` : '';
          btn.disabled = false;
          btn.textContent = `${ico} ${nombre}${kb}`;
          btn.dataset.attachNombre = nombre;
          btn.dataset.blobUrl      = url;
          btn.title = `Descargar ${nombre}`;
        }
      } catch (e) {
        console.error('[Helpdesk] Error cargando adjunto', id, e);
        btn.textContent = '⚠ error';
      }
    }
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
    _remoteResult = null;        // descartar resultado de búsqueda remota
    _filterTicket = '';          // limpiar buscador
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

  // ── Buscar ticket específico en Helpdesk (lookup directo) ──
  async function _searchTicketRemote(ticketId) {
    if (_loading) return;
    _loading = true;
    try {
      _setStatus(`Buscando #${ticketId} en Helpdesk...`, 'loading');

      const r = await HelpdeskAuth.fetchWithAuth(`${BASE}/tickets/tickets/${ticketId}`);
      if (!r.ok) {
        _setStatus(`✗ Ticket #${ticketId} no existe (HTTP ${r.status}).`, 'error');
        return;
      }
      const raw = await r.json();

      // Algunos APIs envuelven el resultado en {item:...} o array
      const data = Array.isArray(raw) ? raw[0] : (raw.item || raw.data || raw);
      if (!data || !data.ticket_id) {
        _setStatus(`✗ Respuesta inesperada para #${ticketId}.`, 'error');
        return;
      }

      const t = _clasificar(_evaluarFechas(_mapTicket(data)));
      const msgs = await _fetchMessages(t.ticket);
      _applyMessages(t, msgs);
      _evaluarFechas(t);
      _clasificar(t);

      _remoteResult = t;
      _setStatus(`✓ Ticket #${ticketId} encontrado.`, 'ok');
      _render();
    } catch (err) {
      _setStatus(`Error buscando #${ticketId}: ${err.message || err}`, 'error');
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
    if (!_tickets.length && !_remoteResult) {
      _renderEmpty();
      return;
    }
    _render();
  }

  // ── Vista vacía pre-sincronización: solo buscador ─────
  function _renderEmpty() {
    const list = document.getElementById('hd-list');
    if (!list) return;
    const puedeBuscar = _filterTicket && _filterTicket.length >= 4;
    list.innerHTML = `
      <div class="hd-empty">
        <div class="hd-empty-msg">
          Haz clic en <strong>↻ Sincronizar</strong> para cargar los tickets de Helpdesk
          <br><span class="hd-empty-or">— o busca uno directamente por número —</span>
        </div>
        <div class="hd-empty-search-row">
          <input type="text"
                 id="hd-search-ticket-empty"
                 class="hd-empty-search-input"
                 placeholder="Número de ticket (ej. 32703)"
                 value="${_filterTicket}"
                 autocomplete="off">
          <button class="hd-search-remote-btn"
                  id="hd-btn-search-remote"
                  data-ticket="${_filterTicket}"
                  ${puedeBuscar ? '' : 'disabled'}>
            🔍 Buscar en Helpdesk
          </button>
        </div>
        <div class="hd-search-remote-hint">Ingresa al menos 4 dígitos y presiona Enter o el botón.</div>
      </div>`;

    const inp = document.getElementById('hd-search-ticket-empty');
    inp.focus();
    inp.setSelectionRange(_filterTicket.length, _filterTicket.length);
    inp.addEventListener('input', e => {
      _filterTicket = e.target.value.replace(/[^0-9]/g, '').trim();
      _renderEmpty();
    });
    inp.addEventListener('keydown', e => {
      if (e.key === 'Enter' && _filterTicket.length >= 4) _searchTicketRemote(_filterTicket);
    });
    document.getElementById('hd-btn-search-remote')?.addEventListener('click', () => {
      if (_filterTicket.length >= 4) _searchTicketRemote(_filterTicket);
    });
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

    // Filas base según pestaña — o resultado único de búsqueda remota
    let base = _remoteResult
      ? [_remoteResult]
      : (isPrio ? _tickets.filter(t => PRIORITY_ACTIONS.has(t.accion)) : _tickets);

    // Valores únicos para los selects (sobre el universo sin filtrar)
    const clientes  = [...new Set(base.map(t => t.clienteRaw))].sort();
    const acciones  = [...new Set(base.map(t => t.accion))].sort();
    const clasifs   = CLASIF_ORDER.filter(c => base.some(t => t.clasificacion === c));

    // Aplicar filtros
    if (_filterCliente) base = base.filter(t => t.clienteRaw    === _filterCliente);
    if (_filterAccion)  base = base.filter(t => t.accion        === _filterAccion);
    if (_filterClasif)  base = base.filter(t => t.clasificacion === _filterClasif);
    if (_filterTicket)  base = base.filter(t => String(t.ticket).includes(_filterTicket));

    // Helper: icono de sort para una columna
    const _si = col => {
      if (_sortCol !== col) return '<span class="hd-sort-icon">⇅</span>';
      return `<span class="hd-sort-icon hd-sort-on">${_sortDir === 'asc' ? '↑' : '↓'}</span>`;
    };
    const _thS = (col, label, extra = '') => {
      const active = _sortCol === col ? ' hd-sort-active' : '';
      return `<th class="hd-th-sort${active}" data-sort="${col}"${extra}>${label} ${_si(col)}</th>`;
    };

    // Sort dinámico
    const sorted = [...base].sort((a, b) => {
      let va = a[_sortCol], vb = b[_sortCol];
      // Fechas ISO
      if (typeof va === 'string' && va && /^\d{4}-\d{2}-\d{2}/.test(va)) {
        va = new Date(va).getTime() || 0;
        vb = new Date(vb || '').getTime() || 0;
      }
      if (typeof va === 'number') return _sortDir === 'asc' ? va - vb : vb - va;
      const cmp = String(va || '').toLowerCase().localeCompare(String(vb || '').toLowerCase());
      return _sortDir === 'asc' ? cmp : -cmp;
    });

    const optCliente = `<option value="">Todos (${clientes.length})</option>` +
      clientes.map(c => `<option value="${c}" ${_filterCliente === c ? 'selected' : ''}>${c}</option>`).join('');

    const optAccion = `<option value="">Todas las acciones</option>` +
      acciones.map(a => `<option value="${a}" ${_filterAccion === a ? 'selected' : ''}>${a}</option>`).join('');

    const optClasif = `<option value="">Todas las clasif.</option>` +
      clasifs.map(c => `<option value="${c}" ${_filterClasif === c ? 'selected' : ''} style="color:${CLASIF_COLOR[c] || '#757575'}">${c}</option>`).join('');

    const notes      = AppData.getHdNotes();
    const actions    = AppData.getHdActions();
    const pendientes = AppData.getHdPendientes();

    const hasFilter  = _filterCliente || _filterAccion || _filterClasif || _filterTicket;
    const clearBtn   = hasFilter ? `<button class="hd-filter-clear-th" id="hd-btn-clear">✕ Limpiar</button>` : '';

    const bodyHTML = sorted.length
      ? sorted.map(t => _rowHTML(t, notes, actions, pendientes)).join('')
      : `<tr><td colspan="15" class="hd-no-results">
          Sin resultados para los filtros aplicados.
          ${_filterTicket && _filterTicket.length >= 4 ? `
            <div style="margin-top:12px">
              <button class="hd-search-remote-btn" id="hd-btn-search-remote" data-ticket="${_filterTicket}">
                🔍 Buscar #${_filterTicket} en Helpdesk
              </button>
              <div class="hd-search-remote-hint">Este ticket no está en los cargados por la última sincronización.</div>
            </div>
          ` : ''}
        </td></tr>`;

    list.innerHTML = `
      <div class="hd-table-wrap">
        <table class="hd-table">
          <thead>
            <tr>
              <th>Ticket</th>
              <th class="hd-th-resumen">Resumen</th>
              ${_thS('clienteRaw', 'Cliente')}
              <th>Asunto</th>
              ${_thS('fechaUltimoMensaje', 'Fecha Últ. Msg')}
              <th>Último Mensaje</th>
              <th>Tipo</th>
              ${_thS('nombreAsignado', 'Asignado a')}
              ${_thS('estatus', 'Estatus')}
              <th>Módulo</th>
              ${_thS('fechaIngreso', 'F. Ingreso')}
              ${_thS('diasSinMovimiento', 'Días mov.', ' title="Días sin movimiento"')}
              ${_thS('diasDesdeIngreso', 'Días ing.', ' title="Días desde ingreso"')}
              ${_thS('clasificacion', 'Clasificación')}
              ${_thS('accion', 'Acción')}
            </tr>
            <tr class="hd-filter-row">
              <td><input type="text" class="hd-filter-input-th" id="hd-search-ticket" placeholder="🔍 #" value="${_filterTicket}"></td>
              <td><span class="hd-count-badge">${sorted.length}</span>${clearBtn}</td>
              <td><select class="hd-filter-select-th" id="hd-sel-cliente">${optCliente}</select></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td><select class="hd-filter-select-th" id="hd-sel-clasif">${optClasif}</select></td>
              <td><select class="hd-filter-select-th" id="hd-sel-accion">${optAccion}</select></td>
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
      _filterTicket  = '';
      _remoteResult  = null;
      _render();
    });

    // Botón "Buscar #N en Helpdesk" (cuando 0 resultados locales)
    document.getElementById('hd-btn-search-remote')?.addEventListener('click', e => {
      _searchTicketRemote(e.currentTarget.dataset.ticket);
    });

    // Búsqueda por número de ticket (debounce mínimo via 'input')
    const searchInput = document.getElementById('hd-search-ticket');
    if (searchInput) {
      searchInput.addEventListener('input', e => {
        _filterTicket = e.target.value.replace(/[^0-9]/g, '').trim();
        _remoteResult = null; // al cambiar la búsqueda se descarta el resultado remoto previo
        _render();
        // Restaurar foco y posición del cursor después del re-render
        const newInput = document.getElementById('hd-search-ticket');
        if (newInput) { newInput.focus(); newInput.setSelectionRange(_filterTicket.length, _filterTicket.length); }
      });
    }

    // Ordenamiento al hacer clic en cabecera
    list.querySelectorAll('.hd-th-sort').forEach(th => {
      th.addEventListener('click', () => {
        const col = th.dataset.sort;
        if (_sortCol === col) {
          _sortDir = _sortDir === 'asc' ? 'desc' : 'asc';
        } else {
          _sortCol = col;
          _sortDir = 'desc';
        }
        _render();
      });
    });

    list.querySelectorAll('.hd-ticket-btn').forEach(btn => {
      btn.addEventListener('click', () => _abrirModalTarea(btn.dataset.ticket));
    });

    list.querySelectorAll('.hd-copy-btn').forEach(btn => {
      btn.addEventListener('click', async e => {
        e.stopPropagation();
        const num = btn.dataset.copy;
        try {
          await navigator.clipboard.writeText(num);
          const orig = btn.textContent;
          btn.textContent = '✓';
          btn.classList.add('hd-copy-ok');
          setTimeout(() => { btn.textContent = orig; btn.classList.remove('hd-copy-ok'); }, 1200);
        } catch (_) {
          // Fallback: seleccionar texto
          const ta = document.createElement('textarea');
          ta.value = num; document.body.appendChild(ta); ta.select();
          document.execCommand('copy'); ta.remove();
          btn.textContent = '✓';
          setTimeout(() => btn.textContent = '⧉', 1200);
        }
      });
    });

    list.querySelectorAll('.hd-pending-btn').forEach(btn => {
      btn.addEventListener('click', e => {
        e.stopPropagation();
        const ticketId  = btn.dataset.ticket;
        const isNow     = !AppData.getHdPendientes()[String(ticketId)];
        if (isNow) {
          const t = _findTicket(ticketId);
          AppData.setHdPendiente(ticketId, { ticket: ticketId, asunto: t?.asunto || '', clienteRaw: t?.clienteRaw || '' });
        } else {
          AppData.removeHdPendiente(ticketId);
        }
        btn.classList.toggle('hd-pending-active', isNow);
        btn.textContent = isNow ? '⏸' : '+';
        btn.title       = isNow ? 'Quitar de pendientes' : 'Marcar como pendiente';
        btn.closest('tr')?.classList.toggle('hd-row-pending', isNow);
      });
    });

    list.querySelectorAll('.hd-msg-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const t = _findTicket(btn.dataset.ticket);
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

  function _rowHTML(t, notes, actions, pendientes) {
    const isAction  = !!(actions    || {})[String(t.ticket)];
    const isPending = !!(pendientes || {})[String(t.ticket)];
    const cColor   = CLASIF_COLOR[t.clasificacion] || '#757575';
    const dColor   = t.diasSinMovimiento > 7 ? '#C00000' : t.diasSinMovimiento > 3 ? '#FF8C00' : '#2E7D32';
    const diColor  = t.diasDesdeIngreso  > 7 ? '#C00000' : t.diasDesdeIngreso  > 3 ? '#FF8C00' : '#2E7D32';
    const asunto   = t.asunto.length > 55 ? t.asunto.slice(0, 55) + '…' : t.asunto;
    const msg      = t.ultimoMensaje.length > 60 ? t.ultimoMensaje.slice(0, 60) + '…' : t.ultimoMensaje;
    const fIngreso = t.fechaIngreso  ? t.fechaIngreso.split('T')[0]      : '';
    const fMsg     = t.fechaUltimoMensaje
      ? (() => { const [d, h=''] = t.fechaUltimoMensaje.split('T'); return h ? `${d} ${h.slice(0,5)}` : d; })()
      : '';
    const msgBg    = t.recienteMensaje ? 'background:#FFF3E0' : '';
    const msgFg    = t.recienteMensaje ? 'color:#E65100;font-weight:600' : '';
    const msgTxt   = t.tieneMensaje    ? 'font-weight:600;color:#1A237E' : 'color:#9E9E9E';

    return `
      <tr class="hd-row${isAction ? ' hd-row-action' : ''}${isPending ? ' hd-row-pending' : ''}">
        <td>
          <button class="hd-ticket-btn" data-ticket="${t.ticket}">#${t.ticket}</button>
          <button class="hd-copy-btn" data-copy="${t.ticket}" title="Copiar número de ticket">⧉</button>
          <button class="hd-pending-btn${isPending ? ' hd-pending-active' : ''}" data-ticket="${t.ticket}" title="${isPending ? 'Quitar de pendientes' : 'Marcar como pendiente'}">${isPending ? '⏸' : '+'}</button>
        </td>
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

  // ── Modal: conversación completa + adjuntos ──────────
  async function _abrirModalMensaje(t) {
    let overlay = document.getElementById('hd-modal-msg');
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.id        = 'hd-modal-msg';
      overlay.className = 'modal-overlay';
      overlay.innerHTML = `
        <div class="modal hd-msg-modal">
          <div class="modal-header">
            <div class="hd-msg-header-info">
              <span class="modal-id-badge" id="hd-msg-ticket"></span>
              <span id="hd-msg-cliente" class="hd-msg-cliente-badge"></span>
              <span id="hd-msg-estatus" class="hd-msg-estatus-badge"></span>
            </div>
            <button class="modal-close" id="hd-msg-close">✕</button>
          </div>
          <div id="hd-msg-asunto" class="hd-msg-asunto"></div>
          <div class="modal-body hd-conv-wrap" id="hd-conv-body"></div>
        </div>`;
      document.body.appendChild(overlay);
      document.getElementById('hd-msg-close').addEventListener('click', () => overlay.classList.add('hidden'));
      overlay.addEventListener('click', e => { if (e.target === overlay) overlay.classList.add('hidden'); });
    }

    // Llenar encabezado de inmediato y mostrar loading
    document.getElementById('hd-msg-ticket').textContent  = `#${t.ticket}`;
    document.getElementById('hd-msg-cliente').textContent = t.clienteRaw;
    document.getElementById('hd-msg-estatus').textContent = t.estatus;
    document.getElementById('hd-msg-asunto').textContent  = t.asunto;
    document.getElementById('hd-conv-body').innerHTML     =
      `<div class="hd-conv-loading">Cargando mensajes y adjuntos...</div>`;
    overlay.classList.remove('hidden');

    const mensajes = await _fetchMessages(t.ticket);
    const adjuntos = _extractAttachments(mensajes);

    // Ordenar de más antiguo a más reciente
    const msgs = [...mensajes].sort((a, b) =>
      new Date(a.entry_date || 0) - new Date(b.entry_date || 0)
    );

    const esEmpleado = uid => EMPLEADOS.has(String(uid || '').trim().toUpperCase());
    const IMG_EXTS   = new Set(['jpg','jpeg','png','gif','webp','bmp','svg']);
    const _icon = ext =>
      IMG_EXTS.has(ext) ? '🖼' :
      ext === 'pdf' ? '📄' :
      ['xlsx','xls','csv'].includes(ext) ? '📊' :
      ['docx','doc'].includes(ext) ? '📝' :
      ['zip','rar','7z','tar','gz'].includes(ext) ? '🗜' : '📎';

    // Adjuntos por mensaje desde attach_id / attach_ids del API
    function _attachsDeMensaje(m) {
      const out  = [];
      const seen = new Set();
      const ids  = [];
      if (m.attach_id)  ids.push(m.attach_id);
      if (Array.isArray(m.attach_ids)) ids.push(...m.attach_ids);
      ids.forEach(id => {
        if (id && !seen.has(id)) {
          seen.add(id);
          out.push({ id, nombre: `adjunto_${String(id).slice(-6)}`, tamaño: 0 });
        }
      });
      return out;
    }

    const msgsHTML = msgs.length
      ? msgs.map(m => {
          const esSys     = m.system_message === true;
          const esEmp     = esEmpleado(m.entry_user_id);
          const fecha     = m.entry_date ? m.entry_date.replace('T', ' ').slice(0, 16) : '';
          const html      = _safeHtml(m.detail || '');
          const texto     = _stripHtml(html).trim();
          const adjMsg    = _attachsDeMensaje(m);
          if (!texto && !html.includes('<img') && !adjMsg.length) return '';
          const cls       = esSys ? 'hd-conv-sys' : esEmp ? 'hd-conv-emp' : 'hd-conv-cli';
          const label     = esSys ? 'Sistema' : (m.entry_user_id || '—');

          const adjHTML = adjMsg.length
            ? `<div class="hd-conv-attach-row">${adjMsg.map(a => {
                const ext = a.nombre.split('.').pop().toLowerCase();
                const kb  = a.tamaño ? ` · ${(a.tamaño / 1024).toFixed(0)} KB` : '';
                return `<button class="hd-attach-item hd-attach-inline" data-attach-id="${a.id}" data-attach-nombre="${a.nombre.replace(/"/g,'&quot;')}">${_icon(ext)} ${a.nombre}${kb}</button>`;
              }).join('')}</div>`
            : '';

          return `
            <div class="hd-conv-msg ${cls}">
              <div class="hd-conv-meta">
                <span class="hd-conv-user">${label}</span>
                <span class="hd-conv-date">${fecha}</span>
              </div>
              ${texto || html.includes('<img') ? `<div class="hd-conv-text">${html}</div>` : ''}
              ${adjHTML}
            </div>`;
        }).join('')
      : `<div class="hd-conv-empty">Sin mensajes registrados.</div>`;

    const conteo = msgsHTML ? msgs.filter(m => {
      const html = m.detail || '';
      return _stripHtml(html).trim() || html.includes('<img') || _attachsDeMensaje(m).length;
    }).length : 0;

    document.getElementById('hd-conv-body').innerHTML = `
      <div class="hd-conv-header">
        <span class="hd-conv-count">${conteo} mensaje${conteo !== 1 ? 's' : ''}</span>
        ${adjuntos.length ? `<span class="hd-conv-adj-count">${adjuntos.length} adjunto${adjuntos.length !== 1 ? 's' : ''}</span>` : ''}
      </div>
      <div class="hd-conv-list">${msgsHTML}</div>`;

    const convBody = document.getElementById('hd-conv-body');

    // Clic en botones de adjunto → descargar (usando blob ya cacheado si existe)
    convBody.addEventListener('click', e => {
      const btn = e.target.closest('button[data-attach-id]');
      if (!btn || btn.disabled) return;
      if (btn.dataset.blobUrl) {
        const a = document.createElement('a');
        a.href = btn.dataset.blobUrl;
        a.download = btn.dataset.attachNombre || `adjunto_${btn.dataset.attachId}`;
        a.click();
      } else {
        _downloadAttachment(btn.dataset.attachId, btn.dataset.attachNombre);
      }
    });

    // Interceptar links <a> que apunten a /attachments/{id} (HTML del mensaje)
    _hydrateAttachLinks(convBody);

    // Cargar imágenes embebidas con auth
    _hydrateImages(convBody);

    // Auto-cargar todos los adjuntos del modal: detecta tipo, muestra imgs inline
    _hydrateAttachments(convBody);
  }

  // ── Crear tarea desde ticket ──────────────────────────
  function _abrirModalTarea(ticketNum) {
    const t = _findTicket(ticketNum);
    if (!t) return;

    const existente = AppData.getAllStories().find(s => String(s.ticket) === ticketNum);
    if (existente) {
      alert(`El ticket #${ticketNum} ya existe como tarea ${existente.id}.`);
      return;
    }

    const prioMap  = t.orden <= 1 ? 'alta' : t.orden <= 2 ? 'alta' : t.orden <= 3 ? 'media' : 'baja';
    const clientId = CLIENT_MAP[t.clienteRaw] || null;
    const team     = AppData.getTeam();
    const clients  = getValidClients();

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
        _remoteResult = null;    // cambiar de pestaña descarta el resultado de búsqueda
        _filterTicket = '';      // y limpia el buscador
        render();                // usa render() (no _render) para manejar el caso sin tickets
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

  // Lista de clientes válidos del Helpdesk: [{ id, name }] ordenada por nombre
  function getValidClients() {
    const seen = new Set();
    const list = [];
    Object.entries(CLIENT_MAP).forEach(([name, id]) => {
      if (seen.has(id)) return; // evita duplicados (ej. GIRON con/sin tilde)
      seen.add(id);
      list.push({ id, name });
    });
    return list.sort((a, b) => a.name.localeCompare(b.name));
  }

  return { sync, render, setup, getClientPendingTickets, getPendingActionTickets, getValidClients };
})();
