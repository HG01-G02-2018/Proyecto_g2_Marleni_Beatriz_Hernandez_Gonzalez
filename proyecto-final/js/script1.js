$('.galeria__img').click(function(e){
  var img = e.target.src;
  var modal = '<div class="modal" id="modal"><img src="'+ img + '" class="modal__img"><div class="modal__boton" id="modal__boton">X</div></div>';
  $('#Top').append(modal);
  $('#modal__boton').click(function(){
    $('#modal').remove();
  })
});


$(document).keyup(function(e){
  if (e.which==27) {
    $('#modal').remove();
  }
});



//tooltip
$(document).ready(function(){
  // Initialize Tooltip
  $('[data-toggle="tooltip"]').tooltip(); 
  
  // Añadir desplazamiento suave a todos los enlaces en la barra de navegacion + enlace de pie de pagina
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {

    // asegurese que this.hash tengan un valor antes de anular un comportamiento predeterminado
    if (this.hash !== "") {

      // Pervenir el comportamiento predeterminado de hacer click de ancla
      event.preventDefault();

      // tienda hash
      var hash = this.hash;

      // Usando el metodo animado() de jQuery para agregar un desplazamiento suave de la pagina
      // El numero opcional(900) especifica la cantidad de milisegundos necesarios para desplazarse al área especifica
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){
   
        // Añadir hash (#) a la URL cuando se realiza el desplazamiento (comportamiento de click predeterminado)
        window.location.hash = hash;
      });
    } // finalizar si
  });
  $(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slide");
        }
    });
  });
});
/*Validar formulario de comentario*/
  $("#enviar").click(function(){
     if($("#name").val()==0){
           $("#msg1").text("Ingrese su nombre por favor");
           $("#name").focus();
           return false;
     };
     if($("#email").val()==0){
        $("#msg2").text("Ingrese su Email");
        $("#email").focus();
        return false;
     };
     if($("#comments").val()==0){
       $("#msg3").text("El comentario es obligatorio");
       $("#comments").focus();
       return false;
     }
  });
