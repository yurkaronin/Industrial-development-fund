const swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".js-slider-next",
    prevEl: ".js-slider-prew",
  },
  loop: true,
  // autoplay: true,
  grabCursor: true,
  slidesPerView: "auto",
  spaceBetween: 32,
  centeredSlides: true,
});


const swiper2 = new Swiper(".mySwiper2", {
  /* navigation: {
    nextEl: ".mySwiper2 .js-slider-next",
    prevEl: ".mySwiper2 .js-slider-prew",
  }, */
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
    prevEl: ".js-slider-stories .js-slider-prew",
  },
  loop: true,
  // autoplay: true,
  grabCursor: true,
  slidesPerView: "auto",
  spaceBetween: 32,
  centeredSlides: true,
});
