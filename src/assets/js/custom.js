// Hamburger Menu
var forEach = function (t, o, r) {
  if ("[object Object]" === Object.prototype.toString.call(t)) {
    for (var c in
      t) {
      Object.prototype.hasOwnProperty.call(t, c) && o.call(r, t[c], c, t);
    }
  } else {
    for (var e = 0, l = t.length; l > e; e++) {
      o.call(r, t[e], e, t)
    }
  }
};

var hamburgers = document.querySelectorAll(".hamburger");
if (hamburgers.length > 0) {
  forEach(hamburgers, function (hamburger) {
    hamburger.addEventListener("click", function () {
      this.classList.toggle("is-active");
    }, false);
  });
}

// jQuery
$(document)
  .ready(function () {
    // Menu
    $(".hamburger")
      .click(function () {
        $(".menu")
          .toggle();
      });

    $('.featured-slider')
      .slick({
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

      $('.content .post-article img').each(function () {
        $(this).featherlight($(this).attr('src'));
      });
  }); //jQuery ready
