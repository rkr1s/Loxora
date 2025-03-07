// Select elements
const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-nav');
const header = document.getElementById('header');
const navbar = document.querySelector('.navbar');

// Toggle Mobile Menu
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle("active");
  mobileNav.classList.toggle('active');
  navbar.classList.toggle("hide");
});

// Close menu when clicking outside (optional)
document.addEventListener('click', (e) => {
  if (!hamburger.contains(e.target) && !mobileNav.contains(e.target)) {
    mobileNav.classList.remove('active');
    hamburger.classList.remove('active');
    navbar.classList.remove("hide");
  }
});

// Sticky Header on Scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});