$(function() {
    var win = $(window).innerHeight(),
        upper = $('.upper-bar').innerHeight();
    $('.slider').height(win - upper);
    // awl
    $('.best-article .owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            577: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });
    $('.student .owl-carousel').owlCarousel({
        items: 4,
        nav: false,
        dots: false,
        loop: false,
        center: true,
        margin: 10,
        URLhashListener: true,
        autoplayHoverPause: true,
        startPosition: 'URLHash',
        responsive: {
            0: {
                items: 1
            },
            700: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    $('.quality .owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            577: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });
    $('.open').click(function() {
        $('.popupe').fadeIn();
        $('body').addClass('open-popup');

    });
    $('.popup').click(function() {
        $('.popupe').fadeOut();
        $('body').removeClass('open-popup');
    });

    $('.nav-bar .search').click(function() {
        $('#search-input').addClass('open-search');
        $('#close').addClass('open-close');
        $('.nav-item').addClass('open-nav-item');
        $('form').addClass('all');
        $('.form-large').addClass('all');
    });

    $('#close').click(function() {
        $('#search-input').removeClass('open-search');
        $('#close').removeClass('open-close');
        $('.nav-item').removeClass('open-nav-item');
        $('form').removeClass('all');
    });
    // toggle
    // $('.toggle').click(function() {
    //     $('.toggle').toggleClass('active');
    //     $('.slide-bar').toggleClass('active');
    //     $('.slide-bar').addClass('transform-origin');
    //     $('body').addClass('transform-origin');

    // });
    // toggle
    $('.toggle').click(function() {
        $('.slide-bar').toggleClass('active')
    })
    $('.close-nav').click(function() {
        $('.slide-bar').removeClass('active');

    });
    $('.nav-bar #close-search').click(function() {

        $('form').addClass('show-close');
    });
    $('.close-btn').click(function() {

        $('form').removeClass('show-close');
    });

    // footer

    $(".links").click(function() {
        $('ul.list-unstyled.one').toggleClass('open');
        $('#plus-one').toggleClass('active');
    });
    $("#plus").click(function() {
        $('ul.list-unstyled.two').toggleClass('open');
        $('#plus-two').toggleClass('two');
    });


    $(window).on("load", function() {
        $('.load').fadeOut(2000)

    });
    $('.blog .owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            577: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            }
        }
    })
});