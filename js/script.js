$('.carousel').carousel({
    interval: 2000, 
    pause: 'hover', 
    wrap: true 
  });
  
  $('.carousel-control-prev, .carousel-control-next').hide();
  
  $(document).ready(function() {
    // Botón para invertir colores
    $('#boton1').click(function() {
      $('.container-info').toggleClass('invert-colors');
      $('.btn-custom').toggleClass('invert-btn');
      $('.btn-custom:hover').toggleClass('invert-hover');
      $('header, footer').toggleClass('invert-colors-header-footer');
      $('.text-footer, .nav-link').toggleClass('invert-colors-header-footer');
      $('#texto-principal').toggleClass('invert-text-color');
      $('body').toggleClass('invert-body');
      $('table, th').toggleClass('invert-hover');
    });
  
    // Botón para aplicar estilo azul
    $('#boton2').click(function() {
      $('body').css('background-color', 'red'); // Cambiar color de fondo del cuerpo
      // Agregar más estilos aquí según sea necesario
    });
  
    // Botón para aplicar estilo verde
    $('#boton3').click(function() {
      $('body').css('background-color', 'green'); // Cambiar color de fondo del cuerpo
      // Agregar más estilos aquí según sea necesario
    });
  
    // Botón para restaurar estilos originales
    $('#boton4').click(function() {
      // Eliminar estilos aplicados dinámicamente
      location.reload(); // Recargar la página

    });
  });

  
  