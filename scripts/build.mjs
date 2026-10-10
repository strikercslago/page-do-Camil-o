import { mkdir, copyFile, cp, readFile, writeFile } from 'node:fs/promises';

await mkdir('dist/eventos/camilao-o-comilao', { recursive: true });
await cp('public', 'dist', { recursive: true });
let html = await readFile('public/eventos/camilao-o-comilao/index.html', 'utf8');
// Netlify provides the production URL. Set SITE_URL for a custom domain.
const origin = process.env.SITE_URL || process.env.URL;
if (origin) {
  const base = new URL(origin).origin;
  const canonical = `${base}/eventos/camilao-o-comilao/`;
  html = html.replace('<!-- production-url -->', `<link rel="canonical" href="${canonical}"><meta property="og:url" content="${canonical}">`);
  html = html.replace('content="/assets/imagens/compartilhamento_evento_1200x630.png"', `content="${base}/assets/imagens/compartilhamento_evento_1200x630.png"`);
}
await writeFile('dist/eventos/camilao-o-comilao/index.html', html);
await copyFile('dist/eventos/camilao-o-comilao/index.html', 'dist/index.html');
console.log('Página estática gerada em dist.');
