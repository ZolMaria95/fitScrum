const Helpdesk = (() => {
  // Uses Cloudflare Worker URL when deployed; falls back to local proxy for dev
  const _proxyUrl = window.HELPDESK_PROXY_URL && !window.HELPDESK_PROXY_URL.includes('TU-WORKER')
    ? window.HELPDESK_PROXY_URL : 'http://localhost:3001';
  const BASE      = _proxyUrl + '/api/v1';
  const TOKEN_KEY = 'fitscrum_hd_token';

  // Mapeo nombre API → ID de cliente en fitScrum
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

  async function _getToken() {
    const cached = JSON.parse(sessionStorage.getItem(TOKEN_KEY) || 'null');
    if (cached && cached.expires > Date.now()) return cached.token;

    const r = await fetch(`${BASE}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username_or_email: 'HELPDESK1',
        password:          'MtRuLxgDz6q5',
        force_logout:      'true',
      }),
    });

    if (!r.ok) throw new Error(`Login fallido: ${r.status}`);
    const data  = await r.json();
    const token = data.access_token;

    // Cachear 50 minutos en sessionStorage
    sessionStorage.setItem(TOKEN_KEY, JSON.stringify({
      token,
      expires: Date.now() + 50 * 60 * 1000,
    }));
    return token;
  }

  async function lookupTicket(ticketId) {
    const token = await _getToken();
    const headers = { Authorization: `Bearer ${token}` };
    let raw = null;

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
            { headers }
          );
          if (!r.ok) break;
          const data  = await r.json();
          const found = (data.items || []).find(t => String(t.ticket_id) === String(ticketId));
          if (found) { raw = found; break; }
        } catch (_) { break; }
      }
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
