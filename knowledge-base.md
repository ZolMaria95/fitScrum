# Fit-Daily — Base de Conocimiento

**Proyecto:** Fit-Daily (antes fitScrum)
**Empresa:** Soft Warehouse SA
**Contexto:** Herramienta interna de gestión Scrum para el equipo de consultores que da soporte a clientes del sistema FitBank.

---

## 1. Propósito

Reemplazar el seguimiento manual de tareas por un board Kanban integrado con el sistema de Helpdesk. Cada tarea corresponde a un ticket de cliente. El Scrum Master tiene un panel propio para supervisión diaria.

---

## 2. Stack

- **Frontend:** HTML + CSS + JS vanilla (sin frameworks)
- **Persistencia:** Firebase Realtime Database (principal) / localStorage (fallback dev)
- **Proxy API Helpdesk:** Cloudflare Worker
- **Tipografía:** Inter (UI) + JetBrains Mono (IDs, números, monoespaciado)
- **Deploy previsto:** GitHub Pages + Cloudflare Worker

---

## 3. Archivos principales

| Archivo | Rol |
|---|---|
| `index.html` | Shell principal, todos los modales declarados aquí |
| `login.html` | Pantalla de login |
| `css/main.css` | Todos los estilos (un solo archivo) |
| `js/firebase-config.js` | URLs de Firebase y Cloudflare Worker (configurar antes de deploy) |
| `js/data.js` | Capa de datos: Firebase / localStorage, todas las operaciones CRUD |
| `js/app.js` | Orquestador: sesión, navegación, formularios, sprint selector |
| `js/board.js` | Kanban board: render de cards, drag & drop, modal de detalle |
| `js/burndown.js` | Gráfico burndown + métricas + velocidad de equipo |
| `js/progreso.js` | Vista de registro de avances |
| `js/consultas.js` | Vista de consultas y bloqueos |
| `js/helpdesk.js` | Cliente API Helpdesk (lookup de tickets para asociar a tareas) |
| `js/helpdesk-auth.js` | Auth del Helpdesk por usuario: `login`/`logout`/`fetchWithAuth` (token de la sesión) |
| `js/helpdesk-panel.js` | Vista tabla Helpdesk: sync, clasificación, estadísticas, notas inline, filtros |
| `js/semanal.js` | Vista "HelpDesk Semanal": asignación semanal de consultor (calendario por semanas) |
| `js/pendientes.js` | Vista "Pendientes": tickets marcados como pendientes |
| `js/usuarios-pizza.js` | Vista "TUsuariosPizza": registro de penalizaciones (vacaciones >15 días / atentado) |
| `js/sol-panel.js` | Panel Scrum Master (Mi Panel) |
| `data/users.json` | Equipo (estático) |
| `data/clients.json` | Clientes (estático) |
| `data/sprints.json` | Seed inicial de sprints |
| `data/stories.json` | Seed inicial de tareas |
| `data/progress.json` | Seed inicial de avances |
| `data/queries.json` | Seed inicial de consultas |
| `cloudflare-worker.js` | Worker proxy para API Helpdesk (evitar CORS) |
| `proxy.py` | Proxy local para desarrollo (alternativa al worker) |

---

## 4. Sistema de diseño

### Colores (CSS custom properties en `:root`)

```css
--brand:        #04BAF0   /* azul FitBank — color primario */
--brand-mid:    #30BAD9
--brand-dark:   #0390BC
--accent:       #F29E3B   /* naranja — prioridad media, avisos */
--accent-dark:  #F2811D
--ok:           #27AE60   /* verde — done, aprobado */
--ok-light:     #E8F8EE
--error:        #E74C3C   /* rojo — alta prioridad, vencida */
--error-light:  #FDEDEC
--warn-light:   #FEF5E7
--purple:       #9B59B6
--bg:           #F2F2F2   /* fondo general */
--surface:      #FFFFFF   /* cards, modales */
--border:       #E0E0E0
--text:         #1A1A2E   /* texto principal */
--text-mid:     #4A4A6A
--text-muted:   #8A8A9A
--radius:       6px
--header-h:     56px
--banner-h:     46px
--font-mono:    'JetBrains Mono'
```

### Tabla Helpdesk (Excel-style)

```
Header:  #1F3864 (azul oscuro)  texto blanco
Filas:   alternado #EBF3FB / #ffffff
Hover:   #D6E8F5
Borde:   #BDD7EE
```

### Prioridad → color borde izquierdo en cards

| Prioridad | Color |
|---|---|
| alta | `var(--error)` = `#E74C3C` |
| media | `var(--accent)` = `#F29E3B` |
| baja | `var(--border)` = `#E0E0E0` |

### Barra de progreso → colores por rango

| Rango | Color |
|---|---|
| 0% | `#E0E0E0` |
| 1–25% | `#F29E3B` |
| 26–50% | `#F2811D` |
| 51–75% | `#04BAF0` |
| 76–100% | `#27AE60` |

---

## 5. Modelo de datos

### Tarea (story) — campos completos

```json
{
  "id":           "TA-001",        // prefijo TA-, 3 dígitos
  "sprint":       "SP-01",
  "status":       "todo",          // todo | in_progress | review | done
  "priority":     "media",         // alta | media | baja
  "title":        "Texto",
  "description":  "",
  "assignee":     "AN",            // ID de usuario (o null)
  "client":       "erco",          // ID de cliente (o null)
  "ticket":       "4521",          // número de ticket Helpdesk
  "dueDate":      "2026-05-30",
  "points":       1,
  "progress":     0,               // 0–100, múltiplos de 5
  "approved":     false,
  "approvedDate": null,
  "waitingClient": false,
  "waitingDate":   null
}
```

### Sprint — campos completos

```json
{
  "id":       "SP-01",             // prefijo SP-, 2 dígitos
  "name":     "Sprint 1",
  "goal":     "Objetivo del sprint",
  "start":    "2026-05-01",
  "end":      "2026-05-15",
  "capacity": 40,                  // puntos de capacidad
  "status":   "active"             // active | completed | planned
}
```

Estructura del JSON raíz de sprints:
```json
{ "active": "SP-01", "sprints": [...] }
```

### Usuario

```json
{
  "id":           "AN",           // 2 letras, usado como iniciales
  "name":         "Andres",
  "role":         "Consultor",    // Consultor | Scrum Master | Supervisor
  "color":        "#04BAF0",
  "passwordHash": "sha256..."
}
```

### Cliente

```json
{
  "id":    "erco",
  "name":  "ERCO",
  "color": "#..."
}
```

### Entrada de progreso

```json
{
  "id":          "PR-001",
  "storyId":     "TA-001",
  "author":      "AN",
  "date":        "2026-05-19",
  "hoursLogged": 4,
  "notes":       "Texto del avance"
}
```

### Consulta / bloqueo

```json
{
  "id":          "QR-001",
  "title":       "Título",
  "description": "Detalle",
  "storyId":     "TA-001",       // o null
  "priority":    "media",
  "author":      "AN",
  "date":        "2026-05-19",
  "status":      "open",         // open | resolved
  "response":    null,
  "respondedBy": null
}
```

---

## 6. Equipo

| ID | Nombre | Rol | Color |
|---|---|---|---|
| AN | Andres | Consultor | `#04BAF0` |
| KV | Kevin | Consultor | `#27AE60` |
| KA | Karla | Consultor | `#F29E3B` |
| DV | David | Consultor | `#9B59B6` |
| JO | Joel | Consultor | `#E74C3C` |
| SO | Sol | Scrum Master | `#F2811D` |
| JU | Juan | Supervisor | `#1ABC9C` |
| GA | Gabriel | Consultor | `#2980B9` |
| LI | Lina | Supervisor | `#8E44AD` |

---

## 7. Clientes y mapeo Helpdesk

Hay **dos estructuras** de clientes, ambas en `js/helpdesk-panel.js` (y una copia parcial de `CLIENT_MAP` en `js/helpdesk.js`):

- **`CLIENTES_VALIDOS`** (`Set`): filtro del sync. Solo los tickets cuyo `cliente` (uppercase, trim) esté en este Set entran a la tabla Helpdesk. Variantes con/sin tilde se listan por separado (ej. `SENOR` y `SEÑOR`).
- **`CLIENT_MAP`** (objeto nombre→ID): traduce el nombre del API al ID interno usado al asociar un ticket a una tarea / modal de cliente.

| Nombre en API Helpdesk | ID interno |
|---|---|
| COOPERATIVA DE AHORRO Y CREDITO ERCO | `erco` |
| COAC CAPCPE GUALAQUIZA | `gualaquiza` |
| COAC LA DOLOROSA DURAN | `dolorosa` |
| PADRE JULIAN LORENTE | `julian` |
| COAC CACEL | `cacel` |
| COAC 4 RIOS | `4rios` |
| LITARGMODE CIA LTDA | `litarg` |
| COAC COPAC AUSTRO LTDA | `copac_austro` |
| BANCO DEL AUSTRO | `austro` |
| VAZCREDIT | `vazcredit` |
| COAC SENOR DE GIRON / COAC SEÑOR DE GIRON | `giron` |
| FININVEST OVERSEAS INC. LTD. | `fininvest` |
| SEGURA COOP | `segura` |
| PUNTOPRESTAMO | `puntoprestamo` |

> Para agregar un cliente hay que añadirlo **en ambas** estructuras (`CLIENTES_VALIDOS` y `CLIENT_MAP`) o no aparecerá en la tabla. Hoy los 15 clientes están en las dos.

---

## 8. Reglas de negocio

### Ciclo de vida de una tarea

```
todo → in_progress → review (EN CERTIFICACIÓN) → done
```

- Se puede mover por drag & drop en el board o cambiando el estado en el modal de detalle.
- En `review`: aparece checkbox **Certificado** — al marcar mueve automáticamente a `done`.
- En `done`: aparece checkbox **Aprobado** — se puede marcar y desmarcar.
- Tareas aprobadas en `done` desaparecen del board después de 1 día (se ocultan si `approvedDate < ayer`).

### Sprint — transición al crear nuevo

- Al crear un nuevo sprint, el sprint activo actual pasa a `completed`.
- Las tareas del sprint anterior que NO estén en `done` con `approved: true` migran automáticamente al nuevo sprint.

### Eliminación de sprint

- No se puede eliminar si es el único sprint existente.
- Las tareas del sprint eliminado NO se eliminan.

### Progreso

- Valores en múltiplos de 5 (se redondea al siguiente múltiplo si se ingresa un número intermedio).
- Editable en la card (solo visibles en `in_progress`) y en el modal de detalle.

### Esperando cliente

- Botón toggle en cards `in_progress`.
- Al activar se guarda `waitingDate` con la fecha actual.
- Si `waitingClient: true` y han pasado ≥ 3 días → botón cambia a alerta roja pulsante.
- Afecta al Panel Sol: aparece en la sección "Notificar al cliente".

### Vencimiento

- `overdue`: tarea activa cuya `dueDate` < hoy → borde y fecha en rojo.
- `soon`: tarea activa cuya `dueDate` está dentro de 3 días → badge pulsante naranja, borde naranja.

### Fechas de entrega

- Editables directamente en el modal de detalle.
- En cards `in_progress` hay mini-editor inline al hacer clic en la fecha (sin modal).

---

## 9. Vistas y navegación

La barra superior agrupa las vistas en **dos dropdowns** (`.nav-dropdown`) más una tab suelta. En ≤768px se replica en un **sidebar responsive** (`.sidebar-item`, mismo `data-view`). Cada item navega por su atributo `data-view`.

**Dropdown "Scrum":**

| Tab | data-view | Descripción |
|---|---|---|
| Board | `board` | Kanban 4 columnas + filtros por prioridad, asignado, cliente |
| Burndown | `burndown` | Gráfico burndown + métricas KPI + velocidad del equipo |
| Progreso | `progreso` | Registro de avances por historia |
| Consultas | `consultas` | Consultas y bloqueos del equipo |

**Dropdown "HelpDesk":**

| Tab | data-view | Descripción |
|---|---|---|
| Tickets | `helpdesk` | Tabla Excel de tickets Helpdesk: sync, clasificación, estadísticas, notas, filtros |
| HelpDesk Semanal | `semanal` | Calendario de asignación semanal de consultor de guardia |
| Mi Panel | `sol` | Panel Scrum Master — oculto por defecto (`.nav-tab-sol .hidden`), visible para Scrum Master o Helpdesk MSC001 |
| Pendientes | `pendientes` | Tickets marcados como pendientes (`hdPendientes`) |

**Tab suelta:**

| Tab | data-view | Descripción |
|---|---|---|
| TUsuariosPizza | `tusuariospizza` | Registro de penalizaciones — oculto por defecto (`.nav-tab-pizza .hidden`), visible solo para MSC001 |

---

## 10. Panel Sol (Scrum Master)

Cuatro bloques en orden de prioridad:

| Bloque | Color | Criterio |
|---|---|---|
| 0. Acciones pendientes | Crimson `#C0392B` | Tickets marcados con "Acción" en Helpdesk |
| 1. Notificar al cliente | Amber `#F29E3B` | Tickets Helpdesk con ≥3 días sin movimiento |
| 2. Próximos a vencer | Red `#E74C3C` | Tareas activas con `dueDate` ≤ 3 días |
| 3. Por asignar | Blue `#04BAF0` | Tareas en estado `todo` |

KPIs numéricos en la parte superior correspondientes a cada bloque.

---

## 11. Helpdesk — autenticación e integración API

### Autenticación por usuario (ya NO hay credencial compartida)

Cada persona inicia sesión en `login.html` con **sus propias credenciales del Helpdesk** — el credencial fijo `HELPDESK1` quedó eliminado. Flujo (`js/helpdesk-auth.js`):

1. `HelpdeskAuth.login(usuario, pass)` → `POST /auth/login` (`force_logout: 'true'`) devuelve `access_token`.
2. `GET /users/me` con ese token → `profile`.
3. La sesión se guarda en `localStorage` bajo `fit-daily_session`:
   ```js
   { id, name, role, apiRole: profile.role_description, token, ... }
   ```
   - `role` → rol local de Fit-Daily (de `users.json` si el usuario existe ahí, si no `role_description` o `'Usuario'`).
   - `apiRole` → `role_description` del Helpdesk, **autoritativo para permisos**.
4. `App.init()` redirige a `login.html` si no hay sesión con `token`.
5. `HelpdeskAuth.fetchWithAuth` adjunta el `Bearer` token; ante **401/403** borra la sesión y redirige al login. `App._hdFetchSafe` es la variante "best-effort" que NO redirige (para escrituras donde fallar es aceptable).

### Lookup e integración

- **Prioridad API → interna:** `1-2` → alta, `3` → media, `4+` → baja.
- **Lookup de ticket** (`js/helpdesk.js`): primero `GET /tickets/:id`; si falla busca en listado paginado (2 páginas, 40 items, `modified_date_order=desc`).
- **Asignación:** `PATCH /tickets/tickets/:id` con `{ assigned_user_id }` (vía `_hdFetchSafe`).
- **Usuarios asignables:** se descubren desde los tickets sincronizados (`HelpdeskPanel.getHdUsers()`); fallback a `users.json` si aún no se hizo un ↻ Sincronizar.
- **Proxy:** producción = Cloudflare Worker `HELPDESK_PROXY_URL`; desarrollo = `http://localhost:3001` (`proxy.py`).

---

## 11.b Panel Helpdesk — clasificación de tickets

`js/helpdesk-panel.js` clasifica cada ticket sincronizado y le asigna color y orden. Constantes clave:

- **`CLASIF_ORDER` / `CLASIF_COLOR`** — categorías ordenadas por urgencia: `URGENTE`, `CRITICO SIN MOVIMIENTO`, `ALTA PRIORIDAD`, `RECIENTE`, `REQUIERE REVISION`, `CLIENTE PENDIENTE`, `VERIFICAR MOTIVO DE NO ASIGNACION`, `SIN ASIGNAR`, `COMENTARIO ENVIADO POR FITBANK`, `SIN ACCION`.
- **`PRIORITY_ACTIONS`** (`Set`) — acciones que marcan prioridad: `ASIGNAR TECNICO`, `REQUIERE REVISION`, `ESCALAR INMEDIATAMENTE`, `ATENDER INMEDIATAMENTE`, `REVISAR HOY`.
- **`EMPLEADOS`** (`Set` de user_ids) — IDs del equipo de soporte para distinguir mensajes de empleado vs cliente (vía `entry_user_role` del API): `JPHP001, VINC001, MSC001, FSGC001, ORLR001, KIMA001, KDLS001, BMHJ001, DSGS001, JCEO001, CUC001, JFQV001`.
- **Renombre de estatus en pantalla** (solo display): `APROBADO` → **CLIENTE CONTENTO 😊**, `DEVUELTO` → **TÉCNICO TRISTE 😢**.
- La tabla tiene **filtro por Estatus**, búsqueda remota automática y un botón **Limpiar** siempre visible.

---

## 12. Persistencia y claves localStorage

| Clave | Contenido |
|---|---|
| `fit-daily_v1` | Fallback cuando Firebase no está configurado (sprints, stories, progress, queries, weeklySupport, hdPendientes) |
| `fit-daily_session` | Sesión del usuario logueado — **`localStorage`** (compartida entre pestañas), incluye `token` y `apiRole` |
| `fit-daily_hd_actions` | Tickets marcados con "Acción pendiente" `{ ticketId: true }` (también en Firebase) |
| `fit-daily_hd_notes` | Notas inline de tickets Helpdesk `{ ticketId: "texto" }` (también en Firebase) |
| `fit-daily_sol_notes` | Notas del panel Sol para tickets de cliente pendiente (también en Firebase) |

> La sesión migró de `sessionStorage` (por pestaña) → `localStorage` (compartida entre pestañas); la migración de `fitscrum_session`/`fit-daily_session` ocurre automáticamente al cargar la app.
> El token del Helpdesk vive en la sesión local (lo necesita `fetchWithAuth`); las llamadas pasan por el Cloudflare Worker.

---

## 13. Configuración para deploy

`js/firebase-config.js` **auto-detecta el entorno** por `window.location.hostname`:

```js
const _IS_LOCALHOST = ['localhost', '127.0.0.1'].includes(window.location.hostname);

// LOCAL  → 'TU-PROYECTO...' (fuerza fallback a localStorage, NO toca Firebase de prod)
// PROD   → URL real
window.FIREBASE_DB_URL = _IS_LOCALHOST
  ? 'https://TU-PROYECTO-default-rtdb.firebaseio.com'
  : 'https://fit-daily-ab113-default-rtdb.firebaseio.com';

window.HELPDESK_PROXY_URL = _IS_LOCALHOST
  ? 'http://localhost:3001'
  : 'https://fit-daily-proxy.contreras-sol-4to5.workers.dev';
```

- En **local** los datos se aíslan en `localStorage` (no se escribe a Firebase de producción) y el proxy es `proxy.py` en `localhost:3001`.
- `data.js` detecta "configurado" comprobando que la URL no contenga `'TU-PROYECTO'`; el proxy con `'TU-WORKER'`.
- En Firebase los datos se guardan bajo `/fit-daily/` con subclaves: `sprints`, `stories`, `progress`, `queries`, `weeklySupport`, `hdActions`, `hdNotes`, `solNotes`, `hdPendientes`.

### Cache-busting

Todos los assets en `index.html`/`login.html` llevan sufijo `?v=N` (actualmente `?v=16`) + meta `no-cache`. **Al hacer cambios de JS/CSS hay que subir el número de versión** para invalidar el cache de GitHub Pages.

---

## 13.b Roles y permisos

Los permisos se resuelven en `App.init()` ([js/app.js:111](js/app.js#L111)) a partir de la sesión:

- **`isHelpdesk`** = `id === 'MSC001'` (rol Helpdesk admin propio de Fit-Daily).
- **`isSupervisor`** = `apiRole` (del Helpdesk) contiene `'SUPERVISOR'`.

| Capacidad | Quién | Implementación |
|---|---|---|
| Tab "Mi Panel" | Scrum Master o `isHelpdesk` | quita `.hidden` de `.nav-tab-sol` |
| Tab "TUsuariosPizza" | solo `isHelpdesk` | quita `.hidden` de `.nav-tab-pizza` |
| Borrar tarjeta individual | `isHelpdesk` o `isSupervisor` | `body.can-delete-cards` |
| Mover tarjetas ajenas | `isHelpdesk` o `isSupervisor` | `body.can-move-all-cards` |
| Borrar board completo | solo `isHelpdesk` | `body.can-delete-board` + botón `#btn-clear-board` |

> Otros roles (SOPORTE, etc.) solo pueden mover **sus propias** tarjetas.

---

## 13.c Vistas auxiliares Helpdesk

### HelpDesk Semanal (`js/semanal.js`)
Calendario por semanas para asignar al **consultor de guardia** de cada semana. El chip con el nombre del consultor se ancla al **viernes** (día ancla de la semana). Se persiste en Firebase bajo `weeklySupport` (`{ weeks: {...} }`). Sin asignación muestra "Sin asignar".

### Pendientes (`js/pendientes.js`)
Tabla de tickets marcados manualmente como pendientes. Datos en `hdPendientes` (`{ ticketId: { ticket, asunto, clienteRaw, addedAt } }`), ordenados por `addedAt` descendente. Se agregan/quitan desde la tabla Helpdesk.

### TUsuariosPizza (`js/usuarios-pizza.js`) — solo MSC001
Registro de penalizaciones del equipo ("el que paga la pizza"). Motivos (`MOTIVOS`): `vacaciones` ("Más de 15 días de vacaciones ininterrumpidos") y `atentado` ("Atentado en el sistema"). Maneja una ventana de `DOS_SEMANAS_MS` (14 días).

---

## 14. Convenciones de ID

| Entidad | Prefijo | Ejemplo |
|---|---|---|
| Sprint | `SP-` + 2 dígitos | `SP-01` |
| Tarea | `TA-` + 3 dígitos | `TA-001` |
| Progreso | `PR-` + 3 dígitos | `PR-001` |
| Consulta | `QR-` + 3 dígitos | `QR-001` |
| Usuario | 2 letras mayúsculas | `AN`, `SO` |
| Cliente | string corto lowercase | `erco`, `4rios` |

---

## 15. Rename completado

El proyecto se renombró de **fitScrum** a **Fit-Daily** en mayo 2026.
El namespace de Firebase pasó de `/fitscrum/` a `/fit-daily/`, y las claves de
`localStorage`/`sessionStorage` migran automáticamente al cargar la app por primera vez.
