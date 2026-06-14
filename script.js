// Mobile nav toggle
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('nav-links');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('nav__links--open');
    hamburger.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('nav__links--open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });

  document.addEventListener('click', e => {
    if (!e.target.closest('.nav__inner')) {
      navLinks.classList.remove('nav__links--open');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  });
}

// Smooth scroll fallback for browsers without CSS scroll-behavior support
if (!CSS.supports('scroll-behavior', 'smooth')) {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}
