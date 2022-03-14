(function ($) {
  "use strict";
  // TOP Menu Sticky
  $(window).on('scroll', function () {
    var scroll = $(window).scrollTop();
    if (scroll < 400) {
      $("#sticky-header").removeClass("sticky");
      $('#back-top').fadeIn(500);
    } else {
      $("#sticky-header").addClass("sticky");
      $('#back-top').fadeIn(500);
    }
  });


  // Schedule Slides
  $('.schedule-slides').owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    margin: 30,
    autoplayHoverPause: true,
    autoplay: true,
    items: 1,
    navText: [
      "<i class='icofont-rounded-left'></i>",
      "<i class='icofont-rounded-right'></i>"
    ],
  });
  // Check distance to top and display back-to-top.
  jQuery(window).on('scroll', function () {
    if ($(this).scrollTop() > 800) {
      $('.back-to-top').addClass('show-back-to-top');
    } else {
      $('.back-to-top').removeClass('show-back-to-top');
    }
  });
  $('.back-to-top').on('click', function () {
    $("html, body").animate({ scrollTop: "0" }, 500);
  });
  // Tabs
  (function ($) {
    $('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');
    $('.tab ul.tabs li a').on('click', function (g) {
      var tab = $(this).closest('.tab'),
        index = $(this).closest('li').index();
      tab.find('ul.tabs > li').removeClass('current');
      $(this).closest('li').addClass('current');
      tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
      tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();
      g.preventDefault();
    });
  })(jQuery);

  // Accordion
  $(function () {
    $('.accordion').find('.accordion-title').on('click', function () {
      // Adds Active Class
      $(this).toggleClass('active');
      // Expand or Collapse This Panel
      $(this).next().slideToggle('fast');
      // Hide The Other Panels
      $('.accordion-content').not($(this).next()).slideUp('fast');
      // Removes Active Class From Other Titles
      $('.accordion-title').not($(this)).removeClass('active');
    });
  });

  // Tooltip JS
  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  });



  $(document).ready(function () {

    // mobile_menu
    var menu = $('ul#navigation');
    if (menu.length) {
      menu.slicknav({
        prependTo: ".mobile_menu",
        closedSymbol: '+',
        openedSymbol: '-'
      });
    };
    // blog-menu
    // $('ul#blog-menu').slicknav({
    //   prependTo: ".blog_menu"
    // });

    // review-active
    $('.slider_active').owlCarousel({
      loop: true,
      margin: 0,
      items: 1,
      autoplay: true,
      navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
      nav: true,
      dots: false,
      autoplayHoverPause: true,
      autoplaySpeed: 800,
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      responsive: {
        0: {
          items: 1,
          nav: false,
        },
        767: {
          items: 1,
        },
        992: {
          items: 1,
          nav: true
        },
        1200: {
          items: 1,
        },
        1600: {
          items: 1,
          nav: true
        }
      }
    });



    // review-active
    var brand_active = $('.brand_active');
    if (brand_active.length) {
      brand_active.owlCarousel({
        loop: true,
        margin: 0,
        autoplay: true,
        navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
        nav: false,
        dots: false,
        autoplayHoverPause: true,
        autoplaySpeed: 800,
        center: false,
        responsive: {
          0: {
            items: 1,
            nav: false
          },
          767: {
            items: 3
          },
          992: {
            items: 4
          },
          1200: {
            items: 4
          },
          1500: {
            items: 5
          }
        }
      });
    }


    // for filter
    // init Isotope
    var $grid = $('.grid').isotope({
      itemSelector: '.grid-item',
      percentPosition: true,
      masonry: {
        // use outer width of grid-sizer for columnWidth
        columnWidth: 1
      }
    });

    // filter items on button click
    $('.portfolio-menu').on('click', 'button', function () {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({ filter: filterValue });
    });

    //for menu active class
    $('.portfolio-menu button').on('click', function (event) {
      $(this).siblings('.active').removeClass('active');
      $(this).addClass('active');
      event.preventDefault();
    });

    // wow js
    new WOW().init();

    // counter 
    $('.counter').counterUp({
      delay: 10,
      time: 10000
    });

    /* magnificPopup img view */
    $('.popup-image').magnificPopup({
      type: 'image',
      gallery: {
        enabled: true
      }
    });

    /* magnificPopup img view */
    $('.img-pop-up').magnificPopup({
      type: 'image',
      gallery: {
        enabled: true
      }
    });

    /* magnificPopup video view */
    $('.popup-video').magnificPopup({
      type: 'iframe'
    });


    // scrollIt for smoth scroll
    $.scrollIt({
      upKey: 38,             // key code to navigate to the next section
      downKey: 40,           // key code to navigate to the previous section
      easing: 'linear',      // the easing function for animation
      scrollTime: 600,       // how long (in ms) the animation takes
      activeClass: 'active', // class given to the active nav element
      onPageChange: null,    // function(pageIndex) that is called when page is changed
      topOffset: 0           // offste (in px) for fixed top navigation
    });

    // scrollup bottom to top
    $.scrollUp({
      scrollName: 'scrollUp', // Element ID
      topDistance: '4500', // Distance from top before showing element (px)
      topSpeed: 300, // Speed back to top (ms)
      animation: 'slide', // Fade, slide, none
      animationInSpeed: 200, // Animation in speed (ms)
      animationOutSpeed: 200, // Animation out speed (ms)
      easingType: 'linear',
      scrollText: '<i class="ti-angle-up"></i>', // Text for element
      activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
      easingType: 'linear',
      scrollSpeed: 900,
      animation: 'slide'
    });


    // blog-page

    //brand-active
    $('.brand-active').owlCarousel({
      loop: true,
      margin: 30,
      items: 1,
      autoplay: true,
      nav: false,
      dots: false,
      autoplayHoverPause: true,
      autoplaySpeed: 800,
      responsive: {
        0: {
          items: 1,
          nav: false

        },
        767: {
          items: 4
        },
        992: {
          items: 7
        }
      }
    });

    // blog-dtails-page

    //project-active
    $('.project-active').owlCarousel({
      loop: true,
      margin: 30,
      items: 1,
      // autoplay:true,
      navText: ['<i class="Flaticon flaticon-left-arrow"></i>', '<i class="Flaticon flaticon-right-arrow"></i>'],
      nav: true,
      dots: false,
      // autoplayHoverPause: true,
      // autoplaySpeed: 800,
      responsive: {
        0: {
          items: 1,
          nav: false

        },
        767: {
          items: 1,
          nav: false
        },
        992: {
          items: 2,
          nav: false
        },
        1200: {
          items: 1,
        },
        1501: {
          items: 2,
        }
      }
    });

    if (document.getElementById('default-select')) {
      $('select').niceSelect();
    }

    //about-pro-active
    $('.details_active').owlCarousel({
      loop: true,
      margin: 0,
      items: 1,
      // autoplay:true,
      navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
      nav: true,
      dots: false,
      // autoplayHoverPause: true,
      // autoplaySpeed: 800,
      responsive: {
        0: {
          items: 1,
          nav: false

        },
        767: {
          items: 1,
          nav: false
        },
        992: {
          items: 1,
          nav: false
        },
        1200: {
          items: 1,
        }
      }
    });

  });

  // resitration_Form
  $(document).ready(function () {
    $('.popup-with-form').magnificPopup({
      type: 'inline',
      preloader: false,
      focus: '#name',

      // When elemened is focused, some mobile browsers in some cases zoom in
      // It looks not nice, so we disable it:
      callbacks: {
        beforeOpen: function () {
          if ($(window).width() < 700) {
            this.st.focus = false;
          } else {
            this.st.focus = '#name';
          }
        }
      }
    });
  });

  $('.popup-youtube').magnificPopup({
    disableOn: 320,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
  });

  //------- Mailchimp js --------//  
  function mailChimp() {
    $('#mc_embed_signup').find('form').ajaxChimp();
  }
  mailChimp();



  // Search Toggle
  $("#search_input_box").hide();
  $("#search").on("click", function () {
    $("#search_input_box").slideToggle();
    $("#search_input").focus();
  });
  $("#close_search").on("click", function () {
    $('#search_input_box').slideUp(500);
  });
  // Search Toggle
  $("#search_input_box").hide();
  $("#search_1").on("click", function () {
    $("#search_input_box").slideToggle();
    $("#search_input").focus();
  });
  $(document).ready(function () {
    $('select').niceSelect();
  });





  const tilt = $('.js-tilt').tilt({
    maxTilt: 20,
    // perspective:    10,   // Transform perspective, the lower the more extreme the tilt gets.
    // easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
    // scale:          1,      // 2 = 200%, 1.5 = 150%, etc..
    // speed:          500,    // Speed of the enter/exit transition.
    // transition:     true,   // Set a transition on enter/exit.
    // disableAxis:    null,   // What axis should be disabled. Can be X or Y.
    // reset:          true,   // If the tilt effect has to be reset on exit.
    // glare:          true,  // Enables glare effect
    // maxGlare:       1       // From 0 - 1.
  });


  var cursor = document.getElementById('cursor');
  document.addEventListener('mousemove', function (e) {
    var x = e.clientX;
    var y = e.clientY;
    cursor.style.left = x + 'px';
    cursor.style.top = y + 'px';
  })
  jQuery(window).on('load', function () {
    $('.preloader').fadeOut();
  });
  // Preloader fadeout timming 
  setTimeout(function () {
    $('.preloader').fadeOut();
    $('.preloader').delay(150).fadeOut('slow');
  }, 10000);
  // Count Time 
  function makeTimer() {
    var endTime = new Date("Apr 22, 2022 21:00:00 PDT");
    var endTime = (Date.parse(endTime)) / 1000;
    var now = new Date();
    var now = (Date.parse(now) / 1000);
    var timeLeft = endTime - now;
    var days = Math.floor(timeLeft / 86400);
    var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
    var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
    var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
    if (hours < "10") { hours = "0" + hours; }
    if (minutes < "10") { minutes = "0" + minutes; }
    if (seconds < "10") { seconds = "0" + seconds; }
    $("#days").html(days + "<span>Days</span>");
    $("#hours").html(hours + "<span>Hours</span>");
    $("#minutes").html(minutes + "<span>Minutes</span>");
    $("#seconds").html(seconds + "<span>Seconds</span>");
  }
  setInterval(function () { makeTimer(); }, 1000);

})(jQuery);	