document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.querySelector('.mobile-menu-icon');
    const links = document.querySelector('.nav .links');

    // Manejador del evento click para mostrar/ocultar el menú
    toggleBtn.addEventListener('click', function() {
        links.classList.toggle('active');
    });
});
