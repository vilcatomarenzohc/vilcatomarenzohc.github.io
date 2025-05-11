// Toggle mobile nav
const hamburger = document.querySelector('.hamburger');
const navLinks  = document.querySelector('.nav-links');
const closeBtn  = document.querySelector('.close-menu');

hamburger.addEventListener('click', () => {
  navLinks.classList.add('active');
});
closeBtn.addEventListener('click', () => {
  navLinks.classList.remove('active');
});
// Also close when clicking any link
navLinks.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    navLinks.classList.remove('active');
  }
});

// Smooth scroll to About
const scrollBtn = document.querySelector('.scroll-down');
scrollBtn.addEventListener('click', () => {
  document.getElementById('about')
    .scrollIntoView({ behavior: 'smooth' });
});

