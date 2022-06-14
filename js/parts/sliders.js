const swiper = new Swiper(".mySwiper", {
  // slidesPerView: 6,
  // spaceBetween: 32,
  // loopedSlides: 6,
  // slidesPerView: "auto",
  // centeredSlides: true,
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
  autoplay: true,
  grabCursor: true,
  slidesPerView: "auto",
  centeredSlides: true,
});
