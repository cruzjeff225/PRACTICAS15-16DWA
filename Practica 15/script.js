// Seleccionar el botón y cuerpo de la página
const toggleButton = document.getElementById('toggleTheme')
const body = document.body

// Añadiendo un evento de click al botón
toggleButton.addEventListener('click', () => {
    // Verificar la clase actual y alternarla entre light y dark theme
    if (body.classList.contains('light-theme')) {
        body.classList.remove('light-theme') // Quita el tema claro
        body.classList.add('dark-theme') // Aplica el tema oscuro
    } else {
        body.classList.remove('dark-theme')
        body.classList.add('light-theme')
    }
})