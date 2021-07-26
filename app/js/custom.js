function mobileSearchTrigger() {

    $('.mobile-search-trigger').on('click', function(e) {
        e.preventDefault();
        $('.header-search-form').fadeIn();
    });
    $('.mobile-search-close').on('click', function(e) {
        e.preventDefault();
        $('.header-search-form').fadeOut();
    });

}

function headerState() {



    $(window).scroll(function() {
        if ($(window).scrollTop() >= $('.header-navigation-middle').offset().top + 1) {
            $('.header-main-wrapper').addClass('sticky');
        } else {
            $('.header-main-wrapper').removeClass('sticky');
        }
    });

}

function menuToggle() {

    $('.mobile-navigation-trigger').on('click', function() {
        $(this).toggleClass('active');
        $('body').toggleClass('hide-overflow-mobile');
        if ($(this).hasClass('active')) {
            $('.header-main-wrapper').addClass('sticky');
        } else {
            $(window).scroll();
        }
        $('.mobile-navigation-wrapper').toggleClass('active');
        $('.header-sub-menu-position').removeClass('mobile-navigation-sub-position');
    });

    $('#mobile-navigation .is-parent > a').on('click', function(e) {
        e.preventDefault();
        var subMenu = $(this).next('.mobile-navigation-sub-position');
        subMenu.addClass('sub-opened');
    });

    $('.mobile-navigation-sub-menu-heading > a').on('click', function(e) {
        e.preventDefault();
        var subMenu = $(this).closest('.mobile-navigation-sub-position');
        subMenu.removeClass('sub-opened');
    });

    $(document).on('click', function(event) {

        if (!$(event.target).closest('#mobile-navigation .is-parent').length) {
            $('.mobile-navigation-sub-position').removeClass('sub-opened');
        }

    });

    $('.catalog-navigation-mobile-trigger').on('click', function(e) {
        e.preventDefault();
        $('.catalog-navigation-mobile-trigger').toggleClass('active');
        $('.catalog-navigation-mobile-menu').toggleClass('active');
    });

    $('.personal-sub-trigger').on('click', function(e) {
        e.preventDefault();
        $(this).toggleClass('active');
        $('.header-personal-sub').slideToggle(250);
    });

}

function indexThemes() {
    if ($('.index-catalog-theme-position:hidden').length <= 3) { //placeholder elements count
        $('.index-show-more-themes').parent().hide();
    }
    $('.index-show-more-themes').on('click', function(e) {
        e.preventDefault();
        $('.index-catalog-theme-position:hidden').fadeIn();
        $(this).parent().hide();
    });
}

function pageContentMenu() {
    if ($('.page-content-menu a:hidden').length > 1) {
        $('.page-content-menu-more').fadeIn();
    }
    $('.page-content-menu-more').on('click', function(e) {
        e.preventDefault();
        $('.page-content-menu a:hidden').fadeIn();
        $(this).hide();
    });
}

function indexAbout() {
    $('.index-company-text-show').on('click', function(e) {
        e.preventDefault();
        $('.index-company-text :hidden').fadeIn();
        $(this).fadeOut();
    });
}

function faqToggle() {
    $('.faq-question-item').on('click', function(e) {
        e.preventDefault();
        $(this).toggleClass('active');
        $('.answer', this).slideToggle();
    })
}

function personalAccountsTrigger() {
    $('.personal-accounts-trigger').on('click', function(e) {
        e.preventDefault();
        $(this).toggleClass('active');
        $('.personal-accounts').slideToggle();
    })
}

function checkConfirm() {

    $('.privacy-check').each(function() {
        var _form = $(this).closest('form');
        if ($('input[type="submit"]', _form).length) {
            var submitText = '«' + $('input[type="submit"]', _form).val() + '»';
        } else if ($('button[type="submit"]', _form).length) {
            var submitText = '«' + $('button[type="submit"]', _form).text() + '»';
        } else {
            console.log("Кнопка не найдена!");
        }

        if (!$('.privacy-submit-text', _form).text()) {
            $('.privacy-submit-text', _form).text(submitText);
        }
        if ($(this).prop("checked")) {
            $('input[type="submit"], button[type="submit"]', _form).prop("disabled", false);
            $('input[type="submit"], button[type="submit"]', _form).css({
                'opacity': '1.0',
            });
        } else {
            $('input[type="submit"], button[type="submit"]', _form).prop("disabled", true);
            $('input[type="submit"], button[type="submit"]', _form).css({
                'opacity': '0.35',
                'transition': '0.3s all'
            });
        }
    });

    $('.privacy-check').on('click', function() {
        var _form = $(this).closest('form');
        if ($(this).prop("checked")) {
            $('input[type="submit"], button[type="submit"]', _form).prop("disabled", false);
            $('input[type="submit"], button[type="submit"]', _form).css({
                'opacity': '1.0',
            });
        } else {
            $('input[type="submit"], button[type="submit"]', _form).prop("disabled", true);
            $('input[type="submit"], button[type="submit"]', _form).css({
                'opacity': '0.35',
                'transition': '0.3s all'
            });
        }
    });

}



function smartFilterCustoms() {
    $('.filter-row-trigger').on('click', function(e) {
        e.preventDefault();
        var _filterRow = $(this).closest('.filter-row');
        $('.filter-row-fields', _filterRow).slideToggle();
        _filterRow.toggleClass('active');
    });
    $('.mobile-filter-trigger').on('click', function(e) {
        e.preventDefault();
        $('#catalog-section-filter').fadeIn();
        $('body').addClass('hide-overflow-mobile');
    });
    $('.catalog-filter-close').on('click', function(e) {
        e.preventDefault();
        $('#catalog-section-filter').fadeOut();
        $('body').removeClass('hide-overflow-mobile');
    });
}

function orderDetailCustoms() {
    $('a.order-detail-item-heading').on('click', function(e) {
        e.preventDefault();
        $(this).toggleClass('active');
        $(this).next().slideToggle();
    });
}

$(document).ready(function() {

    mobileSearchTrigger();
    headerState();
    menuToggle();
    indexThemes();
    indexAbout();
    checkConfirm();
    pageContentMenu();
    faqToggle();
    smartFilterCustoms();
    personalAccountsTrigger();
    orderDetailCustoms();

    var _mainOwl = $('.index-banner:not(".buisness-banner")');
    $('.index-banner-nav > button').on('mouseenter', function() {
        _mainOwl.trigger('stop.owl.autoplay');
    });
    $('.index-banner-nav > button').on('mouseleave', function() {
        _mainOwl.trigger('play.owl.autoplay', [4000]);
    });
    _mainOwl.on('translate.owl.carousel', function(event) {
        var _currentItem = $('.owl-item', _mainOwl).eq(event.item.index);
        $('.index-banner-text', _currentItem).hide();
    });
    _mainOwl.on('translated.owl.carousel', function(event) {
        var _currentItem = $('.owl-item', _mainOwl).eq(event.item.index);
        $('.index-banner-text', _currentItem).fadeIn();
    })

    var _indexCatalogBanner = $('.index-catalog-banner');

});