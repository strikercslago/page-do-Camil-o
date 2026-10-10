const message = 'Olá! Vi a página do evento Camilão, o Comilão da Casa Criativa e gostaria de saber como faço para reservar uma vaga para uma criança no dia 17 de outubro.';
export const reservationUrl = `https://wa.me/5554999170574?text=${encodeURIComponent(message)}`;

if (typeof document !== 'undefined') {
  document.querySelectorAll('[data-reserve]').forEach(link => { link.href = reservationUrl; });
  const menu = document.querySelector('.mobile-menu');
  const nav = document.querySelector('#navigation');
  const close = () => { menu.setAttribute('aria-expanded', 'false'); menu.setAttribute('aria-label', 'Abrir menu'); nav.classList.remove('is-open'); };
  menu.addEventListener('click', () => {
    const open = menu.getAttribute('aria-expanded') !== 'true';
    menu.setAttribute('aria-expanded', String(open));
    menu.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    nav.classList.toggle('is-open', open);
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', close));
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') { close(); menu.focus(); } });
}
