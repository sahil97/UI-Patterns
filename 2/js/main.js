$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        slideSpeed : 200,
        autoPlay : true,
        margin: 5,
        pagination : false,
        responsiveClass:true,
     responsive:{
         0:{
             items:2,
         },
         320: {
            items:3,
         },
         600:{
             items:4,
             nav:false
         },
         1000:{
             items:5,
             loop:false
         }
     }
        });

    $('.accordion').accordion({
        "transitionSpeed": 400
    });


    // get the value of the bottom of the #main element by adding the offset of that element plus its height, set it as a variable
    var mainbottom = $('#hero').offset().top;

    // on scroll,
    $(window).on('scroll',function(){

    // we round here to reduce a little workload
    stop = Math.round($(window).scrollTop());
    if (stop > mainbottom) {
        $('.navbar').addClass('past-main');
        $('.navbar').addClass('effect-main')
    } else {
        $('.navbar').removeClass('past-main');
    }

    });

   // Select all links with hashes
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
            && 
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
                scrollTop: (target.offset().top - 55)
            }, 1000, function() {
                // Callback after animation
                // Must change focus!
                var $target = $(target);
                $target.focus();
                if ($target.is(":focus")) { // Checking if the target was focused
                return false;
                } else {
                $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
                };
            });
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.nav-link').on('click', function () {
        $('.navbar-collapse').collapse('hide');
      });

  });
