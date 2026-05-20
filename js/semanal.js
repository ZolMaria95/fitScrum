const Semanal = (() => {

  const DAYS_SHORT_ES   = ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'];
  const DAY_LABELS      = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
  const MONTHS_ES       = ['enero','febrero','marzo','abril','mayo','junio',
                           'julio','agosto','septiembre','octubre','noviembre','diciembre'];
  const MONTHS_SHORT_ES = ['ene','feb','mar','abr','may','jun','jul','ago','sep','oct','nov','dic'];

  // Paleta de 12 colores — bg (fondo suave) + fg (texto/borde oscuro)
  const PALETTE = [
    { bg: '#DBEAFE', fg: '#1E40AF' },  // azul
    { bg: '#D1FAE5', fg: '#065F46' },  // verde
    { bg: '#EDE9FE', fg: '#5B21B6' },  // violeta
    { bg: '#FEE0CC', fg: '#9A3412' },  // naranja
    { bg: '#FCE7F3', fg: '#9D174D' },  // rosa
    { bg: '#CCFBF1', fg: '#0F766E' },  // teal
    { bg: '#FEF3C7', fg: '#92400E' },  // ámbar
    { bg: '#E0E7FF', fg: '#3730A3' },  // índigo
    { bg: '#CFFAFE', fg: '#155E75' },  // cyan
    { bg: '#ECFCCB', fg: '#3F6212' },  // lima
    { bg: '#FFE4E6', fg: '#9F1239' },  // rojo rosado
    { bg: '#F3E8FF', fg: '#6B21A8' },  // púrpura
  ];

  let _viewMonth        = null;
  let _isInited         = false;
  let _colorMap         = {};    // { userId: { bg, fg } }
  let _ticketsWeekKey   = null;  // ISO key of the week shown in the tickets panel

  // Asigna un color de la paleta a cada miembro del equipo (orden estable por índice)
  function _buildColorMap() {
    _colorMap = {};
    AppData.getTeam().forEach((m, i) => {
      _colorMap[m.id] = PALETTE[i % PALETTE.length];
    });
  }

  function _getColor(userId) {
    return _colorMap[userId] || { bg: '#F2F2F2', fg: '#4A4A6A' };
  }

  // ── Date utilities ───────────────────────────────────
  function _today() {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  }

  function _addDays(date, n) {
    const d = new Date(date);
    d.setDate(d.getDate() + n);
    return d;
  }

  function _isoKey(date) {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
  }

  // Returns the Friday that starts the support week containing `date`.
  // Support weeks run Fri → Thu (relay happens on Friday).
  function _getWeekFriday(date) {
    const day    = date.getDay();          // 0=Sun … 5=Fri … 6=Sat
    const offset = (day - 5 + 7) % 7;      // days back to most recent Friday
    return _addDays(date, -offset);
  }

  function _formatShort(date) {
    return `${DAYS_SHORT_ES[date.getDay()]} ${date.getDate()} ${MONTHS_SHORT_ES[date.getMonth()]}`;
  }

  // Week range display: Fri → next Fri (the next Fri is the relay date)
  function _formatRange(fridayDate) {
    const nextFri = _addDays(fridayDate, 7);
    return `${_formatShort(fridayDate)} → ${_formatShort(nextFri)}`;
  }

  function _sameDay(a, b) {
    return a.getFullYear() === b.getFullYear()
        && a.getMonth()    === b.getMonth()
        && a.getDate()     === b.getDate();
  }

  function _memberShortName(id) {
    const m = AppData.getMember(id);
    if (!m) return id;
    return m.name.split(' ')[0];
  }

  function _memberFullName(id) {
    const m = AppData.getMember(id);
    return m ? m.name : id;
  }

  // ── Init ─────────────────────────────────────────────
  function init() {
    if (_isInited) return;
    _isInited = true;

    const t = _today();
    _viewMonth = new Date(t.getFullYear(), t.getMonth(), 1);

    document.getElementById('btn-sem-prev').addEventListener('click', () => {
      _viewMonth = new Date(_viewMonth.getFullYear(), _viewMonth.getMonth() - 1, 1);
      refresh();
    });
    document.getElementById('btn-sem-next').addEventListener('click', () => {
      _viewMonth = new Date(_viewMonth.getFullYear(), _viewMonth.getMonth() + 1, 1);
      refresh();
    });
    document.getElementById('btn-sem-today').addEventListener('click', () => {
      const today = _today();
      _viewMonth = new Date(today.getFullYear(), today.getMonth(), 1);
      refresh();
    });
    document.getElementById('btn-sem-assign-current').addEventListener('click', () => {
      const key = _isoKey(_getWeekFriday(_today()));
      openAssignModal(key);
    });

    _ticketsWeekKey = _isoKey(_getWeekFriday(_today()));
    _setupModalForm();
    _setupTicketsForm();
  }

  // ── Modal: form wiring ───────────────────────────────
  function _setupModalForm() {
    const form     = document.getElementById('form-sem-assign');
    const btnClear = document.getElementById('btn-sem-clear');

    form.addEventListener('submit', e => {
      e.preventDefault();
      const key      = document.getElementById('sem-week-key').value;
      const assignee = document.getElementById('sem-assignee').value;
      const notes    = document.getElementById('sem-notes').value.trim();
      if (!key || !assignee) return;

      AppData.setWeekAssignment(key, assignee, notes);
      document.getElementById('modal-sem-assign').classList.add('hidden');
      refresh();
    });

    btnClear.addEventListener('click', () => {
      const key = document.getElementById('sem-week-key').value;
      if (!key) return;
      if (!confirm('¿Quitar la asignación de esta semana?')) return;
      AppData.clearWeekAssignment(key);
      document.getElementById('modal-sem-assign').classList.add('hidden');
      refresh();
    });
  }

  // ── Refresh entry point ──────────────────────────────
  function refresh() {
    if (!_viewMonth) {
      const t = _today();
      _viewMonth = new Date(t.getFullYear(), t.getMonth(), 1);
    }
    if (!_ticketsWeekKey) {
      _ticketsWeekKey = _isoKey(_getWeekFriday(_today()));
    }
    _buildColorMap();
    _renderHeader();
    _renderCalendar();
    _renderCurrentWeek();
    _renderNextWeeks();
    _renderStats();
    _renderTickets();
  }

  // ── Render: header / period label ────────────────────
  function _renderHeader() {
    const label = `${MONTHS_ES[_viewMonth.getMonth()]} ${_viewMonth.getFullYear()}`;
    document.getElementById('sem-period-label').textContent = label;
    document.getElementById('sem-month-title').textContent  = label;
  }

  // ── Render: month calendar ───────────────────────────
  function _renderCalendar() {
    const cal = document.getElementById('sem-calendar');
    cal.innerHTML = '';

    // Day-name headers (Sun-Sat)
    DAY_LABELS.forEach(label => {
      const h = document.createElement('div');
      h.className   = 'sem-cal-dayname';
      h.textContent = label;
      cal.appendChild(h);
    });

    // Grid starts at the Sunday before (or on) the 1st of the month
    const firstDay    = new Date(_viewMonth);
    const startOffset = firstDay.getDay();
    const gridStart   = _addDays(firstDay, -startOffset);

    const today          = _today();
    const currentWeekKey = _isoKey(_getWeekFriday(today));
    const assignments    = AppData.getWeeklySupport();

    // 6 rows × 7 cols = 42 cells (covers any month layout)
    for (let i = 0; i < 42; i++) {
      const date    = _addDays(gridStart, i);
      const isOther = date.getMonth() !== _viewMonth.getMonth();
      const isToday = _sameDay(date, today);
      const isFri   = date.getDay() === 5;
      const weekFri = _getWeekFriday(date);
      const weekKey = _isoKey(weekFri);
      const isCur   = weekKey === currentWeekKey;
      const assign  = assignments[weekKey];

      const cell  = document.createElement('div');
      const color = assign ? _getColor(assign.assignee) : null;

      cell.className = 'sem-cal-day';
      if (isOther) cell.classList.add('is-other-month');
      if (isToday) cell.classList.add('is-today');
      if (isFri)   cell.classList.add('is-friday-relay');
      if (isCur && !assign) cell.classList.add('is-week-current');
      if (assign) {
        cell.classList.add('is-week-assigned');
        cell.style.background   = color.bg;
        cell.style.borderColor  = isToday ? 'var(--brand)' : color.fg + '55';
        if (isCur) cell.style.boxShadow = `inset 0 0 0 2px var(--brand)`;
      }

      const num = document.createElement('div');
      num.className   = 'sem-cal-daynum';
      num.textContent = date.getDate();
      if (assign) num.style.color = color.fg;
      cell.appendChild(num);

      // Chip con nombre del consultor — solo en viernes (día ancla de la semana)
      if (isFri && assign) {
        const chip = document.createElement('div');
        chip.className         = 'sem-cal-assignee';
        chip.textContent       = _memberShortName(assign.assignee);
        chip.title             = _memberFullName(assign.assignee);
        chip.style.background  = color.fg;
        chip.style.color       = '#fff';
        chip.style.borderColor = 'transparent';
        cell.appendChild(chip);
      }

      cell.addEventListener('click', () => {
        _ticketsWeekKey = weekKey;
        _renderTickets();
        openAssignModal(weekKey);
      });
      cal.appendChild(cell);
    }
  }

  // ── Render: current-week summary card ────────────────
  function _renderCurrentWeek() {
    const fri    = _getWeekFriday(_today());
    const key    = _isoKey(fri);
    const assign = AppData.getWeekAssignment(key);

    document.getElementById('sem-current-range').textContent = _formatRange(fri);

    const nameEl = document.getElementById('sem-current-assignee');
    const card   = document.querySelector('.sem-current-week');
    if (assign) {
      const color = _getColor(assign.assignee);
      nameEl.textContent    = _memberFullName(assign.assignee);
      nameEl.style.color    = color.fg;
      nameEl.classList.remove('is-empty');
      if (card) card.style.borderLeftColor = color.fg;
    } else {
      nameEl.textContent    = 'Sin asignar';
      nameEl.style.color    = '';
      nameEl.classList.add('is-empty');
      if (card) card.style.borderLeftColor = '';
    }
  }

  // ── Render: next 8 weeks list ────────────────────────
  function _renderNextWeeks() {
    const fri       = _getWeekFriday(_today());
    const container = document.getElementById('sem-next-weeks');
    container.innerHTML = '';

    let assignedCount = 0;
    for (let i = 1; i <= 8; i++) {
      const wkFri    = _addDays(fri, i * 7);
      const wkKey    = _isoKey(wkFri);
      const assign   = AppData.getWeekAssignment(wkKey);

      const item = document.createElement('div');
      item.className = 'sem-week-item';

      const rangeEl = document.createElement('div');
      rangeEl.className   = 'sem-week-item-range';
      rangeEl.textContent = _formatRange(wkFri);

      const nameEl = document.createElement('div');
      nameEl.className = 'sem-week-item-name';
      if (assign) {
        const color          = _getColor(assign.assignee);
        nameEl.textContent   = _memberShortName(assign.assignee);
        nameEl.title         = _memberFullName(assign.assignee);
        nameEl.style.color   = color.fg;
        nameEl.style.background = color.bg;
        nameEl.style.padding = '2px 8px';
        nameEl.style.borderRadius = '4px';
        assignedCount++;
      } else {
        nameEl.textContent = 'Sin asignar';
        nameEl.classList.add('is-empty');
      }

      item.appendChild(rangeEl);
      item.appendChild(nameEl);
      item.addEventListener('click', () => {
        _ticketsWeekKey = wkKey;
        _renderTickets();
        openAssignModal(wkKey);
      });
      container.appendChild(item);
    }

    document.getElementById('sem-next-count').textContent = assignedCount;
  }

  // ── Render: stats — assignments per consultor ────────
  function _renderStats() {
    const stats   = {};
    const assigns = AppData.getWeeklySupport();
    Object.values(assigns).forEach(a => {
      stats[a.assignee] = (stats[a.assignee] || 0) + 1;
    });

    const container = document.getElementById('sem-stats');
    container.innerHTML = '';

    const entries = Object.entries(stats).sort((a, b) => b[1] - a[1]);
    if (!entries.length) {
      container.innerHTML = '<div class="sem-empty">Sin asignaciones registradas</div>';
      return;
    }

    entries.forEach(([id, count]) => {
      const color = _getColor(id);
      const row   = document.createElement('div');
      row.className = 'sem-stat-row';
      row.style.borderLeft = `4px solid ${color.fg}`;
      row.innerHTML = `
        <span class="sem-stat-name" style="color:${color.fg}">${_memberFullName(id)}</span>
        <span class="sem-stat-count" style="color:${color.fg}">${count} ${count === 1 ? 'semana' : 'semanas'}</span>
      `;
      container.appendChild(row);
    });
  }

  // ── Tickets resueltos: setup form ────────────────────
  function _setupTicketsForm() {
    document.getElementById('form-add-ticket').addEventListener('submit', e => {
      e.preventDefault();
      const id   = document.getElementById('sem-ticket-id').value;
      const desc = document.getElementById('sem-ticket-desc').value;
      if (!id.trim()) return;
      AppData.addWeekTicket(_ticketsWeekKey, id, desc);
      document.getElementById('sem-ticket-id').value   = '';
      document.getElementById('sem-ticket-desc').value = '';
      _renderTickets();
    });
  }

  // ── Tickets resueltos: render ─────────────────────────
  function _renderTickets() {
    const key     = _ticketsWeekKey;
    const tickets = AppData.getWeekTickets(key);
    const fri     = _parseISO(key);
    const assign  = AppData.getWeekAssignment(key);

    // Week label
    const labelEl = document.getElementById('sem-tickets-week-label');
    let weekLabel  = _formatRange(fri);
    if (assign) {
      const name  = _memberShortName(assign.assignee);
      const color = _getColor(assign.assignee);
      labelEl.innerHTML =
        `<span style="margin-right:6px">${weekLabel}</span>` +
        `<span class="sem-tickets-tech" style="background:${color.bg};color:${color.fg}">${name}</span>`;
    } else {
      labelEl.textContent = weekLabel;
    }

    document.getElementById('sem-tickets-count').textContent = tickets.length;

    const list = document.getElementById('sem-tickets-list');
    list.innerHTML = '';

    if (!tickets.length) {
      list.innerHTML = '<div class="sem-empty">Sin tickets registrados</div>';
      return;
    }

    tickets.forEach((t, idx) => {
      const item = document.createElement('div');
      item.className = 'sem-ticket-item';
      item.innerHTML =
        `<span class="sem-ticket-id">#${t.id}</span>` +
        `<span class="sem-ticket-desc">${t.desc || ''}</span>` +
        `<button class="sem-ticket-del" title="Quitar" data-idx="${idx}">✕</button>`;
      item.querySelector('.sem-ticket-del').addEventListener('click', () => {
        AppData.removeWeekTicket(key, idx);
        _renderTickets();
      });
      list.appendChild(item);
    });
  }

  // ── Modal: open & populate ───────────────────────────
  function openAssignModal(weekKey) {
    const fri      = _parseISO(weekKey);
    const existing = AppData.getWeekAssignment(weekKey);
    const team     = AppData.getTeam();

    document.getElementById('sem-week-key').value = weekKey;
    document.getElementById('sem-week-range-display').textContent = _formatRange(fri);

    const select = document.getElementById('sem-assignee');
    select.innerHTML =
      '<option value="">Seleccionar...</option>' +
      team.map(m => `<option value="${m.id}">${m.name}</option>`).join('');
    select.value = existing ? existing.assignee : '';

    document.getElementById('sem-notes').value = existing ? (existing.notes || '') : '';

    // Show "Quitar asignación" only when one exists
    const btnClear = document.getElementById('btn-sem-clear');
    btnClear.style.display = existing ? '' : 'none';

    document.getElementById('modal-sem-assign').classList.remove('hidden');
  }

  function _parseISO(key) {
    const [y, m, d] = key.split('-').map(Number);
    return new Date(y, m - 1, d);
  }

  return {
    init,
    refresh,
    openAssignModal,
  };

})();
