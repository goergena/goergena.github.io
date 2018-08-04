(function ($) {
  $(function () {

    $('.sidenav').sidenav();

    $('.carousel.carousel-slider').carousel({
      fullWidth: true,
      indicators: true
    });

    $('.scrollspy').scrollSpy();



  }); // end of document ready
})(jQuery); // end of jQuery name space