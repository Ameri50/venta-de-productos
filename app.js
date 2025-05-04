function toggleDarkMode() {
  document.body.classList.toggle('dark');
}


// Enviar mensaje directo a WhatsApp personal
function consultarPorWhatsApp(producto, precio = '') {
  const numero = '51951012633'; // sin el +
  let mensaje = `Hola, estoy interesado en ${producto}`;
  if (precio) {
    mensaje += ` con el precio de ${precio}`;
  }
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
  window.open(url, '_blank');
}

// Unirse al grupo de WhatsApp para consultas
function unirseAGrupo() {
  const grupoURL = 'https://chat.whatsapp.com/CHUpfk59zy8EQcpYFdHRzY';
  window.open(grupoURL, '_blank');
}
