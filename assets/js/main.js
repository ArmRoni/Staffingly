jQuery(window).scroll(function(){
  if (jQuery(this).scrollTop() > 50) {
     jQuery('.header').addClass('header-position');
  } else {
     jQuery('.header').removeClass('header-position');
  }
});

jQuery(function(){
  jQuery('#menu-nav').slicknav({
    label: '',
    allowParentLinks:false,
    openedSymbol:"",
    closedSymbol:"",
    prependTo:'#menu_holder'
  });
});
(jQuery); 

jQuery(".nav-toggler").click(function() {
  jQuery(this).toggleClass("active");
  jQuery("#menu_holder").toggleClass("mobile-menu-open");
  jQuery(".header").toggleClass("header-bg");
  jQuery("body").toggleClass("overflow-hidden");
});

jQuery(".menu-backdrop").click(function() {
  jQuery(".nav-toggler").removeClass("active");
  jQuery("#menu_holder").removeClass("mobile-menu-open");
  jQuery(".header").removeClass("header-bg");
  jQuery("body").removeClass("overflow-hidden");
});

  jQuery('.our-employes-slider').owlCarousel({
        loop:true,
        responsiveClass:true,
        autoplay:true,
        margin:30,
        nav:false,
        dots:false,
        autoplayTimeout:5000,
          responsive:{
              0:{
                items:1,
              },
              500:{
                items:3,
              },
              991:{
                items:5,
              },
              1366:{
                items:6,
              },
              1480:{
                items:8,
              }
          }
        });

        jQuery('.employes-slider-2').owlCarousel({
          loop:true,
          responsiveClass:true,
          autoplay:true,
          margin:30,
          nav:false,
          dots:false,
          autoplayTimeout:5000,
            responsive:{
                0:{
                  items:1,
                },
                500:{
                  items:3,
                },
                991:{
                  items:5,
                },
                1366:{
                  items:6,
                },
                1480:{
                  items:7,
                }
            }
          });

        jQuery('.vidoe-slider').owlCarousel({
          loop:true,
          responsiveClass:true,
          autoplay:true,
          margin:30,
          nav:true,
          dots:false,
          autoplayTimeout:5000,
            responsive:{
                0:{
                  items:1,
                },
                768:{
                  items:2,
                },
                1200:{
                  items:3,
                }
            }
          });


          jQuery('.seenon-slider').owlCarousel({
            loop:true,
            responsiveClass:true,
            autoplay:true,
            margin:30,
            nav:true,
            dots:false,
            autoplayTimeout:4000,
              responsive:{
                  0:{
                    items:1,
                  },
                  768:{
                    items:2,
                  },
                  1200:{
                    items:3,
                  }
              }
            });

            jQuery(document).ready(function() {
              var owl = jQuery('.authorization-slider').owlCarousel({
                  loop: true,
                  responsiveClass: true,
                  autoplay: true,
                  animateOut: 'fadeOut',
                  animateIn: 'fadeIn',
                  margin: 1,
                  nav: false,
                  dots: false,
                  touchDrag : false,
                   mouseDrag : false,
                  autoplayTimeout: 4000,
                  responsive: {
                      0: {
                          items: 1
                      }
                  }
              });
          
              // Trigger 'next' on carousel when clicking the prior-authorization-button div
              jQuery('.prior-authorization-button').click(function(e) {
                  e.preventDefault(); // Prevent default anchor behavior
                  owl.trigger('next.owl.carousel');
              });
          });

jQuery(document).ready(function() {
  // Function to animate the counters
  function animateCounters() {
      jQuery('h2 span').each(function() {
          var $this = jQuery(this),
              target = +$this.text(); // Get the current number inside the <span>
          $this.text(0); // Set the initial counter value to 0
          
          jQuery({ countNum: 0 }).animate({
              countNum: target
          },
          {
              duration: 2000, // Duration in milliseconds
              easing: 'swing',
              step: function() {
                  $this.text(Math.floor(this.countNum)); // Update the number
              },
              complete: function() {
                  $this.text(target); // Ensure the final value is the target number
              }
          });
      });
  }

  // Set up the Intersection Observer
  const observer = new IntersectionObserver(function(entries) {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              animateCounters(); // Start counting when the div is in view
              observer.unobserve(entry.target); // Stop observing once animation starts
          }
      });
  });

  // Observe the project counter div
  const targetDiv = document.querySelector('.project-complated-counter');
  if (targetDiv) {
      observer.observe(targetDiv);
  }
});

jQuery('.used-software-slider').owlCarousel({
  loop:true,
  responsiveClass:true,
  autoplay:true,
  margin:40,
  dots:false,
  nav:false,
  autoplayTimeout:5000,
    responsive:{
        0:{
          items:1,
        },
        768:{
          items:3,
        },
        1200:{
          items:2,
        },
        1300:{
          items:3,
        },
        1400:{
          items:4,
        }
    }
  });

jQuery('.used-software-slider-2').owlCarousel({
  loop:true,
  responsiveClass:true,
  autoplay:true,
  margin:40,
  dots:false,
  nav:false,
  autoplayTimeout:5000,
    responsive:{
        0:{
          items:1,
        },
        768:{
          items:4,
        },
        1200:{
          items:5,
        },
        1300:{
          items:6,
        },
        1600:{
          items:7,
        }
    }
  });

  jQuery('.client-video-slider').owlCarousel({
    loop:true,
    responsiveClass:true,
    autoplay:true,
    margin:10,
    dots:false,
    nav:true,
    autoplayHoverPause: true,
    autoplayTimeout:5000,
      responsive:{
          0:{
            items:1,
          },
          768:{
            items:2,
          }    
        }
    });

  jQuery('.pepole-reviw-slider').owlCarousel({
    loop:true,
    responsiveClass:true,
    autoplay:true,
    margin:10,
    dots:false,
    nav:true,
    autoplayTimeout:5000,
      responsive:{
          0:{
            items:1,
          },
          768:{
            items:1,
          }    
       }
    });
  
// team script
//three-item-carousel
(function ($) {
  "use strict";
  if ($('.three-item-carousel').length) {
    $('.three-item-carousel').owlCarousel({
      loop:true,
      margin:30,
      nav:true,
      smartSpeed: 1000,
      autoplay: 500,
      responsive:{
        0:{
          items:1
        },
        480:{
          items:1
        },
        600:{
          items:2
        },
        800:{
          items:2
        },
        1024:{
          items:3
        }
      }
    });       
  }

  // Add read more content on testimony card.
  function AddReadMore() {
    var carLmt = 110;
    var readMoreTxt = " ...read more";
    $(".testimony-text").each(function () {
      if ($(this).find(".first-section").length)
        return;
      
      var allstr = $(this).text();
      if (allstr.length > carLmt) {
        var firstSet = allstr.substring(0, carLmt);
        var secdHalf = allstr.substring(carLmt, allstr.length);
        var strtoadd = firstSet + "<span class='second-section'>" + secdHalf + "</span><span class='read-more'  title='Click to Show More'>" + readMoreTxt + "</span>";
        $(this).html(strtoadd);
      }
    });
  }

  AddReadMore();
   
  // Testimony POPup
  var topItem = 0,
    leftItem = 0,
    popupHeight = 500;

  $(".our-team-content .team-testimony").on("click", function(e) {
    var $this = $(this),
    $parent = $this.parents(".our-team-wrap"),
    content = $this.html(),
    $popup = $parent.find(".testimony-popup");

    topItem = $this.offset().top - $parent.offset().top + $this.height() / 2;
    leftItem = $this.offset().left - $parent.offset().left + $this.width() / 2;

    $popup.css({
      top: topItem,
      left: leftItem,
      width: 0,
      height: 0
    });

    $popup.html(content).stop().animate( {
      top: 0,
      left: 0,
      width: "100%",
      height: "100vh",
      opacity: 1
    }, 300, 'linear' );
    
  });

  $(".testimony-popup").on("click", function(e) {
    $(this).stop().animate( {
      top: 0,
      left: 0,
      width: 0,
      height: 0,
      opacity: 0,
      display: 'none'
    }, 300, 'linear'
    );
  });

})(jQuery);

// ==========accordion js=============
jQuery(document).ready(function () {
   jQuery(".accordion-box").each(function () {
      jQuery(this).find(".accordion-item:first-child .accordion-header").addClass("active");
      jQuery(this).find(".accordion-item:first-child .accordion-content").show();
   });

   jQuery(".accordion-header").click(function () {
      const parentAccordionBox = jQuery(this).closest(".accordion-box");
      const clickedContent = jQuery(this).next();
      const isContentVisible = clickedContent.is(":visible");
      parentAccordionBox.find(".accordion-content").not(clickedContent).slideUp();
      parentAccordionBox.find(".accordion-header").not(jQuery(this)).removeClass("active");
      clickedContent.slideToggle({
         duration: 400,
         complete: () => {
            const headerTop = jQuery(this).offset().top;
            const viewportTop = jQuery(window).scrollTop();
            const viewportBottom = viewportTop + jQuery(window).height();
            if (headerTop < viewportTop || headerTop > viewportBottom) {
               jQuery('html, body').animate({ scrollTop: headerTop - 70 }, 500);
            }
         }
      });
      jQuery(this).toggleClass("active");
   });
});

// new js add for counter ===================
document.addEventListener("DOMContentLoaded", function() {
    const counters = [
        { id: 'customerCounter', incPerDay: 1360, fromDate: "12/01/2022" },
        { id: 'PriorCounter', incPerDay: 120, fromDate: "12/01/2022" },
        { id: 'DataCounter', incPerDay: 2700, fromDate: "12/01/2022" },
        { id: 'MedicalCounter', incPerDay: 2500, fromDate: "12/01/2022" },
        { id: 'AdministrativeCounter', incPerDay: 12, fromDate: "12/01/2022" }
    ];

    // Create an Intersection Observer to monitor when the .numbers-counter-wrap becomes visible
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Start counting when .numbers-counter-wrap is visible
                counters.forEach(counter => {
                    const element = document.getElementById(counter.id);
                    if (element) {
                        startCounting(element, countTotalNumber(counter.fromDate, counter.incPerDay, element));
                    }
                });
                setInterval(() => {
                    counters.forEach(counter => {
                        const element = document.getElementById(counter.id);
                        if (element) {
                            splitCounter(element, countTotalNumber(counter.fromDate, counter.incPerDay, element));
                        }
                    });
                }, 10000);

                // Stop observing after the counters have started to prevent retriggering
                observer.unobserve(entry.target);
            }
        });
    });

    // Get the .numbers-counter-wrap element and start observing it
    const counterWrap = document.querySelector('.numbers-counter-wrap');
    if (counterWrap) {
        observer.observe(counterWrap);
    } 
  });
function startCounting(counter, totalCount) {
    const updateCount = () => {
        const target = +totalCount;
        const count = +counter.innerText;
        const inc = target / 600;
        if (count < target) {
            splitCounter(counter, Math.round(count + inc));
            setTimeout(updateCount, 1);
        } else {
            splitCounter(counter, Math.round(target));
        }
    };
    updateCount();
}
function splitCounter(counter, target) {
    const targetSplit = target.toString().split("");
    counter.innerHTML = '<span>' + targetSplit.join('</span><span>') + '</span>';
}

function getTotalNumbersOfDays(fromDate) {
    const oneDay = 24 * 60 * 60 * 1000;
    const firstDate = new Date(fromDate);
    const secondDate = new Date();
    return Math.abs((firstDate - secondDate) / oneDay);
}

function countTotalNumber(fromDate, incPerDay, selector) {
    let countFromDate = parseFloat(getTotalNumbersOfDays(fromDate)) * parseInt(incPerDay);
    let currentDate = new Date();
    let todayPastMinute = (currentDate.getHours() * 60) + currentDate.getMinutes();
    countFromDate = countFromDate + Math.ceil((incPerDay / 1440) * todayPastMinute);
    return Math.round(countFromDate + parseInt(selector.getAttribute('data-target') || 0));
}

//second menu js
document.querySelector('.mobile-menu-icon').addEventListener('click', function() {
  document.getElementById('menu-top-bar-right-menu').classList.toggle('show-menu');
  this.classList.toggle('active');
});

// attach file validation start
document.addEventListener('wpcf7invalid', function(event) {
  if (!event.detail.apiResponse.invalid_fields['resume-file']) {
    jQuery('.cus-attach-validation').find('.wpcf7-form-control').attr("aria-invalid", "true");
    jQuery('.cus-attach-validation').find('.wpcf7-form-control-wrap').append('<span class="wpcf7-not-valid-tip" aria-hidden="true">The field is required.</span>');
  }
}, false);
// attach file validation end

//============ empolyees testimony slide===========
jQuery('.empolyees-testimony-slider').owlCarousel({
  loop:true,
  responsiveClass:true,
  autoplay:true,
  margin:30,
  nav:true,
  dots:false,
  autoplayHoverPause: true,
  autoplayTimeout:4000,
    responsive:{
        0:{
          items:1,
        },
        768:{
          items:2,
        },
        1200:{
          items:3,
          margin:20,
        },
        1500:{
          items:3,
          margin:30,
        }
    }
  });