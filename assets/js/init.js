(function ($) {
  $(function () {

    $('.sidenav').sidenav();

   

    // var bingeVid = "https://drive.google.com/file/d/17Yf85oPx6DrD91wf_P2qaf2AV33olyS2/view";

    // var portfolio = [{
    //     img: "assets/images/binge.png",
    //     vid: "https://drive.google.com/file/d/17Yf85oPx6DrD91wf_P2qaf2AV33olyS2/view"
    //   },
    //   {
    //     img: "assets/images/chupper.png",
    //     vid: "https://drive.google.com/file/d/1vPovceL2T2z4KUIUBEnkxfGJelM10JfF/view?usp=sharing"
    //   }
    // ];

    // for (var i = 0; i < portfolio.length; i++) {
    //   var fig = $("<figure>");
    //   fig.addClass("carousel-item project");
    //   var img = $("<img>");
    //   img.attr("src", portfolio[i].img)
    //     .attr("data-still", portfolio[i].img)
    //     .attr("data-animate", portfolio[i].vid)
    //     .attr("data-state", "still");
    //   fig.append(img);
    //   $(".carousel-slider").append(fig);

    // };

    // $(".project").on("click", function () {
    //   var selectedImg = $(this).children("img");
    //   var animateSource = selectedImg.attr("data-animate");
    //   var stillSource = selectedImg.attr("data-still");
    //   var state = selectedImg.attr("data-state");
    //   if (state === "still") {
    //     selectedImg.attr("src", animateSource).attr("data-state", "animate");
    //   } else {
    //     selectedImg.attr("src", stillSource).attr("data-state", "still");
    //   }
    // });

    $('.carousel.carousel-slider').carousel({
      fullWidth: true,
      indicators: true
    });



  }); // end of document ready
})(jQuery); // end of jQuery name space