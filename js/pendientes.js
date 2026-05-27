const Pendientes = (() => {
  function render() {
    const container = document.getElementById('pendientes-list');
    if (!container) return;

    const data = AppData.getHdPendientes();
    const items = Object.values(data).sort((a, b) => (b.addedAt || '').localeCompare(a.addedAt || ''));

    if (!items.length) {
      container.innerHTML = '<p class="pendientes-empty">No hay tickets pendientes.</p>';
      return;
    }

    container.innerHTML = `
      <table class="pendientes-table">
        <thead>
          <tr>
            <th>Ticket</th>
            <th>Cliente</th>
            <th>Asunto</th>
            <th>Agregado</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          ${items.map(item => `
            <tr class="pendientes-row" data-ticket="${item.ticket}">
              <td><span class="pendientes-ticket-num">#${item.ticket}</span></td>
              <td>${item.clienteRaw || '—'}</td>
              <td class="pendientes-asunto" title="${(item.asunto || '').replace(/"/g,'&quot;')}">${
                item.asunto && item.asunto.length > 70
                  ? item.asunto.slice(0, 70) + '…'
                  : (item.asunto || '—')
              }</td>
              <td class="pendientes-date">${item.addedAt ? item.addedAt.split('T')[0] : ''}</td>
              <td>
                <button class="btn-remove-pendiente btn-danger-sm" data-ticket="${item.ticket}" title="Quitar de pendientes">✕</button>
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>`;

    container.querySelectorAll('.btn-remove-pendiente').forEach(btn => {
      btn.addEventListener('click', () => {
        AppData.removeHdPendiente(btn.dataset.ticket);
        render();
      });
    });
  }

  return { render };
})();
