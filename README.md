# FitDaily Backend + Demo estático

Backend con FastAPI + MongoDB Atlas y frontend estático integrado. El proyecto está listo para desarrollo local y despliegue en Render con configuraciones seguras por defecto.

## Estructura del repositorio

- `app/`: código de FastAPI
- `static/`: frontend estático de demostración
- `requirements.txt`: dependencias fijadas
- `render.yaml`: configuración de Render
- `runtime.txt`: versión de Python
- `.env.example`: variables de entorno de ejemplo

## Requisitos

- Python 3.11+
- Cuenta en MongoDB Atlas

## Ejecutar en local

1. Clona el repositorio:
   ```bash
   git clone <repo-url>
   cd Fit-Daily
   ```

2. Crea y activa el entorno virtual:
   ```bash
   python3.11 -m venv .venv
   source .venv/bin/activate
   ```

3. Instala dependencias:
   ```bash
   pip install -r requirements.txt
   ```

4. Copia el archivo de ejemplo:
   ```bash
   cp .env.example .env
   ```

5. Llena las variables en `.env`:
   - `MONGODB_URI`
   - `DATABASE_NAME`
   - `ENVIRONMENT=development`
   - `ALLOWED_ORIGINS=http://localhost:8000,http://127.0.0.1:8000`

6. Corre el servidor:
   ```bash
   uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
   ```

7. Abre el frontend demo:
   - `http://localhost:8000/`
   - Documentación de desarrollo: `http://localhost:8000/docs`

## Despliegue en Render

1. Crea un servicio web en Render conectado a este repositorio.
2. Configura variables de entorno en Render:
   - `MONGODB_URI`
   - `DATABASE_NAME`
   - `ENVIRONMENT=production`
   - `ALLOWED_ORIGINS=https://<tu-servicio>.onrender.com`
3. El comando de inicio en Render será:
   ```bash
   gunicorn app.main:app -w 2 -k uvicorn.workers.UvicornWorker --bind 0.0.0.0:$PORT
   ```
4. Configura el health check en `/health`.

## Seguridad

- No subas `.env` al repositorio.
- No uses `ALLOWED_ORIGINS=*` en producción.
- Asegura que `ENVIRONMENT=production` en Render.
- Guarda `MONGODB_URI` únicamente en el panel de Render.
- Verifica que OpenAPI y docs estén deshabilitados en producción.
