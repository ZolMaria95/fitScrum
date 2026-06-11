# Fit-Daily (Angular) — Base de Conocimiento

**Proyecto:** Migración de Fit-Daily a Angular 22 + Material 3.
**Ubicación:** subcarpeta `app/` del repositorio Fit-Daily.
**Contexto:** reescritura por fases de la app legacy (HTML/CSS/JS vanilla en la raíz del repo).
El legacy sigue siendo la referencia funcional — ver [`../knowledge-base.md`](../knowledge-base.md)
para el modelo de datos, reglas de negocio y mapeo de clientes/Helpdesk.

> Este documento describe **solo la app Angular**. Lo que aún no está migrado se marca como
> **Fase 2 (Helpdesk)** o **pendiente**.

---

## 1. Stack

- **Framework:** Angular 22 (standalone components, sin NgModules).
- **UI:** Angular Material 22 (Material 3 / `mat.theme`) + Angular CDK (drag & drop).
- **Reactividad:** Signals (`signal` / `computed`) — no se usa RxJS para el estado de vistas.
- **Lenguaje:** TypeScript 6 (modo estricto: `strict`, `noImplicitReturns`, `noImplicitOverride`…).
- **Estilos:** SCSS (un `.scss` por componente + `styles.scss` global).
- **Tests:** Vitest (`ng test`), aún sin cobertura significativa.
- **Persistencia:** Firebase Realtime DB (REST) con fallback a `localStorage` (igual que el legacy).
- **API Helpdesk:** mismo backend (`helpdesk-api.fit-bank.com`) vía proxy (`proxy.py` en dev,
  Cloudflare Worker en prod).

---

## 2. Estructura

```
app/
├─ src/
│  ├─ main.ts                      # bootstrap
│  ├─ styles.scss                  # tema Material (paleta de marca) + vars globales
│  ├─ _theme-colors.scss           # paletas tonales M3 generadas (no editar a mano)
│  ├─ environments/                # environment.ts (dev) / environment.prod.ts
│  └─ app/
│     ├─ app.ts / app.config.ts / app.routes.ts
│     ├─ layout/                   # shell con toolbar + <router-outlet>
│     ├─ core/
│     │  ├─ services/              # data, auth, helpdesk
│     │  ├─ interceptors/          # helpdesk-auth (Bearer + HD_SAFE)
│     │  ├─ guards/                # auth, sol, msc001
│     │  └─ models/                # session
│     └─ features/                 # board, burndown, progreso, consultas,
│                                  # tickets, semanal, mi-panel, pendientes, login
└─ public/data/                    # seeds JSON (users, clients, sprints, stories, …)
```

---

## 3. Arranque / desarrollo

```bash
cd app && npm start          # ng serve → http://localhost:4200
```

- **Dev usa `localStorage`**, no toca Firebase de producción: `environment.ts` deja
  `firebaseDbUrl` con el placeholder `TU-PROYECTO`, lo que fuerza el fallback (igual que el legacy).
- **Login real** requiere el proxy del Helpdesk corriendo en `:3001`:
  ```bash
  python3 proxy.py            # desde la raíz del repo; usa solo stdlib de Python
  ```
- **Sesión de prueba sin login** (el `authGuard` redirige a `/login` sin sesión). En la consola
  del navegador:
  ```js
  localStorage.setItem('fit-daily_session', JSON.stringify({
    id:'MSC001', name:'Sol', role:'Scrum Master', apiRole:'', color:'#F2811D', email:'', token:'x'
  }));
  ```
  `MSC001` da permisos completos. Sin proxy, las llamadas al Helpdesk fallan y se usa el fallback.

---

## 4. Capa core

### `DataService` ([src/app/core/services/data.service.ts](src/app/core/services/data.service.ts))
Port de `js/data.js`. Estado como **signals**: `sprints`, `stories`, `team`, `clients`.

- `ensureInit()` — carga una sola vez (Firebase o seeds de `public/data/`); la llama el `Layout`.
- CRUD de tareas: `addStory`, `deleteStory`, `updateStory{Status,Progress,DueDate,Title,
  Description,Assignee,HdEstatus,Priority}`, `approveStory`/`unapproveStory`, `setWaitingClient`.
- Consultas: `getStoriesBySprint`, `getActiveSprint`, `getTeam`/`getMember`, `getClients`/`getClient`.
- Sync en tiempo real: `startStreaming()` (SSE de Firebase con debounce + polling de respaldo) y
  una ventana de gracia por-ID (`GRACE_MS`) para no pisar escrituras locales recientes.
- Persistencia: `fbReady()` decide Firebase REST vs `localStorage` (`fit-daily_v1`). Migra claves
  legacy `fitscrum_*` → `fit-daily_*` al iniciar.

### `AuthService` ([src/app/core/services/auth.service.ts](src/app/core/services/auth.service.ts))
Port de `js/helpdesk-auth.js` + la sesión/permisos de `js/app.js`. Sesión en `localStorage`
(`fit-daily_session`).

- `login(user, pass)` → `POST /auth/login` → token → `GET /users/me` → perfil; enriquece con el
  equipo local (`data/users.json`).
- `logout()`, `clearSession()` (la usa el interceptor en 401/403).
- Permisos (computados): `esMSC001`, `esSupervisor`, `esScrumMaster`, `puedeVerMiPanel`
  (Scrum Master o MSC001), `puedeBorrarBoard` (solo MSC001), `puedeGestionarTodo`
  (MSC001 o Supervisor → mover/borrar cualquier card).

### `HelpdeskService` ([src/app/core/services/helpdesk.service.ts](src/app/core/services/helpdesk.service.ts))
Cliente del API del Helpdesk. Implementado: lista de empleados asignables.

- `getHdUsers()` — consulta **`GET /users/catalog`** (no `/users`, que da **403** para la mayoría
  de cuentas). Consulta **independiente del sync de tickets**; cachea en memoria (signal `hdUsers`)
  y en `localStorage` (`fit-daily_hd_users` / `fit-daily_hd_roles`).
- **Filtro de empleados:** se incluye por **`role_description`** (SOPORTE / ADMINISTRADOR /
  SUPERVISOR). **No** se filtra por `client_id` / `client_description`: los empleados internos de
  Soft Warehouse los tienen llenos (apuntan a su propia empresa) y no son clientes.
- El resto del port de `js/helpdesk-panel.js` (sync de tickets, mensajes, adjuntos, clasificación)
  es **Fase 2**.

### Interceptor ([src/app/core/interceptors/helpdesk-auth.interceptor.ts](src/app/core/interceptors/helpdesk-auth.interceptor.ts))
`helpdeskAuthInterceptor`: añade `Bearer` a las requests del proxy y, en 401/403, cierra sesión y
redirige a `/login`. El `HttpContextToken` **`HD_SAFE`** marca una request como "best-effort"
(no desloguea ante 401/403) — equivale a `App.hdFetchSafe` del legacy. Lo usa `getHdUsers`.

### Guards ([src/app/core/guards/](src/app/core/guards/))
- `authGuard` — sin sesión → `/login`.
- `solGuard` — "Mi Panel": solo `puedeVerMiPanel()`, si no → `/board`.
- `msc001Guard` — definido para acciones exclusivas de MSC001; **aún no está cableado** en rutas.

---

## 5. Rutas y features ([src/app/app.routes.ts](src/app/app.routes.ts))

Todas lazy-loaded bajo el `Layout` (protegido por `authGuard`); `/` redirige a `/board`.

| Ruta | Estado |
|---|---|
| `login` | **Hecho** |
| `board` | **Hecho** (ver §6) |
| `mi-panel` | placeholder (`solGuard`) |
| `burndown`, `progreso`, `consultas`, `tickets`, `semanal`, `pendientes` | placeholders |

El `Layout` ([src/app/layout/](src/app/layout/)) tiene la toolbar (dropdowns Scrum / Helpdesk,
chip de usuario, logout) y llama `data.ensureInit()` + `startStreaming()`.

---

## 6. Board (vista implementada)

Carpeta [src/app/features/board/](src/app/features/board/). Port de `js/board.js`.

- **`board.ts` / `board.html` / `board.scss`** — Kanban de 4 columnas
  (`todo → in_progress → review → done`). Render **reactivo por signals** (`columns`,
  `visibleStories`, `assigneeChips`); no hay `refreshBoard` manual.
- **`board-utils.ts`** — helpers puros (`progColor`, `resolveMember`, `dueInfo`, `roundUp5`) y
  `canStartWork` (límite WIP ≤2 + permisos + confirmación para `todo → in_progress`).
- **`card-detail-dialog/`** — `MatDialog` de detalle/edición y creación de tarea. El campo
  **"Asignado a"** es un buscador (`MatAutocomplete`) sobre los empleados del API (`getHdUsers`),
  muestra nombre completo y garantiza que el asignado actual aparezca.
- **`confirm-dialog/`** — confirmación reutilizable; variante "escribí BORRAR" para borrados.

**Funciona:** drag & drop (CDK) con permisos, WIP, filtros (prioridad / asignado / cliente),
barra de progreso, certificar (review→done), aprobar, esperando cliente con alerta a ≥3 días,
borrar card y Borrar Board, ocultar done-aprobadas tras 1 día. `alert/confirm/prompt` →
`MatSnackBar` / `ConfirmDialog`.

**Fase 2 (Helpdesk) en el board:** select de estado HD en la card, conversación del ticket en el
modal, auto-asignación al cambiar estado y `assignHdTicket` (PUT del asignado al ticket).

---

## 7. Theming / paleta de marca

- Tema Material en [src/styles.scss](src/styles.scss) con `mat.theme()` usando paletas tonales
  generadas en [src/_theme-colors.scss](src/_theme-colors.scss) a partir de los colores de marca:
  **primary `#048ABF`** (azul FitBank), **secondary `#30BAD9`**, **tertiary `#F2811D`** (naranja).
  Regenerar con: `ng generate @angular/material:theme-color --primary-color "#048ABF" …`.
- **Variables de marca** para componentes propios (en `styles.scss`): `--brand`, `--brand-mid`,
  `--brand-dark`, `--accent`, `--accent-dark`, `--bg` (`#F2F2F2`, fondo de la app).
- Los componentes Material usan las variables del sistema M3 (`--mat-sys-*`); el board usa las vars
  de marca para los azules/naranjas y colores semánticos hardcodeados para error (rojo) y ok (verde).

---

## 8. Datos y persistencia

- **Seeds:** [public/data/](public/data/) (`users.json`, `clients.json`, `sprints.json`,
  `stories.json`, `progress.json`, `queries.json`). `stories.json` arranca vacío.
- **Claves `localStorage`:** `fit-daily_v1` (fallback de datos), `fit-daily_session` (sesión +
  token), `fit-daily_hd_users` / `fit-daily_hd_roles` (cache de empleados HD).
- **Entornos** ([src/environments/](src/environments/)): dev → `localStorage` + `proxy.py:3001`;
  prod → Firebase `fit-daily-ab113` + Cloudflare Worker (vía `fileReplacements` en `angular.json`).

---

## 9. Convenciones de código

- **Standalone components**, `imports: [...]` en el `@Component` (sin NgModules).
- DI con `inject()`; estado con **signals**/`computed`; nada de `Zone`-based change detection manual.
- `templateUrl`/`styleUrl` por archivo cuando el template/SCSS crece; inline para componentes chicos
  (ej. `ConfirmDialog`).
- Comentarios y textos de UI en **español**.
- Se conservan los nombres de métodos del legacy (`updateStory*`, `getHdUsers`…) para que portar
  cada vista sea mecánico.
- Budget de estilos por componente subido a 8 kB / 16 kB en `angular.json` (un Kanban no entra en 4 kB).

---

## 10. Estado de la migración

| Área | Estado |
|---|---|
| Infra (core services, auth, guards, interceptor, theming) | ✅ |
| Login | ✅ |
| Board (Kanban completo) | ✅ (salvo integraciones HD del board → Fase 2) |
| Empleados asignables (`/users/catalog`) | ✅ |
| Burndown, Progreso, Consultas, Mi Panel, Semanal, Pendientes, Tickets | ⏳ placeholders |
| Helpdesk completo (sync, tickets, mensajes, adjuntos, clasificación) | ⏳ Fase 2 |
| TUsuariosPizza | ❌ se elimina en la migración |

### Mapa legacy → Angular
| Legacy | Angular |
|---|---|
| `AppData` (`js/data.js`) | `DataService` |
| `App` sesión/permisos (`js/app.js`) | `AuthService` |
| `HelpdeskAuth` (`js/helpdesk-auth.js`) | `AuthService` + `helpdeskAuthInterceptor` |
| `App.hdFetchSafe` | contexto `HD_SAFE` del interceptor |
| `HelpdeskPanel.getHdUsers` (desde tickets) | `HelpdeskService.getHdUsers` (desde `/users/catalog`) |
| `Board` IIFE (`js/board.js`) | `features/board/` (componente + dialogs + utils) |
| `App.refreshBoard()` | reactividad por signals |
| `alert/confirm/prompt` | `MatSnackBar` / `ConfirmDialog` |
