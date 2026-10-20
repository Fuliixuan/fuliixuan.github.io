const button = document.querySelector('.menu');
const nav = document.querySelector('nav');
button.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  button.setAttribute('aria-expanded', open);
});
document.querySelectorAll('nav a').forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('open');
  button.setAttribute('aria-expanded', 'false');
}));
document.querySelector('#year').textContent = new Date().getFullYear();

// Header turns from transparent to frosted paper once you leave the hero
const header = document.querySelector('.site-header');
const hero = document.querySelector('.hero');
const onScroll = () => header.classList.toggle('scrolled', window.scrollY > hero.offsetHeight - 120);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

// Scroll fade: content fades in as a page arrives and fades out as it leaves
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => e.target.classList.toggle('in', e.isIntersecting));
}, { threshold: 0.2 });
document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
