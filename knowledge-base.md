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
| `js/helpdesk.js` | Cliente API Helpdesk (lookup de tickets, auth JWT) |
| `js/helpdesk-panel.js` | Vista tabla Helpdesk con estadísticas y notas inline |
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

El `CLIENT_MAP` en `js/helpdesk.js` traduce el nombre de la API al ID interno:

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

| Tab | Vista | Descripción |
|---|---|---|
| Board | `view-board` | Kanban 4 columnas + filtros por prioridad, asignado, cliente |
| Burndown | `view-burndown` | Gráfico burndown + métricas KPI + velocidad del equipo |
| Progreso | `view-progreso` | Registro de avances por historia |
| Consultas | `view-consultas` | Consultas y bloqueos del equipo |
| Helpdesk | `view-helpdesk` | Tabla Excel de tickets Helpdesk + estadísticas + notas inline |
| Mi Panel | `view-sol` | Panel Scrum Master — solo visible si `role === 'Scrum Master'` |

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

## 11. Helpdesk — integración API

- **Credenciales:** usuario `HELPDESK1`, password `MtRuLxgDz6q5` (token JWT, se cachea 50 min en sessionStorage).
- **Prioridad API → interna:** `1-2` → alta, `3` → media, `4+` → baja.
- **Lookup de ticket:** primero intenta endpoint directo `GET /tickets/:id`; si falla busca en listado paginado (2 páginas, 40 items c/u, orden `modified_date_order=desc`).
- **Proxy:** en producción usa `HELPDESK_PROXY_URL` (Cloudflare Worker). En desarrollo usa `http://localhost:3001`.

---

## 12. Persistencia y claves localStorage

| Clave | Contenido |
|---|---|
| `fit-daily_v1` | Fallback cuando Firebase no está configurado (sprints, stories, progress, queries) |
| `fit-daily_session` | Sesión del usuario logueado (sessionStorage) |
| `fit-daily_hd_actions` | Tickets marcados con "Acción pendiente" `{ ticketId: true }` (también en Firebase) |
| `fit-daily_hd_notes` | Notas inline de tickets Helpdesk `{ ticketId: "texto" }` (también en Firebase) |
| `fit-daily_sol_notes` | Notas del panel Sol para tickets de cliente pendiente (también en Firebase) |

> El token JWT del Helpdesk ya no se guarda en el cliente — lo gestiona el Cloudflare Worker con secrets.
> La migración de claves `fitscrum_*` → `fit-daily_*` ocurre automáticamente al cargar la app.

---

## 13. Configuración para deploy

Editar `js/firebase-config.js` antes de subir:

```js
window.FIREBASE_DB_URL   = 'https://TU-PROYECTO-default-rtdb.firebaseio.com';
window.HELPDESK_PROXY_URL = 'https://TU-WORKER.workers.dev';
```

Firebase detecta si está configurado comprobando que la URL no contenga `'TU-PROYECTO'`. Igual para el proxy con `'TU-WORKER'`.

En Firebase los datos se guardan bajo el nodo `/fit-daily/` con subclaves: `sprints`, `stories`, `progress`, `queries`, `weeklySupport`, `hdActions`, `hdNotes`, `solNotes`.

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
