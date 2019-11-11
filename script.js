$(document).ready(() => {
  $('.create').click(function () {
    let images = ['img1.png', 'img2.png', 'img3.png', 'img4.png', 'img5.png'];
    let length = images.length;

    $(this).parent().append($('<div class="slick-slider" style="width: 600px;">'));

    for (var i = 0; i<length; i++) {
      $(this).parent().append($('<img src="images/' + images[i] + '" alt="Слайд ' + (i+1) + '">'));
    };

    $('.slick-slider').wrapInner($('img'));

    $('.slick-slider').slick({
      fade: true,
      speed: 800,
      dots: true,
      autoplay: true,
      autoplaySpeed: 1600
    });
  });
});
