# Fit-Daily (Angular) — Base de Conocimiento

**Proyecto:** Migración de Fit-Daily a Angular 22 + Material 3.
**Ubicación:** subcarpeta `app/` del repositorio Fit-Daily.
**Contexto:** reescritura por fases de la app legacy (HTML/CSS/JS vanilla en la raíz del repo).
El legacy sigue siendo la referencia funcional/modelo de datos — ver
[`../knowledge-base.md`](../knowledge-base.md).

> Este documento describe **solo la app Angular**.

---

## 1. Stack

- **Framework:** Angular 22 (standalone components, sin NgModules).
- **UI:** Angular Material 22 (Material 3 / `mat.theme`) + CDK (drag & drop) + `mat-table`,
  `mat-datepicker` (date adapter nativo, locale `es-ES`, en [app.config.ts](src/app/app.config.ts)).
- **Reactividad:** Signals (`signal` / `computed`). RxJS solo para HttpClient (`firstValueFrom`).
- **Lenguaje:** TypeScript 6 estricto.
- **Estilos:** SCSS (un `.scss` por componente + `styles.scss` global).
- **Persistencia:** Firebase Realtime DB (REST) con fallback a `localStorage`.
- **API Helpdesk:** `helpdesk-api.fit-bank.com` vía proxy (`proxy.py` en dev, Cloudflare Worker en prod).

---

## 2. Estructura

```
app/src/app/
├─ app.config.ts / app.routes.ts / layout/
├─ core/
│  ├─ services/      # data, auth, helpdesk
│  ├─ interceptors/  # helpdesk-auth (Bearer + HD_SAFE)
│  ├─ guards/        # auth, sol, msc001
│  └─ models/        # session
└─ features/
   ├─ board/         # ✅ Kanban + sprints + dialogs
   ├─ tickets/       # ✅ tabla Helpdesk + conversación + asignación + estados
   └─ burndown, progreso, consultas, semanal, mi-panel, pendientes, login
```

---

## 3. Arranque / desarrollo

```bash
cd app && npm start          # ng serve → http://localhost:4200
python3 proxy.py             # (raíz del repo) proxy del Helpdesk en :3001 — necesario para el API
```

- **Dev usa `localStorage`** (firebaseDbUrl con placeholder `TU-PROYECTO` → fallback; no toca prod).
- **Login real** (necesario para el API): desde `login`, con credenciales del Helpdesk.
- **Sesión de prueba sin login** (consola): `localStorage.setItem('fit-daily_session', JSON.stringify({id:'MSC001',name:'Sol',role:'Scrum Master',apiRole:'',color:'#F2811D',email:'',token:'x'}))`.
  Útil para ver UI, pero sin token válido el API no responde.

---

## 4. Capa core

### `DataService` ([data.service.ts](src/app/core/services/data.service.ts)) — port de `js/data.js`
Estado como **signals**: `sprints`, `stories`, `team`, `clients`.
- `ensureInit()` (la llama el `Layout`); CRUD de tareas (`addStory`, `updateStory*`, `approveStory`,
  `setWaitingClient`, `deleteStory`…); helpdesk locales (`hdNotes`/`hdActions`/`hdPendientes`).
- **Sprints:** `getActiveSprint`, `setActiveSprint`, `addSprint` (crea `SP-NN`, cierra el activo
  como `completed`, **migra** las tareas no-(done&approved) al nuevo), `updateSprint`, `deleteSprint`
  (no si es el único; no borra tareas).
- Sync en tiempo real (SSE Firebase + polling); persistencia Firebase REST / `localStorage`.

### `AuthService` ([auth.service.ts](src/app/core/services/auth.service.ts))
Sesión en `localStorage` (`fit-daily_session`). Login `POST /auth/login` → `GET /users/me`.
Permisos: `esMSC001`, `esSupervisor`, `puedeVerMiPanel`, `puedeBorrarBoard`, `puedeGestionarTodo`.

### `HelpdeskService` ([helpdesk.service.ts](src/app/core/services/helpdesk.service.ts))
Cliente del API del Helpdesk. **Regla clave: todas las ESCRITURAS del API son
`application/x-www-form-urlencoded` (NO JSON)** — con `HttpClient` se usa `HttpParams` como body.
Todas las llamadas usan el contexto **`HD_SAFE`** (no desloguea en 401/403).

**Catálogos (lectura, cache en `localStorage`):**
- `getHdUsers()` → **`GET /users/catalog`** (no `/users`, da 403). Filtra empleados por
  `role_description` (SOPORTE/ADMINISTRADOR/SUPERVISOR); NO por `client_id` (los internos de Soft
  Warehouse lo tienen lleno). Signal `hdUsers`.
- `getClients()` → **`GET /clients/catalog`**. Signal `clients`.
- `getTicketStatuses()` → **`GET /ticket-statuses/catalog`** → mapa `nombre → ticket_status_id`.
  Signal `statusNames`.

**Tickets (port de `js/helpdesk-panel.js`):**
- `sync()` — 6 páginas (`/tickets/tickets?limit=40&offset=…`), filtra `CLIENTES_VALIDOS` y excluye
  aprobados/cerrados, clasifica, y carga el último mensaje en lotes. Signals `tickets`,
  `syncStatus`, `loading`.
- `fetchMessages`, `searchTicketRemote`, `fetchTicketRaw`, `ticketAttachmentIds`,
  `attachmentUrl` (blob con auth, para `<img>`/descargas).

**Escrituras (form-urlencoded):**
- `assignTicket(id, userId)` → `PUT /tickets/tickets/:id` con `assigned_user_id`.
- `setTicketStatus(id, nombre)` → `PUT /tickets/tickets/:id` con `ticket_status_id` (traduce el
  nombre a código vía el catálogo). El estado se escribe **por código, no por texto**.
- `sendMessage(id, detail, files)` → sube adjuntos (`POST /attachments` multipart) y
  `POST /tickets/:id/messages` con `detail` (+ `attach_ids`).

Modelo `Ticket` y funciones puras (`mapTicket`, `evaluarFechas`, `clasificar`, `applyMessages`,
`safeHtml`) en [features/tickets/ticket-utils.ts](src/app/features/tickets/ticket-utils.ts);
constantes (`CLIENTES_VALIDOS`, `CLASIF_*`, `PRIORITY_ACTIONS`, `EMPLEADOS`…) en
[helpdesk.constants.ts](src/app/features/tickets/helpdesk.constants.ts).

### Interceptor + Guards
`helpdeskAuthInterceptor`: Bearer + logout en 401/403 (salvo `HD_SAFE`). `authGuard`, `solGuard`
(Mi Panel), `msc001Guard` (definido, sin cablear).

---

## 5. Rutas y features ([app.routes.ts](src/app/app.routes.ts))

Lazy-loaded bajo `Layout` (`authGuard`); `/` → `/board`.

| Ruta | Estado |
|---|---|
| `login`, `board`, `tickets` | **Hecho** |
| `burndown`, `progreso`, `consultas`, `semanal`, `mi-panel`, `pendientes` | placeholders |

---

## 6. Board ([features/board/](src/app/features/board/))

Kanban reactivo por signals (sin `refreshBoard`). Look de **muro de post-its**: fondo pizarra,
cards coloreadas por **cliente** (`clientStyle`/`cardTilt` en `board-utils.ts`), prioridad como
badge, avatar = **código de usuario** (igual que los filtros).

- **`card-detail-dialog/`** — crear/editar tarea: buscadores (`MatAutocomplete`) de **asignado** y
  **cliente** desde el API, fecha con **datepicker**, progreso, estado. Al escribir un **N° de
  ticket** consulta el ticket y autocompleta (título/cliente/asignado).
- **`sprint-dialog/`** — crear/editar/borrar sprint.
- **`confirm-dialog/`** — confirmación reutilizable (variante "escribí BORRAR").

**Funciona:** drag&drop (CDK) con permisos + WIP, filtros (prioridad/asignado/cliente), progreso,
certificar, aprobar, esperando cliente, borrar card / Borrar Board, ocultar done-aprobadas.
**Regla:** una tarea que salió de To Do **no puede volver** (drag y modal).

**Barra de sprint (encima del board):** selector + **✏ editar** + **＋ nuevo** + banner
(nombre/objetivo/fechas/capacidad/estado).

**Integración Helpdesk (para tareas con ticket):**
- **Estado del ticket** sincronizado con el API: `in_progress→EN PROCESO`,
  esperando cliente`→INFO PENDIENTE CLIENTE`, `review→INSTALADO PARA CERTIFICACIÓN`,
  `done→ENTREGADO` (en drag, certificar, botón esperando, y al guardar el modal). Mapa en
  `board-utils.ts` (`HD_ESTADO_POR_STATUS`, `HD_ESTADO_ESPERANDO`).
- **Asignación** del ticket al asignar en el modal.
- **"Ver conversación del ticket"** → abre el `TicketMessagesDialog` (ver §7).

---

## 7. Tickets ([features/tickets/](src/app/features/tickets/))

Port de `js/helpdesk-panel.js`. Tabla **`mat-table`** (15 columnas, sort), **↻ Sincronizar**,
tabs (Prioritarios / Todos / Asignados a mí / Estadísticas) con contadores, filtros
(cliente/clasificación/acción/estatus) y búsqueda por número (local + remota). Clasificación con
colores.

- **Interacciones inline:** nota editable, acción (⚑), pendiente (⏸), copiar (⧉).
- **Asignar:** botón **✎** → `AssignTicketDialog` (lista buscable de empleados; asigna en el API).
- **Cambiar estado:** botón **▾** en la columna Estatus → menú con todos los estados del catálogo.
- **Crear tarea:** clic en el **#número** → `CardDetailDialog` con el ticket pre-cargado (mismo
  buscador de asignado del board).
- **Conversación** (`ticket-messages-dialog/`): mensajes clasificados (empleado/cliente/sistema),
  adjuntos por mensaje, **imágenes embebidas hidratadas con auth** + **lightbox** (popup, no pestaña),
  adjunto a nivel ticket, y **composer** para responder (texto + adjuntos). Reutilizado por el board.

---

## 8. Theming, datos y persistencia

- **Tema** ([styles.scss](src/styles.scss) + [_theme-colors.scss](src/_theme-colors.scss)): paleta
  de marca FitBank (primary `#048ABF`, secondary `#30BAD9`, tertiary `#F2811D`); vars `--brand`,
  `--accent`, `--bg` (`#F2F2F2`). Regenerar: `ng generate @angular/material:theme-color`.
- **Seeds:** [public/data/](public/data/). **Claves `localStorage`:** `fit-daily_v1`,
  `fit-daily_session`, `fit-daily_hd_users`/`_roles`/`_clients`/`_statuses`, `fit-daily_hd_*`
  (notas/acciones/pendientes).
- **Entornos:** dev → localStorage + `proxy.py:3001`; prod → Firebase + Cloudflare Worker
  (`fileReplacements`). **`proxy.py` soporta GET/POST/PUT/PATCH** (PUT se agregó para asignación/estado).

---

## 9. Convenciones

Standalone components; `inject()`; signals/`computed`; `templateUrl`/`styleUrl` por archivo;
comentarios y UI en **español**; se conservan nombres de métodos del legacy. Budget de estilos por
componente: 8 kB / 16 kB en `angular.json`.

---

## 10. Estado de la migración

| Área | Estado |
|---|---|
| Infra (core, auth, guards, interceptor, theming) | ✅ |
| Login | ✅ |
| Board (Kanban + sprints + integración Helpdesk) | ✅ |
| Tickets (tabla + conversación + asignación + estados + mensajes) | ✅ |
| Catálogos del API (usuarios, clientes, estados) | ✅ |
| Burndown, Progreso, Consultas, Mi Panel, Semanal, Pendientes | ⏳ placeholders |
| TUsuariosPizza | ❌ se elimina |

### Mapa legacy → Angular
| Legacy | Angular |
|---|---|
| `AppData` / `App` sesión / `HelpdeskAuth` | `DataService` / `AuthService` / `AuthService`+interceptor |
| `App.hdFetchSafe` | contexto `HD_SAFE` |
| `App.assignHdTicket` (sonda 12 campos JSON) | `HelpdeskService.assignTicket` (PUT `assigned_user_id` form) |
| `_pushHdEstado` (PATCH JSON) | `setTicketStatus` (PUT `ticket_status_id` form + catálogo) |
| `HelpdeskPanel` (tabla/mensajes/adjuntos) | `features/tickets/` + `HelpdeskService` |
| `Board` IIFE | `features/board/` |
| `App.refreshBoard()` | reactividad por signals |
| `alert/confirm/prompt` | `MatSnackBar` / `ConfirmDialog` |
