import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';

import { routes } from './app.routes';
import { helpdeskAuthInterceptor } from './core/interceptors/helpdesk-auth.interceptor';

// Angular Material 22 usa animaciones basadas en CSS; no requiere
// provideAnimations()/@angular/animations (por eso `ng add` no lo añadió).
export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(withInterceptors([helpdeskAuthInterceptor])),
  ],
};
