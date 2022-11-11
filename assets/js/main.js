; (function ($) {
    "use strict";

    $(document).ready(function () {

        /**-----------------------------
         *  Navbar fix
         * ---------------------------*/
        $(document).on('click', '.navbar-area .navbar-nav li.menu-item-has-children>a', function (e) {
            e.preventDefault();
        })
       
        /*-------------------------------------
            menu
        -------------------------------------*/
        $('.navbar-area .menu').on('click', function() {
            $(this).toggleClass('open');
            $('.navbar-area .navbar-collapse').toggleClass('sopen');
        });
    
        // mobile menu
        if ($(window).width() < 992) {
            $(".in-mobile").clone().appendTo(".sidebar-inner");
            $(".in-mobile ul li.menu-item-has-children").append('<i class="fas fa-chevron-right"></i>');
            $('<i class="fas fa-chevron-right"></i>').insertAfter("");

            $(".menu-item-has-children a").on('click', function(e) {
                // e.preventDefault();

                $(this).siblings('.sub-menu').animate({
                    height: "toggle"
                }, 300);
            });
        }

        var menutoggle = $('.menu-toggle');
        var mainmenu = $('.navbar-nav');
        
        menutoggle.on('click', function() {
            if (menutoggle.hasClass('is-active')) {
                mainmenu.removeClass('menu-open');
            } else {
                mainmenu.addClass('menu-open');
            }
        });

        /* -------------------------------------------------
            sidebar 
        ------------------------------------------------- */
        if ($('.menu-bar').length){
            $(".menu-bar").on('click', function(){
                $(".ba-navbar").toggleClass("ba-navbar-show", "linear");
            });
            $('body').on('click', function(event) {
                if (!$(event.target).closest('.menu-bar').length && !$(event.target).closest('.ba-navbar').length) {
                    $('.ba-navbar').removeClass('ba-navbar-show');
                }
            });
            $(".menu-close").on('click', function(){
                $(".ba-navbar").toggleClass("ba-navbar-show", "linear");
            });
        }

        /*--------------------------------------------------
            select onput
        ---------------------------------------------------*/
        if ($('.single-select').length){
            $('.single-select').niceSelect();
        }

        /*-------------------------------------------------
           parallax
        --------------------------------------------------*/
        if ($.fn.jarallax) {
            $('.jarallax').jarallax({
                speed: 0.5
            });
        }

        /* --------------------------------------------------
            isotop filter 
        ---------------------------------------------------- */
        var $Container = $('.isotop-filter-area');
        if ($Container.length > 0) {
            $('.property-filter-area').imagesLoaded(function () {
                var festivarMasonry = $Container.isotope({
                    itemSelector: '.project-filter-item', // use a separate class for itemSelector, other than .col-
                    masonry: {
                        gutter: 0
                    }
                });
                $(document).on('click', '.isotop-filter-menu > button', function () {
                    var filterValue = $(this).attr('data-filter');
                    festivarMasonry.isotope({
                        filter: filterValue
                    });
                });
            });
            $(document).on('click','.isotop-filter-menu > button' , function () {
                $(this).siblings().removeClass('active');
                $(this).addClass('active');
            });
        }

        /*--------------------------------------------------------
            magnific popup 
        --------------------------------------------------------*/
        $('.video-play-btn').magnificPopup({
            type: 'video',
            removalDelay: 260,
            mainClass: 'mfp-zoom-in',
        });

        /* -----------------------------------------------------
            Variables
        ----------------------------------------------------- */
        var leftUp = '<i class="la la-angle-up"></i>';
        var rightDown = '<i class="la la-angle-down"></i>';
        var leftAngle = '<i class="fa fa-angle-left"></i>';
        var rightAngle = '<i class="fa fa-angle-right"></i>';
        var leftArrow = '<i class="fa fa-caret-left"></i>';
        var rightArrow = '<i class="fa fa-caret-right"></i>';

        /************ banner-slider-1 ***********/
        $('.banner-slider-1').on('initialized.owl.carousel changed.owl.carousel', function(e) {
            if (!e.namespace)  {
              return;
            }
            var carousel = e.relatedTarget;
            $('.slider-counter').text(carousel.relative(carousel.current()) + 1 + '/' + carousel.items().length);
        }).owlCarousel({
            loop: true,
            nav: true,
            dots: false,
            smartSpeed:1500,
            items: 1,
            autoplay:false,
            navText: [ leftUp, rightDown],
        });

        /************ banner-slider-2 ***********/
        $('.banner-slider-2').on('initialized.owl.carousel changed.owl.carousel', function(e) {
            if (!e.namespace)  {
              return;
            }
            var carousel = e.relatedTarget;
            $('.slider-counter').text(carousel.relative(carousel.current()) + 1 + '/' + carousel.items().length);
        }).owlCarousel({
            loop: true,
            nav: true,
            dots: false,
            smartSpeed:1500,
            items: 1,
            autoplay:false,
            navText: [ leftAngle, rightAngle],
        });

        /*------------------------------------------------
            coffee-area-slider
        ------------------------------------------------*/
        $('.coffee-area-slider').owlCarousel({
            loop: true,
            nav: true,
            dots: false,
            smartSpeed:1500,
            center: true,
            items: 3,
            navText: [ leftArrow, rightArrow],
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 2
                },
                768: {
                    items: 3
                },
            }
        });

        /*------------------------------------------------
            customer-slider
        ------------------------------------------------*/
        $('.customer-slider').owlCarousel({
            loop: true,
            nav: true,
            dots: false,
            smartSpeed:1500,
            items: 1,
            navText: [ leftAngle, rightAngle],
        });


        /*------------------------------------------------
            client-slider
        ------------------------------------------------*/
        $('.client-slider-thumb').slick({
          slidesToShow: 5,
          slidesToScroll: 1,
          asNavFor: '.client-slider-content',
          dots: true,
          autoplay: true,
          autoplaySpeed: 2000,
          centerMode: true,
          centerPadding: '0',
          responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            }
        ]
        });
        $('.client-slider-content').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          autoplay: true,
          autoplaySpeed: 2000,
          fade: true,
          asNavFor: '.client-slider-thumb'
        });

        /*-----------------------------------------
           scroll down
        -----------------------------------------*/
        if($("body").hasClass("intrective")){
            $(".scroll-down-btn").on("click", function (event) {
                event.preventDefault();
                $("html,body").animate({
                    scrollTop: $(this.hash).offset().top}, 1500);
            });

            }else {

            $(".scroll-down-btn").on("click", function (event) {
                event.preventDefault();
                $("html,body").animate({
                    scrollTop: $(this.hash).offset().top - 90}, 1500);
            });
        }

        /*----------------------
            Search Popup
        -----------------------*/
        var bodyOvrelay = $('#body-overlay');
        var searchPopup = $('#search-popup');
        var sidebarMenu = $('#sidebar-menu');

        $(document).on('click', '#body-overlay', function (e) {
            e.preventDefault();
            bodyOvrelay.removeClass('active');
            searchPopup.removeClass('active');
            sidebarMenu.removeClass('active');
        });
        $(document).on('click', '#search', function (e) {
            e.preventDefault();
            searchPopup.addClass('active');
            bodyOvrelay.addClass('active');
        });

        /*-----------------------------------------
           back to top
        -----------------------------------------*/
        $(document).on('click', '.back-to-top', function () {
            $("html,body").animate({
                scrollTop: 0
            }, 2000);
        });

    });

    $(window).on("scroll", function() {
        /*---------------------------------------
        sticky menu activation && Sticky Icon Bar
        -----------------------------------------*/
        var mainMenuTop = $(".navbar-area");
        if ($(window).scrollTop() >= 1) {
            mainMenuTop.addClass('navbar-area-fixed');
        }
        else {
            mainMenuTop.removeClass('navbar-area-fixed');
        }
        
        var ScrollTop = $('.back-to-top');
        if ($(window).scrollTop() > 1000) {
            ScrollTop.fadeIn(1000);
        } else {
            ScrollTop.fadeOut(1000);
        }
    });


    $(window).on('load', function () {

        /*-----------------
            preloader
        ------------------*/
        var preLoder = $("#preloader");
        preLoder.fadeOut(0);

        /*-----------------
            back to top
        ------------------*/
        var backtoTop = $('.back-to-top')
        backtoTop.fadeOut();

        /*---------------------
            Cancel Preloader
        ----------------------*/
        $(document).on('click', '.cancel-preloader a', function (e) {
            e.preventDefault();
            $("#preloader").fadeOut(2000);
        });

    });



})(jQuery);