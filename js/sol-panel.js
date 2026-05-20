const SolPanel = (() => {
  const STATUS_LABELS = {
    todo:        'To Do',
    in_progress: 'En progreso',
    review:      'En certificación',
    done:        'Finalizado',
  };

  function render() {
    _renderPendingActions();
    _renderClientPending();
    _renderSoonDue();
    _renderNewTodo();
  }

  // ── Sección 0: Acciones pendientes (marcadas en Helpdesk) ──
  function _renderPendingActions() {
    const el = document.getElementById('sol-pending-actions');
    if (!el) return;

    const tickets = HelpdeskPanel.getPendingActionTickets();
    _setKpi('sol-kpi-actions', tickets.length);
    _setCount('sol-count-actions', tickets.length);

    if (!tickets.length) {
      el.innerHTML = `<div class="sol-empty-state" style="padding:20px">
        <div class="sol-empty-icon">✓</div>
        <div class="sol-empty-text">Sin acciones pendientes.</div>
      </div>`;
      return;
    }

    const notes = AppData.getHdNotes();

    el.innerHTML = `
      <table class="sol-table">
        <thead>
          <tr>
            <th>Ticket</th><th>Cliente</th><th>Asunto</th>
            <th>Nota / Resumen</th><th></th>
          </tr>
        </thead>
        <tbody>
          ${tickets.map((t, i) => {
            const note = notes[String(t.ticket)] || '';
            const bg   = i % 2 === 0 ? '' : 'style="background:#FFF5F5"';
            return `
              <tr ${bg}>
                <td class="sol-td-mono" style="color:#C0392B">#${t.ticket}</td>
                <td style="font-size:11.5px;font-weight:600">${t.clienteRaw}</td>
                <td style="font-size:12px;max-width:240px">${t.asunto}</td>
                <td style="font-size:11.5px;color:#666;max-width:200px">${note || '<span style="color:#bbb;font-style:italic">—</span>'}</td>
                <td><button class="sol-done-btn" data-ticket="${t.ticket}">Realizado ✓</button></td>
              </tr>`;
          }).join('')}
        </tbody>
      </table>`;

    el.querySelectorAll('.sol-done-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const ticketId = btn.dataset.ticket;
        AppData.setHdAction(ticketId, false);

        // Actualizar la tabla de helpdesk sin re-render completo si está visible
        const hdRow = document.querySelector(`.hd-row [data-ticket="${ticketId}"]`);
        if (hdRow) {
          const tr = hdRow.closest('tr');
          if (tr) tr.classList.remove('hd-row-action');
          const actionBtn = hdRow.closest('td')?.querySelector('.hd-action-btn');
          if (actionBtn) {
            actionBtn.classList.remove('hd-action-active');
            actionBtn.textContent = 'Acción';
            actionBtn.title = 'Marcar acción pendiente';
          }
        }

        _renderPendingActions();
      });
    });
  }

  // ── KPI helper ────────────────────────────────────────
  function _setKpi(id, n) {
    const el = document.getElementById(id);
    if (el) el.textContent = n;
  }
  function _setCount(id, n) {
    const el = document.getElementById(id);
    if (el) el.textContent = n === 0 ? 'Sin elementos' : `${n} elemento${n !== 1 ? 's' : ''}`;
  }

  // ── Sección 1: Tickets CLIENTE PENDIENTE 3+ días ─────
  function _renderClientPending() {
    const el = document.getElementById('sol-client-pending');
    if (!el) return;

    const tickets = HelpdeskPanel.getClientPendingTickets();
    const notes   = AppData.getSolNotes();

    _setKpi('sol-kpi-pending', tickets.length);
    _setCount('sol-count-pending', tickets.length);

    if (!tickets.length) {
      el.innerHTML = `<div class="sol-empty-state">
        <div class="sol-empty-icon">✓</div>
        <div class="sol-empty-text">Sin tickets pendientes de notificación al cliente.</div>
      </div>`;
      return;
    }

    el.innerHTML = [...tickets]
      .sort((a, b) => b.diasSinMovimiento - a.diasSinMovimiento)
      .map(t => {
        const note     = notes[t.ticket] || '';
        const msgShort = t.ultimoMensaje.length > 100
          ? t.ultimoMensaje.slice(0, 100) + '…'
          : t.ultimoMensaje;
        const urgent   = t.diasSinMovimiento > 7;
        return `
          <div class="sol-card sol-card-amber${urgent ? ' sol-card-urgent' : ''}" data-ticket="${t.ticket}">
            <div class="sol-card-top">
              <span class="sol-badge-ticket">#${t.ticket}</span>
              <span class="sol-badge-days ${urgent ? 'critical' : 'warn'}">${t.diasSinMovimiento}d</span>
            </div>
            <div class="sol-card-client">${t.clienteRaw}</div>
            <div class="sol-card-title">${t.asunto}</div>
            ${msgShort ? `<div class="sol-card-msg">${msgShort}</div>` : ''}
            <div class="sol-note-wrap" id="sol-note-${t.ticket}">
              ${note
                ? `<div class="sol-note-saved">
                     <span class="sol-note-text">📝 ${note}</span>
                     <button class="sol-note-edit-btn" data-id="${t.ticket}">Editar</button>
                   </div>`
                : `<button class="sol-note-add-btn" data-id="${t.ticket}">+ Agregar nota</button>`}
            </div>
          </div>`;
      }).join('');

    el.querySelectorAll('.sol-note-add-btn, .sol-note-edit-btn').forEach(btn => {
      btn.addEventListener('click', () =>
        _openNoteEditor(btn.dataset.id, notes[btn.dataset.id] || ''));
    });
  }

  function _openNoteEditor(ticketId, existing) {
    const wrap = document.getElementById(`sol-note-${ticketId}`);
    if (!wrap) return;
    wrap.innerHTML = `
      <div class="sol-note-editor">
        <textarea class="sol-note-textarea" id="sol-note-ta-${ticketId}"
                  rows="2" placeholder="Nota sobre el seguimiento con el cliente...">${existing}</textarea>
        <div class="sol-note-actions">
          <button class="btn-primary sol-note-save" data-id="${ticketId}">Guardar</button>
          <button class="btn-secondary sol-note-cancel" data-id="${ticketId}">Cancelar</button>
        </div>
      </div>`;

    wrap.querySelector('.sol-note-save').addEventListener('click', () => {
      const val = (document.getElementById(`sol-note-ta-${ticketId}`) || {}).value || '';
      AppData.setSolNote(ticketId, val);
      _renderClientPending();
    });
    wrap.querySelector('.sol-note-cancel').addEventListener('click', () => _renderClientPending());
    document.getElementById(`sol-note-ta-${ticketId}`)?.focus();
  }

  // ── Sección 2: Próximos a vencer ─────────────────────
  function _renderSoonDue() {
    const el = document.getElementById('sol-soon-due');
    if (!el) return;

    const today   = new Date(); today.setHours(0, 0, 0, 0);
    const team    = AppData.getTeam();
    const clients = AppData.getClients();

    const soon = AppData.getAllStories()
      .filter(s => {
        if (s.status === 'done' || !s.dueDate) return false;
        return Math.ceil((new Date(s.dueDate + 'T00:00:00') - today) / 864e5) <= 3;
      })
      .sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));

    _setKpi('sol-kpi-soon', soon.length);
    _setCount('sol-count-soon', soon.length);

    if (!soon.length) {
      el.innerHTML = `<div class="sol-empty-state">
        <div class="sol-empty-icon">✓</div>
        <div class="sol-empty-text">No hay tareas próximas a vencer.</div>
      </div>`;
      return;
    }

    el.innerHTML = soon.map(s => {
      const due    = new Date(s.dueDate + 'T00:00:00');
      const diff   = Math.ceil((due - today) / 864e5);
      const member = team.find(m => m.id === s.assignee);
      const client = clients.find(c => c.id === s.client);
      const isOverdue = diff < 0;

      const dayLabel = isOverdue
        ? `<span class="sol-badge-days critical">${Math.abs(diff)}d vencida</span>`
        : diff === 0
          ? `<span class="sol-badge-days critical">Hoy</span>`
          : diff === 1
            ? `<span class="sol-badge-days warn">Mañana</span>`
            : `<span class="sol-badge-days warn">${diff}d</span>`;

      return `
        <div class="sol-card sol-card-red${isOverdue ? ' sol-card-urgent' : ''}">
          <div class="sol-card-top">
            <span class="sol-badge-id">${s.id}</span>
            ${dayLabel}
            ${member
              ? `<span class="sol-avatar" style="background:${member.color}" title="${member.name}">${member.id}</span>`
              : '<span class="sol-avatar-empty" title="Sin asignar">?</span>'}
          </div>
          ${client ? `<div class="sol-card-client" style="color:${client.color}">${client.name}</div>` : ''}
          <div class="sol-card-title">${s.title}</div>
          <div class="sol-card-footer">
            <span class="sol-status-tag">${STATUS_LABELS[s.status] || s.status}</span>
            <span class="sol-due-date">📅 ${s.dueDate}</span>
          </div>
        </div>`;
    }).join('');
  }

  // ── Sección 3: Nuevas tareas To Do (por asignar) ─────
  function _renderNewTodo() {
    const el = document.getElementById('sol-new-todo');
    if (!el) return;

    const team    = AppData.getTeam();
    const clients = AppData.getClients();
    const todos   = AppData.getAllStories().filter(s => s.status === 'todo');

    _setKpi('sol-kpi-todo', todos.length);
    _setCount('sol-count-todo', todos.length);

    if (!todos.length) {
      el.innerHTML = `<div class="sol-empty-state" style="padding:24px 20px">
        <div class="sol-empty-icon">✓</div>
        <div class="sol-empty-text">No hay tareas pendientes de asignación.</div>
      </div>`;
      return;
    }

    el.innerHTML = `
      <table class="sol-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Ticket</th>
            <th>Título</th>
            <th>Cliente</th>
            <th>Prioridad</th>
            <th>Asignado a</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          ${todos.map((s, i) => {
            const client  = clients.find(c => c.id === s.client);
            const member  = team.find(m => m.id === s.assignee);
            const prioClr = s.priority === 'alta' ? '#E74C3C' : s.priority === 'media' ? '#F29E3B' : '#27AE60';
            const bg      = i % 2 === 0 ? '' : 'style="background:#F7FBFF"';
            return `
              <tr ${bg}>
                <td class="sol-td-mono">${s.id}</td>
                <td class="sol-td-mono">${s.ticket ? `#${s.ticket}` : '—'}</td>
                <td class="sol-td-title">${s.title}</td>
                <td>${client
                  ? `<span class="sol-client-dot" style="background:${client.color}20;color:${client.color};border:1px solid ${client.color}50">${client.name}</span>`
                  : '<span class="sol-td-muted">—</span>'}</td>
                <td><span class="sol-prio-pill" style="color:${prioClr};border-color:${prioClr}40;background:${prioClr}10">${s.priority.toUpperCase()}</span></td>
                <td>${member
                  ? `<span class="sol-avatar" style="background:${member.color}" title="${member.name}">${member.id}</span>`
                  : '<span class="sol-td-muted">Sin asignar</span>'}</td>
                <td><button class="sol-assign-btn" data-id="${s.id}">Asignado ✓</button></td>
              </tr>`;
          }).join('')}
        </tbody>
      </table>`;

    el.querySelectorAll('.sol-assign-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        AppData.updateStoryStatus(btn.dataset.id, 'in_progress');
        App.refreshBoard();
        _renderNewTodo();
      });
    });
  }

  function setup() {}

  return { render, setup };
})();
