const nav = document.querySelector('.nav');
const menuToggle = document.querySelector('.menu-toggle');
const themeToggle = document.querySelector('#themeToggle');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('mobile-open');
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('mobile-open'));
});

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  themeToggle.textContent = document.body.classList.contains('light-mode') ? '☀' : '☾';
});

document.querySelector('#year').textContent = new Date().getFullYear();

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
