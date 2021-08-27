$(function () {
  
  function mobileSearchTrigger() {
    $(".mobile-search-trigger").on("click", function (e) {
      e.preventDefault();
      $(".header-search-form").fadeIn();
    });
    $(".mobile-search-close").on("click", function (e) {
      e.preventDefault();
      $(".header-search-form").fadeOut();
    });
  }

  function menuToggle() {
    $(".mobile-navigation-trigger").on("click", function () {
      if (
        $(".header-icons-search").hasClass("open-search") &&
        !$(".mobile-navigation-trigger ").hasClass("active")
      ) {
        $(".panel-search").slideUp();
        $(".header-icons-search").removeClass("open-search");
      }

      $(this).toggleClass("active");
      $("body").toggleClass("hide-overflow-mobile");
      $("ul.header-desktop-menu").slideToggle();
      $(".header-desktop-menu").toggleClass("active");
      $(".header-sub-menu-position").removeClass(
        "mobile-navigation-sub-position"
      );
    });

    $(".header-desktop-menu .is-parent > a").on("click", function (e) {
      e.preventDefault();
      var subMenu = $(this).next(".mobile-navigation-sub-position");
      subMenu.addClass("sub-opened");
    });

    $(".header-desktop-sub-menu-heading").on("click", function (e) {
      e.preventDefault();
      var subMenu = $(this).closest(".mobile-navigation-sub-position");
      subMenu.removeClass("sub-opened");
    });

    $(document).on("click", function (event) {
      if (!$(event.target).closest(".header-desktop-menu .is-parent").length) {
        $(".mobile-navigation-sub-position").removeClass("sub-opened");
      }
    });
  }

  $(".header-icons-search").on("click", function () {
    if (
      !$(".header-icons-search").hasClass("open-search") &&
      $(".mobile-navigation-trigger").hasClass("active")
    ) {
      $("ul.header-desktop-menu").slideUp();
      $(".mobile-navigation-trigger").removeClass("active");
      $("body").removeClass("hide-overflow-mobile");
    }
    $(this).toggleClass("open-search");
    $(".panel-search").slideToggle();
  });

  $(".masked-phone").inputmask({
    mask: "+7 (999) 999-99-99",
    clearIncomplete: true,
    showMaskOnHover: false,
  });
  const swiper3 = new Swiper(".partners-feedback", {
    slidesPerGroup: 1,

    pagination: {
      el: ".partners-feedback-pagination",
      type: "bullets",
      clickable: true,
    },
    navigation: {
      nextEl: '.partners-feedback-next',
      prevEl: '.partners-feedback-prev',
    },

    breakpoints: {
      319: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
    },
  });
  const swiper2 = new Swiper(".slider", {
    slidesPerGroup: 1,
    
    pagination: {
      el: ".slider-pagination",
      type: "bullets",
      clickable: true,
    },
    breakpoints: {
      319: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      575: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });
  const swiper = new Swiper(".banner-slider", {
    slidesPerGroup: 1,
    
    pagination: {
      el: ".banner-slider-pagination",
      type: "bullets",
      clickable: true,
    },


    breakpoints: {
      319: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
    },
  });

  mobileSearchTrigger();

  menuToggle();
  const slider = document.getElementById("sliderPrice");
  const rangeMin = parseInt(slider.dataset.min);
  const rangeMax = parseInt(slider.dataset.max);
  const step = parseInt(slider.dataset.step);
  const filterInputs = document.querySelectorAll("input.filter-input");

  noUiSlider.create(slider, {
    start: [rangeMin, rangeMax],
    connect: true,
    step: step,
    range: {
      min: rangeMin,
      max: rangeMax,
    },

    // make numbers whole
    format: {
      to: (value) => value,
      from: (value) => value,
    },
  });

  // bind inputs with noUiSlider
  slider.noUiSlider.on("update", (values, handle) => {
    filterInputs[handle].value = values[handle];
  });

  filterInputs.forEach((input, indexInput) => {
    input.addEventListener("change", () => {
      slider.noUiSlider.setHandle(indexInput, input.value);
    });
  });
  $(".direction-catalog-content-aside-item-head").on("click", function (event) {
		$(this).closest('.direction-catalog-content-aside-item').toggleClass("open");
    $(this).closest('.direction-catalog-content-aside-item').find('.direction-catalog-content-aside-item-content').toggle();
	});

});
