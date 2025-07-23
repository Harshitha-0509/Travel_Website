const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.navLinks');
const dropdownToggles = document.querySelectorAll('.dropdown');

// Toggle mobile menu
hamburger.addEventListener('click', () => {
    console.log("toggle clicked");
    navLinks.classList.toggle('active'); // Adds/removes 'active' class
});

// Sticky navbar on scroll
window.addEventListener("scroll", function () {
    const header = document.querySelector("nav");
    header.classList.toggle("sticky", window.scrollY > 50);
});

// Highlight the active nav link
document.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.pathname.split('/').pop();
    document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage || (linkPage === 'index.html' && currentPage === '')) {
            link.classList.add('active');
        }
    });
});
