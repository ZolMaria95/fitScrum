// ─────────────────────────────────────────────────────
//  CONFIGURACIÓN — auto-detecta entorno (local vs producción)
// ─────────────────────────────────────────────────────

// Detección de entorno local: ejecutándose desde localhost o 127.0.0.1
// → En local NO se conecta a Firebase, usa localStorage para aislar pruebas
const _IS_LOCALHOST = ['localhost', '127.0.0.1'].includes(window.location.hostname);

// 1. Firebase Realtime Database URL
//    En producción: URL real del proyecto Firebase
//    En local:      'TU-PROYECTO' → fuerza fallback a localStorage en data.js
window.FIREBASE_DB_URL = _IS_LOCALHOST
  ? 'https://TU-PROYECTO-default-rtdb.firebaseio.com'
  : 'https://fit-daily-ab113-default-rtdb.firebaseio.com';

// 2. URL del proxy para Helpdesk API
//    En local:      proxy.py corriendo en localhost:3001 (evita CORS desde localhost)
//    En producción: Cloudflare Worker
window.HELPDESK_PROXY_URL = _IS_LOCALHOST
  ? 'http://localhost:3001'
  : 'https://fit-daily-proxy.contreras-sol-4to5.workers.dev';

if (_IS_LOCALHOST) {
  console.log('%c[Fit-Daily] Modo LOCAL — datos en localStorage, NO se escribe a Firebase de producción', 'background:#F29E3B;color:#fff;padding:3px 8px;border-radius:3px;font-weight:600');
}

// Las credenciales del Helpdesk ya NO se hardcodean — cada usuario ingresa
// las suyas en login.html y se validan contra el API real del Helpdesk.
