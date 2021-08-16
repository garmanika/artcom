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
    })
});