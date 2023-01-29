jQuery(function ($) {
  var activa = 1;
  var intervalo = 2500; // segundos
  interval = setInterval(
    function () {
      switch (activa) {
        case 1:
          $(".img1").removeClass('nosemueve').addClass('semueve');
          $(".img2").removeClass('semueve').addClass('nosemueve');
          $(".img3").removeClass('semueve').addClass('nosemueve');
          activa++;
          break;
        case 2:
          $(".img2").removeClass('nosemueve').addClass('semueve');
          $(".img3").removeClass('semueve').addClass('nosemueve');
          activa++;
          break;
        case 3:
          $(".img1").removeClass('semueve').addClass('nosemueve');
          $(".img2").removeClass('semueve').addClass('nosemueve');
          $(".img3").removeClass('nosemueve').addClass('semueve');
          activa++;
          break;
        case 4:
          activa = 1;
          break;
      }
    }
    , intervalo
  );

  $(document).ready(function () {
    $('.navegacion li').click(
      function () {
        if ($(this).hasClass("con-hijos")) {
          if ($(this).hasClass("seleccionado")) {
            $(this).find('ul').fadeOut();
            $(this).removeClass('seleccionado');
          } else {
            $(this).find('ul').fadeIn();
            $(this).addClass('seleccionado');
          }
        }
      }
    );

    $('.buscador').hover(
      function () {
        if ($(this).hasClass("seabre")) {
          $(this).removeClass('seabre').addClass('secierra');
        } else {
          $(this).addClass('seabre').removeClass('secierra');
        }
      }
    );
  });
});

// Carrito
document.querySelectorAll('.button').forEach(button => button.addEventListener('click', e => {
  if (!button.classList.contains('loading')) {
    button.classList.add('loading');
    setTimeout(() => button.classList.remove('loading'), 3700);
  }
  e.preventDefault();
}));
