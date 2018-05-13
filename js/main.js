$(document).ready(function() {
    /**Efecto enlaces */
    $('.menu a').each(function (index, elemento) {
        $(this).css({'top': '-200px'});

        $(this).animate({top:'0px'}, 2000 + (index*500));
    });

    /**Efecto header */
    if ($(window).width() > 800) {
        $('header .titulos').css({
            opacity: 0, marginTop:0
        });

        $('header .titulos').animate({
            opacity: 1, marginTop: '-52px'
        }, 1500);
    }

    var acercade = $('#acercade').offset().top,
        menu = $('#platos').offset().top,
        galeria = $('#galeria').offset().top,
        ubicacion = $('#ubicacion').offset().top;

    $('#btn-acercade').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: acercade
        }, 500);
    });

    $('#btn-menu').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: menu
        }, 500);
    });

    $('#btn-galeria').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: galeria
        }, 500);
    });

    $('#btn-ubicacion').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: ubicacion
        }, 500);
    });

    $(window).scroll(function () {
        var windowWidth = $(window).width();

        if (windowWidth > 800) {
            var scroll = $(window).scrollTop();

            $('header .titulos').css({
                'transform': 'translate(0px,' + scroll / 2 + '%)'
            });

            $('.acercade article').css({
                'transform': 'translate(0px, -' + scroll / 4 + '%)'
            });
        }
    });

    $(window).resize(function () {
        var windowWidth = $(window).width();
        if (windowWidth < 800) {
            $('.acercade article').css({
                'transform': 'translate(0px, 0px)'
            });
        }
    });
});