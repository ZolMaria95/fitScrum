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
├─ app.config.ts / app.routes.ts / layout/   # shell responsive (sidenav hamburguesa)
├─ core/
│  ├─ services/      # data, auth, helpdesk, shell (host de filtros del drawer)
│  ├─ interceptors/  # helpdesk-auth (Bearer + HD_SAFE)
│  ├─ guards/        # auth, sol, msc001
│  └─ models/        # session
└─ features/
   ├─ board/         # ✅ Kanban + sprints + dialogs
   ├─ tickets/       # ✅ grid de cards Helpdesk + conversación + asignación + estados
   │  └─ ticket-card/  # card presentacional (header/cuerpo/pie + menú ⋮)
   └─ burndown, progreso, consultas, semanal, mi-panel, pendientes, login
```

---

## 3. Arranque / desarrollo

```bash
cd app && npm start                       # ng serve → http://localhost:4200
cd app && npm start -- --host 0.0.0.0     # accesible en la LAN → http://<IP>:4200
```

- **Solo Angular, sin `proxy.py`:** el dev server reenvía `/api` al Helpdesk vía el proxy integrado
  ([app/proxy.conf.json](proxy.conf.json) → `https://helpdesk-api.fit-bank.com`, configurado en
  `angular.json` serve `proxyConfig`). El API bloquea por CORS cualquier origen ≠ `helpdesk.fit-bank.com`,
  por eso el navegador **no** puede llamarlo directo; el reenvío server-side lo resuelve.
- **Las URLs del API son relativas** en dev (`helpdeskProxyUrl: ''` → base `/api/v1`); en prod es la
  URL del Cloudflare Worker.
- **Dev apunta a la Firebase real** (`fit-daily-ab113`) → el board (tareas/sprints/notas) se
  **comparte** entre todas las máquinas de la LAN. `DataService.init()` solo siembra nodos vacíos
  (no pisa datos). Backup de prod: `GET …/fit-daily.json` (solo lectura).
- **Login real** (necesario para el API): desde `login`, con credenciales del Helpdesk.

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
  nombre a código vía el catálogo). El estado se escribe **por código, no por texto**. Nunca permite
  cambiar a **ABIERTO**.
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

### Shell responsive ([layout/](src/app/layout/)) — menú hamburguesa lateral

Diseño **mobile-first**. El `Layout` es un `mat-sidenav-container`:
- **Drawer** = (arriba) **host de filtros dinámicos** + (debajo) **submenús** de navegación
  (`mat-nav-list`: grupo Scrum y grupo Helpdesk) + pie con usuario/logout.
- **Responsive** con CDK `BreakpointObserver('(min-width: 900px)')` → `isDesktop`, más un flag por ruta
  `data.collapsibleNav`. `fixed = isDesktop && !collapsibleNav`: si es fijo → `mode="side"` siempre abierto,
  sin ☰; si no (móvil/tablet **o Board en escritorio**) → `mode="over"`, ☰ en topbar slim, se cierra al navegar.
- **Board** lleva `data: { collapsibleNav: true }` → oculta el menú aun en escritorio (Kanban a ancho completo).
- **`ShellService`** ([shell.service.ts](src/app/core/services/shell.service.ts)): `filters` (signal de
  `TemplateRef`), `setFilters`/`clear`. Cada vista publica su panel de filtros como `<ng-template>` y el drawer
  lo renderiza con `ngTemplateOutlet`. Hoy **solo Tickets** lo usa (Board mantiene sus filtros internos).

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
certificar, esperando cliente, borrar card / Borrar Board. **Regla:** una tarea que salió de To Do
**no puede volver** (drag y modal). Las done-finalizadas **salen del board a los 2 días**.

**Barra de sprint (encima del board):** selector + **✏ editar** + **＋ nuevo** + banner
(nombre/objetivo/fechas/capacidad/estado).

**Integración Helpdesk (para tareas con ticket):** 4 columnas (no hay Devuelto/Otros).
- **Al abrir** el board, `syncTicketStatuses()` consulta el estado del ticket de cada tarea y la
  **ubica según `statusFromTicketEstado`** (`board-utils.ts`):
  `EN PROCESO→In Progress`, `INFO PENDIENTE CLIENTE→In Progress`+esperando,
  `INSTALADO PARA CERTIFICACIÓN→En Certificación`, `ENTREGADO→Done`,
  `APROBADO`/`CERRADO POR EL CLIENTE→Done` con el **check marcado**, **cualquier otro → To Do**
  (sin tocar el ticket). El estado del ticket se guarda en `story.hdEstatus` y se muestra como
  **badge** en la card.
- **Check "Finalizado"** (antes "Aprobado") = **read-only**: lo define siempre el ticket
  (APROBADO/CERRADO lo marcan, el resto lo desmarcan).
- **Escritura del estado** (drag manual / botón esperando / modal): `in_progress→EN PROCESO`,
  `review→INSTALADO PARA CERTIFICACIÓN`, `done→ENTREGADO`, esperando`→INFO PENDIENTE CLIENTE`
  (`HD_ESTADO_POR_STATUS`/`HD_ESTADO_ESPERANDO`) — consistente con la lectura.
- **Asignación** del ticket al asignar en el modal.
- **"Ver conversación del ticket"** → abre el `TicketMessagesDialog` (ver §7).

---

## 7. Tickets ([features/tickets/](src/app/features/tickets/))

Port de `js/helpdesk-panel.js`. **Grid de cards responsive** (no tabla), **↻ Sincronizar**,
tabs (Prioritarios / Todos / Asignados a mí / **Generales** / Estadísticas) con contadores, filtros
(cliente/clasificación/acción/estatus) y búsqueda por número (local en ambos sets + remota).

- **Grid de cards** (`.ticket-grid`, [tickets.html](src/app/features/tickets/tickets.html)): **2 col
  <540px / 4 col 540–899px / 5 col ≥900px** con `minmax(0, 1fr)`, **sin scroll horizontal** en ningún
  contenedor. Estadísticas conserva su tabla-resumen. Las **tabs** quedan en el contenido (segmento
  scrollable); los **filtros** viven en el **drawer** del shell (ver §5, `ShellService` + `<ng-template #filtersTpl>`).
- **`TicketCard`** ([ticket-card/](src/app/features/tickets/ticket-card/)) presentacional (inputs + outputs,
  sin servicios):
  - **Cabecera**: `#número` + botón **"Crear tarea"** (→ `CardDetailDialog` precargado) + badge de **estado**.
    Si el ticket **ya tiene tarea en el board** (`ticketsEnBoard`, derivado de `data.stories()`), el botón
    se reemplaza por una etiqueta **"en board"**.
  - **Cuerpo**: asunto a **2 líneas** (`-webkit-line-clamp`), cliente, badge de **tipo**, subsección de
    fechas (📅 ingreso "10 jun 2025" · 🔄 modificación "Hoy 9:42" / "13 jun 16:05") y **área de nota
    editable** (clic → textarea inline, no en el menú).
  - **Pie**: avatar (iniciales+color, `colorFor`/`initialsFromName` de board-utils) + **"Ver conversación"**
    + **menú ⋮** (asignar / cambiar estado / marcar acción ⚑ / pendiente ⏸). La card entera abre la
    conversación; Crear tarea, área de nota y ⋮ hacen `stopPropagation`.
  - Colores en [tickets-card-utils.ts](src/app/features/tickets/tickets-card-utils.ts): `estadoStyle`
    (**color por estado real** del catálogo, ≈7 tonos), `tipoStyle` (INCIDENCIA/REQUERIMIENTO/CONSULTA),
    `fmtIngreso`/`fmtMod`. **Solo modo claro** (la app es light-only por el bug de Safari/M3 en `styles.scss`).
- **Paginación por páginas** (`mat-paginator`, **12 por página**): renderiza **solo la página actual**
  (menos scroll/DOM) en **todas** las tabs. `pagedRows` = slice de `rows()`; `clampedPageIndex` acota el
  índice. Cambiar tab/filtros/búsqueda resetea a la página 1.
- **Dos sets de tickets** (en `HelpdeskService`):
  - `tickets` (sync `↻`): **operativo** — solo `CLIENTES_VALIDOS`, sin aprobados/cerrados, **con
    mensajes**. Powerea Prioritarios/Todos/Asignados/Estadísticas (sin cambios).
  - `allTickets` (tab **Generales**): **todos** los clientes, incluidos aprobados/cerrados, carga
    **perezosa** y **SIN mensajes** — los mensajes se piden solo al abrir la conversación. Cada
    "Siguiente" del paginador trae del API la página que falte (offset, `fetchPage(offset, 12)`);
    `paginatorLength` suma una página extra mientras `hasMoreGenerales`. `syncGenerales`/`loadMoreGenerales`.
  - Asignar / cambiar estado refrescan **ambos** sets (`patchTicket`). En Generales (sin último
    mensaje) la celda muestra un botón **💬 Ver conversación**.

- **Diálogos desde la card:** **Asignar** → `AssignTicketDialog` (lista buscable; asigna en el API);
  **Cambiar estado** → `setTicketStatus` con la lista del catálogo (`statusOptions`, nunca ABIERTO);
  **Crear tarea** → `CardDetailDialog` precargado; **Nota/acción/pendiente** → `DataService` (local).
- **Conversación** (`ticket-messages-dialog/`): mensajes clasificados (empleado/cliente/sistema),
  adjuntos por mensaje, **imágenes embebidas hidratadas con auth** + **lightbox** (popup, no pestaña),
  adjunto a nivel ticket, y **composer** para responder (texto + adjuntos). Reutilizado por el board.
  Los mensajes se **paginan** (bloque de 15 más recientes + **"Ver mensajes anteriores"**): solo se
  procesa/hidrata el bloque visible, no todos de golpe.

---

## 8. Theming, datos y persistencia

- **Tema** ([styles.scss](src/styles.scss) + [_theme-colors.scss](src/_theme-colors.scss)): paleta
  de marca FitBank (primary `#048ABF`, secondary `#30BAD9`, tertiary `#F2811D`); vars `--brand`,
  `--accent`, `--bg` (`#F2F2F2`). Diálogos con `surface` sólido forzado en `styles.scss`. Datepicker
  con date adapter nativo (locale `es-ES`).
- **Seeds:** [public/data/](public/data/). **Claves `localStorage`:** `fit-daily_session` y caches HD
  (`fit-daily_hd_users`/`_roles`/`_clients`/`_statuses`); los **datos del board van a Firebase** (ya
  no a `fit-daily_v1`, salvo que se vuelva al placeholder).
- **Entornos:** dev → **Firebase real** + API por **proxy del dev server** (`proxy.conf.json`,
  URLs relativas); prod → Firebase + Cloudflare Worker (`fileReplacements`).
- **`proxy.py`** (raíz) quedó como alternativa; el flujo actual usa el proxy integrado de `ng serve`
  (no requiere Python). Soporta GET/POST/PUT/PATCH si se usa.

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
| Shell responsive (sidenav hamburguesa + host de filtros) | ✅ |
| Login | ✅ |
| Board (Kanban + sprints + integración Helpdesk) | ✅ |
| Tickets (grid de cards responsive + conversación + asignación + estados + mensajes) | ✅ |
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
