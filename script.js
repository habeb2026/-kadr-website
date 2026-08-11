const navToggle = document.querySelector('.nav-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const yearEl = document.getElementById('year');

if (navToggle && mobileMenu) {
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    mobileMenu.classList.toggle('open');
  });
}

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (const link of smoothLinks) {
  link.addEventListener('click', (event) => {
    const targetId = link.getAttribute('href');
    if (targetId && targetId.startsWith('#') && targetId.length > 1) {
      const target = document.querySelector(targetId);
      if (target) {
        event.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        if (mobileMenu.classList.contains('open')) {
          mobileMenu.classList.remove('open');
          navToggle.setAttribute('aria-expanded', 'false');
        }
      }
    }
  });
}
