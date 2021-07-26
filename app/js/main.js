$(function() {
    $(".menu-btn").on("click", function() {
        $(".header-bottom").fadeToggle();
        $(".menu-btn").toggleClass("open-menu");
        $(".header-wrapper").toggleClass("open-menu");
        $("body").toggleClass("noscroll");
    });
    $(".masked-phone").inputmask({
        mask: "+7 (999) 999-99-99",
        clearIncomplete: true,
        showMaskOnHover: false,
    });
});