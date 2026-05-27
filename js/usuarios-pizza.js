const UsuariosPizza = (() => {
  const MOTIVOS = {
    vacaciones: 'Más de 15 días de vacaciones ininterrumpidos',
    atentado:   'Atentado en el sistema',
  };
  const DOS_SEMANAS_MS = 14 * 24 * 60 * 60 * 1000;

  function setup() {
    const form      = document.getElementById('form-pizza');
    const motivoSel = document.getElementById('pizza-motivo');
    const detalleGr = document.getElementById('pizza-detalle-group');
    const nombreSel = document.getElementById('pizza-nombre');

    if (!form || !motivoSel || !detalleGr || !nombreSel) return;

    // Poblar select con usuarios del proyecto — getTeam() devuelve el array directamente
    const users = AppData.getTeam() || [];
    users.forEach(u => {
      const opt       = document.createElement('option');
      opt.value       = u.name;
      opt.textContent = `${u.name} (${u.role})`;
      nombreSel.appendChild(opt);
    });

    motivoSel.addEventListener('change', () => {
      detalleGr.classList.toggle('hidden', motivoSel.value !== 'atentado');
    });

    form.addEventListener('submit', e => {
      e.preventDefault();
      const nombre  = nombreSel.value;
      const motivo  = motivoSel.value;
      const detalle = document.getElementById('pizza-detalle').value.trim();
      if (!nombre || !motivo) return;
      AppData.addUsuarioPizza({ nombre, motivo, detalle: motivo === 'atentado' ? detalle : '', paid: false });
      form.reset();
      detalleGr.classList.add('hidden');
      render();
    });
  }

  function _daysAgo(isoStr) {
    return Math.floor((Date.now() - new Date(isoStr).getTime()) / (1000 * 60 * 60 * 24));
  }

  function _renderStats(lista, container) {
    if (!lista.length) { container.innerHTML = ''; return; }

    const counts = {};
    lista.forEach(u => {
      counts[u.nombre] = (counts[u.nombre] || 0) + 1;
    });

    const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]);

    container.innerHTML = `
      <div class="pizza-stats">
        <h3 class="pizza-stats-title">Estadísticas</h3>
        <div class="pizza-stats-grid">
          ${sorted.map(([nombre, n]) => `
            <div class="pizza-stat-card">
              <span class="pizza-stat-name">${nombre}</span>
              <span class="pizza-stat-count">${n} vez${n > 1 ? 'es' : ''}</span>
            </div>
          `).join('')}
        </div>
      </div>`;
  }

  function render() {
    const container  = document.getElementById('pizza-list');
    const statsEl    = document.getElementById('pizza-stats-container');
    if (!container) return;

    const lista = AppData.getUsuariosPizza();

    if (statsEl) _renderStats(lista, statsEl);

    // Alerta si hay entradas sin pagar de más de 2 semanas
    const vencidas = lista.filter(u => !u.paid && (Date.now() - new Date(u.addedAt).getTime()) >= DOS_SEMANAS_MS);
    const alertEl  = document.getElementById('pizza-alert');
    if (alertEl) {
      if (vencidas.length) {
        const nombres = [...new Set(vencidas.map(u => u.nombre))].join(', ');
        alertEl.innerHTML = `⚠️ <strong>${nombres}</strong> ${vencidas.length === 1 ? 'tiene' : 'tienen'} una pizza pendiente de hace más de 2 semanas.`;
        alertEl.classList.remove('hidden');
      } else {
        alertEl.classList.add('hidden');
      }
    }

    if (!lista.length) {
      container.innerHTML = '<p class="pendientes-empty">No hay usuarios registrados esta semana.</p>';
      return;
    }

    container.innerHTML = `
      <table class="pendientes-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Motivo</th>
            <th>Detalle</th>
            <th>Registrado</th>
            <th>Estado</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          ${lista.map((u, i) => {
            const dias      = _daysAgo(u.addedAt);
            const vencida   = !u.paid && dias >= 14;
            const rowClass  = u.paid ? 'pizza-row-paid' : vencida ? 'pizza-row-vencida' : '';
            return `
            <tr class="pendientes-row ${rowClass}">
              <td>${i + 1}</td>
              <td><strong>${u.nombre}</strong></td>
              <td class="pizza-motivo-cell pizza-motivo-${u.motivo}">${MOTIVOS[u.motivo] || u.motivo}</td>
              <td class="pizza-detalle-cell">${u.detalle || '—'}</td>
              <td class="pendientes-date">
                ${u.addedAt ? u.addedAt.split('T')[0] : ''}
                ${vencida ? '<span class="pizza-badge-vencida">+2 sem</span>' : ''}
              </td>
              <td>
                ${u.paid
                  ? `<span class="pizza-badge-paid">✓ Pagó ${u.paidAt ? u.paidAt.split('T')[0] : ''}</span>`
                  : `<button class="btn-pizza-pago" data-id="${u.id}">🍕 Pagó</button>`}
              </td>
              <td>
                <button class="btn-remove-pizza btn-danger-sm" data-id="${u.id}" title="Eliminar">✕</button>
              </td>
            </tr>`;
          }).join('')}
        </tbody>
      </table>`;

    container.querySelectorAll('.btn-pizza-pago').forEach(btn => {
      btn.addEventListener('click', () => {
        AppData.markPizzaPaid(btn.dataset.id);
        render();
      });
    });

    container.querySelectorAll('.btn-remove-pizza').forEach(btn => {
      btn.addEventListener('click', () => {
        if (confirm('¿Eliminar este registro?')) {
          AppData.removeUsuarioPizza(btn.dataset.id);
          render();
        }
      });
    });
  }

  return { setup, render };
})();
