const Board = (() => {
  let _priorityFilter  = 'all';
  let _clientFilter    = 'all';
  let _activeAssignees = new Set();
  let _draggedId       = null;

  const STATUSES = ['todo', 'in_progress', 'review', 'done'];
  const STATUS_LABELS = {
    todo:        'To Do',
    in_progress: 'In Progress',
    review:      'En Certificación',
    done:        'Finalizado',
  };

  function render(stories, team, clients) {
    const assigneeIds = [...new Set(stories.map(s => s.assignee).filter(Boolean))];
    if (_activeAssignees.size === 0) assigneeIds.forEach(id => _activeAssignees.add(id));

    _renderAssigneeChips(team, assigneeIds);
    _renderClientFilter(clients);

    const today = new Date().toISOString().split('T')[0];

    STATUSES.forEach(status => {
      let cards = stories.filter(s => s.status === status);

      // Ocultar DONE aprobadas después de 2 días (visible hoy + mañana)
      if (status === 'done') {
        const cutoff = new Date();
        cutoff.setDate(cutoff.getDate() - 1);
        const cutoffStr = cutoff.toISOString().split('T')[0];
        cards = cards.filter(s => !(s.approved && s.approvedDate < cutoffStr));
      }

      if (_priorityFilter !== 'all') cards = cards.filter(s => s.priority === _priorityFilter);
      if (_clientFilter   !== 'all') cards = cards.filter(s => s.client   === _clientFilter);
      cards = cards.filter(s => !s.assignee || _activeAssignees.has(s.assignee));

      document.getElementById(`count-${status}`).textContent = cards.length;
      document.getElementById(`pts-${status}`).textContent   = '';

      const container = document.getElementById(`cards-${status}`);
      container.innerHTML = cards.length
        ? cards.map(s => _cardHTML(s, team, clients)).join('')
        : '<div class="empty-col"><span>○</span><span>Sin tareas</span></div>';
    });

    _attachInteractions(stories, team, clients);
    _attachDragEvents();
  }

  // ── Chips de asignado ────────────────────────────────
  function _renderAssigneeChips(team, assigneeIds) {
    const wrap = document.getElementById('assignee-filters');
    wrap.innerHTML = team.filter(m => assigneeIds.includes(m.id)).map(m => `
      <div class="assignee-chip ${_activeAssignees.has(m.id) ? '' : 'inactive'}"
           data-id="${m.id}" style="background:${m.color}" title="${m.name}">${m.id}</div>
    `).join('');

    wrap.querySelectorAll('.assignee-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        const id = chip.dataset.id;
        if (_activeAssignees.has(id)) {
          if (_activeAssignees.size > 1) _activeAssignees.delete(id);
        } else {
          _activeAssignees.add(id);
        }
        App.refreshBoard();
      });
    });
  }

  // ── Filtro cliente ───────────────────────────────────
  function _renderClientFilter(clients) {
    const wrap = document.getElementById('client-filter-wrap');
    if (!wrap) return;
    wrap.innerHTML = `
      <select id="client-select" class="select-filter" style="font-size:12px">
        <option value="all">Todos los clientes</option>
        ${clients.map(c => `<option value="${c.id}" ${_clientFilter === c.id ? 'selected' : ''}>${c.name}</option>`).join('')}
      </select>`;
    wrap.querySelector('#client-select').addEventListener('change', e => {
      _clientFilter = e.target.value;
      App.refreshBoard();
    });
  }

  // ── HTML de la card ──────────────────────────────────
  function _cardHTML(task, team, clients) {
    const member = team.find(m => m.id === task.assignee);
    const client = clients.find(c => c.id === task.client);

    const assigneeEl = member
      ? `<div class="card-assignee" style="background:${member.color}" title="${member.name}">${member.id}</div>`
      : `<div class="card-unassigned" title="Sin asignar"></div>`;

    const dueStr   = task.dueDate ? _fmtShort(task.dueDate) : '';
    const isOverdue = task.dueDate && task.status !== 'done'
      && new Date(task.dueDate + 'T00:00:00') < new Date();

    const clientBadge = client
      ? `<span class="card-client-badge" style="background:${client.color}20;color:${client.color};border:1px solid ${client.color}40">${client.name}</span>`
      : '';

    const extraEl = task.status === 'in_progress'
      ? _progressBarHTML(task)
      : task.status === 'review'
        ? _certCheckHTML(task)
        : task.status === 'done'
          ? _approveCheckHTML(task)
          : '';

    return `
      <div class="story-card priority-${task.priority}" data-id="${task.id}" draggable="true">
        <div class="card-top">
          <span class="card-ticket">#${task.ticket || '—'}</span>
          ${clientBadge}
        </div>
        <div class="card-title">${task.title}</div>
        ${extraEl}
        <div class="card-bottom">
          ${dueStr ? `<span class="card-due ${isOverdue ? 'overdue' : ''}">📅 ${dueStr}</span>` : '<span></span>'}
          ${assigneeEl}
        </div>
      </div>`;
  }

  function _progressBarHTML(task) {
    const pct   = task.progress ?? 0;
    const color = _progColor(pct);

    // Calcular días esperando respuesta
    let waitingEl = '';
    if (task.waitingClient && task.waitingDate) {
      const days = Math.floor((new Date() - new Date(task.waitingDate + 'T00:00:00')) / 864e5);
      if (days >= 3) {
        waitingEl = `
          <button class="card-waiting-btn alert" data-id="${task.id}" data-waiting="true"
                  onclick="event.stopPropagation()" draggable="false" title="Marcado hace ${days} días — clic para cancelar">
            ⚠ Notificar al cliente
          </button>`;
      } else {
        const label = days === 0 ? 'hoy' : days === 1 ? 'ayer' : `hace ${days} días`;
        waitingEl = `
          <button class="card-waiting-btn active" data-id="${task.id}" data-waiting="true"
                  onclick="event.stopPropagation()" draggable="false" title="Esperando desde ${label} — clic para cancelar">
            ⏳ Esperando cliente
          </button>`;
      }
    } else {
      waitingEl = `
        <button class="card-waiting-btn" data-id="${task.id}" data-waiting="false"
                onclick="event.stopPropagation()" draggable="false">
          ⏳ Esperando cliente
        </button>`;
    }

    return `
      <div class="card-prog-wrap" onclick="event.stopPropagation()">
        <input type="range" class="card-prog-range"
               min="0" max="100" step="25" value="${pct}"
               data-id="${task.id}"
               draggable="false">
        <span class="card-prog-pct" id="pct-${task.id}">${pct}%</span>
      </div>
      ${waitingEl}`;

  function _certCheckHTML(task) {
    return `
      <div class="card-cert-wrap" onclick="event.stopPropagation()">
        <label class="cert-label">
          <input type="checkbox" class="cert-check" data-id="${task.id}" draggable="false">
          <span>Certificado</span>
        </label>
      </div>`;
  }

  function _approveCheckHTML(task) {
    const checked = task.approved ? 'checked' : '';
    const label   = task.approved ? 'Aprobado ✓' : 'Aprobado';
    const cls     = task.approved ? 'cert-label approved' : 'cert-label';
    return `
      <div class="card-cert-wrap" onclick="event.stopPropagation()">
        <label class="${cls}">
          <input type="checkbox" class="appr-check" data-id="${task.id}" draggable="false" ${checked}>
          <span>${label}</span>
        </label>
      </div>`;
  }

  // ── Interacciones ────────────────────────────────────
  function _attachInteractions(stories, team, clients) {
    // Click en card → modal detalle
    document.querySelectorAll('.story-card').forEach(card => {
      card.addEventListener('click', e => {
        if (e.target.closest('.card-prog-wrap') || e.target.closest('.card-cert-wrap')) return;
        const task = stories.find(s => s.id === card.dataset.id);
        if (task) _openDetail(task, team, clients);
      });
    });

    // Barra de progreso
    document.querySelectorAll('.card-prog-range').forEach(range => {
      _applyRangeStyle(range);
      range.addEventListener('input', e => {
        const pct = parseInt(e.target.value, 10);
        const color = _progColor(pct);
        e.target.style.setProperty('--prog-color', color);
        e.target.style.setProperty('--prog-pct', pct + '%');
        _applyRangeStyle(e.target);
        const label = document.getElementById(`pct-${e.target.dataset.id}`);
        if (label) label.textContent = pct + '%';
      });
      range.addEventListener('change', e => {
        AppData.updateStoryProgress(e.target.dataset.id, parseInt(e.target.value, 10));
      });
    });

    // Botón "Esperando cliente"
    document.querySelectorAll('.card-waiting-btn').forEach(btn => {
      btn.addEventListener('click', e => {
        e.stopPropagation();
        const isWaiting = btn.dataset.waiting === 'true';
        AppData.setWaitingClient(btn.dataset.id, !isWaiting);
        App.refreshBoard();
      });
    });

    // Checkbox certificado → mueve a DONE
    document.querySelectorAll('.cert-check').forEach(chk => {
      chk.addEventListener('change', e => {
        if (e.target.checked) {
          AppData.updateStoryStatus(e.target.dataset.id, 'done');
          App.refreshBoard();
          App.refreshBanner();
        }
      });
    });

    // Checkbox aprobado — se puede marcar y desmarcar
    document.querySelectorAll('.appr-check').forEach(chk => {
      chk.addEventListener('change', e => {
        const label = e.target.closest('.cert-label');
        if (e.target.checked) {
          AppData.approveStory(e.target.dataset.id);
          if (label) {
            label.classList.add('approved');
            label.querySelector('span').textContent = 'Aprobado ✓';
          }
        } else {
          AppData.unapproveStory(e.target.dataset.id);
          if (label) {
            label.classList.remove('approved');
            label.querySelector('span').textContent = 'Aprobado';
          }
        }
        App.refreshBanner();
      });
    });
  }

  function _applyRangeStyle(input) {
    const pct   = ((input.value - input.min) / (input.max - input.min)) * 100;
    const color = _progColor(parseInt(input.value, 10));
    input.style.background = `linear-gradient(to right, ${color} ${pct}%, var(--border) ${pct}%)`;
  }

  function _progColor(pct) {
    if (pct === 0)   return '#E0E0E0';
    if (pct <= 25)   return '#F29E3B';
    if (pct <= 50)   return '#F2811D';
    if (pct <= 75)   return '#04BAF0';
    return '#27AE60';
  }

  // ── Drag & Drop ──────────────────────────────────────
  function _attachDragEvents() {
    document.querySelectorAll('.story-card').forEach(card => {
      card.addEventListener('dragstart', e => {
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'LABEL' || e.target.tagName === 'SPAN') {
          e.preventDefault(); return;
        }
        _draggedId = card.dataset.id;
        card.classList.add('dragging');
        e.dataTransfer.effectAllowed = 'move';
      });
      card.addEventListener('dragend', () => {
        card.classList.remove('dragging');
        document.querySelectorAll('.col-cards').forEach(c => c.classList.remove('drag-over'));
      });
    });

    document.querySelectorAll('.col-cards').forEach(col => {
      col.addEventListener('dragover',  e => { e.preventDefault(); col.classList.add('drag-over'); });
      col.addEventListener('dragleave', ()  => col.classList.remove('drag-over'));
      col.addEventListener('drop', e => {
        e.preventDefault();
        col.classList.remove('drag-over');
        if (_draggedId && col.dataset.status) {
          AppData.updateStoryStatus(_draggedId, col.dataset.status);
          App.refreshBoard();
          App.refreshBanner();
        }
      });
    });
  }

  // ── Modal detalle ────────────────────────────────────
  function _openDetail(task, team, clients) {
    const member = team.find(m => m.id === task.assignee);
    const client = clients.find(c => c.id === task.client);
    const pLabel = { alta: 'Alta', media: 'Media', baja: 'Baja' }[task.priority];
    const dueStr = task.dueDate
      ? new Date(task.dueDate + 'T00:00:00').toLocaleDateString('es-ES', { day: '2-digit', month: 'long', year: 'numeric' })
      : '—';

    document.getElementById('modal-card-id').textContent = task.id;
    document.getElementById('modal-card-body').innerHTML = `
      <div class="detail-title">${task.title}</div>
      <div class="detail-meta">
        ${task.ticket ? `<span class="card-ticket" style="font-size:13px">#${task.ticket}</span>` : ''}
        ${client ? `<span class="card-client-badge" style="background:${client.color}20;color:${client.color};border:1px solid ${client.color}40;font-size:12px;padding:3px 10px;border-radius:10px">${client.name}</span>` : ''}
        <span class="badge badge-${task.priority}">${pLabel}</span>
        ${member ? `<span style="font-size:12px;color:var(--text-mid)">→ ${member.name}</span>` : ''}
      </div>
      <div style="font-size:12px;color:var(--text-muted);margin-bottom:14px">
        📅 Entrega: <strong style="color:var(--text)">${dueStr}</strong>
      </div>
      ${task.description ? `
        <div class="detail-section-title">Descripción</div>
        <div class="detail-description">${task.description}</div>` : ''}
      <div class="detail-status-row">
        <label>Estado:</label>
        <select class="status-select" id="detail-status">
          ${STATUSES.map(s => `<option value="${s}" ${task.status === s ? 'selected' : ''}>${STATUS_LABELS[s]}</option>`).join('')}
        </select>
        <button class="btn-primary" id="detail-save" style="padding:5px 12px;font-size:12px">Guardar</button>
        <button class="btn-secondary" id="detail-delete" style="padding:5px 12px;font-size:12px;color:var(--error);border-color:var(--error)">Eliminar</button>
      </div>`;

    document.getElementById('detail-save').addEventListener('click', () => {
      AppData.updateStoryStatus(task.id, document.getElementById('detail-status').value);
      document.getElementById('modal-card').classList.add('hidden');
      App.refreshBoard();
      App.refreshBanner();
    });

    document.getElementById('detail-delete').addEventListener('click', () => {
      if (confirm(`¿Eliminar "${task.title}"?`)) {
        AppData.deleteStory(task.id);
        document.getElementById('modal-card').classList.add('hidden');
        App.refreshBoard();
        App.refreshBanner();
      }
    });

    document.getElementById('modal-card').classList.remove('hidden');
  }

  function setPriorityFilter(f) {
    _priorityFilter = f;
    _activeAssignees.clear();
  }

  function _fmtShort(dateStr) {
    return new Date(dateStr + 'T00:00:00').toLocaleDateString('es-ES', { day: '2-digit', month: 'short' });
  }

  return { render, setPriorityFilter };
})();
