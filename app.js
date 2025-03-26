const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const navLinks = document.getElementById('nav-links');

mobileMenuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('hidden');
    navLinks.classList.toggle('flex');
    navLinks.classList.toggle('flex-col');
    navLinks.classList.toggle('w-full');
    navLinks.classList.toggle('absolute');
    navLinks.classList.toggle('top-24');
    navLinks.classList.toggle('left-0');
    navLinks.classList.toggle('bg-blue-900');
    navLinks.classList.toggle('z-50');
    navLinks.classList.toggle('p-4');
    navLinks.classList.toggle('shadow-lg');
});

// const handleLink = (url) => {
//     window.open(url, "_blank", "noopener,noreferrer");
// }