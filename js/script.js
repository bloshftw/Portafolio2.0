document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.mobile-menu-icon');
    const navLinks = document.querySelector('.nav .links');  // Cambiado a .links

    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    // Cerrar el menú al hacer clic en un enlace
    const links = document.querySelectorAll('.nav .links li a');
    links.forEach(function(link) {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
        });
    });
});

