/**
 * Cloudflare Worker — fitScrum Helpdesk proxy
 * Despliega en: dash.cloudflare.com → Workers & Pages → Create Worker
 * Pega este código completo y haz clic en Deploy.
 */

const TARGET = 'https://helpdesk-api.fit-bank.com';

const CORS = {
  'Access-Control-Allow-Origin':  '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Authorization, Content-Type',
};

export default {
  async fetch(request) {
    // Preflight CORS
    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 200, headers: CORS });
    }

    const url       = new URL(request.url);
    const targetUrl = TARGET + url.pathname + url.search;

    const init = { method: request.method, headers: {} };

    for (const h of ['Content-Type', 'Authorization']) {
      const v = request.headers.get(h);
      if (v) init.headers[h] = v;
    }

    if (request.method !== 'GET' && request.method !== 'HEAD') {
      init.body = await request.arrayBuffer();
    }

    try {
      const resp = await fetch(targetUrl, init);
      const body = await resp.arrayBuffer();

      const headers = new Headers(CORS);
      headers.set('Content-Type', resp.headers.get('Content-Type') || 'application/json');

      return new Response(body, { status: resp.status, headers });
    } catch (err) {
      return new Response(
        JSON.stringify({ error: err.message }),
        { status: 502, headers: { ...CORS, 'Content-Type': 'application/json' } }
      );
    }
  },
};
