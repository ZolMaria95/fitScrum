/**
 * Cloudflare Worker — Fit-Daily Helpdesk proxy
 *
 * DESPLIEGUE:
 *   1. dash.cloudflare.com → Workers & Pages → Create Worker
 *   2. Pega este código y haz Deploy.
 *   3. En Settings → Variables → agregar como Secrets (NO como texto plano):
 *        HD_USERNAME  → HELPDESK1
 *        HD_PASSWORD  → MtRuLxgDz6q5
 *        HD_API_BASE  → https://helpdesk-api.fit-bank.com/api/v1
 *
 * El Worker gestiona el token internamente. El cliente nunca envía credenciales.
 */

const CORS = {
  'Access-Control-Allow-Origin':  '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Expose-Headers': 'Content-Disposition, Content-Type, Content-Length',
};

// Headers de la respuesta upstream que debemos propagar al cliente
const PASSTHROUGH_HEADERS = ['content-type', 'content-disposition', 'content-length'];

// Token cache en memoria del Worker (persiste entre requests del mismo isolate)
let _cachedToken  = null;
let _tokenExpiry  = 0;
const TOKEN_TTL   = 50 * 60 * 1000; // 50 minutos

async function _getToken(env) {
  if (_cachedToken && Date.now() < _tokenExpiry) return _cachedToken;

  const opts = {
    method:  'POST',
    headers: {
      'Content-Type': 'application/json',
      'User-Agent':   'Mozilla/5.0 (compatible; FitDaily/1.0)',
    },
    body: JSON.stringify({
      username_or_email: env.HD_USERNAME,
      password:          env.HD_PASSWORD,
      force_logout:      'true',
    }),
  };

  let r = await fetch(`${env.HD_API_BASE}/auth/login`, opts);

  // 409: sesión activa pese a force_logout — reintentar una vez
  if (r.status === 409) {
    _cachedToken = null;
    _tokenExpiry = 0;
    r = await fetch(`${env.HD_API_BASE}/auth/login`, opts);
  }

  if (!r.ok) {
    const body = await r.text();
    throw new Error(`Worker login failed: ${r.status} — ${body}`);
  }
  const { access_token } = await r.json();
  _cachedToken = access_token;
  _tokenExpiry = Date.now() + TOKEN_TTL;
  return _cachedToken;
}

// Reenvía una request al API con un token dado
async function _forward(targetUrl, request, token, bodyBuffer) {
  const init = {
    method: request.method,
    headers: {
      'Content-Type':  'application/json',
      'Authorization': `Bearer ${token}`,
    },
  };
  if (bodyBuffer !== undefined) init.body = bodyBuffer;
  return fetch(targetUrl, init);
}

// Construye la respuesta final propagando headers relevantes del upstream
function _buildResponse(body, upstreamResp) {
  const headers = new Headers(CORS);
  PASSTHROUGH_HEADERS.forEach(name => {
    const v = upstreamResp.headers.get(name);
    if (v) headers.set(name, v);
  });
  if (!headers.has('Content-Type')) headers.set('Content-Type', 'application/json');
  return new Response(body, { status: upstreamResp.status, headers });
}

export default {
  async fetch(request, env) {
    // Preflight CORS
    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 200, headers: CORS });
    }

    const url       = new URL(request.url);
    const targetUrl = env.HD_API_BASE + url.pathname.replace(/^\/api\/v1/, '') + url.search;

    // Leer body una sola vez (para poder reintentar)
    let bodyBuffer;
    if (request.method !== 'GET' && request.method !== 'HEAD') {
      bodyBuffer = await request.arrayBuffer();
    }

    try {
      let token = await _getToken(env);
      let resp  = await _forward(targetUrl, request, token, bodyBuffer);

      // Token inválido → forzar logout + re-login + reintento (una sola vez)
      if (resp.status === 401 || resp.status === 403) {
        _cachedToken = null;
        _tokenExpiry = 0;
        token = await _getToken(env);
        resp  = await _forward(targetUrl, request, token, bodyBuffer);
      }

      const body = await resp.arrayBuffer();
      return _buildResponse(body, resp);
    } catch (err) {
      _cachedToken = null;
      _tokenExpiry = 0;
      return new Response(
        JSON.stringify({ error: err.message }),
        { status: 502, headers: { ...CORS, 'Content-Type': 'application/json' } },
      );
    }
  },
};
