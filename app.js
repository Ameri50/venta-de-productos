function consultarPorWhatsApp(producto) {
    const telefono = '+51951012633'; // Cambia por tu número con código de país
    const mensaje = `Hola, estoy interesado en el ${producto}`;
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
  }
  