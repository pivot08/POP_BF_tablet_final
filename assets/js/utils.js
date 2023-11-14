$(document).ready(function () {

    $('#carousel-promo').owlCarousel({
        loop: true,
        margin: 10,
        dots: false,
        autoplay: true,
        autoplaySpeed: 300,
        nav: false,
        responsive: {
            0:{
                items: 1
            },
            600:{
                items: 1
            },
            1000:{
                items: 1
            }
        }
    });

});



        function goBack() {
            history.back(-1);
        }
    

// script.js
$(document).ready(function () {
    $('a').on('click', function (event) {
      event.preventDefault();
      const targetPage = $(this).attr('href');
      
      if ($(this).hasClass('header-links')) {
        // Se o link tiver a classe header-links, a animação será para a esquerda
        $('body').addClass('animate__animated animate__slideOutRight').on('animationend', function() {
          window.location.href = targetPage;
        });
      } else {
        // Para outros links, a animação será para a direita
        $('body').addClass('animate__animated animate__slideOutLeft').on('animationend', function() {
          window.location.href = targetPage;
        });
      }
    });
  });
  
  
  
  