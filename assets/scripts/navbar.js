$(document).ready(function() {
  //   controls progress bar animation
  let barsPos = $("#progress-header").offset().top;
  $(window).on("scroll", function() {
    if (barsPos - 400 < $(window).scrollTop()) {
      $("#progress-div").addClass("progress-animate");
      $(window).off("scroll");
    }
    //   controls nav position
    const navBar = $("nav");
    const canvas = $("canvas");
    if (
      $(window).scrollTop() + canvas.height() >=
      $("#about-sect").position().top + 580
    ) {
      navBar.addClass("fixed-top");
    }
    if (
      $(window).scrollTop() + canvas.height() <=
        $("#about-sect").position().top + 580 ||
      $(window).scrollTop() === 0
    ) {
      navBar.removeClass("fixed-top");
    }
  });
});
