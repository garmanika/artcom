
$(function () {
  $('.select-check').each(function() {
    if ($(this).val() !== "") {
        $(this).addClass('select-change');
    }
  });
  $('.tabs-link-item').click(function() {
    let id = $(this).attr('data-tab'),
        content = $('.tab-content[data-tab="' + id + '"]');
    $('.tabs-link-item.active').removeClass('active');
    $(this).addClass('active');
    $('.tab-content.active').removeClass('active');
    content.addClass('active');
});


  const da = new DynamicAdapt("max");
  da.init();
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
  $("select").change(function () {
    $(this).addClass("select-change");
  });
  $(".direction-catalog-content-aside-control").on("click", function () {
    $(".direction-catalog-content-aside").slideToggle();
    $(this).toggleClass("open");
  });
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
    $(window).scroll(function () {
      if ($(this).scrollTop() > 0) {
        $(".header").addClass("header-shadow");
      } else {
        $(".header").removeClass("header-shadow");
      }
    });
    function resizeScreen() {
      if (window.innerWidth <= 1199) {
        $(".header-desktop-menu .is-parent > a").on("click", function (e) {
          e.preventDefault();
          var subMenu = $(this).next(".mobile-navigation-sub-position");
          subMenu.addClass("sub-opened");
        });
      } else {
      }
    }
    resizeScreen();
    window.addEventListener("resize", resizeScreen);

		$(".direction-catalog-content-aside-item-head").on("click", function (event) {
			$(this)
				.closest(".direction-catalog-content-aside-item")
				.toggleClass("open");
			// $(this)
				// .closest(".direction-catalog-content-aside-item")
				// .find(".direction-catalog-content-aside-item-content")
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

  const swiper6 = new Swiper(".product-card-watched-cards", {
    slidesPerView: 3,




    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      991: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });
  const swiper5 = new Swiper(".product-cards-slider", {
    slidesPerView: 3,




    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      991: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });
  const swiper4 = new Swiper(".project-slider", {
    slidesPerView: 3,

    pagination: {
      el: ".project-slider-pagination",
      type: "bullets",
      clickable: true,
    },
    navigation: {
      nextEl: ".project-slider-next",
      prevEl: ".project-slider-prev",
    },

    breakpoints: {
      319: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });

  const swiper3 = new Swiper(".partners-feedback", {
    slidesPerGroup: 1,
    autoHeight: true,
    pagination: {
      el: ".partners-feedback-pagination",
      type: "bullets",
      clickable: true,
    },
    navigation: {
      nextEl: ".partners-feedback-next",
      prevEl: ".partners-feedback-prev",
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
  //count
  function decreaseValue(current) {
    var value = parseInt(current.val());
    if (value === 0 || value < 0) {
      value = 1;
      current.val(value);
    }
    if (value > 1) {
      value--;
      current.val(value);
    }
  }

  function increaseValue(current) {
    var value = parseInt(current.val());
    value++;
    current.val(value);
  }

  $(".decrease").on("click", function (event) {
    let current = $(this).closest(".goods-calc").find(".number");
    decreaseValue(current);
  });

  $(".increase").on("click", function (event) {
    let current = $(this).closest(".goods-calc").find(".number");
    increaseValue(current);
  });
  //End count

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

});
