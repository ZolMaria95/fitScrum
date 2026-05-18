const Progreso = (() => {
  function render(entries, stories, team) {
    _populateFilters(stories, team);
    _renderList(entries, stories, team);

    document.getElementById('progreso-story-filter').onchange = () => _renderFiltered(stories, team);
    document.getElementById('progreso-author-filter').onchange = () => _renderFiltered(stories, team);
  }

  function _renderFiltered(stories, team) {
    const sf = document.getElementById('progreso-story-filter').value;
    const af = document.getElementById('progreso-author-filter').value;
    let entries = AppData.getProgress();
    if (sf) entries = entries.filter(e => e.storyId === sf);
    if (af) entries = entries.filter(e => e.author === af);
    _renderList(entries, stories, team);
  }

  function _populateFilters(stories, team) {
    const sprintId = AppData.getActiveSprint().id;
    const sprintStories = stories.filter(s => s.sprint === sprintId);

    document.getElementById('progreso-story-filter').innerHTML =
      `<option value="">Todas las historias</option>` +
      sprintStories.map(s =>
        `<option value="${s.id}">${s.id} — ${s.title.substring(0, 45)}...</option>`
      ).join('');

    document.getElementById('progreso-author-filter').innerHTML =
      `<option value="">Todos los miembros</option>` +
      team.map(m => `<option value="${m.id}">${m.name}</option>`).join('');
  }

  function _renderList(entries, stories, team) {
    const list = document.getElementById('progreso-list');
    const sorted = [...entries].sort((a, b) => b.date.localeCompare(a.date));

    if (!sorted.length) {
      list.innerHTML = '<div class="empty-state">No hay registros de progreso aún.</div>';
      return;
    }

    list.innerHTML = sorted.map(entry => {
      const member = team.find(m => m.id === entry.author);
      const story  = stories.find(s => s.id === entry.storyId);
      return `
        <div class="progreso-entry">
          <div class="entry-avatar" style="background:${member?.color || '#8A8A9A'}">${entry.author}</div>
          <div>
            <div class="entry-meta">
              <span class="entry-story-id">${entry.storyId}</span>
              <span class="entry-author">${member?.name || entry.author}</span>
              <span class="entry-date">${_fmtDate(entry.date)}</span>
            </div>
            ${story ? `<div class="entry-story-title">${story.title}</div>` : ''}
            <div class="entry-notes">${entry.notes}</div>
          </div>
          <div class="entry-hours">${entry.hoursLogged}h</div>
        </div>`;
    }).join('');
  }

  function initForm(stories, team) {
    const sprintId = AppData.getActiveSprint().id;
    const sprintStories = stories.filter(s => s.sprint === sprintId);

    document.getElementById('ne-story').innerHTML =
      sprintStories.map(s => `<option value="${s.id}">${s.id} — ${s.title.substring(0, 50)}</option>`).join('');

    document.getElementById('ne-author').innerHTML =
      team.map(m => `<option value="${m.id}">${m.name}</option>`).join('');
  }

  function _fmtDate(str) {
    return new Date(str + 'T00:00:00').toLocaleDateString('es-ES', { day: '2-digit', month: 'short', year: 'numeric' });
  }

  return { render, initForm };
})();
