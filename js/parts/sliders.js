const swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".js-slider-next",
    prevEl: ".js-slider-prew",
  },
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 425px
    425: {
      slidesPerView: 1,
      spaceBetween: 16
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
      spaceBetween: 16
    },
    // when window width is >= 1024px
    1024: {
      slidesPerView: 3,
      spaceBetween: 32
    },
    // when window width is >= 1440px
    1440: {
      slidesPerView: 6,
      spaceBetween: 32
    }
  },
  loop: true,
  // autoplay: true,
  grabCursor: true,
  slidesPerView: "auto",
  centeredSlides: true,
});


const swiper2 = new Swiper(".mySwiper2", {
  /* navigation: {
    nextEl: ".mySwiper2 .js-slider-next",
    prevEl: ".mySwiper2 .js-slider-prew",
  }, */
  centeredSlides: true,
  // Responsive breakpoints
  // breakpoints: {
    // when window width is >= 425px
    // 425: {
    //   slidesPerView: 1,
    //   spaceBetween: 0
    // },
    // when window width is >= 768px
    // 768: {
    //   slidesPerView: 1,
    //   spaceBetween: 0
    // },
    // when window width is >= 1024px
    // 1024: {
    //   slidesPerView: 2,
    //   spaceBetween: 0
    // },
    // when window width is >= 1440px
    // 1440: {
    //   slidesPerView: 3,
    //   spaceBetween: 0
    // }
  // },
  loop: true,
  // autoplay: true,
  grabCursor: true,
  slidesPerView: "auto",
  centeredSlides: true,
});

const swiper3 = new Swiper(".mySwiper3", {
 navigation: {
    nextEl: ".js-slider-stories .js-slider-next",
    prevEl: ".js-slider-stories .js-slider-prew",
  },
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 425px
    425: {
      slidesPerView: 1,
      spaceBetween: 0
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
      spaceBetween: 0
    },
    // when window width is >= 1024px
    1024: {
      slidesPerView: 3,
      spaceBetween: 0
    },
    // when window width is >= 1440px
    1440: {
      slidesPerView: 4,
      spaceBetween: 0
    }
  },
  loop: true,
  // autoplay: true,
  grabCursor: true,
  slidesPerView: "auto",
  centeredSlides: true,
});
