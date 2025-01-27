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


//======= experience-slider===========

jQuery(document).ready(function () {
  var slider = jQuery('.experience-slider').owlCarousel({
    loop: true,
    items: 1,
    autoplay: true,
    margin:3,
    nav: false,
    dots: true,
    autoplayTimeout: 5000,
  });

  jQuery('.nav-arrow-left').click(function () {
      slider.trigger('prev.owl.carousel');
    });
    jQuery('.nav-arrow-right').click(function () {
      slider.trigger('next.owl.carousel');
  });

  // Function to update navigation arrow images
  function updateNavImages(currentIndex) {
    var items = jQuery('.experience-slider .voices-experience-item'); // All slider items
    var totalItems = items.length;

    // Calculate indexes for previous and next items
    var prevIndex = (currentIndex - 1 + totalItems) % totalItems; // Previous index
    var nextIndex = (currentIndex + 1) % totalItems; // Next index

    // Get image sources for previous and next items
    var prevImage = items.eq(prevIndex).find('.voices-experience-photo img').attr('src');
    var nextImage = items.eq(nextIndex).find('.voices-experience-photo img').attr('src');

    // Update the navigation arrow images
    jQuery('.nav-arrow-left img').attr('src', prevImage);
    jQuery('.nav-arrow-right img').attr('src', nextImage);
  }

  // Attach the updateNavImages function to the slider change event
  slider.on('changed.owl.carousel', function (event) {
    var currentIndex = event.item.index;
    updateNavImages(currentIndex);
  });

    // Manually trigger the function after slider initialization to ensure images are loaded
    updateNavImages(0); // Set initial images based on the first slide
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
  margin:3,
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
  })
})



// ========thumbnail sider js=========

jQuery(document).ready(function () {
  jQuery(".product-content-wrap").each(function () {
    var $this = jQuery(this); // Scope the current .key-attributes-area
    var sync1 = $this.find(".sync1");
    var sync2 = $this.find(".sync2");

    // Retrieve slidesPerPage from data attribute, with a default fallback
    var slidesPerPage = parseInt($this.data("slides-per-page")) || 4; 
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
      loop: false,
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
        margin: 5,
        dots: false,
        nav: false,
        smartSpeed: 200,
        slideSpeed: 500,
        slideBy: slidesPerPage,
        responsiveRefreshRate: 100,
        responsive: {
          991: {
            margin:10,
          }
        }
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
      var number = jQuery(this).index();
      sync1.data("owl.carousel").to(number, 300, true);
    });

    toggleNavVisibility({ item: { count: sync1.find(".owl-item").length, index: 0 } });
  });
});



// ========thumbnail new start sider js=========
if (typeof MasterSlider !== 'undefined') {
  const sliderIds = Array.from(document.querySelectorAll('.master-slider')).map(slider => slider.id);
  sliderIds.forEach(function(sliderId) {
      var masterslider = new MasterSlider();

      // Slider Controls
      masterslider.control('arrows', { 
          autohide: false, 
          overVideo: true 
      });

      masterslider.control('thumblist', {
          autohide: false,
          overVideo: true,
          dir: 'h',
          align: 'bottom',
          width: 152,
          space: 12,             
          height: 152
      });

      // Slider Setup
      masterslider.setup(sliderId, {
          width: 770,
          height: 500,
          autoHeight: true,
          space: 0,
          start: 1,
          grabCursor: true,
          swipe: true,
          autoplay: true,
          loop: true,
          preload: 2,
          fillMode: "fill",
          view: "basic",
          speed: 20
      });
  });
} 


//======== botto to top scroll======

jQuery(document).ready(function(){
  jQuery("#scrollTopButton").click(function(){
    jQuery("html, body").animate({scrollTop: 0}, 800);
  });
});

// ========catagory list scrolling js =======
jQuery(document).ready(function () {
  jQuery('.category-list-content ul li a').on('click', function (event) {
      event.preventDefault();
      var target = jQuery(jQuery(this).attr('href'));
      jQuery('html, body').animate({
          scrollTop: target.offset().top - 50
      }, 1000);
  });
  jQuery('.phone-number input[type="tel"]').on('focus', function() {
    var inputValue = jQuery(this).val();
    if (!inputValue.includes('+')) {
        jQuery(this).val('+' + inputValue);
    }
  });
  jQuery('.phone-number input[type="tel"]').on('keypress', function() {
    var inputValue = jQuery(this).val();
    if (!inputValue.includes('+')) {
        jQuery(this).val('+' + inputValue);
    }
  });

  jQuery(".readmoreBtn").on("click", function (e) {
    e.preventDefault();
      const $btn = jQuery(this);
      const $mentStepText = $btn.closest(".impact-factors-info").find(".menufacturing-step-text");

      $mentStepText.toggleClass("active");
      $btn.text($mentStepText.hasClass("active") ? "hide more" : "read more");
  });


  //========= accordionSlider===========
  jQuery(document).ready(function($) {
    jQuery('.accordionSlider').accordionSlider({
      width: 1420,
      height: 380,
      responsiveMode: 'custom',
      visiblePanels: 4,
      startPanel: 3,
      closePanelsOnMouseOut: false,
      shadow: false,
      panelDistance: 20,
      autoplay: true,
      autoplayDelay: 3000,
      mouseWheel: false,
      loop: true, 
      breakpoints: {
        960: {visiblePanels: 3,
          panelDistance: 10,
        },
        // 800: {visiblePanels: 3, orientation: 'vertical', width: 600, height: 400},
        650: {visiblePanels: 3,
          panelDistance: 10,
        },
      }
    });
  });
});

// ================Chart js ==================
document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('myChart');
  if (canvas) {
    // Parse the data attributes from the canvas element
    const labels = JSON.parse(canvas.getAttribute('data-labels'));
    const employeesData = JSON.parse(canvas.getAttribute('data-employees'));
    const revenueData = JSON.parse(canvas.getAttribute('data-revenue'));

    const ctx = canvas.getContext('2d');
    const myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Employees [Number]',
            data: employeesData,
            borderColor: '#15294F',
            pointBackgroundColor: '#15294F',
            tension: 0.1,
            pointRadius: 5,
            fill: false,
          },
          {
            label: 'Revenue [$ Millions]',
            data: revenueData,
            borderColor: '#FFBD4C',
            pointBackgroundColor: '#FFBD4C',
            tension: 0.1,
            pointRadius: 5,
            fill: false,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            labels: {
              usePointStyle: true,
              boxWidth: 10,
              boxHeight: 10,
              color: '#15294F',
              font: { family: '"Antic Slab", serif', size: 14 },
              generateLabels: (chart) => {
                return Chart.defaults.plugins.legend.labels.generateLabels(chart).map(label => {
                  label.fillStyle = label.text.includes('Revenue') ? '#FFBD4C' : '#15294F';
                  label.pointStyle = 'circle';
                  return label;
                });
              },
            },
          },
          title: {
            display: true,
            text: 'Social Impact and Insights Into Factory Growth',
            color: '#15294F',
            font: { family: '"Antic Slab", serif', size: 24 },
          },
        },
        scales: {
          x: {
            ticks: { color: '#15294F', font: { family: '"Antic Slab", serif' } },
            grid: { color: '#B0B0B0' },
          },
          y: {
            ticks: { color: '#15294F', font: { family: '"Antic Slab", serif' } },
            grid: { color: '#B0B0B0' },
          },
        },
        elements: {
          line: { borderWidth: 2 },
          point: { hoverRadius: 7 },
        },
      },
    });
  }
});

// js by Shahid
document.addEventListener('wpcf7submit', function(event) {
  var countryField = document.querySelector('[name="country_auto-884"]');
  if (countryField && countryField.value == '0') {
    jQuery('.cus-county-validation').show();
    event.preventDefault();
  }
}, false);

jQuery('.wpcf7-country_auto').on('change', function() {
  var countryField = document.querySelector('[name="country_auto-884"]');
  if (countryField && countryField.value == '0') {
    jQuery('.cus-county-validation').show();
  } else {
    jQuery('.cus-county-validation').hide();
  }
});