$(function() {
    // $(".menu-btn").on("click", function() {
    //     $(".header-bottom").fadeToggle();
    //     $(".menu-btn").toggleClass("open-menu");
    //     $(".header-wrapper").toggleClass("open-menu");
    //     $("body").toggleClass("noscroll");
    // });
    $('.header-icons-search').on('click', function() {
        $(this).toggleClass('open-search');
        $('.panel-search').slideToggle();
    });

    $(".masked-phone").inputmask({
        mask: "+7 (999) 999-99-99",
        clearIncomplete: true,
        showMaskOnHover: false,
    });
    const swiper = new Swiper('.swiper-container', {
        // Default parameters
        //slidesPerView: 2,
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },

        breakpoints: {
            // when window width is >= 320px
            319: {
                slidesPerView: 1,
                spaceBetween: 0,

            },
            768: {
                slidesPerView: 2,
            }
        }
    })
});