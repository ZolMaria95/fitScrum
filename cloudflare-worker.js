/**
 * Cloudflare Worker — fitScrum Helpdesk proxy
 *
 * DESPLIEGUE:
 *   1. dash.cloudflare.com → Workers & Pages → Create Worker
 *   2. Pega este código y haz Deploy.
 *   3. En Settings → Variables → agregar como Secrets (NO como texto plano):
 *        HD_USERNAME  → HELPDESK1
 *        HD_PASSWORD  → <la contraseña real>
 *        HD_API_BASE  → https://helpdesk-api.fit-bank.com/api/v1
 *
 * El Worker gestiona el token internamente. El cliente nunca envía credenciales.
 */

const CORS = {
  'Access-Control-Allow-Origin':  '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

// Token cache en memoria del Worker (persiste entre requests del mismo isolate)
let _cachedToken  = null;
let _tokenExpiry  = 0;
const TOKEN_TTL   = 50 * 60 * 1000; // 50 minutos

async function _getToken(env) {
  if (_cachedToken && Date.now() < _tokenExpiry) return _cachedToken;

  const r = await fetch(`${env.HD_API_BASE}/auth/login`, {
    method:  'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username_or_email: env.HD_USERNAME,
      password:          env.HD_PASSWORD,
      force_logout:      'true',
    }),
  });

  if (!r.ok) throw new Error(`Worker login failed: ${r.status}`);
  const { access_token } = await r.json();
  _cachedToken = access_token;
  _tokenExpiry = Date.now() + TOKEN_TTL;
  return _cachedToken;
}

export default {
  async fetch(request, env) {
    // Preflight CORS
    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 200, headers: CORS });
    }

    const url       = new URL(request.url);
    const targetUrl = env.HD_API_BASE + url.pathname.replace(/^\/api\/v1/, '') + url.search;

    try {
      const token = await _getToken(env);

      const init = {
        method:  request.method,
        headers: {
          'Content-Type':  'application/json',
          'Authorization': `Bearer ${token}`,
        },
      };

      if (request.method !== 'GET' && request.method !== 'HEAD') {
        init.body = await request.arrayBuffer();
      }

      const resp = await fetch(targetUrl, init);
      const body = await resp.arrayBuffer();

      const headers = new Headers(CORS);
      headers.set('Content-Type', resp.headers.get('Content-Type') || 'application/json');

      return new Response(body, { status: resp.status, headers });
    } catch (err) {
      // Si el token expiró forzar renovación en el próximo request
      _cachedToken = null;
      _tokenExpiry = 0;
      return new Response(
        JSON.stringify({ error: err.message }),
        { status: 502, headers: { ...CORS, 'Content-Type': 'application/json' } },
      );
    }
  },
};
