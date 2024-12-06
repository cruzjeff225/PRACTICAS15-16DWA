// Seleccionamos todas las pestañas y el contenido de las pestañas
const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.content');

// Agregamos un evento click a cada pestaña
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Removemos la clase "active" de todas las pestañas y el contenido
        tabs.forEach(t => t.classList.remove('active'));
        contents.forEach(c => c.classList.remove('active'));

        // Añadimos la clase "active" a la pestaña y contenido correspondiente
        tab.classList.add('active');
        const target = tab.getAttribute('data-tab');
        document.getElementById(target).classList.add('active');
    });
});
