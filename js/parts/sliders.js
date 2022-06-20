const swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".js-slider-next",
    prevEl: ".js-slider-prev",
  },
  loop: true,
  // autoplay: true,
  grabCursor: true,
  autoHeight: true,

  centeredSlides: true,
  breakpoints: {
    // when window width is >= 750px
    425: {
      slidesPerView: 1,
      spaceBetween: 32,
    },
    768: {
      slidesPerView: "auto",
      spaceBetween: 32,
    },

  }
});


const swiper2 = new Swiper(".mySwiper2", {
  navigation: {
    nextEl: ".mySwiper2 .js-slider-next",
    prevEl: ".mySwiper2 .js-slider-prev",
  },
  pagination: {
    el: ".mySwiper2 .swiper-pagination",
    clickable: true,
  },
  autoHeight: true,
  centeredSlides: true,
  loop: true,
  // autoplay: true,
  grabCursor: true,
  slidesPerView: "auto",
  centeredSlides: true,
});

const swiper3 = new Swiper(".mySwiper3", {
  navigation: {
    nextEl: ".js-slider-stories .js-slider-next",
    prevEl: ".js-slider-stories .js-slider-prev",
  },
  loop: true,
  // autoplay: true,
  grabCursor: true,
  slidesPerView: "auto",
  spaceBetween: 32,
  centeredSlides: true,
});

const swiper4 = new Swiper(".mySwiper4", {
  navigation: {
    nextEl: ".js-slider-news .js-slider-next",
    prevEl: ".js-slider-news .js-slider-prev",
  },
  loop: true,
  //  autoplay: true,
  grabCursor: true,
  autoHeight: true,
  slidesPerView: "auto",
  spaceBetween: 32,
  centeredSlides: true,
});

const swiper5 = new Swiper(".mySwiper5", {
  navigation: {
    nextEl: ".js-slider-promo .js-slider-next",
    prevEl: ".js-slider-promo .js-slider-prev",
  },
  pagination: {
    el: ".js-slider-promo .swiper-pagination",
    type: "fraction",
  },
  loop: true,
  //  autoplay: true,
  grabCursor: true,
  autoHeight: true,
  slidesPerView: "auto",
  spaceBetween: 32,
  centeredSlides: true,
});
