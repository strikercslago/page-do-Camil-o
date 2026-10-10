import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { reservationUrl } from '../public/assets/event.js';

test('WhatsApp encaminha ao número oficial com a mensagem completa', () => {
  const url = new URL(reservationUrl);
  assert.equal(url.origin, 'https://wa.me');
  assert.equal(url.pathname, '/5554999170574');
  assert.equal(url.searchParams.get('text'), 'Olá! Vi a página do evento Camilão, o Comilão da Casa Criativa e gostaria de saber como faço para reservar uma vaga para uma criança no dia 17 de outubro.');
});
test('página gerada contém conteúdo e metadados antes de executar JavaScript', async () => {
  const html = await readFile('dist/eventos/camilao-o-comilao/index.html', 'utf8');
  for (const text of ['17 de outubro', '2026', '14h às 16h30', 'R$ 130', '12 vagas no total', 'og:title', 'og:description']) assert.ok(html.includes(text), text);
  assert.equal((html.match(/<h1\b/g) || []).length, 1);
  assert.equal((html.match(/<details>/g) || []).length, 4);
  for (const match of html.matchAll(/href="#([^"]+)"/g)) assert.ok(html.includes(`id="${match[1]}"`), match[1]);
  for (const match of html.matchAll(/data-reserve href="([^"]+)"/g)) assert.equal(match[1], reservationUrl);
  for (const match of html.matchAll(/src="(\/assets\/[^\"]+)"/g)) await readFile(`dist${match[1]}`);
});
