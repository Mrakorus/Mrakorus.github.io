$(document).ready(function(){
    'use strict'
    let slider = $('.mainSlider__wrapper');
    slider.slick({
        infinite: true,
        dots: false,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 2000,
        appendArrows: $('.mainSlider__controls'),
        prevArrow: $('#mainSlider__controls-btn-left'),
        nextArrow: $('#mainSlider__controls-btn-right')
    });

    $('#allPages').text('0' + slider.slick("getSlick").$slides.length);
    $('#currentPage').text('0' + 1);

    slider.on('afterChange', function(event, slick, currentSlide, nextSlide){
        $('#currentPage').text('0' + (+currentSlide + 1));
    });

    /* Modal */
    $('.header__contacts-phone').click( () => {
        $('.modal__thanks').hide();
        $('.modal').fadeIn();
        $('.modal__content').fadeIn();
    });
    $('.modal__close').click( (e) => {
        $('.modal__thanks').hide();
        $('.modal').fadeOut();
    });
    $('.modal').click( (e) => {
        // console.log(e.target, $('.modal')[0])
        if (e.target ===  $('.modal')[0]){
            $('.modal__thanks').hide();
            $('.modal').fadeOut();
        }
        
    });
    $('.modal__submit').click((e) => {
        e.preventDefault();
        $('.modal__content').hide();
        $('.modal__thanks').fadeIn();
    });

    /* Scroll */
    $('a[href^="#"').on('click', function() {

        let href = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(href).offset().top
        });
        return false;
    });

    
    
  });