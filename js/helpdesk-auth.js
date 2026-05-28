const HelpdeskAuth = (() => {
  const _proxyUrl = window.HELPDESK_PROXY_URL && !window.HELPDESK_PROXY_URL.includes('TU-WORKER')
    ? window.HELPDESK_PROXY_URL : 'http://localhost:3001';
  const BASE    = _proxyUrl + '/api/v1';
  const LS_KEY  = 'fitdaily_hd_token';

  // El Cloudflare Worker gestiona el login internamente con sus propios secrets.
  // Si vamos por el Worker, el cliente NO debe loguear (causaría 409 SESSION_ALREADY_ACTIVE).
  const _viaWorker = _proxyUrl.includes('workers.dev');

  let _loginPromise = null;

  function _read() {
    try { return JSON.parse(localStorage.getItem(LS_KEY) || 'null'); }
    catch (_) { return null; }
  }
  function _write(token) {
    try { localStorage.setItem(LS_KEY, JSON.stringify({ token, ts: Date.now() })); }
    catch (_) {}
  }
  function clearToken() {
    try { localStorage.removeItem(LS_KEY); }
    catch (_) {}
  }

  async function _doLogin() {
    const body = JSON.stringify({
      username_or_email: window.HD_USERNAME || 'HELPDESK1',
      password:          window.HD_PASSWORD || '',
      force_logout:      'true',
    });
    const opts = { method: 'POST', headers: { 'Content-Type': 'application/json' }, body };

    let r = await fetch(`${BASE}/auth/login`, opts);

    // 409: sesión activa pese a force_logout — limpiar y reintentar una vez
    if (r.status === 409) {
      clearToken();
      r = await fetch(`${BASE}/auth/login`, opts);
    }

    if (!r.ok) throw new Error(`Helpdesk login failed: ${r.status}`);
    const { access_token } = await r.json();
    _write(access_token);
    return access_token;
  }

  // Deduplica logins concurrentes: todos los callers esperan la misma promesa
  function login() {
    if (_loginPromise) return _loginPromise;
    _loginPromise = _doLogin().finally(() => { _loginPromise = null; });
    return _loginPromise;
  }

  async function getToken() {
    const cached = _read();
    if (cached?.token) return cached.token;
    return login();
  }

  // Wrapper sobre fetch: inyecta Bearer y reintenta en 401/403 (token expirado)
  // Cuando vamos por el Cloudflare Worker, el cliente NO autentica — el Worker lo hace.
  async function fetchWithAuth(url, opts = {}) {
    if (_viaWorker) {
      // El Worker añade su propio Bearer; cualquier auth del cliente solo causaría
      // un 409 SESSION_ALREADY_ACTIVE al competir con la sesión interna del Worker.
      return fetch(url, opts);
    }

    let token = await getToken();
    let r = await fetch(url, {
      ...opts,
      headers: { ...(opts.headers || {}), Authorization: `Bearer ${token}` },
    });

    if (r.status === 401 || r.status === 403) {
      clearToken();
      token = await login(); // force_logout: 'true' cierra sesiones paralelas server-side
      r = await fetch(url, {
        ...opts,
        headers: { ...(opts.headers || {}), Authorization: `Bearer ${token}` },
      });
    }

    return r;
  }

  return { getToken, login, clearToken, fetchWithAuth };
})();
