$(document).ready(function() {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items: 4,
        loop: true,
        margin: 110,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        dots: false,
        nav: false,
        lazyLoad: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });
})