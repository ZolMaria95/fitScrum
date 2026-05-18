const Consultas = (() => {
  let _filter = 'all';

  function render(queries, stories, team) {
    _renderList(_applyFilter(queries), stories, team);

    document.querySelectorAll('[data-qfilter]').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('[data-qfilter]').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        _filter = btn.dataset.qfilter;
        _renderList(_applyFilter(AppData.getQueries()), AppData.getAllStories(), AppData.getTeam());
      });
    });
  }

  function _applyFilter(queries) {
    if (_filter === 'all') return queries;
    return queries.filter(q => q.status === _filter);
  }

  function _renderList(queries, stories, team) {
    const list = document.getElementById('consultas-list');
    const sorted = [...queries].sort((a, b) => {
      if (a.status === 'open' && b.status !== 'open') return -1;
      if (a.status !== 'open' && b.status === 'open') return 1;
      return b.date.localeCompare(a.date);
    });

    if (!sorted.length) {
      list.innerHTML = '<div class="empty-state">No hay consultas registradas.</div>';
      return;
    }

    list.innerHTML = sorted.map(q => {
      const author     = team.find(m => m.id === q.author);
      const respondent = q.respondedBy ? team.find(m => m.id === q.respondedBy) : null;
      const story      = q.storyId ? stories.find(s => s.id === q.storyId) : null;

      return `
        <div class="query-card status-${q.status}">
          <div class="query-top">
            <span class="query-id">${q.id}</span>
            <span class="query-title">${q.title}</span>
            <div class="query-badges">
              <span class="badge badge-${q.priority}">${q.priority}</span>
              <span class="badge badge-${q.status}">${q.status === 'open' ? 'Abierta' : 'Resuelta'}</span>
            </div>
          </div>
          <div class="query-description">${q.description}</div>
          ${q.response ? `
            <div class="query-response">
              <div class="query-response-label">Respuesta — ${respondent?.name || q.respondedBy}</div>
              ${q.response}
            </div>` : `
            <div style="margin-top:10px">
              <button class="btn-secondary" style="font-size:12px" onclick="Consultas.openResolve('${q.id}')">
                Marcar como resuelta
              </button>
            </div>`}
          <div class="query-footer">
            <span>Por <strong>${author?.name || q.author}</strong> · ${_fmtDate(q.date)}</span>
            ${story ? `<span class="query-story-ref">→ ${story.id}</span>` : ''}
          </div>
        </div>`;
    }).join('');
  }

  function openResolve(queryId) {
    document.getElementById('resolve-query-id').value = queryId;
    document.getElementById('resolve-response').value = '';

    const team = AppData.getTeam();
    document.getElementById('resolve-author').innerHTML =
      team.map(m => `<option value="${m.id}">${m.name}</option>`).join('');

    document.getElementById('modal-resolve').classList.remove('hidden');
  }

  function initForm(stories, team) {
    const sprintId = AppData.getActiveSprint().id;

    document.getElementById('nq-story').innerHTML =
      `<option value="">Sin historia relacionada</option>` +
      stories.filter(s => s.sprint === sprintId)
        .map(s => `<option value="${s.id}">${s.id} — ${s.title.substring(0, 45)}</option>`).join('');

    document.getElementById('nq-author').innerHTML =
      team.map(m => `<option value="${m.id}">${m.name}</option>`).join('');
  }

  function _fmtDate(str) {
    return new Date(str + 'T00:00:00').toLocaleDateString('es-ES', { day: '2-digit', month: 'short', year: 'numeric' });
  }

  return { render, openResolve, initForm };
})();
