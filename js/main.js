/*-------------------------------------------------------------------------
    
    Theme Name: ALEX: One Page Minimal Bootstrap Portfolio HTML Template
    Auther: SynchroTheme
    Author URI: http://synchrotheme.com
    Version: 1.0

  ------------------------------------------------------------------------- */
  
(function ($) {
	"use strict";

    jQuery(document).ready(function($){
      
    /*
     * ----------------------------------------------------------------------------------------
     *  STICKY MENU
     * ----------------------------------------------------------------------------------------
     */
        function stickyMenu(){
            $(window).on('scroll', function(){
                var x = $(this).scrollTop();

                if(x > 100){
                    $('.main_nav').addClass('isActive');
                }else{
                    $('.main_nav').removeClass('isActive');
                }
            });
        }
        stickyMenu();

    /*
     * ----------------------------------------------------------------------------------------
     *  SMOOTH SCORLL
     * ----------------------------------------------------------------------------------------
     */
        $('a[href*="#"]:not([href="#"]):not([data-toggle])').on('click',function() {
            if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
              var target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
              if (target.length) {
                $('html, body').animate({
                  scrollTop: target.offset().top - 50
                }, 1000);
                return false;
              }
            }
        });
    /*
     * ----------------------------------------------------------------------------------------
     *  SCROLL SPY
     * ----------------------------------------------------------------------------------------
     */
        $('body').scrollspy({ target: '.navbar-ex1-collapse' });

    });


    jQuery(window).load(function(){
        $('.preloader').fadeOut(200);        
    });


}(jQuery));	