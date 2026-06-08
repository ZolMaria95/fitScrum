const AppData = (() => {
  const LS_KEY = 'fit-daily_v1'; // used when Firebase is not yet configured

  // ── One-shot migration: rename old fitscrum_* keys to fit-daily_* ──
  (function _migrateLegacyKeys() {
    const pairs = [
      ['fitscrum_v1',         'fit-daily_v1'],
      ['fitscrum_hd_actions', 'fit-daily_hd_actions'],
      ['fitscrum_hd_notes',   'fit-daily_hd_notes'],
      ['fitscrum_sol_notes',  'fit-daily_sol_notes'],
    ];
    for (const [oldKey, newKey] of pairs) {
      const oldVal = localStorage.getItem(oldKey);
      if (oldVal !== null && localStorage.getItem(newKey) === null) {
        localStorage.setItem(newKey, oldVal);
        localStorage.removeItem(oldKey);
      }
    }
  })();

  let _sprints   = null;
  let _stories   = null;
  let _team      = null;
  let _progress  = null;
  let _queries   = null;
  let _clients   = null;
  let _weekly    = null; // { weeks: { 'YYYY-MM-DD': { assignee, notes, updatedAt } } }
  let _hdActions     = null; // { ticketId: true }
  let _hdNotes       = null; // { ticketId: "texto" }
  let _solNotes      = null; // { ticketId: "texto" }
  let _hdPendientes  = null; // { ticketId: { ticket, asunto, clienteRaw, addedAt } }
  let _usuariosPizza = null; // [ { id, nombre, motivo, detalle, addedAt } ]

  // ── Firebase helpers ─────────────────────────────────
  function _fbReady() {
    return window.FIREBASE_DB_URL && !window.FIREBASE_DB_URL.includes('TU-PROYECTO');
  }

  function _dbUrl(path) {
    return `${window.FIREBASE_DB_URL}/fit-daily/${path}.json`;
  }

  async function _fbGet(path) {
    const r = await fetch(_dbUrl(path));
    if (!r.ok) throw new Error(`Firebase read error ${r.status}`);
    return r.json(); // returns null when the node doesn't exist yet
  }

  // Registro de escrituras locales recientes de stories (id → timestamp). El
  // merge remoto respeta una ventana de gracia por-ID: durante ese lapso el
  // estado local manda sobre el remoto. Evita dos races al sincronizar:
  //   • tareas recién creadas que se borran antes de propagarse a Firebase
  //   • cards recién movidas que "revierten" por un snapshot remoto stale
  const _GRACE_MS = 8000; // ventana de gracia por-ID tras una escritura local
  const _recentWrites = new Map();
  function _markStoryWrite(path, data) {
    if (typeof path !== 'string' || !path.startsWith('stories')) return;
    const now = Date.now();
    const single = path.match(/^stories\/stories\/(.+)$/);
    if (single) {
      _recentWrites.set(decodeURIComponent(single[1]), now);
    } else if (data && typeof data === 'object') {
      // 'stories/stories' (mapa id→story) o 'stories' ({ stories: {...} })
      const map = path === 'stories' ? (data.stories || {}) : data;
      Object.keys(map).forEach(id => _recentWrites.set(id, now));
    }
    // Prune de entradas expiradas para que el mapa no crezca sin límite
    if (_recentWrites.size > 200) {
      for (const [id, ts] of _recentWrites) if (now - ts >= _GRACE_MS) _recentWrites.delete(id);
    }
  }

  function _fbPut(path, data) {
    // Fire-and-forget: in-memory state is already updated, Firebase syncs in background
    _markStoryWrite(path, data);
    fetch(_dbUrl(path), {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    }).catch(err => console.warn(`[Firebase] ${path}:`, err));
  }

  // PATCH: merge sólo los campos enviados — evita race conditions de PUT total
  function _fbPatch(path, data) {
    _markStoryWrite(path, data);
    fetch(_dbUrl(path), {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    }).catch(err => console.warn(`[Firebase PATCH] ${path}:`, err));
  }

  // DELETE: elimina un nodo individual (usado para borrar una story por su ID)
  function _fbDelete(path) {
    _markStoryWrite(path);
    fetch(_dbUrl(path), { method: 'DELETE' })
      .catch(err => console.warn(`[Firebase DELETE] ${path}:`, err));
  }

  // Array de stories → objeto keyed por ID (formato de almacenamiento en Firebase)
  function _arrToMap(arr) {
    return Object.fromEntries((arr || []).filter(s => s && s.id).map(s => [s.id, s]));
  }

  // Normaliza el nodo `stories` de Firebase: acepta array (legacy) u objeto keyed (nuevo)
  function _normalizeStories(fbVal) {
    const raw = fbVal && fbVal.stories;
    if (Array.isArray(raw))               return raw.filter(Boolean);
    if (raw && typeof raw === 'object')   return Object.values(raw).filter(Boolean);
    return [];
  }

  // Actualiza campos de una story sin tocar las demás — escribe por ID estable
  // (no por índice de array) para que altas/bajas concurrentes no se pisen.
  function _patchStoryField(storyId, fields) {
    const story = _stories.stories.find(s => s.id === storyId);
    if (!story) return;
    Object.assign(story, fields);
    if (_fbReady()) _fbPatch('stories/stories/' + storyId, fields);
    else            _lsPut('stories', _stories);
  }

  // ── localStorage fallback ────────────────────────────
  function _lsGet() {
    return JSON.parse(localStorage.getItem(LS_KEY) || '{}');
  }

  function _lsPut(key, data) {
    const s = _lsGet();
    s[key] = data;
    localStorage.setItem(LS_KEY, JSON.stringify(s));
  }

  // ── Unified persist (routes to Firebase or localStorage)
  function _persist(key, data) {
    if (_fbReady()) _fbPut(key, data);
    else            _lsPut(key, data);
  }

  async function _loadLocal(path) {
    const r = await fetch(path);
    if (!r.ok) throw new Error(`Cannot load ${path}`);
    return r.json();
  }

  // ── Init ─────────────────────────────────────────────
  async function init() {
    // Clients are static — always from local JSON
    _clients = await _loadLocal('data/clients.json');

    if (_fbReady()) {
      // Load from Firebase; seed from local JSON if nodes are empty
      const [fbSp, fbSt, fbPr, fbQu, fbWk, fbHdA, fbHdN, fbSolN, fbHdP, fbUP, fbUsers] = await Promise.all([
        _fbGet('sprints'),
        _fbGet('stories'),
        _fbGet('progress'),
        _fbGet('queries'),
        _fbGet('weeklySupport'),
        _fbGet('hdActions'),
        _fbGet('hdNotes'),
        _fbGet('solNotes'),
        _fbGet('hdPendientes'),
        _fbGet('usuariosPizza'),
        _fbGet('users'),
      ]);

      async function _seedOrLoad(fbVal, localPath, key) {
        if (fbVal !== null) return fbVal;
        const seed = await _loadLocal(localPath);
        _fbPut(key, seed);
        return seed;
      }

      // Users: siempre se leen del JSON local y se sobreescriben en Firebase
      // Esto garantiza que cambios en users.json se propaguen a todos los navegadores
      const localUsers = await _loadLocal('data/users.json');
      _team = localUsers;
      _fbPut('users', localUsers);

      [_sprints, _progress, _queries] = await Promise.all([
        _seedOrLoad(fbSp, 'data/sprints.json',  'sprints'),
        _seedOrLoad(fbPr, 'data/progress.json', 'progress'),
        _seedOrLoad(fbQu, 'data/queries.json',  'queries'),
      ]);

      // Stories: se guardan como mapa keyed por ID en Firebase (evita que el PUT del
      // array completo de un usuario borre tareas creadas por otro). Migra el array
      // legacy a mapa una sola vez; en memoria se mantiene como array.
      let stArr;
      if (fbSt === null) {
        const seed = await _loadLocal('data/stories.json');
        stArr = seed.stories || [];
        _fbPut('stories/stories', _arrToMap(stArr));            // siembra como mapa
      } else {
        stArr = _normalizeStories(fbSt);
        if (Array.isArray(fbSt.stories)) {
          _fbPut('stories/stories', _arrToMap(stArr));          // migra legacy → mapa
        }
      }
      _stories = { stories: stArr };

      _weekly = fbWk || { weeks: {} };

      // Migrate from localStorage on first Firebase load
      _hdActions     = fbHdA  || JSON.parse(localStorage.getItem('fit-daily_hd_actions')     || '{}');
      _hdNotes       = fbHdN  || JSON.parse(localStorage.getItem('fit-daily_hd_notes')       || '{}');
      _solNotes      = fbSolN || JSON.parse(localStorage.getItem('fit-daily_sol_notes')      || '{}');
      _hdPendientes  = fbHdP || {};
      _usuariosPizza = fbUP  || [];

      // Seed Firebase if it was empty but localStorage had data
      if (!fbHdA  && Object.keys(_hdActions).length)    _fbPut('hdActions',     _hdActions);
      if (!fbHdN  && Object.keys(_hdNotes).length)      _fbPut('hdNotes',       _hdNotes);
      if (!fbSolN && Object.keys(_solNotes).length)     _fbPut('solNotes',      _solNotes);
      if (!fbHdP && Object.keys(_hdPendientes).length) _fbPut('hdPendientes',  _hdPendientes);
      if (!fbUP  && _usuariosPizza.length)             _fbPut('usuariosPizza', _usuariosPizza);
    } else {
      // Fallback: localStorage with local JSON seeds
      const saved = _lsGet();
      const [sp, st, pr, qu, tm] = await Promise.all([
        saved.sprints  ? Promise.resolve(saved.sprints)  : _loadLocal('data/sprints.json'),
        saved.stories  ? Promise.resolve(saved.stories)  : _loadLocal('data/stories.json'),
        saved.progress ? Promise.resolve(saved.progress) : _loadLocal('data/progress.json'),
        saved.queries  ? Promise.resolve(saved.queries)  : _loadLocal('data/queries.json'),
        _loadLocal('data/users.json'),
      ]);
      _sprints   = sp;
      _stories   = st;
      _progress  = pr;
      _queries   = qu;
      _team      = tm;
      _weekly    = saved.weeklySupport || { weeks: {} };
      _hdActions     = JSON.parse(localStorage.getItem('fit-daily_hd_actions')     || '{}');
      _hdNotes       = JSON.parse(localStorage.getItem('fit-daily_hd_notes')       || '{}');
      _solNotes      = JSON.parse(localStorage.getItem('fit-daily_sol_notes')      || '{}');
      _hdPendientes  = saved.hdPendientes  || {};
      _usuariosPizza = saved.usuariosPizza || [];
    }
  }

  // ── Sprints ──────────────────────────────────────────
  function getSprints()      { return _sprints; }
  function getActiveSprint() { return _sprints.sprints.find(s => s.id === _sprints.active); }

  function setActiveSprint(id) {
    _sprints.active = id;
    _persist('sprints', _sprints);
  }

  function updateSprint(id, data) {
    const s = _sprints.sprints.find(s => s.id === id);
    if (!s) return;
    Object.assign(s, data);
    _persist('sprints', _sprints);
  }

  function deleteSprint(id) {
    if (_sprints.sprints.length <= 1) return _sprints.active;
    _sprints.sprints = _sprints.sprints.filter(s => s.id !== id);
    if (_sprints.active === id) {
      _sprints.active = _sprints.sprints[_sprints.sprints.length - 1].id;
    }
    _persist('sprints', _sprints);
    return _sprints.active;
  }

  function addSprint(data) {
    const nums    = _sprints.sprints.map(s => parseInt(s.id.replace('SP-', ''), 10));
    const nextNum = Math.max(0, ...nums) + 1;
    const nextId  = 'SP-' + String(nextNum).padStart(2, '0');
    const prevId  = _sprints.active;

    const sprint = {
      id:       nextId,
      name:     `Sprint ${nextNum}`,
      status:   'active',
      capacity: 0,
      ...data,
    };

    _sprints.sprints.forEach(s => { if (s.status === 'active') s.status = 'completed'; });
    _sprints.sprints.push(sprint);
    _sprints.active = nextId;

    // Migrate non-approved tasks from previous sprint
    _stories.stories.forEach(task => {
      if (task.sprint === prevId && !(task.status === 'done' && task.approved)) {
        task.sprint = nextId;
      }
    });

    _persist('sprints', _sprints);
    _persist('stories', _stories);
    return sprint;
  }

  // ── Tasks (stories) ──────────────────────────────────
  function getAllStories()         { return _stories.stories; }
  function getStoriesBySprint(id) { return _stories.stories.filter(s => s.sprint === id); }

  function updateStoryStatus(storyId, status) {
    _patchStoryField(storyId, { status });
  }

  function addStory(data) {
    const nums = _stories.stories.map(s => parseInt(s.id.replace('TA-', ''), 10)).filter(n => !isNaN(n));
    const next = 'TA-' + String(Math.max(0, ...nums) + 1).padStart(3, '0');
    const task = {
      id:           next,
      sprint:       _sprints.active,
      status:       'todo',
      priority:     'media',
      description:  '',
      assignee:     null,
      client:       null,
      ticket:       '',
      dueDate:      '',
      points:       1,
      progress:     0,
      approved:     false,
      approvedDate: null,
      waitingClient: false,
      waitingDate:   null,
      ...data,
    };
    _stories.stories.push(task);
    // Escribir SOLO la nueva story por su ID (merge) — nunca PUT del array completo,
    // que podría borrar tareas creadas por otros usuarios en paralelo.
    if (_fbReady()) _fbPatch('stories/stories', { [task.id]: task });
    else            _lsPut('stories', _stories);
    return task;
  }

  function approveStory(storyId) {
    _patchStoryField(storyId, {
      approved:     true,
      approvedDate: new Date().toISOString().split('T')[0],
    });
  }

  function unapproveStory(storyId) {
    _patchStoryField(storyId, { approved: false, approvedDate: null });
  }

  function updateStoryProgress(storyId, progress) {
    _patchStoryField(storyId, { progress });
  }

  function updateStoryDueDate(storyId, dueDate) {
    _patchStoryField(storyId, { dueDate });
  }

  function updateStoryTitle(storyId, title) {
    _patchStoryField(storyId, { title });
  }

  function updateStoryDescription(storyId, description) {
    _patchStoryField(storyId, { description });
  }

  function updateStoryAssignee(storyId, assignee) {
    _patchStoryField(storyId, { assignee });
  }

  function updateStoryHdEstatus(storyId, hdEstatus) {
    _patchStoryField(storyId, { hdEstatus });
  }

  function updateStoryPriority(storyId, priority) {
    _patchStoryField(storyId, { priority });
  }

  function setWaitingClient(storyId, waiting) {
    _patchStoryField(storyId, {
      waitingClient: waiting,
      waitingDate:   waiting ? new Date().toISOString().split('T')[0] : null,
    });
  }

  function deleteStory(storyId) {
    _stories.stories = _stories.stories.filter(s => s.id !== storyId);
    // Borrar SOLO ese nodo por ID — no reescribir el array completo.
    if (_fbReady()) _fbDelete('stories/stories/' + storyId);
    else            _lsPut('stories', _stories);
  }

  // ── Team ─────────────────────────────────────────────
  function getTeam()     { return _team.users; }
  function getMember(id) { return _team.users.find(m => m.id === id); }

  // ── Clients ──────────────────────────────────────────
  function getClients()  { return _clients.clients; }
  function getClient(id) { return _clients.clients.find(c => c.id === id); }

  // ── Progress ─────────────────────────────────────────
  function getProgress() { return _progress.entries; }

  function addProgressEntry(data) {
    const nums = _progress.entries.map(e => parseInt(e.id.replace('PR-', ''), 10));
    const next = 'PR-' + String(Math.max(0, ...nums) + 1).padStart(3, '0');
    const entry = { id: next, date: new Date().toISOString().split('T')[0], ...data };
    _progress.entries.push(entry);
    _persist('progress', _progress);
    return entry;
  }

  // ── Queries ──────────────────────────────────────────
  function getQueries() { return _queries.queries; }

  function addQuery(data) {
    const nums = _queries.queries.map(q => parseInt(q.id.replace('QR-', ''), 10));
    const next = 'QR-' + String(Math.max(0, ...nums) + 1).padStart(3, '0');
    const query = {
      id:          next,
      date:        new Date().toISOString().split('T')[0],
      status:      'open',
      response:    null,
      respondedBy: null,
      ...data,
    };
    _queries.queries.push(query);
    _persist('queries', _queries);
    return query;
  }

  // ── Helpdesk ticket actions ───────────────────────────
  function getHdActions() { return _hdActions; }

  function setHdAction(ticketId, active) {
    if (active) _hdActions[String(ticketId)] = true;
    else         delete _hdActions[String(ticketId)];
    _persist('hdActions', _hdActions);
  }

  // ── Helpdesk ticket notes ─────────────────────────────
  function getHdNotes() { return _hdNotes; }

  function setHdNote(ticketId, note) {
    if (note && note.trim()) _hdNotes[String(ticketId)] = note.trim();
    else delete _hdNotes[String(ticketId)];
    _persist('hdNotes', _hdNotes);
  }

  // ── Helpdesk pendientes ───────────────────────────────
  function getHdPendientes() { return _hdPendientes; }

  function setHdPendiente(ticketId, data) {
    _hdPendientes[String(ticketId)] = { ...data, addedAt: new Date().toISOString() };
    _persist('hdPendientes', _hdPendientes);
  }

  function removeHdPendiente(ticketId) {
    delete _hdPendientes[String(ticketId)];
    _persist('hdPendientes', _hdPendientes);
  }

  // ── Usuarios Pizza ────────────────────────────────────
  function getUsuariosPizza() { return _usuariosPizza; }

  function addUsuarioPizza(data) {
    const entry = { id: Date.now().toString(), addedAt: new Date().toISOString(), ...data };
    _usuariosPizza.push(entry);
    _persist('usuariosPizza', _usuariosPizza);
    return entry;
  }

  function removeUsuarioPizza(id) {
    _usuariosPizza = _usuariosPizza.filter(u => u.id !== id);
    _persist('usuariosPizza', _usuariosPizza);
  }

  function markPizzaPaid(id) {
    const entry = _usuariosPizza.find(u => u.id === id);
    if (entry) {
      entry.paid   = true;
      entry.paidAt = new Date().toISOString();
      _persist('usuariosPizza', _usuariosPizza);
    }
  }

  // ── Sol notes ─────────────────────────────────────────
  function getSolNotes() { return _solNotes; }

  function setSolNote(ticketId, note) {
    if (note && note.trim()) _solNotes[ticketId] = note.trim();
    else delete _solNotes[ticketId];
    _persist('solNotes', _solNotes);
  }

  function resolveQuery(id, response, respondedBy) {
    const q = _queries.queries.find(q => q.id === id);
    if (q) {
      q.status      = 'resolved';
      q.response    = response;
      q.respondedBy = respondedBy;
      _persist('queries', _queries);
    }
  }

  // ── Weekly support (HelpDesk Semanal) ────────────────
  // weekKey = ISO date 'YYYY-MM-DD' of the Friday that starts the support week
  function getWeeklySupport()        { return _weekly.weeks || {}; }
  function getWeekAssignment(key)    { return _weekly.weeks[key] || null; }

  function setWeekAssignment(key, assigneeId, notes = '') {
    if (!assigneeId) return clearWeekAssignment(key);
    _weekly.weeks[key] = {
      assignee:  assigneeId,
      notes:     notes || '',
      updatedAt: new Date().toISOString(),
    };
    _persist('weeklySupport', _weekly);
  }

  function clearWeekAssignment(key) {
    const existing = _weekly.weeks[key];
    if (existing && existing.tickets && existing.tickets.length) {
      // Keep tickets even when clearing the assignee
      _weekly.weeks[key] = { tickets: existing.tickets };
    } else {
      delete _weekly.weeks[key];
    }
    _persist('weeklySupport', _weekly);
  }

  // ── Weekly resolved tickets ───────────────────────────
  function getWeekTickets(key) {
    return (_weekly.weeks[key] && _weekly.weeks[key].tickets) || [];
  }

  function addWeekTicket(key, ticketId, desc) {
    if (!ticketId || !ticketId.trim()) return;
    if (!_weekly.weeks[key]) _weekly.weeks[key] = {};
    if (!_weekly.weeks[key].tickets) _weekly.weeks[key].tickets = [];
    _weekly.weeks[key].tickets.push({
      id:      ticketId.trim(),
      desc:    (desc || '').trim(),
      addedAt: new Date().toISOString(),
    });
    _persist('weeklySupport', _weekly);
  }

  function removeWeekTicket(key, idx) {
    const tickets = _weekly.weeks[key] && _weekly.weeks[key].tickets;
    if (!tickets) return;
    tickets.splice(idx, 1);
    _persist('weeklySupport', _weekly);
  }

  // ── Real-time sync ────────────────────────────────────────────────────────
  // ¿La story `id` fue escrita localmente dentro de la ventana de gracia?
  function _writtenRecently(id) {
    const ts = _recentWrites.get(id);
    return ts != null && (Date.now() - ts < _GRACE_MS);
  }

  // Merge remoto → local. Devuelve true si hubo cambios. Reutilizado por el
  // streaming SSE y por el polling de respaldo. Las stories escritas localmente
  // hace < _GRACE_MS se respetan (el estado local manda) para no revertir ni
  // borrar cambios que Firebase aún no propagó.
  function _applyRemoteStories(remoteArr) {
    if (!remoteArr || !remoteArr.length) return false; // nodo vacío: no mergear (evita wipe)
    let changed = false;
    // Agregar nuevas, actualizar diferentes
    remoteArr.forEach(rs => {
      if (!rs || !rs.id) return;
      if (_writtenRecently(rs.id)) return; // local manda durante la gracia
      const local = _stories.stories.find(s => s.id === rs.id);
      if (!local) {
        _stories.stories.push(rs);
        changed = true;
      } else if (JSON.stringify(local) !== JSON.stringify(rs)) {
        Object.assign(local, rs);
        changed = true;
      }
    });
    // Remover locales ausentes en remoto — salvo las recién escritas localmente,
    // que aún pueden no estar en el snapshot (evita borrar una tarea nueva).
    const remoteIds = new Set(remoteArr.filter(s => s && s.id).map(s => s.id));
    const before = _stories.stories.length;
    _stories.stories = _stories.stories.filter(s => remoteIds.has(s.id) || _writtenRecently(s.id));
    if (_stories.stories.length !== before) changed = true;
    return changed;
  }

  async function _syncStoriesOnce(onUpdate) {
    try {
      const remote = await _fbGet('stories');
      if (_applyRemoteStories(_normalizeStories(remote)) && typeof onUpdate === 'function') onUpdate();
    } catch (e) { /* silencioso — reintenta en el próximo evento/ciclo */ }
  }

  // ── Streaming SSE (Firebase REST EventSource): updates casi instantáneos ────
  // Cada cambio en `stories` dispara un evento → re-fetch debounced + merge.
  // Reutilizamos el merge (no parseamos deltas) para mantener la lógica robusta.
  let _es = null;
  let _streamDebounce = null;
  let _safetyTimer = null;

  function startStreaming(onUpdate) {
    if (!_fbReady() || _es) return;
    if (typeof EventSource === 'undefined') {
      console.warn('[sync] EventSource no soportado — fallback a polling 5s');
      startPolling(onUpdate, 5000);
      return;
    }
    const trigger = () => {
      clearTimeout(_streamDebounce);
      _streamDebounce = setTimeout(() => _syncStoriesOnce(onUpdate), 250);
    };
    try {
      _es = new EventSource(_dbUrl('stories'));
    } catch (e) {
      console.warn('[sync] EventSource falló al abrir — fallback a polling 5s', e);
      startPolling(onUpdate, 5000);
      return;
    }
    // Firebase emite eventos NOMBRADOS (put/patch), no `message`
    _es.addEventListener('put', trigger);
    _es.addEventListener('patch', trigger);
    _es.addEventListener('open', () => console.log('[sync] streaming SSE conectado'));
    _es.addEventListener('error', () => { /* EventSource reintenta solo */ });
    // Red de seguridad: re-sync cada 60s por si se cae la conexión o se pierde un evento
    _safetyTimer = setInterval(() => _syncStoriesOnce(onUpdate), 60000);
  }

  function stopStreaming() {
    if (_es) { try { _es.close(); } catch (_) {} _es = null; }
    clearTimeout(_streamDebounce);
    if (_safetyTimer) { clearInterval(_safetyTimer); _safetyTimer = null; }
  }

  // Polling de respaldo (fallback cuando no hay SSE)
  let _pollTimer = null;
  function startPolling(onUpdate, intervalMs = 30000) {
    if (!_fbReady() || _pollTimer) return;
    _pollTimer = setInterval(() => _syncStoriesOnce(onUpdate), intervalMs);
  }

  function stopPolling() {
    if (_pollTimer) { clearInterval(_pollTimer); _pollTimer = null; }
  }

  return {
    init,
    getSprints, getActiveSprint, setActiveSprint, addSprint, updateSprint, deleteSprint,
    getAllStories, getStoriesBySprint, updateStoryStatus, addStory, deleteStory,
    getTeam, getMember,
    updateStoryProgress, updateStoryDueDate, updateStoryTitle, updateStoryDescription,
    updateStoryAssignee, updateStoryHdEstatus, updateStoryPriority,
    approveStory, unapproveStory, setWaitingClient,
    getClients, getClient,
    getProgress, addProgressEntry,
    getQueries, addQuery, resolveQuery,
    getHdActions, setHdAction,
    getHdNotes, setHdNote,
    getHdPendientes, setHdPendiente, removeHdPendiente,
    getUsuariosPizza, addUsuarioPizza, removeUsuarioPizza, markPizzaPaid,
    getSolNotes, setSolNote,
    getWeeklySupport, getWeekAssignment, setWeekAssignment, clearWeekAssignment,
    getWeekTickets, addWeekTicket, removeWeekTicket,
    startStreaming, stopStreaming,
    startPolling, stopPolling,
  };
})();
