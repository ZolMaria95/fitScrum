const HelpdeskAuth = (() => {
  const _proxyUrl = window.HELPDESK_PROXY_URL && !window.HELPDESK_PROXY_URL.includes('TU-WORKER')
    ? window.HELPDESK_PROXY_URL : 'http://localhost:3001';
  const BASE       = _proxyUrl + '/api/v1';
  const SESSION_KEY = 'fit-daily_session';

  // Lee el token de la sesión actual del usuario
  function _token() {
    try {
      const s = JSON.parse(localStorage.getItem(SESSION_KEY) || 'null');
      return s?.token || null;
    } catch (_) { return null; }
  }

  // Login: pide credenciales al usuario y devuelve { token, profile }
  async function login(usernameOrEmail, password) {
    const r = await fetch(`${BASE}/auth/login`, {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify({
        username_or_email: usernameOrEmail,
        password,
        force_logout: 'true',
      }),
    });
    if (!r.ok) {
      const body = await r.text();
      throw new Error(`Login fallido (${r.status}): ${body}`);
    }
    const { access_token } = await r.json();

    // Obtener perfil del usuario recién logueado
    const me = await fetch(`${BASE}/users/me`, {
      headers: { Authorization: `Bearer ${access_token}` },
    });
    if (!me.ok) throw new Error(`No se pudo cargar el perfil (${me.status})`);
    const profile = await me.json();

    return { token: access_token, profile };
  }

  // Logout: notifica al server y limpia la sesión local
  async function logout() {
    const t = _token();
    if (t) {
      try {
        await fetch(`${BASE}/auth/logout`, {
          method: 'POST',
          headers: { Authorization: `Bearer ${t}` },
        });
      } catch (_) {}
    }
  }

  // Fetch con el token del usuario en sesión. En 401/403 expira sesión y redirige a login.
  async function fetchWithAuth(url, opts = {}) {
    const t = _token();
    const headers = { ...(opts.headers || {}) };
    if (t) headers.Authorization = `Bearer ${t}`;

    const r = await fetch(url, { ...opts, headers });

    if ((r.status === 401 || r.status === 403) && t) {
      // Token expirado o inválido → forzar re-login
      localStorage.removeItem(SESSION_KEY);
      alert('Tu sesión del Helpdesk expiró. Vuelve a iniciar sesión.');
      window.location.href = 'login.html';
    }

    return r;
  }

  return { login, logout, fetchWithAuth };
})();
