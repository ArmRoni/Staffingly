jQuery(window).scroll(function () {
  if (jQuery(this).scrollTop() > 50) {
    jQuery('.header').addClass('header-position');
  } else {
    jQuery('.header').removeClass('header-position');
  }
});

jQuery(function () {
  jQuery('#menu-nav').slicknav({
    label: '',
    allowParentLinks: false,
    openedSymbol: "",
    closedSymbol: "",
    prependTo: '#menu_holder'
  });
});
(jQuery);


jQuery(".nav-toggler").click(function () {
  jQuery(this).toggleClass("active");
  jQuery("#menu_holder").toggleClass("mobile-menu-open");
  jQuery(".header").toggleClass("header-bg");
  jQuery("body").toggleClass("overflow-hidden");
});

jQuery(".menu-backdrop").click(function () {
  jQuery(".nav-toggler").removeClass("active");
  jQuery("#menu_holder").removeClass("mobile-menu-open");
  jQuery(".header").removeClass("header-bg");
  jQuery("body").removeClass("overflow-hidden");
});


// document.addEventListener("DOMContentLoaded", function () {
//     const photo = document.querySelector(".our-extensive-photo");
//     const textContent = document.querySelector(".extensive-text-content");

//     const photoHeight = photo.offsetHeight;

//     textContent.style.minHeight = `${photoHeight}px`;

//     // console.log(photoHeight);

//     // if (photo && textContent) {
//     //     const photoHeight = photo.offsetHeight;
//     //     textContent.style.minHeight = `${photoHeight}px`;
//     // }
// });


jQuery('.leather-brand-slider').owlCarousel({
  loop: true,
  responsiveClass: true,
  autoplay: true,
  nav: false,
  dots: true,
  autoplayTimeout: 5000,
  responsive: {
    0: {
      items: 1,
      dotsEach: 3,
    },
    500: {
      items: 2,
    },
    991: {
      items: 4,
    },
    1366: {
      items: 4,
    },
    1700: {
      items: 5,
    }
  }
});

jQuery(document).ready(function () {
  var slider = jQuery('.experience-slider').owlCarousel({
    loop: true,
    items: 1,
    autoplay: true,
    nav: false, // Disable default navigation
    dots: true,
    autoplayTimeout: 5000,
  });
  jQuery('.nav-arrow-left').click(function () {
    slider.trigger('prev.owl.carousel');
  });

  jQuery('.nav-arrow-right').click(function () {
    slider.trigger('next.owl.carousel');
  });
});

jQuery('.blog-slider').owlCarousel({
  loop: true,
  responsiveClass: true,
  autoplay: true,
  nav: true,
  margin: 20,
  dots: true,
  autoplayTimeout: 5000,
  navText: [
    '<i class="fa-solid fa-chevron-left"></i>',
    '<i class="fa-solid fa-chevron-right"></i>'
  ],
  responsive: {
    0: {
      items: 1,
      dotsEach: 3,
    },
    600: {
      items: 2,
    },
    991: {
      items: 3,
      margin: 20,
    },
    1340: {
      items: 4,
      margin: 20,
    },
    1500: {
      items: 4,
      margin: 30,
    },
    1700: {
      items: 4,
      margin: 48
    }
  }
});

jQuery('.members-list-slider').owlCarousel({
  loop: true,
  responsiveClass: true,
  autoplay: true,
  nav: true,
  margin: 20,
  dots: true,
  autoplayTimeout: 5000,
  navText: [
    '<i class="fa-solid fa-chevron-left"></i>',
    '<i class="fa-solid fa-chevron-right"></i>'
  ],
  responsive: {
    0: {
      items: 1,
      dotsEach: 3,
    },
    600: {
      items: 2,
    }
  }
});

jQuery('.banner-slider').owlCarousel({
  loop: true,
  responsiveClass: true,
  autoplay: true,
  nav: false,
  dots: false,
  items: 1,
  autoplayTimeout: 5000,
  animateOut: 'fadeOut'
});




// ==========accordion js=============

const accoHaders = document.querySelectorAll('.accordion-header');
accoHaders.forEach(accoHeader => {
  accoHeader.addEventListener("click", () => {
    const item = accoHeader.parentElement;
    item.classList.toggle('active');
    accoHaders.forEach(otherHeader => {
      if (otherHeader !== accoHeader) {
        otherHeader.parentElement.classList.remove("active");
      }
    })
  })
})



// ========thumbnail sider js=========
jQuery(document).ready(function () {
  $(".key-attributes-area").each(function () {
    var $this = $(this); // Scope the current .key-attributes-area
    var sync1 = $this.find(".sync1");
    var sync2 = $this.find(".sync2");
    var slidesPerPage = 4; // Number of thumbnails per page
    var syncedSecondary = true;

    sync1.owlCarousel({
      items: 1,
      margin: 5,
      slideSpeed: 2000,
      autoHeight: true,
      nav: true,
      animateOut: "fadeOut",
      autoplay: true,
      dots: false,
      loop: false, // Disable loop to manage arrows properly
      responsiveRefreshRate: 200,
      navText: [
        '<i class="fa-solid fa-chevron-left"></i>',
        '<i class="fa-solid fa-chevron-right"></i>',
      ],
    }).on("changed.owl.carousel", function (event) {
      syncPosition(event);
      toggleNavVisibility(event);
    });

    sync2
      .on("initialized.owl.carousel", function () {
        sync2.find(".owl-item").eq(0).addClass("current");
      })
      .owlCarousel({
        items: slidesPerPage,
        margin: 10,
        dots: false,
        nav: false,
        smartSpeed: 200,
        slideSpeed: 500,
        slideBy: slidesPerPage, // Move by page instead of individual items
        responsiveRefreshRate: 100,
      }).on("changed.owl.carousel", syncPosition2);

    function syncPosition(event) {
      var current = event.item.index;

      sync2
        .find(".owl-item")
        .removeClass("current")
        .eq(current)
        .addClass("current");

      var onscreen = sync2.find(".owl-item.active").length - 1;
      var start = sync2.find(".owl-item.active").first().index();
      var end = sync2.find(".owl-item.active").last().index();

      if (current > end) {
        sync2.data("owl.carousel").to(current, 100, true);
      }
      if (current < start) {
        sync2.data("owl.carousel").to(current - onscreen, 100, true);
      }
    }

    function syncPosition2(event) {
      if (syncedSecondary) {
        var number = event.item.index;
        sync1.data("owl.carousel").to(number, 100, true);
      }
    }

    function toggleNavVisibility(event) {
      var count = event.item.count;
      var currentIndex = event.item.index;

      if (currentIndex === 0) {
        $this.find(".owl-nav .fa-chevron-left").hide();
      } else {
        $this.find(".owl-nav .fa-chevron-left").show();
      }
      if (currentIndex === count - 1) {
        $this.find(".owl-nav .fa-chevron-right").hide();
      } else {
        $this.find(".owl-nav .fa-chevron-right").show();
      }
    }

    sync2.on("click", ".owl-item", function (e) {
      e.preventDefault();
      var number = $(this).index();
      sync1.data("owl.carousel").to(number, 300, true);
    });

    toggleNavVisibility({ item: { count: sync1.find(".owl-item").length, index: 0 } });
  });
});



   


