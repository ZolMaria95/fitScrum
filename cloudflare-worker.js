/**
 * Cloudflare Worker — Fit-Daily Helpdesk proxy
 *
 * DESPLIEGUE:
 *   1. dash.cloudflare.com → Workers & Pages → Create Worker
 *   2. Pega este código y haz Deploy.
 *   3. En Settings → Variables → agregar como Secrets (NO como texto plano):
 *        HD_USERNAME  → HELPDESK1
 *        HD_PASSWORD  → MtRuLxgDz6q5
 *        HD_API_BASE  → https://helpdesk-api-test.fit-bank.com/api/v1
 *
 * El Worker gestiona el token internamente. El cliente nunca envía credenciales.
 */

const CORS = {
  'Access-Control-Allow-Origin':  '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

async function _login(env) {
  const r = await fetch(`${env.HD_API_BASE}/auth/login`, {
    method:  'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username_or_email: env.HD_USERNAME,
      password:          env.HD_PASSWORD,
      force_logout:      true,
    }),
  });
  if (!r.ok) {
    const body = await r.text();
    throw new Error(`Worker login failed: ${r.status} — ${body}`);
  }
  const data = await r.json();
  return { token: data.access_token, sessionId: data.session_id };
}

async function _logout(env, sessionId) {
  if (!sessionId) return;
  try {
    await fetch(`${env.HD_API_BASE}/auth/logout`, {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify({ session_id: sessionId }),
    });
  } catch (_) {}
}

export default {
  async fetch(request, env) {
    // Preflight CORS
    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 200, headers: CORS });
    }

    const url       = new URL(request.url);
    const targetUrl = env.HD_API_BASE + url.pathname.replace(/^\/api\/v1/, '') + url.search;

    let session = null;
    try {
      session = await _login(env);

      const init = {
        method:  request.method,
        headers: {
          'Content-Type':  'application/json',
          'Authorization': `Bearer ${session.token}`,
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
      return new Response(
        JSON.stringify({ error: err.message }),
        { status: 502, headers: { ...CORS, 'Content-Type': 'application/json' } },
      );
    } finally {
      if (session) await _logout(env, session.sessionId);
    }
  },
};
