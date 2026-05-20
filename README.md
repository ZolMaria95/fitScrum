# FitDaily Backend

Backend **FastAPI + MongoDB Atlas** con frontend estático integrado.
Listo para desarrollo local y despliegue en Render. Seguro por defecto.

---

## Estructura del repositorio

```
app/
├── __init__.py
├── main.py          — FastAPI app, middlewares, lifespan
├── config.py        — Settings (pydantic-settings, todas las vars son requeridas)
├── database.py      — Conexión async Motor, helper get_database()
├── routers/
│   ├── items.py     — CRUD completo /api/items (requiere JWT)
│   └── auth.py      — /api/auth/register · /login · /me · /users
├── models/
│   ├── item.py      — Modelo interno de MongoDB
│   └── user.py      — Modelo interno de MongoDB
├── schemas/
│   ├── item.py      — ItemCreate · ItemUpdate · ItemResponse
│   └── user.py      — UserCreate · UserLogin · UserResponse
└── utils/
    └── security.py  — JWT encode/decode, hash/verify password, get_current_user
static/
├── index.html       — Demo: login + CRUD de tareas
├── style.css
└── app.js           — Vanilla JS con manejo de token JWT en memoria
requirements.txt
render.yaml
runtime.txt
.env.example
```

---

## Requisitos previos

- Python 3.11+
- Cuenta en [MongoDB Atlas](https://cloud.mongodb.com) (tier gratuito M0 disponible)

---

## Configurar MongoDB Atlas

1. Crea un cluster (Free Tier M0).
2. En **Database Access** → crea un usuario con contraseña.
3. En **Network Access** → agrega `0.0.0.0/0` (o la IP de Render cuando la tengas).
4. En el cluster → **Connect** → **Drivers** → copia el URI de conexión:
   ```
   mongodb+srv://<usuario>:<contraseña>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```

---

## Correr en local

```bash
# 1. Clonar
git clone <repo-url>
cd Fit-Daily

# 2. Entorno virtual
python3.11 -m venv .venv
source .venv/bin/activate          # Windows: .venv\Scripts\activate

# 3. Dependencias
pip install -r requirements.txt

# 4. Variables de entorno
cp .env.example .env
# Edita .env y llena: MONGODB_URI, DATABASE_NAME, ALLOWED_ORIGINS, JWT_SECRET

# 5. Servidor
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

Abre en el navegador:
- Frontend demo: `http://localhost:8000/`
- Swagger UI: `http://localhost:8000/docs` (solo en ENVIRONMENT=development)

### Bootstrap del primer usuario

La ruta `/api/auth/register` solo funciona si la colección `users` está vacía.

```bash
curl -s -X POST http://localhost:8000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@example.com","password":"password123","first_name":"Admin","last_name":"User","role":"scrummaster"}'
```

### Login y uso del token

```bash
# Login
TOKEN=$(curl -s -X POST http://localhost:8000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@example.com","password":"password123"}' \
  | python3 -c "import sys,json; print(json.load(sys.stdin)['access_token'])")

# Listar items
curl -s -H "Authorization: Bearer $TOKEN" http://localhost:8000/api/items

# Crear item
curl -s -X POST http://localhost:8000/api/items \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"title":"Tarea demo","description":"Descripción de prueba"}'
```

---

## Despliegue en Render

1. Crea un **Web Service** en Render conectado a este repositorio.
2. Render detecta `render.yaml` automáticamente (o configura manualmente):
   - **Build command**: `pip install -r requirements.txt`
   - **Start command**: `gunicorn app.main:app -w 2 -k uvicorn.workers.UvicornWorker --bind 0.0.0.0:$PORT`
   - **Health check path**: `/health`
3. En **Environment Variables** del panel de Render, configura:

| Variable | Valor |
|---|---|
| `MONGODB_URI` | Tu URI de MongoDB Atlas |
| `DATABASE_NAME` | Nombre de la base (ej. `fitdaily`) |
| `ENVIRONMENT` | `production` |
| `ALLOWED_ORIGINS` | `https://<tu-servicio>.onrender.com` |
| `JWT_SECRET` | Render puede generarlo con `generateValue: true` |
| `JWT_ALGORITHM` | `HS256` |
| `ACCESS_TOKEN_EXPIRE_MINUTES` | `60` |

4. Haz deploy. El endpoint `/health` devolverá `{"status": "ok"}`.

---

## Variables de entorno — referencia completa

| Variable | Requerida | Descripción |
|---|---|---|
| `MONGODB_URI` | Sí | URI de conexión de MongoDB Atlas |
| `DATABASE_NAME` | Sí | Nombre de la base de datos |
| `ENVIRONMENT` | Sí | `development` o `production` |
| `ALLOWED_ORIGINS` | Sí | Orígenes CORS, separados por coma |
| `JWT_SECRET` | Sí | Clave secreta para firmar tokens JWT |
| `JWT_ALGORITHM` | No | Algoritmo JWT (default: `HS256`) |
| `ACCESS_TOKEN_EXPIRE_MINUTES` | No | Vida del token en minutos (default: `60`) |

---

## Seguridad — checklist antes de hacer push

- [ ] El archivo `.env` **NO** está en el repositorio (`git status` no lo muestra).
- [ ] `JWT_SECRET` en `.env` es un valor aleatorio seguro, no el placeholder de `.env.example`.
- [ ] `ALLOWED_ORIGINS` no contiene `*` en producción.
- [ ] `ENVIRONMENT=production` en Render (deshabilita `/docs` y stack traces).
- [ ] `MONGODB_URI` solo está en el panel de Render, nunca en el código.
- [ ] El índice único en `users.email` está creado (el lifespan lo hace al arrancar).

### Generar un JWT_SECRET seguro

```bash
python3 -c "import secrets; print(secrets.token_urlsafe(32))"
```

---

## API — resumen de endpoints

| Método | Ruta | Auth | Descripción |
|---|---|---|---|
| `GET` | `/health` | No | Health check |
| `POST` | `/api/auth/register` | No* | Bootstrap primer usuario |
| `POST` | `/api/auth/login` | No | Obtener token JWT |
| `GET` | `/api/auth/me` | Sí | Perfil del usuario actual |
| `POST` | `/api/auth/users` | Sí (admin) | Crear usuario adicional |
| `GET` | `/api/items` | Sí | Listar items (`skip`, `limit`) |
| `GET` | `/api/items/{id}` | Sí | Obtener item por ID |
| `POST` | `/api/items` | Sí | Crear item |
| `PUT` | `/api/items/{id}` | Sí | Actualizar item |
| `DELETE` | `/api/items/{id}` | Sí | Eliminar item |

\* Solo funciona si la colección `users` está vacía (bootstrap).
