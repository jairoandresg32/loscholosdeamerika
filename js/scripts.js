// JavaScript para manejar la galería de imágenes
const galleryItems = document.querySelectorAll('.gallery-item img');
const imageDialog = document.getElementById('imageDialog');
const expandedImage = document.getElementById('expandedImage');

galleryItems.forEach((img) => {
    img.addEventListener('click', () => {
        const imageUrl = img.getAttribute('data-src');
        expandedImage.setAttribute('src', imageUrl);
        imageDialog.showModal();
    });
});

imageDialog.addEventListener('click', (event) => {
    if (event.target === imageDialog) {
        imageDialog.close();
    }
});

// JavaScript para resaltar el enlace activo en el menú de navegación
const currentPage = location.pathname.substring(location.pathname.lastIndexOf("/") + 1);
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
    }
});