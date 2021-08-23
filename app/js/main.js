$(function () {

    
    function mobileSearchTrigger() {

        $('.mobile-search-trigger').on('click', function (e) {
            e.preventDefault();
            $('.header-search-form').fadeIn();
        });
        $('.mobile-search-close').on('click', function (e) {
            e.preventDefault();
            $('.header-search-form').fadeOut();
        });

    }



    function menuToggle() {

        $('.mobile-navigation-trigger').on('click', function () {
            if ($('.header-icons-search').hasClass('open-search') && !$('.mobile-navigation-trigger ').hasClass('active')) {
                $('.panel-search').slideUp();
                $('.header-icons-search').removeClass('open-search');
            }

            $(this).toggleClass('active');
            $('body').toggleClass('hide-overflow-mobile');
            $('ul.header-desktop-menu').slideToggle();
            $('.header-desktop-menu').toggleClass('active');
            $('.header-sub-menu-position').removeClass('mobile-navigation-sub-position');
        });

        $('.header-desktop-menu .is-parent > a').on('click', function (e) {
            e.preventDefault();
            var subMenu = $(this).next('.mobile-navigation-sub-position');
            subMenu.addClass('sub-opened');
        });

        $('.header-desktop-sub-menu-heading').on('click', function (e) {
            e.preventDefault();
            var subMenu = $(this).closest('.mobile-navigation-sub-position');
            subMenu.removeClass('sub-opened');
        });

        $(document).on('click', function (event) {
            if (!$(event.target).closest('.header-desktop-menu .is-parent').length) {
                $('.mobile-navigation-sub-position').removeClass('sub-opened');
            }

        });
    }

    $('.header-icons-search').on('click', function () {
        if (!$('.header-icons-search').hasClass('open-search') && $('.mobile-navigation-trigger').hasClass('active')) {
            $('ul.header-desktop-menu').slideUp();
            $('.mobile-navigation-trigger').removeClass('active');
            $('body').removeClass('hide-overflow-mobile');
        }
        $(this).toggleClass('open-search');
        $('.panel-search').slideToggle();

    });

    $(".masked-phone").inputmask({
        mask: "+7 (999) 999-99-99",
        clearIncomplete: true,
        showMaskOnHover: false,
    });
    const swiper2 = new Swiper('.slider', {
        slidesPerGroup: 1,
        pagination: {
            el: '.slider-pagination',
            type: 'bullets',
        },
        breakpoints: {

            319: {
                slidesPerView: 1,
                spaceBetween: 0,

            },
            575: {
                slidesPerView: 3,
                spaceBetween: 30,
            }
        }
    });
    const swiper = new Swiper('.banner-slider', {
        slidesPerGroup: 1,
        pagination: {
            el: '.banner-slider-pagination',
            type: 'bullets',
        },

        breakpoints: {

            319: {
                slidesPerView: 1,
                spaceBetween: 0,

            },
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
            }
        }
    });


    mobileSearchTrigger();

    menuToggle();
});