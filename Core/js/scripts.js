/*
   
    Template Name : Rolling - Freelancer Portfolio Template
    Author : UiPasta Team
    Website : http://www.uipasta.com/
    Support : http://www.uipasta.com/support/
	
	
*/



/*
   
   Table Of Content
   
   1. Preloader
   2. Smooth Scroll
   3. Scroll Naviagation Background Change with Sticky Navigation
   4. Mobile Navigation Hide or Collapse on Click
   5. Scroll To Top
   6. Typed.js
   7. Parallax Background
   8. Portfolio Filtering
   9. Magnific Popup
  10. Testimonial Carousel/Slider
  11. Statistics Counter
  12. Google Map
 

*/

//created nav functions to make things pretty :)
function pic_hover(id, hover) {
    if (hover) {
        document.getElementById(id).style.filter = "brightness(60%)";
    } else {
        document.getElementById(id).style.filter = "brightness(100%)";
    }
}
function button_hover(id, hover) {
    if (hover) {
        document.getElementById(id).style.color = '#292';
    } else {
        document.getElementById(id).style.color = '#fff';
    }
}
function section_hover(id, hover) {
    if (hover) {
        document.getElementById(id).style.opacity = "1";
    } else {
        document.getElementById(id).style.opacity = '.1';
    }
}


//---slideshow functions---//
//button press
function slide_button(changeNum) {
    //resetting timeout for longer since button was pressed
    clearTimeout(time);

    //initiating slide change
    change_slide(changeNum, true);
}

//changing slides
var currentPicture = 0;
var picNum = 3;
var time = setTimeout(change_slide, 5000, 1, false);
function change_slide(changeNum, buttonPressed) {
    //changing current picture
    currentPicture += changeNum;
    //ensuring current picture stays in range
    if (currentPicture <= 0) currentPicture = picNum;
    else if (currentPicture > picNum) currentPicture = 1;

    //displaying slides
    display_slides(buttonPressed);
}

//displaying slides
function display_slides(buttonPressed) {
    //changing picture to current picture number
    document.getElementById('home-background').style.backgroundImage = ["url(./assets/slides/", currentPicture, ".jpg)"].join("");

    //ensuring slide is changed again in 5 seconds (or 10 if button was pressed)
    if (buttonPressed) {
        time = setTimeout(change_slide, 10000, 1, false);
    } else {
        time = setTimeout(change_slide, 5000, 1, false);
    }
}


//given pre built-in functions
(function ($) {
    'use strict';

    jQuery(document).ready(function () {

        
       /* Preloader */
		
        $(window).on('load', function() {
          $('body').addClass('loaded');
        });
		
		
		
       /* Smooth Scroll */

        $('a.smoth-scroll').on("click", function (e) {
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top - 50
            }, 1000);
            e.preventDefault();
        });
		


       
       /* Scroll Naviagation Background Change with Sticky Navigation */
		 
        $(window).on('scroll', function () {
            if ($(window).scrollTop() > 100) {
                $('.header-top-area').addClass('navigation-background');
            } else {
                $('.header-top-area').removeClass('navigation-background');
            }
        });
		
		
		
		
       /* Mobile Navigation Hide or Collapse on Click */
		
        $(document).on('click', '.navbar-collapse.in', function (e) {
            if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
                $(this).collapse('hide');
            }
        });
        $('body').scrollspy({
            target: '.navbar-collapse',
            offset: 195
		 });
		 
		
		
		
        /* Scroll To Top */
		
        $(window).scroll(function(){
        if ($(this).scrollTop() >= 500) {
            $('.scroll-to-top').fadeIn();
         } else {
            $('.scroll-to-top').fadeOut();
         }
	   });
	
	
	    $('.scroll-to-top').click(function(){
		  $('html, body').animate({scrollTop : 0},800);
		  return false;
	    });
		
		
		
		
        /* Typed.js */
		
        $(window).load(function(){
        $(".typing").typed({
            strings: ["I am a computer engineer.", "I like creating innovative solutions to problems.", "I like helping people.",
            "I like leading and working in teams.", "I like embedded systems."],    //You can change the home section typing text from
            typeSpeed: 30,
            loop: true,
            backDelay: 1500
          });
         });
        
		 
        /* Parallax Background */

        $(window).stellar({
            responsive: true,
            horizontalScrolling: false,
            hideDistantElements: false,
            horizontalOffset: 0,
            verticalOffset: 0,
        });

        
		
		
        /* Portfolio Filtering */

        $('.portfolio-inner').mixItUp();


       
        /* Magnific Popup */

        $('.portfolio-popup').magnificPopup({
            type: 'image',
			
            gallery: { enabled: true },
			zoom: { enabled: true,
			        duration: 500
					
          },
		  
         image:{
               markup: '<div class="mfp-figure portfolio-pop-up">'+
               '<div class="mfp-close"></div>'+
               '<div class="mfp-img"></div>'+
               '<div class="mfp-bottom-bar portfolio_title">'+
               '<div class="mfp-title"></div>'+
               '<div class="mfp-counter"></div>'+
               '</div>'+
               '</div>',

               titleSrc:function(item){
                return item.el.attr('title');
              }
            }
		  
		  
          });

       
	   
		 
        /* Testimonial Carousel/Slider */

        $(".testimonial-carousel-list").owlCarousel({
            items: 1,
            autoPlay: true,
            stopOnHover: false,
            navigation: true,
            navigationText: ["<i class='fa fa-long-arrow-left fa-2x owl-navi'></i>", "<i class='fa fa-long-arrow-right fa-2x owl-navi'></i>"],
            itemsDesktop: [1199, 1],
            itemsDesktopSmall: [980, 1],
            itemsTablet: [768, 1],
            itemsTabletSmall: false,
            itemsMobile: [479, 1],
            autoHeight: true,
            pagination: false,
            transitionStyle : "backSlide"
        });
		
		
		
		
        /* Statistics Counter */
		
        $('.statistics').appear(function() {
           var counter = $(this).find('.statistics-count');
           var toCount = counter.data('count');
      
           $(counter).countTo({
           from: 0,
           to: toCount,
           speed: 5000,
           refreshInterval: 50
           })
           });
		   
		  
         
         /* Google Map */
		 
         $('#my-address').gMap({
            zoom: 5,
            scrollwheel: true,
            maptype: 'ROADMAP',
            markers:[
            {
            address: "New York",  /* You can change your address from here */
            html: "<b>Address</b>: <br> Area-2, Rose Area, New York, U.S.A.",   /* You can change display address text from here */
            popup: true
            }
            ]
            });
              
		   
            });

   })(jQuery);