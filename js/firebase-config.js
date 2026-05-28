// ─────────────────────────────────────────────────────
//  CONFIGURACIÓN — editar antes de subir a GitHub Pages
// ─────────────────────────────────────────────────────

// 1. Firebase Realtime Database URL
//    Obtener en: console.firebase.google.com
//    → tu proyecto → Realtime Database → URL que aparece arriba
//    Ejemplo: https://fit-daily-abc12-default-rtdb.firebaseio.com
window.FIREBASE_DB_URL = 'https://fit-daily-ab113-default-rtdb.firebaseio.com';

// 2. URL del Cloudflare Worker (proxy para Helpdesk API)
//    Obtener después de crear el worker en dash.cloudflare.com
//    Ejemplo: https://fit-daily-proxy.tu-usuario.workers.dev
window.HELPDESK_PROXY_URL = 'https://fit-daily-proxy.contreras-sol-4to5.workers.dev';

// 3. Credenciales Helpdesk (usadas solo a través del proxy local en dev)
window.HD_USERNAME = 'HELPDESK1';
window.HD_PASSWORD = 'MtRuLxgDz6q5';
