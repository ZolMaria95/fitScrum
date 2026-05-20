const AppData = (() => {
  const LS_KEY = 'fitscrum_v1'; // used when Firebase is not yet configured

  let _sprints  = null;
  let _stories  = null;
  let _team     = null;
  let _progress = null;
  let _queries  = null;
  let _clients  = null;
  let _weekly   = null; // { weeks: { 'YYYY-MM-DD': { assignee, notes, updatedAt } } }

  // ── Firebase helpers ─────────────────────────────────
  function _fbReady() {
    return window.FIREBASE_DB_URL && !window.FIREBASE_DB_URL.includes('TU-PROYECTO');
  }

  function _dbUrl(path) {
    return `${window.FIREBASE_DB_URL}/fitscrum/${path}.json`;
  }

  async function _fbGet(path) {
    const r = await fetch(_dbUrl(path));
    if (!r.ok) throw new Error(`Firebase read error ${r.status}`);
    return r.json(); // returns null when the node doesn't exist yet
  }

  function _fbPut(path, data) {
    // Fire-and-forget: in-memory state is already updated, Firebase syncs in background
    fetch(_dbUrl(path), {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    }).catch(err => console.warn(`[Firebase] ${path}:`, err));
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
    // Users and clients are static — always from local JSON
    const [tm, cl] = await Promise.all([
      _loadLocal('data/users.json'),
      _loadLocal('data/clients.json'),
    ]);
    _team    = tm;
    _clients = cl;

    if (_fbReady()) {
      // Load from Firebase; seed from local JSON if nodes are empty
      const [fbSp, fbSt, fbPr, fbQu, fbWk] = await Promise.all([
        _fbGet('sprints'),
        _fbGet('stories'),
        _fbGet('progress'),
        _fbGet('queries'),
        _fbGet('weeklySupport'),
      ]);

      async function _seedOrLoad(fbVal, localPath, key) {
        if (fbVal !== null) return fbVal;
        const seed = await _loadLocal(localPath);
        _fbPut(key, seed);
        return seed;
      }

      [_sprints, _stories, _progress, _queries] = await Promise.all([
        _seedOrLoad(fbSp, 'data/sprints.json',  'sprints'),
        _seedOrLoad(fbSt, 'data/stories.json',  'stories'),
        _seedOrLoad(fbPr, 'data/progress.json', 'progress'),
        _seedOrLoad(fbQu, 'data/queries.json',  'queries'),
      ]);
      _weekly = fbWk || { weeks: {} };
    } else {
      // Fallback: localStorage with local JSON seeds
      const saved = _lsGet();
      const [sp, st, pr, qu] = await Promise.all([
        saved.sprints  ? Promise.resolve(saved.sprints)  : _loadLocal('data/sprints.json'),
        saved.stories  ? Promise.resolve(saved.stories)  : _loadLocal('data/stories.json'),
        saved.progress ? Promise.resolve(saved.progress) : _loadLocal('data/progress.json'),
        saved.queries  ? Promise.resolve(saved.queries)  : _loadLocal('data/queries.json'),
      ]);
      _sprints  = sp;
      _stories  = st;
      _progress = pr;
      _queries  = qu;
      _weekly   = saved.weeklySupport || { weeks: {} };
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
    const s = _stories.stories.find(s => s.id === storyId);
    if (s) { s.status = status; _persist('stories', _stories); }
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
    _persist('stories', _stories);
    return task;
  }

  function approveStory(storyId) {
    const s = _stories.stories.find(s => s.id === storyId);
    if (s) {
      s.approved     = true;
      s.approvedDate = new Date().toISOString().split('T')[0];
      _persist('stories', _stories);
    }
  }

  function unapproveStory(storyId) {
    const s = _stories.stories.find(s => s.id === storyId);
    if (s) {
      s.approved     = false;
      s.approvedDate = null;
      _persist('stories', _stories);
    }
  }

  function updateStoryProgress(storyId, progress) {
    const s = _stories.stories.find(s => s.id === storyId);
    if (s) { s.progress = progress; _persist('stories', _stories); }
  }

  function updateStoryDueDate(storyId, dueDate) {
    const s = _stories.stories.find(s => s.id === storyId);
    if (s) { s.dueDate = dueDate; _persist('stories', _stories); }
  }

  function setWaitingClient(storyId, waiting) {
    const s = _stories.stories.find(s => s.id === storyId);
    if (s) {
      s.waitingClient = waiting;
      s.waitingDate   = waiting ? new Date().toISOString().split('T')[0] : null;
      _persist('stories', _stories);
    }
  }

  function deleteStory(storyId) {
    _stories.stories = _stories.stories.filter(s => s.id !== storyId);
    _persist('stories', _stories);
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

  // ── Helpdesk ticket actions (localStorage only) ──────
  function getHdActions() {
    return JSON.parse(localStorage.getItem('fitscrum_hd_actions') || '{}');
  }

  function setHdAction(ticketId, active) {
    const actions = getHdActions();
    if (active) actions[String(ticketId)] = true;
    else         delete actions[String(ticketId)];
    localStorage.setItem('fitscrum_hd_actions', JSON.stringify(actions));
  }

  // ── Helpdesk ticket notes (localStorage only) ────────
  function getHdNotes() {
    return JSON.parse(localStorage.getItem('fitscrum_hd_notes') || '{}');
  }

  function setHdNote(ticketId, note) {
    const notes = getHdNotes();
    if (note && note.trim()) notes[String(ticketId)] = note.trim();
    else delete notes[String(ticketId)];
    localStorage.setItem('fitscrum_hd_notes', JSON.stringify(notes));
  }

  // ── Sol notes (localStorage only) ────────────────────
  function getSolNotes() {
    return JSON.parse(localStorage.getItem('fitscrum_sol_notes') || '{}');
  }

  function setSolNote(ticketId, note) {
    const notes = getSolNotes();
    if (note && note.trim()) notes[ticketId] = note.trim();
    else delete notes[ticketId];
    localStorage.setItem('fitscrum_sol_notes', JSON.stringify(notes));
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

  return {
    init,
    getSprints, getActiveSprint, setActiveSprint, addSprint, updateSprint, deleteSprint,
    getAllStories, getStoriesBySprint, updateStoryStatus, addStory, deleteStory,
    getTeam, getMember,
    updateStoryProgress, updateStoryDueDate, approveStory, unapproveStory, setWaitingClient,
    getClients, getClient,
    getProgress, addProgressEntry,
    getQueries, addQuery, resolveQuery,
    getHdActions, setHdAction,
    getHdNotes, setHdNote,
    getSolNotes, setSolNote,
    getWeeklySupport, getWeekAssignment, setWeekAssignment, clearWeekAssignment,
    getWeekTickets, addWeekTicket, removeWeekTicket,
  };
})();
