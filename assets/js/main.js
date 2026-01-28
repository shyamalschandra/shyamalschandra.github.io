// Smooth scrolling for navbar links
document.querySelectorAll('a[data-scroll]').forEach((link) => {
  link.addEventListener('click', (e) => {
    const targetId = link.getAttribute('href');
    if (!targetId || !targetId.startsWith('#')) return;
    const target = document.querySelector(targetId);
    if (!target) return;
    e.preventDefault();
    const offset = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--navbar-height')) || 72;
    const top = target.getBoundingClientRect().top + window.scrollY - offset + 4;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

// Scroll-based reveal animations
const animateElements = document.querySelectorAll('[data-animate]');
if (animateElements.length && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: '0px 0px -10% 0px',
    },
  );

  animateElements.forEach((el) => observer.observe(el));
} else {
  animateElements.forEach((el) => el.classList.add('is-visible'));
}

// Active nav highlight on scroll
const sections = Array.from(document.querySelectorAll('section[id]'));
const navLinks = Array.from(document.querySelectorAll('.nav-links a[data-scroll]'));

function updateActiveNav() {
  const offset = 120;
  const scrollPos = window.scrollY + offset;

  let currentId = null;
  for (const section of sections) {
    const rect = section.getBoundingClientRect();
    const top = rect.top + window.scrollY;
    if (scrollPos >= top) {
      currentId = section.id;
    }
  }

  navLinks.forEach((link) => {
    const href = link.getAttribute('href') || '';
    const id = href.startsWith('#') ? href.slice(1) : null;
    link.classList.toggle('is-active', Boolean(id && id === currentId));
  });
}

window.addEventListener('scroll', () => {
  window.requestAnimationFrame(updateActiveNav);
});
updateActiveNav();

// Theme toggle with localStorage
const body = document.body;
const themeToggle = document.querySelector('.theme-toggle');

function applyStoredTheme() {
  const stored = window.localStorage.getItem('theme');
  if (!stored) return;
  body.classList.toggle('theme-light', stored === 'light');
  body.classList.toggle('theme-dark', stored === 'dark');
}

applyStoredTheme();

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const isLight = body.classList.contains('theme-light');
    const next = isLight ? 'dark' : 'light';
    body.classList.toggle('theme-light', next === 'light');
    body.classList.toggle('theme-dark', next === 'dark');
    window.localStorage.setItem('theme', next);
  });
}

