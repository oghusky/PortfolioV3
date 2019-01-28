$(document).ready(function() {
  // Scroll Reveal
  window.sr = ScrollReveal({ mobile: true });

  // about and project headers slide left
  sr.reveal("#about-header, .projects-header, #stats-header, #contact-header", {
    duration: 1000,
    origin: "left",
    distance: "150px"
  });

  // header underlines slide right
  sr.reveal(
    "#about-underline, #project-underline, #stats-underline, #contact-underline",
    {
      delay: 150,
      duration: 1000,
      origin: "right",
      distance: "150px"
    }
  );

  // controls font awesome icon in header
  $("#header-btn").mouseover(function() {
    $(".f0aa").addClass("iconrotate");
  });
  $("#header-btn").mouseleave(function() {
    $(".f0aa").removeClass("iconrotate");
  });
});
