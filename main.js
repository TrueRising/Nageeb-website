/*
 * Main JavaScript for the Nageeb website
 *
 * This script controls the responsive navigation menu and any small
 * enhancements that require interactivity. Keeping the script small
 * helps ensure the website remains performant. Additional scripts can
 * be added here in the future as needed.
 */

// Toggle mobile navigation menu
document.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (navToggle) {
    navToggle.addEventListener('click', function () {
      navLinks.classList.toggle('open');
    });
  }
});