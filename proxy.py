"""
Servidor local para Fit-Daily.
- Sirve los archivos estáticos de la app (HTML, CSS, JS, data/)
- Reenvía /api/v1/* hacia https://helpdesk-api.fit-bank.com
Corre en puerto 3001. Abrir: http://localhost:3001
"""
from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
import urllib.request
import urllib.error
import ssl
import os

TARGET = 'https://helpdesk-api.fit-bank.com'
PORT   = 3001
ROOT   = os.path.dirname(os.path.abspath(__file__))

class Handler(SimpleHTTPRequestHandler):

    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=ROOT, **kwargs)

    def log_message(self, fmt, *args):
        print(f'  [{self.command}] {self.path} → {args[1]}')

    def _cors(self):
        self.send_header('Access-Control-Allow-Origin',  '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Authorization, Content-Type')

    def do_OPTIONS(self):
        self.send_response(200)
        self._cors()
        self.end_headers()

    def do_GET(self):
        if self.path.startswith('/api/'):
            self._forward()
        else:
            super().do_GET()

    def do_POST(self):
        if self.path.startswith('/api/') or self.path.startswith('/auth/'):
            self._forward()
        else:
            self.send_response(405)
            self.end_headers()

    def do_PATCH(self):
        if self.path.startswith('/api/'):
            self._forward()
        else:
            self.send_response(405)
            self.end_headers()

    def do_PUT(self):
        if self.path.startswith('/api/'):
            self._forward()
        else:
            self.send_response(405)
            self.end_headers()

    def _forward(self):
        url    = TARGET + self.path
        length = int(self.headers.get('Content-Length', 0))
        body   = self.rfile.read(length) if length else None

        headers = {}
        for h in ['Content-Type', 'Authorization']:
            if self.headers.get(h):
                headers[h] = self.headers[h]

        ctx = ssl.create_default_context()
        ctx.check_hostname = False
        ctx.verify_mode    = ssl.CERT_NONE
        req = urllib.request.Request(url, data=body, headers=headers, method=self.command)

        try:
            with urllib.request.urlopen(req, context=ctx) as resp:
                data = resp.read()
                self.send_response(resp.status)
                self._cors()
                self.send_header('Content-Type', resp.headers.get('Content-Type', 'application/json'))
                self.end_headers()
                self.wfile.write(data)
        except urllib.error.HTTPError as e:
            data = e.read()
            self.send_response(e.code)
            self._cors()
            self.send_header('Content-Type', 'application/json')
            self.end_headers()
            self.wfile.write(data)
        except Exception as e:
            self.send_response(502)
            self._cors()
            self.end_headers()
            self.wfile.write(str(e).encode())

if __name__ == '__main__':
    # 0.0.0.0 → accesible desde otras máquinas de la LAN (no solo localhost).
    server = ThreadingHTTPServer(('0.0.0.0', PORT), Handler)
    print(f'✓ Servidor corriendo en http://0.0.0.0:{PORT} (accesible en la LAN)')
    print(f'  Archivos estáticos: {ROOT}')
    print(f'  Proxy API hacia:    {TARGET}')
    print('  Ctrl+C para detener\n')
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print('\nServidor detenido.')
