import { HttpContextToken, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { environment } from '../../../environments/environment';
import { AuthService } from '../services/auth.service';

/**
 * Marca una request como "safe" (escritura donde fallar es aceptable): en 401/403
 * NO cierra sesión ni redirige. Equivale a App.hdFetchSafe del legacy.
 *   this.http.put(url, body, { context: new HttpContext().set(HD_SAFE, true) })
 */
export const HD_SAFE = new HttpContextToken<boolean>(() => false);

/**
 * Añade el Bearer token a las requests dirigidas al proxy del Helpdesk y,
 * salvo que sean "safe", cierra sesión + redirige a /login ante 401/403.
 * Porta HelpdeskAuth.fetchWithAuth.
 */
export const helpdeskAuthInterceptor: HttpInterceptorFn = (req, next) => {
  const auth = inject(AuthService);
  const router = inject(Router);

  const isProxy = req.url.startsWith(environment.helpdeskProxyUrl);
  const token = auth.token;

  const fwd = isProxy && token
    ? req.clone({ setHeaders: { Authorization: `Bearer ${token}` } })
    : req;

  const safe = req.context.get(HD_SAFE);

  return next(fwd).pipe(
    tap({
      error: (err) => {
        if (isProxy && !safe && token && (err?.status === 401 || err?.status === 403)) {
          auth.clearSession();
          router.navigate(['/login']);
        }
      },
    }),
  );
};
