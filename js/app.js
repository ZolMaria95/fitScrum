const SESSION_KEY = 'fit-daily_session';

// One-shot migration:
// (1) nombre legado fitscrum_session → fit-daily_session
// (2) sessionStorage (por pestaña) → localStorage (compartido entre pestañas)
(function _migrateLegacySession() {
  // (1) renombrar legado si existe
  const legacy = sessionStorage.getItem('fitscrum_session')
              || localStorage.getItem('fitscrum_session');
  if (legacy && !localStorage.getItem(SESSION_KEY)) {
    localStorage.setItem(SESSION_KEY, legacy);
  }
  sessionStorage.removeItem('fitscrum_session');
  localStorage.removeItem('fitscrum_session');

  // (2) si quedó sesión en sessionStorage de una versión vieja, moverla a localStorage
  const fromSession = sessionStorage.getItem(SESSION_KEY);
  if (fromSession && !localStorage.getItem(SESSION_KEY)) {
    localStorage.setItem(SESSION_KEY, fromSession);
  }
  sessionStorage.removeItem(SESSION_KEY);
})();

const App = (() => {
  let _currentView    = 'board';
  let _currentSprint  = null;
  let _session        = null;
  let _hdUsersCache   = null; // [{ id, name }] — usuarios del Helpdesk

  // Base URL del proxy Helpdesk (mismo patrón que usan los otros módulos)
  function _hdBase() {
    return (window.HELPDESK_PROXY_URL && !window.HELPDESK_PROXY_URL.includes('TU-WORKER'))
      ? window.HELPDESK_PROXY_URL + '/api/v1'
      : 'http://localhost:3001/api/v1';
  }

  // fetch con auth que NO redirige en 401/403 (a diferencia de HelpdeskAuth.fetchWithAuth)
  // Se usa para operaciones de escritura "best-effort" donde fallar es aceptable.
  async function _hdFetchSafe(url, opts = {}) {
    try {
      const s = JSON.parse(localStorage.getItem(SESSION_KEY) || 'null');
      const token = s && s.token;
      const headers = { ...(opts.headers || {}) };
      if (token) headers.Authorization = `Bearer ${token}`;
      const r = await fetch(url, { ...opts, headers });
      return r;
    } catch (e) {
      console.warn('[HD fetch-safe]', url, e);
      return { ok: false, status: 0 };
    }
  }

  // Lista de usuarios asignables — empleados del Helpdesk descubiertos desde
  // los tickets sincronizados. Sin cache propio: HelpdeskPanel ya cachea en
  // localStorage. Si está vacía (primer arranque sin sync) cae al users.json local.
  async function _fetchHdUsers() {
    let users = (typeof HelpdeskPanel !== 'undefined' && HelpdeskPanel.getHdUsers)
      ? HelpdeskPanel.getHdUsers()
      : [];
    if (!users.length) {
      // Fallback: usuarios locales (IDs cortos — sincronización HD no funcionará
      // hasta que se haga un ↻ Sincronizar para llenar la lista real)
      users = AppData.getTeam().map(u => ({ id: u.id, name: u.name, role: u.role || '' }));
    }
    _hdUsersCache = users.slice().sort((a, b) => a.name.localeCompare(b.name, 'es'));
    return _hdUsersCache;
  }

  // Invalidar el cache para que el próximo open del modal recarga la lista
  // (llamado después de ↻ Sincronizar para que aparezcan usuarios recién descubiertos)
  function _invalidateHdUsersCache() { _hdUsersCache = null; }

  // Asignación del ticket en el Helpdesk (solo si la tarea tiene ticket).
  // El API NO acepta PATCH/POST en /tickets/tickets/:id — el único método de
  // update es PUT. Round-trip: GET el ticket, cambiamos assigned_user_id y
  // reenviamos el objeto completo. Luego RE-GET para CONFIRMAR que el API
  // realmente guardó la asignación (un 200 no garantiza que el campo persistió).
  // Usa _hdFetchSafe para que un 401/403/404 no cierre sesión.
  // Devuelve { ok, status, detail, before, after, getStatus } para el caller.
  async function _assignHdTicket(ticketId, userId) {
    if (!ticketId || !userId) return { ok: false, status: 0, detail: 'falta ticket o usuario' };
    const url   = `${_hdBase()}/tickets/tickets/${ticketId}`;
    const want  = String(userId).trim().toUpperCase();
    const _put  = (body) => _hdFetchSafe(url, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    const _body   = async (r) => { try { return r && r.text ? await r.text() : ''; } catch (_) { return ''; } };
    const _unwrap = (d) => Array.isArray(d) ? d[0] : (d && (d.item || d.data) || d);
    const _aid    = (o) => o ? String(o.assigned_user_id || '').trim().toUpperCase() : '';
    try {
      // 1) GET el ticket actual
      const getR = await _hdFetchSafe(url);
      let raw = null, before = '';
      if (getR.ok) { raw = _unwrap(await getR.json()); before = _aid(raw); }
      else console.warn('[HD assign] GET ticket falló', ticketId, getR.status);

      // 2) PUT: ticket completo con assigned_user_id cambiado (o parcial si no hubo GET)
      const putBody = (raw && raw.ticket_id) ? { ...raw, assigned_user_id: userId }
                                             : { assigned_user_id: userId };
      const putR    = await _put(putBody);
      const detail  = putR.ok ? '' : await _body(putR);
      if (!putR.ok) console.warn('[HD assign] PUT falló', ticketId, putR.status, detail);

      // 3) RE-GET: confirmar que el API guardó la asignación
      let after = '';
      const reGet = await _hdFetchSafe(url);
      if (reGet.ok) after = _aid(_unwrap(await reGet.json()));
      const ok = after === want;
      console.log('[HD assign]', { ticketId, userId, getStatus: getR.status, before, putStatus: putR.status, after, persistió: ok, detail });
      return { ok, status: putR.status, detail, before, after, getStatus: getR.status };
    } catch (e) {
      console.warn('[HD assign] error', ticketId, e);
      return { ok: false, status: 0, detail: String((e && e.message) || e) };
    }
  }

  async function init() {
    _session = JSON.parse(localStorage.getItem(SESSION_KEY) || 'null');
    // Sesión inválida o legacy sin token → forzar re-login con credenciales reales
    if (!_session || !_session.token) {
      localStorage.removeItem(SESSION_KEY);
      window.location.href = 'login.html';
      return;
    }

    await AppData.init();

    _currentSprint = AppData.getActiveSprint().id;

    _renderUserChip();
    _populateSprintSelector();
    refreshBanner();
    _setupNav();
    _setupBrandLink();
    _setupModals();
    _setupForms();
    HelpdeskPanel.setup();
    SolPanel.setup();
    Semanal.init();
    UsuariosPizza.setup();

    // Rol "Helpdesk" → propio de Fit-Daily, atado al user_id MSC001
    // Rol "Supervisor" → viene del API del Helpdesk (role_description)
    const _uid     = String(_session.id || '').trim().toUpperCase();
    const _apiRole = String(_session.apiRole || '').trim().toUpperCase();
    const isHelpdesk   = _uid === 'MSC001';
    const isSupervisor = _apiRole.includes('SUPERVISOR');

    // Tab "Mi Panel": Scrum Master + Helpdesk
    if (_session.role === 'Scrum Master' || isHelpdesk) {
      document.querySelectorAll('.nav-tab-sol').forEach(t => t.classList.remove('hidden'));
    }

    // Tab "TUsuariosPizza": solo MSC001
    if (isHelpdesk) {
      document.querySelectorAll('.nav-tab-pizza').forEach(t => t.classList.remove('hidden'));
    }

    // Borrar tareas individuales: Helpdesk o Supervisor
    if (isHelpdesk || isSupervisor) {
      document.body.classList.add('can-delete-cards');
    }

    // Mover cards ajenas: solo Helpdesk admin o Supervisor.
    // Otros roles (SOPORTE, etc.) solo mueven sus propias tareas.
    if (isHelpdesk || isSupervisor) {
      document.body.classList.add('can-move-all-cards');
    }

    // Borrar board completo: solo Helpdesk
    if (isHelpdesk) {
      document.body.classList.add('can-delete-board');
      const btnClear = document.getElementById('btn-clear-board');
      if (btnClear) btnClear.addEventListener('click', _clearBoardWithConfirm);
    }

    console.log('[App] Sesión activa:', { id: _session.id, role: _session.role, apiRole: _session.apiRole, isHelpdesk, isSupervisor });

    refreshBoard();

    // Sync en tiempo real: streaming SSE de Firebase (updates casi instantáneos;
    // fallback automático a polling si el navegador no soporta EventSource)
    AppData.startStreaming(() => {
      refreshBoard();
      refreshBanner();
    });
  }

  // ── Borrar TODAS las tareas del sprint actual (solo MSC001) ──
  function _clearBoardWithConfirm() {
    const stories = AppData.getStoriesBySprint(_currentSprint);
    if (!stories.length) {
      alert('El board ya está vacío.');
      return;
    }
    const input = prompt(
      `⚠️ Vas a eliminar ${stories.length} tarea${stories.length !== 1 ? 's' : ''} del sprint actual.\n\n` +
      `Esta acción NO se puede deshacer.\n\n` +
      `Para confirmar, escribe la palabra BORRAR (en mayúsculas):`
    );
    if (input === null) return; // cancelado
    if (String(input).trim() !== 'BORRAR') {
      alert('Confirmación incorrecta. No se eliminó nada.');
      return;
    }
    stories.forEach(s => AppData.deleteStory(s.id));
    refreshBoard();
    refreshBanner();
    alert(`✓ Se eliminaron ${stories.length} tarea${stories.length !== 1 ? 's' : ''} del board.`);
  }

  // ── User chip ────────────────────────────────────────
  function _renderUserChip() {
    document.getElementById('user-avatar').style.background = _session.color;
    document.getElementById('user-avatar').textContent      = _session.id;
    document.getElementById('user-name-display').textContent = _session.name;

    // Nombre completo como tooltip al pasar el mouse sobre el avatar
    const chip = document.getElementById('user-chip');
    if (chip) chip.title = `${_session.name} (${_session.id})`;

    document.getElementById('btn-logout').addEventListener('click', async () => {
      try { await HelpdeskAuth.logout(); } catch (_) {}
      localStorage.removeItem(SESSION_KEY);
      window.location.href = 'login.html';
    });
  }

  // ── Sprint selector ──────────────────────────────────
  function _populateSprintSelector() {
    const sprints = AppData.getSprints();
    const sel = document.getElementById('sprint-selector');
    sel.innerHTML = sprints.sprints.map(s =>
      `<option value="${s.id}" ${s.id === sprints.active ? 'selected' : ''}>${s.name}</option>`
    ).join('');

    sel.addEventListener('change', () => {
      _currentSprint = sel.value;
      AppData.setActiveSprint(_currentSprint);
      refreshBanner();
      _refreshCurrentView();
    });
  }

  // ── Banner ───────────────────────────────────────────
  function refreshBanner() {
    const sprint  = AppData.getSprints().sprints.find(s => s.id === _currentSprint);
    const stories = AppData.getStoriesBySprint(_currentSprint);
    const total   = stories.reduce((s, x) => s + x.points, 0);
    const done    = stories.filter(s => s.status === 'done').reduce((s, x) => s + x.points, 0);
    const pct     = total > 0 ? Math.round((done / total) * 100) : 0;

    const fmt = d => new Date(d + 'T00:00:00').toLocaleDateString('es-ES', { day: '2-digit', month: 'short' });

    document.getElementById('sprint-banner').innerHTML = `
      <div class="banner-goal">${sprint.name} — ${sprint.goal}</div>
      <div class="banner-meta">
        <span>${fmt(sprint.start)} → ${fmt(sprint.end)}</span>
        <span>${sprint.capacity} pts capacidad</span>
        <span>${stories.length} historias</span>
      </div>
      <div class="banner-progress">
        <span>${pct}% completado</span>
        <div class="progress-bar-wrap">
          <div class="progress-bar-fill" style="width:${pct}%"></div>
        </div>
        <span style="font-family:var(--font-mono);font-size:11px">${done}/${total}</span>
      </div>`;
  }

  // ── Navigation ───────────────────────────────────────
  // Click en el logo/brand → ir al Board (dispara el item del dropdown Scrum)
  function _setupBrandLink() {
    const brand = document.getElementById('brand-link');
    if (!brand) return;
    const goBoard = () => {
      document.querySelector('.nav-dropdown-item[data-view="board"]')?.click();
    };
    brand.addEventListener('click', goBoard);
    brand.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); goBoard(); }
    });
  }

  function _setupNav() {
    const dropdowns = Array.from(document.querySelectorAll('.nav-dropdown'));

    function _closeAllDropdowns() {
      dropdowns.forEach(dd => {
        dd.classList.remove('open');
        dd.querySelector('.nav-dropdown-toggle')?.setAttribute('aria-expanded', 'false');
      });
    }

    function _activateView(view) {
      _currentView = view;

      // Quitar active de TODO (tabs sueltos + items + toggles de dropdown)
      document.querySelectorAll('.nav-tab, .nav-dropdown-item').forEach(t => t.classList.remove('active'));

      // ¿Está la vista dentro de algún dropdown?
      let foundInDropdown = false;
      dropdowns.forEach(dd => {
        const item    = dd.querySelector(`.nav-dropdown-item[data-view="${view}"]`);
        const toggle  = dd.querySelector('.nav-dropdown-toggle');
        const label   = dd.querySelector('.nav-dropdown-label');
        const defLbl  = dd.dataset.defaultLabel || 'Menú';
        if (item) {
          foundInDropdown   = true;
          toggle.classList.add('active');
          item.classList.add('active');
          if (label) label.textContent = item.textContent.trim();
        } else {
          if (label) label.textContent = defLbl;
        }
      });

      // Si no está en ningún dropdown → es un tab suelto
      if (!foundInDropdown) {
        const tab = document.querySelector(`.nav-tab[data-view="${view}"]:not(.nav-dropdown-toggle)`);
        if (tab) tab.classList.add('active');
      }

      // Mostrar la vista correspondiente
      document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
      document.getElementById(`view-${view}`)?.classList.add('active');
      _refreshCurrentView();

      _closeAllDropdowns();

      // Sincronizar sidebar
      document.querySelectorAll('.sidebar-item').forEach(i => {
        i.classList.toggle('active', i.dataset.view === view);
      });
    }

    // Tabs de primer nivel sueltos (los que no son toggle de un dropdown)
    document.querySelectorAll('.nav-tab:not(.nav-dropdown-toggle)').forEach(tab => {
      tab.addEventListener('click', () => _activateView(tab.dataset.view));
    });

    // Items dentro de cualquier dropdown
    document.querySelectorAll('.nav-dropdown-item').forEach(item => {
      item.addEventListener('click', () => _activateView(item.dataset.view));
    });

    // Toggle de cada dropdown
    dropdowns.forEach(dd => {
      const toggle = dd.querySelector('.nav-dropdown-toggle');
      toggle?.addEventListener('click', e => {
        e.stopPropagation();
        const wasOpen = dd.classList.contains('open');
        _closeAllDropdowns();
        if (!wasOpen) {
          dd.classList.add('open');
          toggle.setAttribute('aria-expanded', 'true');
        }
      });
    });

    // Cerrar dropdowns al hacer clic afuera
    document.addEventListener('click', e => {
      if (!e.target.closest('.nav-dropdown')) _closeAllDropdowns();
    });

    // ── Sidebar responsive ──────────────────────────────────
    (function _setupSidebar() {
      const sidebar   = document.getElementById('nav-sidebar');
      const overlay   = document.getElementById('sidebar-overlay');
      const hamburger = document.getElementById('btn-hamburger');
      const closeBtn  = document.getElementById('btn-sidebar-close');
      if (!sidebar) return;

      function _open()  {
        sidebar.classList.add('open');
        overlay.classList.add('visible');
        hamburger?.setAttribute('aria-expanded', 'true');
      }
      function _close() {
        sidebar.classList.remove('open');
        overlay.classList.remove('visible');
        hamburger?.setAttribute('aria-expanded', 'false');
      }

      hamburger?.addEventListener('click', _open);
      closeBtn?.addEventListener('click', _close);
      overlay?.addEventListener('click', _close);

      // Accordion sections
      sidebar.querySelectorAll('.sidebar-section-hd').forEach(hd => {
        hd.addEventListener('click', () => hd.closest('.sidebar-section').classList.toggle('open'));
      });

      // Items → activar vista y cerrar sidebar
      sidebar.querySelectorAll('.sidebar-item').forEach(item => {
        item.addEventListener('click', () => {
          _activateView(item.dataset.view);
          _close();
        });
      });
    })();
  }

  function _refreshCurrentView() {
    if (_currentView === 'board')     refreshBoard();
    if (_currentView === 'burndown')  refreshBurndown();
    if (_currentView === 'progreso')  refreshProgreso();
    if (_currentView === 'consultas') refreshConsultas();
    if (_currentView === 'helpdesk')      refreshHelpdeskPanel();
    if (_currentView === 'semanal')       refreshSemanal();
    if (_currentView === 'sol')           refreshSolPanel();
    if (_currentView === 'pendientes')    refreshPendientes();
    if (_currentView === 'tusuariospizza') refreshUsuariosPizza();
  }

  // ── Public refresh methods ───────────────────────────
  function refreshBoard() {
    Board.render(AppData.getStoriesBySprint(_currentSprint), AppData.getTeam(), AppData.getClients());
  }

  function refreshBurndown() {
    const sprint = AppData.getSprints().sprints.find(s => s.id === _currentSprint);
    Burndown.render(sprint, AppData.getStoriesBySprint(_currentSprint), AppData.getSprints());
  }

  function refreshProgreso() {
    const sprintStoryIds = new Set(AppData.getStoriesBySprint(_currentSprint).map(s => s.id));
    const entries = AppData.getProgress().filter(e => sprintStoryIds.has(e.storyId));
    Progreso.render(entries, AppData.getAllStories(), AppData.getTeam());
  }

  function refreshConsultas() {
    Consultas.render(AppData.getQueries(), AppData.getAllStories(), AppData.getTeam());
  }

  function refreshHelpdeskPanel() {
    HelpdeskPanel.render();
  }

  function refreshSolPanel() {
    SolPanel.render();
  }

  function refreshSemanal() {
    Semanal.refresh();
  }

  function refreshPendientes() {
    Pendientes.render();
  }

  function refreshUsuariosPizza() {
    UsuariosPizza.render();
  }

  // ── Modals ───────────────────────────────────────────
  function _setupModals() {
    // Close buttons with data-close attribute
    document.querySelectorAll('[data-close]').forEach(btn => {
      btn.addEventListener('click', () => {
        document.getElementById(btn.dataset.close).classList.add('hidden');
      });
    });

    // Click outside to close
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
      overlay.addEventListener('click', e => {
        if (e.target === overlay) overlay.classList.add('hidden');
      });
    });
  }

  // ── Forms ────────────────────────────────────────────
  function _setupForms() {
    const team = AppData.getTeam();

    // Edit sprint
    document.getElementById('btn-edit-sprint')?.addEventListener('click', () => {
      const data = AppData.getSprints();
      const sprint = data.sprints.find(s => s.id === _currentSprint)
                  || data.sprints.find(s => s.id === data.active);
      if (!sprint) { alert('No se encontró el sprint activo.'); return; }

      const badge    = document.getElementById('esp-id-badge');
      const name     = document.getElementById('esp-name');
      const goal     = document.getElementById('esp-goal');
      const start    = document.getElementById('esp-start');
      const end      = document.getElementById('esp-end');
      const capacity = document.getElementById('esp-capacity');
      const status   = document.getElementById('esp-status');
      const modal    = document.getElementById('modal-edit-sprint');

      if (!modal) { console.error('modal-edit-sprint no encontrado'); return; }

      if (badge)    badge.textContent = sprint.id;
      if (name)     name.value        = sprint.name     || '';
      if (goal)     goal.value        = sprint.goal     || '';
      if (start)    start.value       = sprint.start    || '';
      if (end)      end.value         = sprint.end      || '';
      if (capacity) capacity.value    = sprint.capacity ?? 0;
      if (status)   status.value      = sprint.status   || 'active';

      modal.classList.remove('hidden');
    });

    document.getElementById('form-edit-sprint')?.addEventListener('submit', e => {
      e.preventDefault();
      AppData.updateSprint(_currentSprint, {
        name:     document.getElementById('esp-name').value.trim(),
        goal:     document.getElementById('esp-goal').value.trim(),
        start:    document.getElementById('esp-start').value,
        end:      document.getElementById('esp-end').value,
        capacity: parseInt(document.getElementById('esp-capacity').value, 10) || 0,
        status:   document.getElementById('esp-status').value,
      });
      document.getElementById('modal-edit-sprint').classList.add('hidden');
      _populateSprintSelector();
      refreshBanner();
    });

    // Delete sprint
    document.getElementById('btn-delete-sprint').addEventListener('click', () => {
      const sprint = AppData.getSprints().sprints.find(s => s.id === _currentSprint);
      if (!sprint) return;
      if (AppData.getSprints().sprints.length <= 1) {
        alert('No se puede eliminar el único sprint existente.');
        return;
      }
      if (!confirm(`¿Eliminar "${sprint.name}"?\n\nLas tareas de este sprint NO se eliminarán.`)) return;
      const newActive = AppData.deleteSprint(_currentSprint);
      _currentSprint = newActive;
      _populateSprintSelector();
      refreshBanner();
      refreshBoard();
    });

    // Sol panel refresh button
    document.getElementById('btn-refresh-sol')?.addEventListener('click', () => refreshSolPanel());

    // New sprint
    document.getElementById('btn-new-sprint').addEventListener('click', () => {
      const nums = AppData.getSprints().sprints.map(s => parseInt(s.id.replace('SP-', ''), 10));
      const next = Math.max(0, ...nums) + 1;
      document.getElementById('nsp-name').value = `Sprint ${next}`;
      document.getElementById('nsp-goal').value  = '';
      document.getElementById('nsp-start').value = '';
      document.getElementById('nsp-end').value   = '';
      document.getElementById('modal-new-sprint').classList.remove('hidden');
    });

    document.getElementById('form-new-sprint').addEventListener('submit', e => {
      e.preventDefault();
      const sprint = AppData.addSprint({
        goal:  document.getElementById('nsp-goal').value.trim(),
        start: document.getElementById('nsp-start').value,
        end:   document.getElementById('nsp-end').value,
      });
      document.getElementById('modal-new-sprint').classList.add('hidden');
      _currentSprint = sprint.id;
      _populateSprintSelector();
      refreshBanner();
      refreshBoard();
    });

    // Priority filter
    document.querySelectorAll('.filter-btn[data-filter]').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn[data-filter]').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        Board.setPriorityFilter(btn.dataset.filter);
        refreshBoard();
      });
    });

    // New task — abrir modal
    document.getElementById('btn-new-story').addEventListener('click', () => {
      _populateTaskForm();
      document.getElementById('modal-new-story').classList.remove('hidden');
    });

    // Buscar ticket en Helpdesk API — manual + auto-búsqueda debounced
    document.getElementById('btn-buscar-ticket').addEventListener('click', () => _buscarTicket());
    document.getElementById('ns-ticket').addEventListener('keydown', e => {
      if (e.key === 'Enter') { e.preventDefault(); _buscarTicket(); }
    });

    let _autoSearchTimer = null;
    let _lastSearched    = '';
    document.getElementById('ns-ticket').addEventListener('input', e => {
      const val = e.target.value.replace(/[^0-9]/g, '').trim();
      e.target.value = val; // forzar solo dígitos
      clearTimeout(_autoSearchTimer);
      if (val.length >= 4 && val !== _lastSearched) {
        _autoSearchTimer = setTimeout(() => {
          _lastSearched = val;
          _buscarTicket();
        }, 600);
      }
    });

    async function _buscarTicket() {
      const ticketNum = document.getElementById('ns-ticket').value.trim();
      if (!ticketNum) return;

      const btn    = document.getElementById('btn-buscar-ticket');
      const status = document.getElementById('ticket-search-status');

      btn.disabled    = true;
      btn.textContent = '...';
      status.className = 'ticket-search-status loading';
      status.textContent = 'Buscando en Helpdesk...';

      try {
        const result = await Helpdesk.lookupTicket(ticketNum);

        if (!result) {
          status.className   = 'ticket-search-status error';
          status.textContent = `Ticket #${ticketNum} no existe en el Helpdesk.`;
        } else {
          // Llenar campos
          document.getElementById('ns-title').value = result.title;

          const clientSelect = document.getElementById('ns-client');
          if (result.client) {
            clientSelect.value = result.client;
          } else if (result.clientRaw) {
            // Cliente no mapeado → agregar opción dinámica con el nombre crudo
            _ensureUnmappedClientOption(clientSelect, result.clientRaw);
            clientSelect.value = result.clientRaw;
          }

          // Prioridad
          document.getElementById('ns-priority').value = result.priority;

          // Estatus del Helpdesk → define columna del board al crear (review/proceso/esperando)
          document.getElementById('ns-hd-estatus').value = result.estatus || '';

          status.className   = 'ticket-search-status ok';
          status.textContent = result.client
            ? `✓ Ticket encontrado — datos cargados automáticamente.`
            : `✓ Ticket encontrado — cliente "${result.clientRaw}" cargado (no mapeado).`;
        }
      } catch (err) {
        status.className   = 'ticket-search-status error';
        status.textContent = err.message.includes('Failed to fetch')
          ? 'No se pudo conectar a Helpdesk. Verifica la red o CORS.'
          : `Error: ${err.message}`;
      } finally {
        btn.disabled    = false;
        btn.textContent = 'Buscar';
      }
    }

    // Inserta una opción en el select de cliente cuando llega un cliente del Helpdesk
    // que no está en CLIENT_MAP. Evita duplicados.
    function _ensureUnmappedClientOption(sel, rawName) {
      if (!sel || !rawName) return;
      if ([...sel.options].some(o => o.value === rawName)) return;
      const opt = document.createElement('option');
      opt.value = rawName;
      opt.textContent = `${rawName} (no mapeado)`;
      opt.dataset.unmapped = '1';
      sel.appendChild(opt);
    }

    function _populateTaskForm() {
      // Listado de clientes válidos del Helpdesk (los mismos que filtran la tabla del panel)
      const clients = HelpdeskPanel.getValidClients();
      document.getElementById('ns-client').innerHTML =
        `<option value="">Seleccionar cliente...</option>` +
        clients.map(c => `<option value="${c.id}">${c.name}</option>`).join('');

      // Asignados: dropdown buscable con usuarios del Helpdesk
      const search = document.getElementById('ns-assignee-search');
      const hidden = document.getElementById('ns-assignee');
      const list   = document.getElementById('ns-assignee-list');
      if (search) search.value = '';
      if (hidden) hidden.value = '';
      if (list)   list.innerHTML = '<div class="searchable-loading">Cargando...</div>';
      _fetchHdUsers().then(users => {
        if (list) _renderAssigneeList(users, '');
      });

      document.getElementById('ticket-search-status').textContent = '';
      document.getElementById('ticket-search-status').className = 'ticket-search-status';
      _lastSearched = '';
      clearTimeout(_autoSearchTimer);
    }

    // Etiqueta visible al seleccionar: "MSC001 Maria Sol Contreras · Supervisor".
    // Si el nombre no se resolvió (name === id) NO se duplica el código.
    function _assigneeLabel(u) {
      const id   = u.id || '';
      const name = (u.name && u.name !== id) ? u.name : '';
      const role = u.role ? ` · ${u.role}` : '';
      return `${id}${name ? ' ' + name : ''}${role}`;
    }

    // Dropdown buscable: render del listado filtrado (busca por código y nombre)
    function _renderAssigneeList(users, filter) {
      const list = document.getElementById('ns-assignee-list');
      if (!list) return;
      const norm = (s) => String(s || '').toLowerCase();
      const f = norm(filter);
      const filtered = f
        ? users.filter(u => norm(u.name).includes(f) || norm(u.id).includes(f))
        : users;
      if (!filtered.length) {
        list.innerHTML = '<div class="searchable-empty">Sin coincidencias</div>';
        return;
      }
      list.innerHTML = filtered.map(u =>
        `<div class="searchable-item" data-id="${u.id}" data-label="${_assigneeLabel(u).replace(/"/g,'&quot;')}">
           <span class="searchable-item-main">
             <span class="searchable-item-name">${(u.name && u.name !== u.id) ? u.name : '<em style="color:var(--text-muted)">(sin nombre)</em>'}</span>
             ${u.role ? `<span class="searchable-item-role">${u.role}</span>` : ''}
           </span>
           <span class="searchable-item-id">${u.id}</span>
         </div>`
      ).join('');
    }

    // Wire-up del dropdown buscable (una sola vez)
    (function _setupAssigneeDropdown() {
      const wrap   = document.getElementById('ns-assignee-wrap');
      const search = document.getElementById('ns-assignee-search');
      const hidden = document.getElementById('ns-assignee');
      const list   = document.getElementById('ns-assignee-list');
      if (!wrap || !search || !hidden || !list) {
        console.warn('[Assignee dropdown] elementos no encontrados', { wrap, search, hidden, list });
        return;
      }
      console.log('[Assignee dropdown] wire-up OK');

      // Render usando el cache (si existe) o disparando la carga
      const showList = () => {
        wrap.classList.add('open');
        if (_hdUsersCache) {
          _renderAssigneeList(_hdUsersCache, search.value);
        } else {
          list.innerHTML = '<div class="searchable-loading">Cargando empleados...</div>';
          _fetchHdUsers().then(users => {
            if (wrap.classList.contains('open')) _renderAssigneeList(users, search.value);
          });
        }
      };
      search.addEventListener('focus', showList);
      search.addEventListener('click', showList);

      // Filtrar al escribir + limpiar selección previa si ya no coincide
      search.addEventListener('input', () => {
        wrap.classList.add('open');
        if (_hdUsersCache) {
          _renderAssigneeList(_hdUsersCache, search.value);
          const exact = _hdUsersCache.find(u => _assigneeLabel(u) === search.value);
          hidden.value = exact ? exact.id : '';
        }
      });

      // Seleccionar al hacer clic en una fila
      list.addEventListener('mousedown', e => {
        const item = e.target.closest('.searchable-item');
        if (!item) return;
        e.preventDefault(); // evita que el input pierda el foco antes de leer el dataset
        search.value = item.dataset.label;
        hidden.value = item.dataset.id;
        wrap.classList.remove('open');
      });

      // Cerrar al hacer clic fuera
      document.addEventListener('click', e => {
        if (!wrap.contains(e.target)) wrap.classList.remove('open');
      });

      // Cerrar con Escape
      search.addEventListener('keydown', e => {
        if (e.key === 'Escape') wrap.classList.remove('open');
      });
    })();

    document.getElementById('form-new-story').addEventListener('submit', e => {
      e.preventDefault();
      const ticketNum  = document.getElementById('ns-ticket').value.trim();
      const assigneeId = document.getElementById('ns-assignee').value || null;
      const hdEstatus  = String(document.getElementById('ns-hd-estatus').value || '').toUpperCase().trim();

      let boardStatus    = 'todo';
      let waitingClient  = false;
      let waitingDate    = null;
      if (hdEstatus.includes('INSTALADO PARA CERTIFICACIÓN') || hdEstatus.includes('INSTALADO PARA CERTIFICACION')) {
        boardStatus = 'review';
      } else if (hdEstatus.includes('INFO PENDIENTE CLIENTE')) {
        boardStatus   = 'in_progress';
        waitingClient = true;
        waitingDate   = new Date().toISOString().slice(0, 10);
      } else if (hdEstatus.includes('EN PROCESO')) {
        boardStatus = 'in_progress';
      }

      AppData.addStory({
        ticket:        ticketNum,
        client:        document.getElementById('ns-client').value || null,
        title:         document.getElementById('ns-title').value.trim(),
        description:   document.getElementById('ns-description').value.trim(),
        assignee:      assigneeId,
        dueDate:       document.getElementById('ns-duedate').value,
        priority:      document.getElementById('ns-priority').value,
        status:        boardStatus,
        waitingClient: waitingClient,
        waitingDate:   waitingDate,
      });
      // Si la tarea tiene ticket asociado → notificar asignación al Helpdesk
      if (ticketNum && assigneeId) {
        _assignHdTicket(ticketNum, assigneeId).then(res => {
          if (res && !res.ok) alert(
            `⚠️ La tarea se creó, pero la asignación NO quedó en el Helpdesk.\n` +
            `ticket #${ticketNum} → ${assigneeId}\n` +
            `GET ${res.getStatus} · PUT ${res.status} · assigned_user_id ahora: ${res.after || '(vacío)'}` +
            (res.detail ? `\nAPI: ${res.detail}` : '')
          );
        });
      }
      document.getElementById('modal-new-story').classList.add('hidden');
      e.target.reset();
      refreshBoard();
      refreshBanner();
    });

    // New progress entry
    document.getElementById('btn-new-entry').addEventListener('click', () => {
      Progreso.initForm(AppData.getAllStories(), team);
      document.getElementById('ne-author').value = _session.id;
      document.getElementById('modal-new-entry').classList.remove('hidden');
    });

    document.getElementById('form-new-entry').addEventListener('submit', e => {
      e.preventDefault();
      AppData.addProgressEntry({
        storyId:    document.getElementById('ne-story').value,
        author:     document.getElementById('ne-author').value,
        hoursLogged: parseFloat(document.getElementById('ne-hours').value),
        notes:      document.getElementById('ne-notes').value.trim(),
      });
      document.getElementById('modal-new-entry').classList.add('hidden');
      e.target.reset();
      if (_currentView === 'progreso') refreshProgreso();
    });

    // New query
    document.getElementById('btn-new-query').addEventListener('click', () => {
      Consultas.initForm(AppData.getAllStories(), team);
      document.getElementById('nq-author').value = _session.id;
      document.getElementById('modal-new-query').classList.remove('hidden');
    });

    document.getElementById('form-new-query').addEventListener('submit', e => {
      e.preventDefault();
      AppData.addQuery({
        title:       document.getElementById('nq-title').value.trim(),
        storyId:     document.getElementById('nq-story').value || null,
        priority:    document.getElementById('nq-priority').value,
        description: document.getElementById('nq-description').value.trim(),
        author:      document.getElementById('nq-author').value,
      });
      document.getElementById('modal-new-query').classList.add('hidden');
      e.target.reset();
      if (_currentView === 'consultas') refreshConsultas();
    });

    // Resolve query
    document.getElementById('form-resolve').addEventListener('submit', e => {
      e.preventDefault();
      AppData.resolveQuery(
        document.getElementById('resolve-query-id').value,
        document.getElementById('resolve-response').value.trim(),
        document.getElementById('resolve-author').value,
      );
      document.getElementById('modal-resolve').classList.add('hidden');
      e.target.reset();
      refreshConsultas();
    });
  }

  return {
    init, refreshBoard, refreshBurndown, refreshProgreso, refreshConsultas,
    refreshHelpdeskPanel, refreshSolPanel, refreshSemanal, refreshPendientes,
    refreshUsuariosPizza, refreshBanner,
    // Helpers HD compartidos con board.js / helpdesk-panel.js
    hdBase: _hdBase,
    hdFetchSafe: _hdFetchSafe,
    fetchHdUsers: _fetchHdUsers,
    assignHdTicket: _assignHdTicket,
    getSession: () => _session,
  };
})();

document.addEventListener('DOMContentLoaded', App.init);
