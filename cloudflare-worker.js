/**
 * Cloudflare Worker — Fit-Daily Helpdesk proxy (transparente)
 *
 * Cada usuario autentica con sus credenciales reales del Helpdesk
 * desde el cliente. El Worker NO mantiene credenciales — solo:
 *   • añade CORS
 *   • restringe métodos a GET/POST/OPTIONS
 *   • reenvía todas las requests al API real preservando Authorization
 *
 * Variables de entorno requeridas:
 *   HD_API_BASE → https://helpdesk-api.fit-bank.com/api/v1
 */

const CORS = {
  'Access-Control-Allow-Origin':   '*',
  'Access-Control-Allow-Methods':  'GET, POST, PATCH, OPTIONS',
  'Access-Control-Allow-Headers':  'Content-Type, Authorization',
  'Access-Control-Expose-Headers': 'Content-Disposition, Content-Type, Content-Length',
  'Access-Control-Max-Age':        '86400',
};

const ALLOWED_METHODS    = new Set(['GET', 'POST', 'PATCH', 'OPTIONS', 'HEAD']);
const PASSTHROUGH_HEADERS = ['content-type', 'content-disposition', 'content-length'];

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

    if (!ALLOWED_METHODS.has(request.method)) {
      return new Response(
        JSON.stringify({ error: `Método ${request.method} no permitido.` }),
        { status: 405, headers: { ...CORS, 'Content-Type': 'application/json', 'Allow': 'GET, POST, PATCH' } },
      );
    }

    const url       = new URL(request.url);
    const targetUrl = env.HD_API_BASE + url.pathname.replace(/^\/api\/v1/, '') + url.search;

    // Reconstruir headers — solo propagamos Content-Type y Authorization del cliente
    const fwdHeaders = {
      'User-Agent': 'Mozilla/5.0 (compatible; FitDaily/1.0)',
    };
    const ct = request.headers.get('content-type');
    if (ct) fwdHeaders['Content-Type'] = ct;
    const auth = request.headers.get('authorization');
    if (auth) fwdHeaders['Authorization'] = auth;

    const init = { method: request.method, headers: fwdHeaders };
    if (request.method !== 'GET' && request.method !== 'HEAD') {
      init.body = await request.arrayBuffer();
    }

    try {
      const resp = await fetch(targetUrl, init);
      const body = await resp.arrayBuffer();
      return _buildResponse(body, resp);
    } catch (err) {
      return new Response(
        JSON.stringify({ error: err.message }),
        { status: 502, headers: { ...CORS, 'Content-Type': 'application/json' } },
      );
    }
  },
};
