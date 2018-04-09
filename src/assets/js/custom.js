Prism.plugins.autoloader.languages_path =
  '//cdnjs.cloudflare.com/ajax/libs/prism/1.13.0/components/';

$(document).ready(function() {
  Prism.highlightAll();
  // Menu
  $('.hamburger').click(function() {
    $('.menu').toggle();
    $(this).toggleClass('is-active');
  });

  $('.featured-slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.content .post-article img').each(function() {
    $(this).featherlight($(this).attr('src'));
  });
}); //jQuery ready
