// components.js — nav i footer compartits
// Afegir <script src="components.js"></script> a cada .html

(function () {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  const links = [
    { href: 'index.html',       label: 'Projects' },
    { href: 'environment.html', label: 'Environment Artist' },
    { href: 'pixelart.html',    label: '2D Pixel Art' },
  ];

  const navHTML = `
    <nav class="nav">
      ${links.map(l => `
        <a href="${l.href}" class="${currentPage === l.href ? 'active' : ''}">${l.label}</a>
      `).join('')}
    </nav>
  `;

  const footerHTML = `
    <footer>
      <p>📫 Contacte: <a href="mailto:jordi110398@gmail.com">jordi110398@gmail.com</a> · <a href="https://github.com/jordi110398" target="_blank">GitHub</a></p>
    </footer>
  `;

  // Injecta nav dins .hero si existeix
  const hero = document.querySelector('.hero');
  if (hero) hero.insertAdjacentHTML('afterbegin', navHTML);

  // Substitueix <footer> existent o afegeix al final
  const existingFooter = document.querySelector('footer');
  if (existingFooter) {
    existingFooter.outerHTML = footerHTML;
  } else {
    document.body.insertAdjacentHTML('beforeend', footerHTML);
  }
})();
