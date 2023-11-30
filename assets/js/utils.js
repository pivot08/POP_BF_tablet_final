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
    

        

        $(window).on('load', function() {
            // Oculte o overlay de carregamento
            $('#loading-overlay').css('opacity', 0);
            // Mostre o conteúdo da página com fadeIn
            $('#loadingContainer').fadeIn(2000, function() {
                // Após a conclusão do fadeIn, oculte o overlay
                $('#loading-overlay').css('display', 'none');
            });
        });
  