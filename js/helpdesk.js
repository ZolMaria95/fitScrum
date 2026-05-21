const Helpdesk = (() => {
  const _proxyUrl = window.HELPDESK_PROXY_URL && !window.HELPDESK_PROXY_URL.includes('TU-WORKER')
    ? window.HELPDESK_PROXY_URL : 'http://localhost:3001';
  const BASE = _proxyUrl + '/api/v1';

  // Login + logout por operación para evitar sesiones colgadas que bloquean al usuario.
  async function _login() {
    const r = await fetch(`${BASE}/auth/login`, {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username_or_email: window.HD_USERNAME || 'HELPDESK1',
        password:          window.HD_PASSWORD || '',
        force_logout:      'true',
      }),
    });
    if (!r.ok) throw new Error(`Helpdesk login failed: ${r.status}`);
    const { access_token } = await r.json();
    return access_token;
  }
  async function _logout(token) {
    if (!token) return;
    try {
      await fetch(`${BASE}/auth/logout`, {
        method:  'POST',
        headers: { Authorization: `Bearer ${token}` },
      });
    } catch (_) {}
  }

  // Mapeo nombre API → ID de cliente en Fit-Daily
  const CLIENT_MAP = {
    'COOPERATIVA DE AHORRO Y CREDITO ERCO': 'erco',
    'COAC CAPCPE GUALAQUIZA':               'gualaquiza',
    'COAC LA DOLOROSA DURAN':               'dolorosa',
    'PADRE JULIAN LORENTE':                 'julian',
    'COAC CACEL':                           'cacel',
    'COAC 4 RIOS':                          '4rios',
    'LITARGMODE CIA LTDA':                  'litarg',
    'COAC COPAC AUSTRO LTDA':               'copac_austro',
    'BANCO DEL AUSTRO':                     'austro',
    'VAZCREDIT':                            'vazcredit',
    'COAC SENOR DE GIRON':                  'giron',
    'COAC SEÑOR DE GIRON':                  'giron',
  };

  async function lookupTicket(ticketId) {
    let raw = null;
    let token;
    try { token = await _login(); } catch (_) { return null; }
    const headers = { Authorization: `Bearer ${token}` };

    try {
      // Intento 1: endpoint directo por ID
      try {
        const r = await fetch(`${BASE}/tickets/${ticketId}`, { headers });
        if (r.ok) raw = await r.json();
      } catch (_) {}

      // Intento 2: buscar en el listado paginado (primeras 2 páginas)
      if (!raw) {
        for (const offset of [0, 40]) {
          try {
            const r = await fetch(
              `${BASE}/tickets/tickets?limit=40&offset=${offset}&modified_date_order=desc`,
              { headers },
            );
            if (!r.ok) break;
            const data  = await r.json();
            const found = (data.items || []).find(t => String(t.ticket_id) === String(ticketId));
            if (found) { raw = found; break; }
          } catch (_) { break; }
        }
      }
    } finally {
      await _logout(token);
    }

    if (!raw) return null;

    const clientRaw = String(raw.cliente || '').trim().toUpperCase();
    const clientId  = CLIENT_MAP[clientRaw] || null;

    const priority = parseInt(raw.priority || 999, 10);
    const prioMap  = priority <= 1 ? 'alta' : priority <= 2 ? 'alta' : priority <= 3 ? 'media' : 'baja';

    return {
      ticket:   String(raw.ticket_id  || ticketId),
      title:    raw.subject           || '',
      client:   clientId,
      clientRaw,
      priority: prioMap,
    };
  }

  return { lookupTicket };
})();
