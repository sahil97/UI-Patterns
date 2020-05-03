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

  });
