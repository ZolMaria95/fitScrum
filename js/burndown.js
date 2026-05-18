const Burndown = (() => {
  function render(sprint, stories, allSprints) {
    document.getElementById('chart-sprint-name').textContent = sprint.name;
    _renderMetrics(sprint, stories);
    _renderChart(sprint, stories);
    _renderVelocity(allSprints.sprints);
  }

  function _renderMetrics(sprint, stories) {
    const total      = stories.length;
    const done       = stories.filter(s => s.status === 'done').length;
    const inProgress = stories.filter(s => s.status === 'in_progress').length;
    const pending    = stories.filter(s => s.status === 'todo').length;
    const pct        = total > 0 ? Math.round((done / total) * 100) : 0;

    const start       = new Date(sprint.start + 'T00:00:00');
    const end         = new Date(sprint.end   + 'T00:00:00');
    const today       = new Date();
    const totalDays   = Math.ceil((end - start) / 864e5) + 1;
    const elapsedDays = Math.min(Math.ceil((today - start) / 864e5) + 1, totalDays);
    const daysLeft    = Math.max(0, Math.ceil((end - today) / 864e5));

    const statusClass = pct >= 80 ? 'ok' : pct >= 50 ? 'warn' : 'error';

    document.getElementById('metrics-grid').innerHTML = `
      <div class="metric-card">
        <div class="metric-label">Completadas</div>
        <div class="metric-value ${statusClass}">${pct}%</div>
        <div class="metric-sub">${done} / ${total} tareas</div>
      </div>
      <div class="metric-card">
        <div class="metric-label">En Progreso</div>
        <div class="metric-value warn">${inProgress}</div>
        <div class="metric-sub">tarea${inProgress !== 1 ? 's' : ''} en curso</div>
      </div>
      <div class="metric-card">
        <div class="metric-label">Pendientes</div>
        <div class="metric-value">${pending}</div>
        <div class="metric-sub">tarea${pending !== 1 ? 's' : ''} sin iniciar</div>
      </div>
      <div class="metric-card">
        <div class="metric-label">Días restantes</div>
        <div class="metric-value ${daysLeft <= 2 ? 'warn' : ''}">${daysLeft}</div>
        <div class="metric-sub">Día ${elapsedDays} de ${totalDays}</div>
      </div>`;
  }

  function _renderChart(sprint, stories) {
    const canvas = document.getElementById('burndown-chart');
    const ctx    = canvas.getContext('2d');

    const start = new Date(sprint.start + 'T00:00:00');
    const end   = new Date(sprint.end   + 'T00:00:00');
    const total = stories.length;

    const days = [];
    for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
      days.push(new Date(d));
    }

    const n          = days.length - 1;
    const idealLine  = days.map((_, i) => total - (total / n) * i);

    const today       = new Date();
    const elapsed     = Math.min(Math.ceil((today - start) / 864e5), n);
    const done        = stories.filter(s => s.status === 'done').length;

    // Simulate realistic burndown: slight delay at start, acceleration toward end
    const actualLine = days.map((_, i) => {
      if (i > elapsed) return null;
      const t = i / elapsed;
      const burnt = done * (t < 0.3 ? t * 0.5 : 0.15 + (t - 0.3) * 1.21);
      return Math.max(0, Math.round(total - burnt));
    });

    _drawChart(ctx, canvas, days, idealLine, actualLine, total);
  }

  function _drawChart(ctx, canvas, days, idealLine, actualLine, total) {
    const W  = canvas.width;
    const H  = canvas.height;
    const PL = 50, PR = 24, PT = 16, PB = 36;
    const CW = W - PL - PR;
    const CH = H - PT - PB;

    ctx.clearRect(0, 0, W, H);

    const x = i => PL + (i / (days.length - 1)) * CW;
    const y = v => PT + CH - (v / total) * CH;

    // Grid
    [0, 0.25, 0.5, 0.75, 1].forEach(t => {
      const yy = PT + CH * t;
      ctx.strokeStyle = '#E8E8EE';
      ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(PL, yy); ctx.lineTo(PL + CW, yy); ctx.stroke();
      ctx.fillStyle = '#8A8A9A';
      ctx.font = '11px Inter, sans-serif';
      ctx.textAlign = 'right';
      ctx.fillText(Math.round(total * (1 - t)), PL - 6, yy + 4);
    });

    // X labels
    ctx.fillStyle = '#8A8A9A';
    ctx.textAlign = 'center';
    ctx.font = '11px Inter, sans-serif';
    days.forEach((d, i) => {
      if (i % 2 === 0 || i === days.length - 1) {
        ctx.fillText(`${d.getDate()}/${d.getMonth() + 1}`, x(i), H - 8);
      }
    });

    // Ideal line (dashed)
    ctx.strokeStyle = '#D0D0DA';
    ctx.lineWidth = 1.5;
    ctx.setLineDash([5, 4]);
    ctx.beginPath();
    idealLine.forEach((v, i) => i === 0 ? ctx.moveTo(x(i), y(v)) : ctx.lineTo(x(i), y(v)));
    ctx.stroke();
    ctx.setLineDash([]);

    // Actual line
    ctx.strokeStyle = '#04BAF0';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    let started = false;
    actualLine.forEach((v, i) => {
      if (v === null) return;
      if (!started) { ctx.moveTo(x(i), y(v)); started = true; }
      else ctx.lineTo(x(i), y(v));
    });
    ctx.stroke();

    // Today dot
    const lastActual = actualLine.filter(v => v !== null);
    if (lastActual.length) {
      const li = actualLine.lastIndexOf(lastActual[lastActual.length - 1]);
      ctx.fillStyle = '#04BAF0';
      ctx.beginPath();
      ctx.arc(x(li), y(actualLine[li]), 5, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#fff';
      ctx.beginPath();
      ctx.arc(x(li), y(actualLine[li]), 2.5, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function _renderVelocity(sprints) {
    const completed = sprints.filter(s => s.status === 'completed');
    const active    = sprints.find(s => s.status === 'active');
    const maxPts    = Math.max(...completed.map(s => s.capacity), 10);

    const completedBars = completed.map(s => {
      const sprintTasks = AppData.getStoriesBySprint(s.id);
      return { name: s.name, count: sprintTasks.filter(t => t.status === 'done').length, current: false };
    });

    const bars = [...completedBars];
    if (active) {
      const activeTasks = AppData.getStoriesBySprint(active.id);
      bars.push({ name: active.name, count: activeTasks.filter(t => t.status === 'done').length, current: true });
    }

    const maxCount = Math.max(...bars.map(b => b.count), 1);

    document.getElementById('velocity-bars').innerHTML = bars.map(b => `
      <div class="velocity-bar-wrap">
        <div class="velocity-bar-pts">${b.count}${b.current ? '…' : ''}</div>
        <div class="velocity-bar ${b.current ? 'active-sprint' : ''}"
             style="height:${Math.max(8, (b.count / maxCount) * 100)}%"></div>
        <div class="velocity-bar-label">${b.name}</div>
      </div>`).join('');
  }

  return { render };
})();
