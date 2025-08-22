// JavaScript to handle interactive behaviour on the RAMZ website
document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.querySelector('.mobile-menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (toggle) {
    toggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
  }

  // Smooth scrolling for anchor links
  const anchors = document.querySelectorAll('a[href^="#"]');
  anchors.forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      // ignore external links such as pdfs
      const href = this.getAttribute('href');
      if (!href || href.endsWith('.pdf')) return;
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        // close mobile menu after clicking
        if (navLinks.classList.contains('open')) {
          navLinks.classList.remove('open');
        }
      }
    });
  });
});