function toggleDarkMode() {
    const body = document.body;
    const header = document.querySelector('header');
    const boton = document.getElementById('modo-oscuro');
    
    // Cambia la clase 'dark-mode' solo en el cuerpo y el encabezado
    body.classList.toggle('dark-mode');
    header.classList.toggle('dark-mode');
    
    // Cambia el texto del botón dependiendo del estado
    if (body.classList.contains('dark-mode')) {
      boton.textContent = 'Modo Claro';
    } else {
      boton.textContent = 'Modo Oscuro';
  }
  
function consultarPorWhatsApp(nombreProducto, precio) {
    const mensaje = `Hola, me interesa ${nombreProducto} al precio de ${precio}`;
    const numeroPersonal = '+51951012633'; // Reemplaza con tu número personal
    const url = `https://wa.me/${numeroPersonal}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
}
  }
  