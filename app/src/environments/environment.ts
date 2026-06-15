// Entorno DEV (lo usa `ng serve`).
// - Firebase REAL → el equipo comparte los datos del board en la LAN.
// - helpdeskProxyUrl VACÍO → las llamadas al Helpdesk son relativas (`/api/v1`),
//   y el proxy integrado del dev server de Angular (proxy.conf.json) las reenvía
//   a https://helpdesk-api.fit-bank.com (server-side, sin CORS, sin proxy.py).
export const environment = {
  production: false,
  firebaseDbUrl: 'https://fit-daily-ab113-default-rtdb.firebaseio.com',
  helpdeskProxyUrl: '',
};
