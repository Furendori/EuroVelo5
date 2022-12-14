// start carrousel
var carousel = null;

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel.carousel-slider');
    var instances = M.Carousel.init(elems, {
        fullWidth: true
    });
    carousel = instances[0];

    var moveNextCarousel = document.querySelector('.moveNextCarousel');
    moveNextCarousel.addEventListener('click', function(e) {
      e.preventDefault();
      carousel.next();
    });

    var movePrevCarousel = document.querySelector('.movePrevCarousel');
    movePrevCarousel.addEventListener('click', function(e) {
      e.preventDefault();
      carousel.prev();
    });

    window.setInterval(function() {
      carousel.next();
    }, 5000);
  });

