const SESSION_KEY = 'fit-daily_session';

// One-shot migration: rescatar sesión del nombre antiguo
(function _migrateLegacySession() {
  const old = sessionStorage.getItem('fitscrum_session');
  if (old && !sessionStorage.getItem(SESSION_KEY)) {
    sessionStorage.setItem(SESSION_KEY, old);
    sessionStorage.removeItem('fitscrum_session');
  }
})();

const App = (() => {
  let _currentView    = 'board';
  let _currentSprint  = null;
  let _session        = null;

  async function init() {
    _session = JSON.parse(sessionStorage.getItem(SESSION_KEY) || 'null');
    // Sesión inválida o legacy sin token → forzar re-login con credenciales reales
    if (!_session || !_session.token) {
      sessionStorage.removeItem(SESSION_KEY);
      window.location.href = 'login.html';
      return;
    }

    await AppData.init();

    _currentSprint = AppData.getActiveSprint().id;

    _renderUserChip();
    _populateSprintSelector();
    refreshBanner();
    _setupNav();
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

    // Borrar tareas individuales: Helpdesk o Supervisor
    if (isHelpdesk || isSupervisor) {
      document.body.classList.add('can-delete-cards');
    }

    // Borrar board completo: solo Helpdesk
    if (isHelpdesk) {
      document.body.classList.add('can-delete-board');
      const btnClear = document.getElementById('btn-clear-board');
      if (btnClear) btnClear.addEventListener('click', _clearBoardWithConfirm);
    }

    console.log('[App] Sesión activa:', { id: _session.id, role: _session.role, apiRole: _session.apiRole, isHelpdesk, isSupervisor });

    refreshBoard();
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

    document.getElementById('btn-logout').addEventListener('click', async () => {
      try { await HelpdeskAuth.logout(); } catch (_) {}
      sessionStorage.removeItem(SESSION_KEY);
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
  function _setupNav() {
    const SCRUM_VIEWS    = ['board', 'burndown', 'progreso', 'consultas'];
    const dropdown       = document.getElementById('nav-scrum');
    const dropdownToggle = dropdown?.querySelector('.nav-dropdown-toggle');
    const dropdownLabel  = dropdown?.querySelector('.nav-dropdown-label');

    function _activateView(view) {
      _currentView = view;

      // Quitar active de TODO (tabs sueltos + items del dropdown)
      document.querySelectorAll('.nav-tab, .nav-dropdown-item').forEach(t => t.classList.remove('active'));

      // Marcar el correcto
      const isScrum = SCRUM_VIEWS.includes(view);
      if (isScrum && dropdown) {
        dropdownToggle.classList.add('active');
        const item = dropdown.querySelector(`.nav-dropdown-item[data-view="${view}"]`);
        if (item) item.classList.add('active');
        if (dropdownLabel) dropdownLabel.textContent = item?.textContent || 'Scrum';
      } else {
        const tab = document.querySelector(`.nav-tab[data-view="${view}"]`);
        if (tab) tab.classList.add('active');
        if (dropdownLabel) dropdownLabel.textContent = 'Scrum';
      }

      // Mostrar la vista
      document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
      document.getElementById(`view-${view}`)?.classList.add('active');
      _refreshCurrentView();

      // Cerrar el dropdown si estaba abierto
      dropdown?.classList.remove('open');
      dropdownToggle?.setAttribute('aria-expanded', 'false');
    }

    // Tabs de primer nivel (helpdesk, semanal, pendientes, etc.)
    document.querySelectorAll('.nav-tab:not(.nav-dropdown-toggle)').forEach(tab => {
      tab.addEventListener('click', () => _activateView(tab.dataset.view));
    });

    // Items dentro del dropdown Scrum
    document.querySelectorAll('.nav-dropdown-item').forEach(item => {
      item.addEventListener('click', () => _activateView(item.dataset.view));
    });

    // Toggle del dropdown
    dropdownToggle?.addEventListener('click', e => {
      e.stopPropagation();
      const isOpen = dropdown.classList.toggle('open');
      dropdownToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Cerrar dropdown al hacer clic afuera
    document.addEventListener('click', e => {
      if (!dropdown?.contains(e.target)) {
        dropdown?.classList.remove('open');
        dropdownToggle?.setAttribute('aria-expanded', 'false');
      }
    });
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
          } else {
            status.className   = 'ticket-search-status warn';
            status.textContent = `Cliente "${result.clientRaw}" no mapeado — selecciónalo manualmente.`;
          }

          // Prioridad
          document.getElementById('ns-priority').value = result.priority;

          if (result.client) {
            status.className   = 'ticket-search-status ok';
            status.textContent = `✓ Ticket encontrado — datos cargados automáticamente.`;
          }
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

    function _populateTaskForm() {
      // Listado de clientes válidos del Helpdesk (los mismos que filtran la tabla del panel)
      const clients = HelpdeskPanel.getValidClients();
      document.getElementById('ns-client').innerHTML =
        `<option value="">Seleccionar cliente...</option>` +
        clients.map(c => `<option value="${c.id}">${c.name}</option>`).join('');
      document.getElementById('ns-assignee').innerHTML =
        team.map(m => `<option value="${m.id}">${m.name}</option>`).join('');
      document.getElementById('ticket-search-status').textContent = '';
      document.getElementById('ticket-search-status').className = 'ticket-search-status';
      _lastSearched = '';
      clearTimeout(_autoSearchTimer);
    }

    document.getElementById('form-new-story').addEventListener('submit', e => {
      e.preventDefault();
      AppData.addStory({
        ticket:      document.getElementById('ns-ticket').value.trim(),
        client:      document.getElementById('ns-client').value || null,
        title:       document.getElementById('ns-title').value.trim(),
        description: document.getElementById('ns-description').value.trim(),
        assignee:    document.getElementById('ns-assignee').value || null,
        dueDate:     document.getElementById('ns-duedate').value,
        priority:    document.getElementById('ns-priority').value,
      });
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

  return { init, refreshBoard, refreshBurndown, refreshProgreso, refreshConsultas, refreshHelpdeskPanel, refreshSolPanel, refreshSemanal, refreshPendientes, refreshUsuariosPizza, refreshBanner };
})();

document.addEventListener('DOMContentLoaded', App.init);
