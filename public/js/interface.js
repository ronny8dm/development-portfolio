﻿$(document).ready(function () {
  console.log("Pip pip");

  /* Window Load */
  $(window).on("load", function () {
    $(".loader").fadeOut(200);
    $(".line").addClass("active");
  });

  /* Navbar scroll*/
  $(document).on("click", ".navbar-nav ul li a", function () {
    var target = $(this.hash);
    if (target.length) {
      $("html,body").animate(
        {
          scrollTop: target.offset().top,
        },
        1000
      );
      $("body").removeClass("menu-is-opened").addClass("menu-is-closed");
      return false;
    }
  });

  /* Full page scroll*/
  if ($("#pagepiling").length > 0) {
    $("#pagepiling").pagepiling({
      scrollingSpeed: 280,
      navigation: false,
      menu: ".navbar-nav",
      anchors: [
        "home",
        "about",
        "experience",
        "blog",
        "projects",
        "partners",
        "testimonials",
        "contact",
      ],
      afterRender: function (anchorLink, index) {
        NavbarColor();
      },
      afterLoad: function (anchorLink, index) {
        $(".pp-section .intro").removeClass("animate");
        $(".active .intro").addClass("animate");
        NavbarColor();
      },
    });

    function NavbarColor() {
      if ($(".pp-section.active").hasClass("navbar-is-white")) {
        $(".navbar-desktop").addClass("navbar-white");
        $(".progress-nav").addClass("progress-nav-white");
        $(".navbar-bottom").addClass("navbar-bottom-white");
      } else {
        $(".navbar-desktop").removeClass("navbar-white");
        $(".progress-nav").removeClass("progress-nav-white");
        $(".navbar-bottom").removeClass("navbar-bottom-white");
      }
    }
  }

  /* Navbar toggler */
  $(document).on("click", ".toggler", function () {
    $("body").addClass("menu-is-open");
  });

  $(document).on("click", ".close_icon", function () {
    $("body").removeClass("menu-is-open");
  });
  $(document).on("click", ".click-capture ", function () {
    $("body").removeClass("menu-is-open");
  });

  /* Navbar mobile */
  $(document).on("click", ".navbar-nav-mobile li a", function () {
    $("body").removeClass("menu-is-open");
    $(".navbar-nav-mobile li a").removeClass("active");
    $(this).addClass("active");
  });

  $(".popup-youtube").magnificPopup({
    disableOn: 700,
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
  });

  /* Change bacgkround on project section*/
  $(document).on("mouseover", ".project-box", function () {
    var index = $(".project-box").index(this);
    $(".bg-changer .section-bg")
      .removeClass("active")
      .eq(index)
      .addClass("active");
  });

  /* Carousel experience*/
  $(".carousel-experience").owlCarousel({
    loop: true,
    margin: 45,
    dots: true,
    nav: true,
    smartSpeed: 1000,
    items: 1,
  });

  /* Carousel testimonials */
  $(".carousel-testimonials").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    items: 1,
  });

  /* Send form */
  if ($(".js-ajax-form").length) {
    $(".js-ajax-form").each(function () {
      $(this).validate({
        errorClass: "error",
        submitHandler: function (form) {
          $.ajax({
            type: "POST",
            url: "mail.php",
            data: $(form).serialize(),
            success: function () {
              $("#success-message").show();
            },

            error: function () {
              $("#error-message").show();
            },
          });
        },
      });
    });
  }

  // })(jQuery);
});
