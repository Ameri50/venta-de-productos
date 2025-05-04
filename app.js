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
  }
  
  
  function consultarPorWhatsApp(nombreProducto, precio) {
    const mensaje = `Hola, me interesa ${nombreProducto} al precio de ${precio}`;
    const grupoWhatsApp = 'https://chat.whatsapp.com/CHUpfk59zy8EQcpYFdHRzY'; // Enlace del grupo
    const url = `${grupoWhatsApp}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
  }
  