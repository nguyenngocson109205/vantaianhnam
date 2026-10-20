import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
const root = process.cwd();
const types = {'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.jpg':'image/jpeg','.jpeg':'image/jpeg','.png':'image/png','.svg':'image/svg+xml'};
http.createServer((req, res) => {
  let url;
  try { url = decodeURIComponent(new URL(req.url, 'http://localhost').pathname); }
  catch { res.writeHead(400).end(); return; }
  if (url !== '/' && url !== '/index.html' && url !== '/mobile.css' && url !== '/scripts/mobile-preview.html' && !url.startsWith('/assets/')) {
    res.writeHead(404).end('Not found'); return;
  }
  const base = url.startsWith('/assets/') || url === '/mobile.css' ? path.join(root, 'public') : root;
  const file = path.resolve(base, '.' + (url === '/' ? '/index.html' : url));
  if (!file.startsWith(base + path.sep)) { res.writeHead(403).end(); return; }
  fs.readFile(file, (error, bytes) => {
    if (error) { res.writeHead(404).end('Not found'); return; }
    res.writeHead(200, {'Content-Type': types[path.extname(file)] || 'application/octet-stream'});
    res.end(bytes);
  });
}).listen(Number(process.env.PORT || 3001), '127.0.0.1', () => console.log(`Preview: http://127.0.0.1:${process.env.PORT || 3001}`));
