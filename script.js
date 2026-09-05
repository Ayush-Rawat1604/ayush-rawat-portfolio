const menu = document.querySelector('.menu');
const nav = document.querySelector('#nav-links');

if (menu && nav) {
  menu.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menu.setAttribute('aria-expanded', String(open));
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      menu.setAttribute('aria-expanded', 'false');
    });
  });
}

const sections = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('#nav-links a');

const setActiveLink = () => {
  let current = 'home';
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top <= 130) current = section.id;
  });
  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
  });
};

window.addEventListener('scroll', setActiveLink, { passive: true });
setActiveLink();
