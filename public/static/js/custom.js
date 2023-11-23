
(function($){
	"use strict";
	var NAY = {};
	var plugin_track = 'static/plugin/';
	$.fn.exists = function () {
        return this.length > 0;
    };

	/* ---------------------------------------------- /*
	 * Pre load
	/* ---------------------------------------------- */
	NAY.PreLoad = function() {
		document.getElementById("loading").style.display = "none"; 
	}

    /*--------------------
        * Menu Close
    ----------------------*/
    NAY.MenuClose = function(){
      $('.navbar-nav a').on('click', function() {
       var toggle = $('.navbar-toggler').is(':visible');
       if (toggle) {
         $('.navbar-collapse').collapse('hide');
       }
      });
    }


  NAY.MenuTogglerClose = function(){
    $(".toggler-menu").on('click', function(){
      $(this).toggleClass('open');
      $('.header-left').stop().toggleClass('menu-open menu-open-desk');
    });
    $('.header-left a').on('click', function() {
     var toggle = $('.toggler-menu').is(':visible');
     if (toggle) {
       $('.header-left').removeClass('menu-open');
       $('.toggler-menu').removeClass('open');
     }
    });
  }

	/* ---------------------------------------------- /*
	 * Header Fixed
	/* ---------------------------------------------- */
	NAY.HeaderFixd = function() {
		var HscrollTop  = $(window).scrollTop();  
	    if (HscrollTop >= 100) {
	       $('header').addClass('fixed-header');
	    }
	    else {
	       $('header').removeClass('fixed-header');
	    }
	}

	/*--------------------
        * One Page
    ----------------------*/
    NAY.OnePage = function(){
        $('.header-left a[href*="#"]:not([href="#"]), .go-to a[href*="#"]:not([href="#"])').on('click', function() {
            // eslint-disable-next-line no-restricted-globals
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') || location.hostname == this.hostname) {
              var target = $(this.hash);
                  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                  if (target.length) {
                    $('html,body').animate({
                      scrollTop: target.offset().top - -2,
                      }, 1000);
                      return false;
                  }
            }
        });

        $('.header-nav a[href*="#"]:not([href="#"])').on('click', function() {
            // eslint-disable-next-line no-restricted-globals
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') || location.hostname == this.hostname) {
              var target = $(this.hash);
                  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                  if (target.length) {
                    $('html,body').animate({
                      scrollTop: target.offset().top - 60,
                      }, 1000);
                      return false;
                  }
            }
        });
    }

    /*--------------------
        * One Page
    ----------------------*/
    NAY.OnePageTop = function(){
        $('.header-one-page a[href*="#"]:not([href="#"])').on('click', function() {
            // eslint-disable-next-line no-restricted-globals
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') || location.hostname == this.hostname) {
              var target = $(this.hash);
                  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                  if (target.length) {
                    $('html,body').animate({
                      scrollTop: target.offset().top - 65,
                      }, 1000);
                      return false;
                  }
            }
        });
    }

    /* ---------------------------------------------- /*
	 * Search Box
	/* ---------------------------------------------- */
	NAY.SearchBox = function() {
		var SearchToggle = $(".h_search")
	 	SearchToggle.on("click", function() {
	        $('.h-search-section').toggleClass("searh-form-open");
    	});
	}

	NAY.HeaderHeight = function(){
		var HHeight = $('.header-height .fixed-header-bar').height()
	    $('.header-height').css("min-height", HHeight);	
	}

	/* ---------------------------------------------- /*
	 * Mega Menu
	/* ---------------------------------------------- */

	NAY.MegaMenu = function() {
		var mDropdown = $(".m-dropdown-toggle") 
		mDropdown.on("click", function() {
	        $(this).parent().toggleClass("open-menu-parent");
	        $(this).next('ul').toggleClass("open-menu");
	        $(this).toggleClass("open");
	    });
	}
	/* ---------------------------------------------- /*
		* accordion
	/* ---------------------------------------------- */
	NAY.Accordion = function() {
		$('.accordion').each(function (i, elem) {
	       	var $elem = $(this),
	           $acpanel = $elem.find(".acco-group > .acco-des"),
	           $acsnav =  $elem.find(".acco-group > .acco-heading");
	          $acpanel.hide().first().slideDown("easeOutExpo");
	          $acsnav.first().parent().addClass("acco-active");
	          $acsnav.on('click', function () {
	            if(!$(this).parent().hasClass("acco-active")){
	              var $this = $(this).next(".acco-des");
	              $acsnav.parent().removeClass("acco-active");
	              $(this).parent().addClass("acco-active");
	              $acpanel.not($this).slideUp("easeInExpo");
	              $(this).next().slideDown("easeOutExpo");
	            }else{
	               $(this).parent().removeClass("acco-active");
	               $(this).next().slideUp("easeInExpo");
	            }
	            return false;
	        });
	    });
	}

	/*--------------------
    * Counter JS
    ----------------------*/
	 NAY.Counter = function () {
	  // eslint-disable-next-line no-undef
	  var counter = jQuery(".counter");
	  var $counter = $('.counter');
	  if(counter.length > 0) {  
	      loadScript(plugin_track + 'counter/jquery.countTo.js', function() {
	        $counter.each(function () {
	         var $elem = $(this);                 
	           $elem.appear(function () {
	             $elem.find('.count').countTo({
	             	speed: 2000,
    				refreshInterval: 10
	             });
	          });                  
	        });
	      });
	    }
	  }


    /*--------------------
    * OwlSlider
    ----------------------*/
   

	/* ---------------------------------------------- /*
     * lightbox gallery
    /* ---------------------------------------------- */
    
     /*--------------------
    * Masonry
    ----------------------*/
    

	/*--------------------
        * Progress Bar 
    ----------------------*/
    NAY.ProgressBar = function(){
        $(".skill-bar .skill-bar-in").each(function () {
          var bottom_object = $(this).offset().top + $(this).outerHeight();
          var bottom_window = $(window).scrollTop() + $(window).height();
          var progressWidth = $(this).attr('aria-valuenow') + '%';
          if(bottom_window > bottom_object) {
            $(this).css({
              width : progressWidth
            });
          }
        });
    }

    /*--------------------
        * particles
    ----------------------*/
    NAY.particles = function() {
      if ($("#particles-box").exists()){
        loadScript(plugin_track + 'particles/particles.min.js', function() {
        });
        loadScript(plugin_track + 'particles/particles-app.js', function() {
        });
      }
    }

    /*--------------------
        * Video Bg
    ----------------------*/
    NAY.VideoBG = function() {
      if ($(".video-bg").exists()){
        loadScript(plugin_track + 'vide/jquery.vide.min.js', function() {
        });
      }
    }

    /*--------------------
        * Type It
    ----------------------*/
    NAY.mTypeIt = function() {
    	if ($("#type-it").exists()){
            loadScript(plugin_track + 'typeit-master/typeit.min.js', function() {
                // eslint-disable-next-line no-undef
                new TypeIt('#type-it', {
		            speed: 200,
		            loop:true,
		            strings: [
		              'Designer',
		              'Developer'
		            ],
		            breakLines: false
		        }); 
            });
        }
    }

	/* ---------------------------------------------- /*
	 * All Functions
	/* ---------------------------------------------- */
    // loadScript
	var _arr  = {};
	function loadScript(scriptName, callback) {
	    if (!_arr[scriptName]) {
	      _arr[scriptName] = true;
	      var body    = document.getElementsByTagName('body')[0];
	      var script    = document.createElement('script');
	      script.type   = 'text/javascript';
	      script.src    = scriptName;
	      // NAYn bind NAY event to NAY callback function
	      // NAYre are several events for cross browser compatibility
	      // script.onreadystatechange = callback;
	      script.onload = callback;
	      // fire NAY loading
	      body.appendChild(script);
	    } else if (callback) {
	      callback();
	    }
	};

	// Window on Load
	$(window).on("load", function(){
		// eslint-disable-next-line no-unused-expressions
		NAY.PreLoad();
	});
	// Document on Ready
	$(document).on("ready", function(){				
    // eslint-disable-next-line no-unused-expressions
    NAY.particles(),
    NAY.VideoBG(),
		NAY.HeaderFixd(),
		NAY.OnePage(),
		NAY.OnePageTop(),
		NAY.Accordion(),
		NAY.Counter(),
		NAY.MenuClose(),
    NAY.MenuTogglerClose(),
		NAY.SearchBox(),
		NAY.HeaderHeight(),
		NAY.MegaMenu(),
		NAY.ProgressBar();
	});

	// Document on Scrool
	$(window).on("scroll", function(){
		// eslint-disable-next-line no-unused-expressions
		NAY.ProgressBar(),
		NAY.HeaderFixd();
	});

	// Window on Resize
	$(window).on("resize", function(){
		NAY.HeaderHeight();
	});


// eslint-disable-next-line no-undef
})(jQuery);