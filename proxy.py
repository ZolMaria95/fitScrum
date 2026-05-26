"""
Proxy local para Fit-Daily → Helpdesk API (ambiente TEST)
Corre en puerto 3001 y reenvía a https://helpdesk-api-test.fit-bank.com
"""
from http.server import HTTPServer, BaseHTTPRequestHandler
import urllib.request
import urllib.error
import ssl

TARGET = 'https://helpdesk-api-test.fit-bank.com'
PORT   = 3001

class ProxyHandler(BaseHTTPRequestHandler):

    def log_message(self, fmt, *args):
        print(f'  [{self.command}] {self.path} → {args[1]}')

    def _cors(self):
        self.send_header('Access-Control-Allow-Origin',  '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Authorization, Content-Type')

    def do_OPTIONS(self):
        self.send_response(200)
        self._cors()
        self.end_headers()

    def do_GET(self):
        self._forward()

    def do_POST(self):
        self._forward()

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
    server = HTTPServer(('localhost', PORT), ProxyHandler)
    print(f'✓ Proxy corriendo en http://localhost:{PORT}')
    print(f'  Reenviando a {TARGET}')
    print('  Ctrl+C para detener\n')
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print('\nProxy detenido.')
