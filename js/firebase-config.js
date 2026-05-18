// ─────────────────────────────────────────────────────
//  CONFIGURACIÓN — editar antes de subir a GitHub Pages
// ─────────────────────────────────────────────────────

// 1. Firebase Realtime Database URL
//    Obtener en: console.firebase.google.com
//    → tu proyecto → Realtime Database → URL que aparece arriba
//    Ejemplo: https://fitscrum-abc12-default-rtdb.firebaseio.com
window.FIREBASE_DB_URL = 'https://TU-PROYECTO-default-rtdb.firebaseio.com';

// 2. URL del Cloudflare Worker (proxy para Helpdesk API)
//    Obtener después de crear el worker en dash.cloudflare.com
//    Ejemplo: https://fitscrum-proxy.tu-usuario.workers.dev
window.HELPDESK_PROXY_URL = 'https://TU-WORKER.workers.dev';
