// Entorno DEV (lo usa `ng serve`).
// firebaseDbUrl con el placeholder 'TU-PROYECTO' fuerza el fallback a
// localStorage (NO toca la base Firebase de producción), igual que el legacy.
export const environment = {
  production: false,
  firebaseDbUrl: 'https://TU-PROYECTO-default-rtdb.firebaseio.com',
  helpdeskProxyUrl: 'http://localhost:3001',
};
