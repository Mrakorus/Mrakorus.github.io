$(document).ready(function() {
  /* Video */
  let video = $('.bg__video-content');
  $('.header__play').click( () => {
    $(".header").hide(500);
    $('.bg__video').show(500);
    video[0].play();
    // console.log(video);
  });
  video.click((e) => {
    e.preventDefault();
    video[0].pause();
    $(".header").show();
    $('.bg__video').hide(500);
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