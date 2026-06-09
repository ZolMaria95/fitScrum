const Board = (() => {
  let _priorityFilter  = 'all';
  let _clientFilter    = 'all';
  let _activeAssignees = new Set();
  let _draggedId       = null;
  let _currentStories  = []; // historias del sprint actual (para el conteo WIP)

  const STATUSES = ['todo', 'in_progress', 'review', 'done'];
  const STATUS_LABELS = {
    todo:        'To Do',
    in_progress: 'In Progress',
    review:      'En Certificación',
    done:        'Finalizado',
  };

  // Estados válidos para cambiar en el Helpdesk (desde el board)
  const HD_STATUSES = [
    'EN PROCESO',
    'INFO PENDIENTE CLIENTE',
    'ENTREGADO',
    'DEVUELTO',
    'APROBADO',
    'CERRADO POR EL CLIENTE',
  ];

  function render(stories, team, clients) {
    _currentStories = stories;

    // Base visible del board: oculta DONE aprobadas pasado el cutoff (1 día).
    // Los chips de asignado se arman de esta base — así no aparecen filtros
    // "huérfanos" de tareas que ya no se muestran (ej. un id viejo sin tareas).
    const cutoff = new Date();
    cutoff.setDate(cutoff.getDate() - 1);
    const cutoffStr = cutoff.toISOString().split('T')[0];
    const visibleBase = stories.filter(s =>
      !(s.status === 'done' && s.approved && s.approvedDate < cutoffStr));

    const assigneeIds = [...new Set(visibleBase.map(s => s.assignee).filter(Boolean))];

    _renderAssigneeChips(team, assigneeIds);
    _renderClientFilter(clients);

    STATUSES.forEach(status => {
      let cards = visibleBase.filter(s => s.status === status);

      if (_priorityFilter !== 'all') cards = cards.filter(s => s.priority === _priorityFilter);
      if (_clientFilter   !== 'all') cards = cards.filter(s => s.client   === _clientFilter);
      // Sin selección de asignado → mostrar todos
      if (_activeAssignees.size > 0) {
        cards = cards.filter(s => !s.assignee || _activeAssignees.has(s.assignee));
      }

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

  // Valida el paso todo → in_progress: límite WIP de 2 + confirmación de inicio.
  // Devuelve true si se permite (y asigna la tarea cuando corresponde), false para abortar.
  function _canStartWork(task) {
    const session    = (typeof App !== 'undefined' && App.getSession) ? (App.getSession() || {}) : {};
    const myId       = String(session.id || '').trim().toUpperCase();
    const isHelpdesk = myId === 'MSC001';

    // Solo el técnico asignado o Helpdesk pueden iniciar una tarea desde To Do.
    // Supervisores y otros roles con can-move-all-cards quedan bloqueados aquí.
    if (!isHelpdesk && task.assignee && myId !== String(task.assignee).trim().toUpperCase()) {
      alert('Solo el técnico asignado puede iniciar esta tarea.');
      return false;
    }

    // Técnico efectivo que trabajará la tarea
    let assigneeId = task.assignee;
    if (!assigneeId) {
      if (isHelpdesk) {
        alert('Esta tarea no tiene técnico asignado. Asigna un técnico antes de iniciarla.');
        return false;
      }
      assigneeId = session.id; // se asume que quien la mueve es el asignado
    }

    // Límite WIP: máximo 2 tareas en progreso por técnico (en el sprint actual)
    const enProgreso = _currentStories.filter(
      s => s.status === 'in_progress' && s.assignee === assigneeId
    ).length;
    if (enProgreso >= 2) {
      const nombre = (AppData.getTeam().find(m => m.id === assigneeId) || {}).name || assigneeId;
      alert(`${nombre} ya tiene ${enProgreso} tareas en progreso. ` +
            `Debe cerrar alguna antes de iniciar otra.`);
      return false;
    }

    // Confirmación de inicio
    if (!confirm(`¿Deseas iniciar a trabajar en "${task.title}"?`)) return false;

    // Si estaba sin asignar y la mueve un técnico → asignársela
    if (!task.assignee) AppData.updateStoryAssignee(task.id, assigneeId);
    return true;
  }

  // Sincroniza el estado del ticket Helpdesk con el de la card:
  //   → In Progress  ⇒  EN PROCESO
  //   → Done         ⇒  ENTREGADO
  // Fire-and-forget: si no tiene ticket o ya está en ese estado, no hace nada.
  async function _pushHdEstado(task, estado) {
    if (!task || !task.ticket || task.hdEstatus === estado) return;
    try {
      const r = await App.hdFetchSafe(
        `${App.hdBase()}/tickets/tickets/${task.ticket}`,
        { method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ estado }) }
      );
      if (r.ok) AppData.updateStoryHdEstatus(task.id, estado);
      else console.warn('[HD estado] no se pudo actualizar ticket', task.ticket, '→', estado, r.status);
    } catch (err) {
      console.warn('[HD estado]', err);
    }
  }

  // ── Resolución de asignado (team local o empleado del Helpdesk) ──────
  // El asignado puede ser un ID de users.json (2 letras) o un user_id del
  // Helpdesk (ej. MSC001). Devuelve { id, name, color, label } para pintar avatar.
  const _AVATAR_PALETTE = ['#04BAF0','#27AE60','#F29E3B','#9B59B6','#E74C3C',
    '#1ABC9C','#2980B9','#F2811D','#8E44AD','#16A085','#C0392B','#D35400'];
  function _colorFor(id) {
    let h = 0; const s = String(id || '');
    for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
    return _AVATAR_PALETTE[h % _AVATAR_PALETTE.length];
  }
  function _initialsFromName(name) {
    const parts = String(name || '').trim().split(/\s+/).filter(Boolean);
    if (!parts.length) return '?';
    if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
    return (parts[0][0] + parts[1][0]).toUpperCase();
  }
  function _hdUsers() {
    return (typeof HelpdeskPanel !== 'undefined' && HelpdeskPanel.getHdUsers) ? HelpdeskPanel.getHdUsers() : [];
  }
  function _resolveMember(id, team) {
    if (!id) return null;
    const t = (team || []).find(m => m.id === id);
    if (t) return { id: t.id, name: t.name, color: t.color, label: t.id, role: t.role || '' };
    const u = _hdUsers().find(x => x.id === id);
    const name = u ? u.name : id;
    return { id, name, color: _colorFor(id), label: _initialsFromName(name), role: u ? (u.role || '') : '' };
  }

  // Etiqueta de asignado: "MSC001 Maria Sol Contreras · Supervisor".
  // Si el nombre no se resolvió (name === id) NO se duplica el código.
  function _assigneeLabel(u) {
    if (!u) return '';
    const id   = u.id || '';
    const name = (u.name && u.name !== id) ? u.name : '';
    const role = u.role ? ` · ${u.role}` : '';
    return `${id}${name ? ' ' + name : ''}${role}`.trim();
  }

  // Outside-click para cerrar el dropdown de asignado del modal (una sola vez)
  let _detailAssigneeOutsideWired = false;
  function _wireDetailAssigneeOutside() {
    if (_detailAssigneeOutsideWired) return;
    _detailAssigneeOutsideWired = true;
    document.addEventListener('click', e => {
      const wrap = document.getElementById('detail-assignee-wrap');
      if (wrap && !wrap.contains(e.target)) wrap.classList.remove('open');
    });
  }

  // Dropdown buscable de asignado dentro del modal de detalle.
  // Devuelve un updater(newUsers) para refrescar cuando llegan empleados del API.
  function _setupDetailAssignee(users, currentId, team) {
    const wrap   = document.getElementById('detail-assignee-wrap');
    const search = document.getElementById('detail-assignee-search');
    const hidden = document.getElementById('detail-assignee');
    const list   = document.getElementById('detail-assignee-list');
    if (!wrap || !search || !hidden || !list) return null;

    let _users = users.slice();
    const norm = s => String(s || '').toLowerCase();

    const render = (filter) => {
      const f = norm(filter);
      const filtered = f
        ? _users.filter(u => norm(u.name).includes(f) || norm(u.id).includes(f))
        : _users;
      let html = `<div class="searchable-item searchable-item-clear" data-id="" data-label="">
          <span class="searchable-item-name" style="color:var(--text-muted)">— Sin asignar —</span></div>`;
      if (filtered.length) {
        html += filtered.map(u =>
          `<div class="searchable-item" data-id="${u.id}" data-label="${_assigneeLabel(u).replace(/"/g,'&quot;')}">
             <span class="searchable-item-main">
               <span class="searchable-item-name">${(u.name && u.name !== u.id) ? u.name : '<em style="color:var(--text-muted)">(sin nombre)</em>'}</span>
               ${u.role ? `<span class="searchable-item-role">${u.role}</span>` : ''}
             </span>
             <span class="searchable-item-id">${u.id}</span>
           </div>`).join('');
      } else if (f) {
        html += `<div class="searchable-empty">Sin coincidencias</div>`;
      }
      list.innerHTML = html;
    };

    const setLabel = () => {
      const cur = _users.find(u => u.id === currentId);
      hidden.value = currentId || '';
      if (cur) search.value = _assigneeLabel(cur);
      else if (currentId) {
        const r = _resolveMember(currentId, team);
        search.value = _assigneeLabel({ id: r.id, name: r.name, role: r.role });
      } else search.value = '';
    };
    setLabel();

    search.addEventListener('focus', () => { wrap.classList.add('open'); search.select(); render(''); });
    search.addEventListener('click',  () => { wrap.classList.add('open'); render(search.value); });
    search.addEventListener('input',  () => {
      wrap.classList.add('open');
      render(search.value);
      const exact = _users.find(u => _assigneeLabel(u) === search.value);
      hidden.value = exact ? exact.id : '';
    });
    search.addEventListener('keydown', e => { if (e.key === 'Escape') wrap.classList.remove('open'); });
    list.addEventListener('mousedown', e => {
      const item = e.target.closest('.searchable-item');
      if (!item) return;
      e.preventDefault();
      search.value = item.dataset.label || '';
      hidden.value = item.dataset.id || '';
      wrap.classList.remove('open');
    });
    _wireDetailAssigneeOutside();

    return (newUsers) => {
      _users = newUsers.slice();
      currentId = hidden.value;
      if (wrap.classList.contains('open')) render(search.value);
      // Re-pinta la etiqueta si el asignado actual ya tiene nombre/rol resuelto
      const cur = _users.find(u => u.id === hidden.value);
      if (cur && document.activeElement !== search) search.value = _assigneeLabel(cur);
    };
  }

  // ── Chips de asignado ────────────────────────────────
  function _renderAssigneeChips(team, assigneeIds) {
    const wrap = document.getElementById('assignee-filters');
    const allActive = _activeAssignees.size === 0;
    const chipsHTML = assigneeIds.map(id => {
      const m = _resolveMember(id, team);
      if (!m) return '';
      return `<div class="assignee-chip ${_activeAssignees.has(id) ? '' : 'inactive'}"
           data-id="${id}" style="background:${m.color}" title="${m.name}">${m.id}</div>`;
    }).join('');
    const clearBtnHTML = `
      <button class="assignee-clear-btn ${allActive ? 'active' : ''}"
              id="assignee-clear" title="Mostrar todos (sin filtro de asignado)">Todos</button>
    `;
    wrap.innerHTML = chipsHTML + clearBtnHTML;

    wrap.querySelectorAll('.assignee-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        const id = chip.dataset.id;
        if (_activeAssignees.has(id)) {
          _activeAssignees.delete(id);
        } else {
          _activeAssignees.add(id);
        }
        App.refreshBoard();
      });
    });

    document.getElementById('assignee-clear')?.addEventListener('click', () => {
      _activeAssignees.clear();
      App.refreshBoard();
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
    const member = _resolveMember(task.assignee, team);
    const client = clients.find(c => c.id === task.client);

    const assigneeEl = member
      ? `<div class="card-assignee" style="background:${member.color}" title="${member.name}">${member.id}</div>`
      : `<div class="card-unassigned" title="Sin asignar"></div>`;

    const dueStr    = task.dueDate ? _fmtShort(task.dueDate) : '';
    const dueDate   = task.dueDate ? new Date(task.dueDate + 'T00:00:00') : null;
    const today     = new Date(); today.setHours(0, 0, 0, 0);
    const diffDays  = dueDate ? Math.ceil((dueDate - today) / 864e5) : null;
    const isActive  = task.status !== 'done';
    const isOverdue = isActive && dueDate && dueDate < today;
    const isSoon    = isActive && !isOverdue && diffDays !== null && diffDays <= 3;

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

    const dueCls   = isOverdue ? 'overdue' : isSoon ? 'soon' : '';
    const alertBadge = isSoon
      ? `<div class="card-soon-badge">⚠ Próximo a vencer${diffDays === 0 ? ' — hoy' : diffDays === 1 ? ' — mañana' : ` — ${diffDays}d`}</div>`
      : '';

    const dueEl = dueStr
      ? `<span class="card-due ${dueCls}">📅 ${dueStr}</span>`
      : `<span class="card-due" style="color:var(--text-muted);font-style:italic">📅 —</span>`;

    // Badge de estado HD: solo si la tarea tiene N° de ticket
    const hdStatusEl = task.ticket
      ? `<select class="card-hd-status" data-ticket="${task.ticket}" data-story="${task.id}"
                 onclick="event.stopPropagation()" draggable="false"
                 title="Cambiar estado del ticket en Helpdesk">
           <option value="">HD: ${task.hdEstatus || '—'}</option>
           ${HD_STATUSES.map(s => `<option value="${s}">${s}</option>`).join('')}
         </select>`
      : '';

    return `
      <div class="story-card priority-${task.priority}${isSoon ? ' card-soon' : ''}"
           data-id="${task.id}" data-assignee="${task.assignee || ''}" draggable="true">
        <div class="card-top">
          <span class="card-ticket">#${task.ticket || '—'}</span>
          ${clientBadge}
          <button class="card-delete-btn" data-delete-id="${task.id}" data-delete-title="${(task.title||'').replace(/"/g,'&quot;')}" title="Eliminar tarea">✕</button>
        </div>
        <div class="card-title">${task.title}</div>
        ${alertBadge}
        ${hdStatusEl}
        ${extraEl}
        <div class="card-bottom">
          ${dueEl}
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
        <div class="card-prog-bar-bg">
          <div class="card-prog-bar-fill" id="bar-${task.id}"
               style="width:${pct}%;background:${color}"></div>
        </div>
        <input type="number" class="card-prog-num" draggable="false"
               min="0" max="100" step="5" value="${pct}" data-id="${task.id}">
      </div>
      ${waitingEl}`;
  }

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
        if (e.target.closest('.card-prog-wrap') || e.target.closest('.card-cert-wrap') || e.target.closest('.card-delete-btn')) return;
        const task = stories.find(s => s.id === card.dataset.id);
        if (task) _openDetail(task, team, clients);
      });
    });

    // Botón ✕ de eliminar tarea individual (con confirmación BORRAR)
    document.querySelectorAll('.card-delete-btn').forEach(btn => {
      btn.addEventListener('click', e => {
        e.stopPropagation();
        const id    = btn.dataset.deleteId;
        const title = btn.dataset.deleteTitle || 'esta tarea';
        if (_confirmDelete(title)) {
          AppData.deleteStory(id);
          App.refreshBoard();
          App.refreshBanner();
        }
      });
    });

    // Barra de progreso
    document.querySelectorAll('.card-prog-num').forEach(input => {
      input.addEventListener('input', e => {
        let pct = Math.min(100, Math.max(0, parseInt(e.target.value, 10) || 0));
        const bar = document.getElementById(`bar-${e.target.dataset.id}`);
        if (bar) { bar.style.width = pct + '%'; bar.style.background = _progColor(pct); }
      });
      input.addEventListener('change', e => {
        let raw = Math.min(100, Math.max(0, parseInt(e.target.value, 10) || 0));
        let pct = raw % 5 === 0 ? raw : Math.min(100, raw + (5 - raw % 5));
        e.target.value = pct;
        const bar = document.getElementById(`bar-${e.target.dataset.id}`);
        if (bar) { bar.style.width = pct + '%'; bar.style.background = _progColor(pct); }
        AppData.updateStoryProgress(e.target.dataset.id, pct);
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

    // Cambio de estado del ticket Helpdesk desde el board (Feature 5 + 6)
    document.querySelectorAll('.card-hd-status').forEach(sel => {
      sel.addEventListener('change', async e => {
        e.stopPropagation();
        const newStatus = sel.value;
        if (!newStatus) return;
        const ticketId  = sel.dataset.ticket;
        const storyId   = sel.dataset.story;
        sel.disabled    = true;
        try {
          // Feature 6: si el ticket no tiene asignado → auto-asignar al usuario actual
          const session = (App.getSession && App.getSession()) || {};
          await _maybeAutoAssign(ticketId, session.id);

          // PATCH del estado en el Helpdesk (sin auto-logout en 401/403)
          const r = await App.hdFetchSafe(
            `${App.hdBase()}/tickets/tickets/${ticketId}`,
            { method: 'PATCH',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ estado: newStatus }) }
          );
          if (!r.ok) throw new Error(r.status);

          // Actualizar local + refresh
          AppData.updateStoryHdEstatus(storyId, newStatus);
          App.refreshBoard();
        } catch (err) {
          console.warn('[HD status change]', err);
          alert('No se pudo cambiar el estado del ticket en Helpdesk.');
          sel.value = ''; // reset
        } finally {
          sel.disabled = false;
        }
      });
      // Bloquear que el select dispare drag/click de la card
      sel.addEventListener('mousedown',  e => e.stopPropagation());
      sel.addEventListener('dragstart',  e => { e.preventDefault(); e.stopPropagation(); });
    });

    // Checkbox certificado → mueve a DONE
    document.querySelectorAll('.cert-check').forEach(chk => {
      chk.addEventListener('change', e => {
        if (e.target.checked) {
          const id = e.target.dataset.id;
          AppData.updateStoryStatus(id, 'done');
          const task = _currentStories.find(s => s.id === id);
          if (task) _pushHdEstado(task, 'ENTREGADO');
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

  function _progColor(pct) {
    if (pct === 0)   return '#E0E0E0';
    if (pct <= 25)   return '#F29E3B';
    if (pct <= 50)   return '#F2811D';
    if (pct <= 75)   return '#04BAF0';
    return '#27AE60';
  }

  // Feature 6: consulta el ticket; si está sin asignar → lo asigna al usuario actual
  async function _maybeAutoAssign(ticketId, currentUserId) {
    if (!ticketId || !currentUserId) return;
    try {
      const r = await App.hdFetchSafe(`${App.hdBase()}/tickets/tickets/${ticketId}`);
      if (!r.ok) return;
      const raw = await r.json();
      const ticket = Array.isArray(raw) ? raw[0] : (raw.item || raw.data || raw);
      const assigned = ticket && (ticket.assigned_user_id || ticket.assignedUserId);
      if (!assigned) {
        await App.assignHdTicket(ticketId, currentUserId);
      }
    } catch (e) {
      // si falla el GET, no bloqueamos el cambio de estado — solo registramos
      console.warn('[HD auto-assign check]', e);
    }
  }

  // ── Drag & Drop ──────────────────────────────────────
  function _attachDragEvents() {
    const canMoveAll = document.body.classList.contains('can-move-all-cards');
    const session    = (typeof App !== 'undefined' && App.getSession) ? App.getSession() : {};
    const myId       = String((session && session.id) || '').trim().toUpperCase();

    // Marca visualmente las cards no movibles cuando el usuario está restringido
    document.querySelectorAll('.story-card').forEach(card => {
      const owner = String(card.dataset.assignee || '').trim().toUpperCase();
      if (!canMoveAll && (!owner || owner !== myId)) {
        card.classList.add('not-mine');
      }
    });

    document.querySelectorAll('.story-card').forEach(card => {
      card.addEventListener('dragstart', e => {
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'LABEL' || e.target.tagName === 'SPAN') {
          e.preventDefault(); return;
        }
        // Permiso: si no soy supervisor/helpdesk, solo puedo mover mis propias cards
        if (!canMoveAll) {
          const owner = String(card.dataset.assignee || '').trim().toUpperCase();
          if (!owner || owner !== myId) {
            e.preventDefault();
            return;
          }
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
          const task   = _currentStories.find(s => s.id === _draggedId);
          const target = col.dataset.status;
          if (task && task.status === 'todo' && target === 'in_progress' && !_canStartWork(task)) {
            return; // bloqueado o cancelado: la tarea se queda en To Do
          }
          AppData.updateStoryStatus(_draggedId, target);
          if (target === 'in_progress')  _pushHdEstado(task, 'EN PROCESO');
          else if (target === 'review')  _pushHdEstado(task, 'INSTALADO PARA CERTIFICACIÓN');
          else if (target === 'done')    _pushHdEstado(task, 'ENTREGADO');
          App.refreshBoard();
          App.refreshBanner();
        }
      });
    });
  }

  // ── Modal detalle ────────────────────────────────────
  function _openDetail(task, team, clients) {
    const client = clients.find(c => c.id === task.client);
    const pLabel = { alta: 'Alta', media: 'Media', baja: 'Baja' }[task.priority];
    const dueStr = task.dueDate
      ? new Date(task.dueDate + 'T00:00:00').toLocaleDateString('es-ES', { day: '2-digit', month: 'long', year: 'numeric' })
      : '—';

    // Lista de asignables: empleados del Helpdesk (API), con fallback al team local.
    // Asegura que el asignado actual aparezca aunque no esté en la lista.
    let assigneeList = _hdUsers().length ? _hdUsers().slice() : team.map(m => ({ id: m.id, name: m.name, role: m.role || '' }));
    if (task.assignee && !assigneeList.some(m => m.id === task.assignee)) {
      const r = _resolveMember(task.assignee, team);
      assigneeList = [{ id: r.id, name: r.name, role: r.role || '' }, ...assigneeList];
    }

    // Prioridad y demás campos extra: editables solo en To Do / In Progress
    const editable = task.status === 'todo' || task.status === 'in_progress';

    const initPct   = task.progress ?? 0;
    const initColor = _progColor(initPct);

    document.getElementById('modal-card-id').textContent = task.id;
    const safeTitle = (task.title || '').replace(/"/g, '&quot;');
    const safeDesc  = task.description || '';
    document.getElementById('modal-card-body').innerHTML = `
      <input type="text" id="detail-title" class="detail-title-input" value="${safeTitle}" placeholder="Título de la tarea">
      <div class="detail-meta">
        ${task.ticket ? `<span class="card-ticket" style="font-size:13px">#${task.ticket}</span>` : ''}
        ${client ? `<span class="card-client-badge" style="background:${client.color}20;color:${client.color};border:1px solid ${client.color}40;font-size:12px;padding:3px 10px;border-radius:10px">${client.name}</span>` : ''}
      </div>
      <div class="detail-assignee-block" style="margin-top:14px;padding-top:14px;border-top:1px solid var(--border)">
        <label style="display:block;font-size:12px;color:var(--text-muted);margin-bottom:6px">Asignado a:</label>
        <div class="searchable-select" id="detail-assignee-wrap">
          <input type="text" id="detail-assignee-search" placeholder="Buscar por código o nombre..." autocomplete="off">
          <div class="searchable-select-list" id="detail-assignee-list"></div>
        </div>
        <input type="hidden" id="detail-assignee">
      </div>
      <div class="detail-status-row" style="margin-top:10px">
        <label>Prioridad:</label>
        ${editable
          ? `<select class="status-select" id="detail-priority">
               ${['alta','media','baja'].map(p => `<option value="${p}" ${task.priority === p ? 'selected' : ''}>${({alta:'Alta',media:'Media',baja:'Baja'})[p]}</option>`).join('')}
             </select>`
          : `<span class="badge badge-${task.priority}">${pLabel}</span>`}
      </div>
      <div class="detail-section-title">Descripción</div>
      <textarea id="detail-description" class="detail-description-input" rows="3" placeholder="Detalle adicional, contexto, pasos...">${safeDesc}</textarea>

      <div class="detail-section-title" style="margin-top:14px">Progreso</div>
      <div class="detail-prog-wrap">
        <div class="detail-prog-bar-bg">
          <div class="detail-prog-bar-fill" id="detail-bar"
               style="width:${initPct}%;background:${initColor}"></div>
        </div>
        <input type="number" class="card-prog-num" id="detail-prog"
               min="0" max="100" step="5" value="${initPct}">
        <span class="detail-prog-label" id="detail-prog-label">${initPct}%</span>
      </div>

      <div class="detail-status-row" style="margin-top:12px">
        <label>Estado:</label>
        <select class="status-select" id="detail-status">
          ${STATUSES.map(s => `<option value="${s}" ${task.status === s ? 'selected' : ''}>${STATUS_LABELS[s]}</option>`).join('')}
        </select>
      </div>
      <div class="detail-status-row" style="margin-top:10px">
        <label>📅 Fecha de entrega:</label>
        <input type="date" id="detail-duedate" value="${task.dueDate || ''}"
               style="font-size:12px;padding:5px 8px;border:1px solid var(--border);border-radius:var(--radius);background:var(--surface);color:var(--text)">
      </div>
      <div class="detail-status-row" style="margin-top:14px">
        <button class="btn-primary" id="detail-save" style="padding:5px 12px;font-size:12px">Guardar</button>
        <button class="btn-secondary" id="detail-delete" style="padding:5px 12px;font-size:12px;color:var(--error);border-color:var(--error)">Eliminar</button>
      </div>
      ${task.ticket ? `
      <div class="detail-status-row" style="margin-top:16px">
        <button class="btn-secondary detail-conv-btn" id="detail-conv-btn" disabled>💬 Cargando mensajes…</button>
      </div>` : ''}`;

    // Conversación del ticket: consulta fresco al API por número de ticket y
    // habilita un botón que abre la conversación en un popup independiente (mayor
    // visibilidad). El botón se activa cuando los mensajes terminan de cargar.
    // Nota: HelpdeskPanel es un `const` global (no window.*), de ahí el typeof.
    if (task.ticket && typeof HelpdeskPanel !== 'undefined'
        && typeof HelpdeskPanel.openConversationPopup === 'function') {
      const btn = document.getElementById('detail-conv-btn');
      let _msgs = null;
      HelpdeskPanel.getTicketMessages(task.ticket).then(msgs => {
        _msgs = msgs || [];
        if (!btn) return;
        if (!_msgs.length) { btn.textContent = '💬 Sin mensajes en este ticket'; return; } // queda disabled
        btn.textContent = `💬 Ver conversación (${_msgs.length})`;
        btn.disabled = false;
      }).catch(err => {
        console.error('[Card] Error cargando mensajes:', err);
        if (btn) btn.textContent = '💬 No se pudieron cargar los mensajes';
      });
      if (btn) btn.addEventListener('click', () => {
        if (btn.disabled) return;
        HelpdeskPanel.openConversationPopup(task.ticket, _msgs);
      });
    }

    // Dropdown buscable de asignado (código + nombre + rol)
    const _updateDetailAssignee = _setupDetailAssignee(assigneeList, task.assignee || '', team);

    // Cargar empleados del Helpdesk (API) y refrescar la lista del dropdown.
    // El render inicial ya puso un fallback; esto trae la lista completa aunque
    // aún no se haya hecho ↻ Sincronizar en la vista de Tickets.
    if (App && typeof App.fetchHdUsers === 'function' && _updateDetailAssignee) {
      App.fetchHdUsers().then(users => {
        if (!users || !users.length) return;
        let list = users.slice();
        if (task.assignee && !list.some(m => m.id === task.assignee)) {
          const r = _resolveMember(task.assignee, team);
          list = [{ id: r.id, name: r.name, role: r.role || '' }, ...list];
        }
        _updateDetailAssignee(list);
      });
    }

    // Barra de progreso en modal: actualización en tiempo real
    const progInput = document.getElementById('detail-prog');
    const progBar   = document.getElementById('detail-bar');
    const progLabel = document.getElementById('detail-prog-label');

    progInput.addEventListener('input', () => {
      const pct   = Math.min(100, Math.max(0, parseInt(progInput.value, 10) || 0));
      const color = _progColor(pct);
      progBar.style.width      = pct + '%';
      progBar.style.background = color;
      progLabel.textContent    = pct + '%';
    });
    progInput.addEventListener('change', () => {
      let raw = Math.min(100, Math.max(0, parseInt(progInput.value, 10) || 0));
      let pct = raw % 5 === 0 ? raw : Math.min(100, raw + (5 - raw % 5));
      progInput.value          = pct;
      progBar.style.width      = pct + '%';
      progBar.style.background = _progColor(pct);
      progLabel.textContent    = pct + '%';
    });

    document.getElementById('detail-save').addEventListener('click', () => {
      const newStatus = document.getElementById('detail-status').value;
      if (task.status === 'todo' && newStatus === 'in_progress' && !_canStartWork(task)) {
        return; // bloqueado o cancelado: el modal queda abierto sin guardar nada
      }
      let raw = Math.min(100, Math.max(0, parseInt(progInput.value, 10) || 0));
      let pct = raw % 5 === 0 ? raw : Math.min(100, raw + (5 - raw % 5));
      const newTitle = document.getElementById('detail-title').value.trim();
      const newDesc  = document.getElementById('detail-description').value.trim();
      if (!newTitle) { alert('El título no puede quedar vacío.'); return; }
      const newAssignee = document.getElementById('detail-assignee').value || null;
      AppData.updateStoryTitle(task.id, newTitle);
      AppData.updateStoryDescription(task.id, newDesc);
      AppData.updateStoryProgress(task.id, pct);
      AppData.updateStoryStatus(task.id, newStatus);
      AppData.updateStoryDueDate(task.id, document.getElementById('detail-duedate').value);
      AppData.updateStoryAssignee(task.id, newAssignee);
      const prioSel = document.getElementById('detail-priority');
      if (prioSel) AppData.updateStoryPriority(task.id, prioSel.value);
      // Si cambió el asignado y la tarea tiene ticket → reflejarlo en el Helpdesk (PUT)
      if (task.ticket && newAssignee && newAssignee !== task.assignee) {
        App.assignHdTicket(task.ticket, newAssignee).then(res => {
          if (res && res.ok) alert(
            `✓ Asignación OK en Helpdesk: ticket #${task.ticket} → ${newAssignee}\n` +
            `CAMPO CORRECTO: "${res.field}"`
          );
          else alert(
            `⚠️ La asignación NO quedó (ticket #${task.ticket} → ${newAssignee}).\n` +
            (res && res.tried ? `Campos probados:\n${res.tried.join('  ')}` : (res && res.detail) || 'sin respuesta')
          );
        });
      }
      // Sincronizar estado del ticket Helpdesk según el nuevo estado de la card
      if (newStatus === 'in_progress')  _pushHdEstado({ ...task, status: newStatus }, 'EN PROCESO');
      else if (newStatus === 'review')  _pushHdEstado({ ...task, status: newStatus }, 'INSTALADO PARA CERTIFICACIÓN');
      else if (newStatus === 'done')    _pushHdEstado({ ...task, status: newStatus }, 'ENTREGADO');
      document.getElementById('modal-card').classList.add('hidden');
      App.refreshBoard();
      App.refreshBanner();
    });

    document.getElementById('detail-delete').addEventListener('click', () => {
      if (_confirmDelete(task.title)) {
        AppData.deleteStory(task.id);
        document.getElementById('modal-card').classList.add('hidden');
        App.refreshBoard();
        App.refreshBanner();
      }
    });

    document.getElementById('modal-card').classList.remove('hidden');
  }

  // Confirmación de borrado: exige escribir la palabra BORRAR
  function _confirmDelete(title) {
    const input = prompt(
      `⚠️ Vas a eliminar la tarea:\n\n"${title}"\n\n` +
      `Esta acción NO se puede deshacer.\n\n` +
      `Para confirmar, escribe la palabra BORRAR (en mayúsculas):`
    );
    if (input === null) return false;
    if (String(input).trim() !== 'BORRAR') {
      alert('Confirmación incorrecta. No se eliminó nada.');
      return false;
    }
    return true;
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
