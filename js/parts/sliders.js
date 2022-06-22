const swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".slider--partners .js-slider-next",
    prevEl: ".slider--partners .js-slider-prev",
  },
  loop: true,
    // autoplay: true,
  grabCursor: true,
  autoHeight: true,
  slidesPerView: "auto",
});

// Слайдер на главной странице (первый экран)
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

swiper2.on('slideChange', function () {
  let btnNext = document.querySelector('.mySwiper2 .button--custom-next');

  btnNext.classList.remove('active');
  if (this.__slideChangeTimeout)
    clearTimeout(this.__slideChangeTimeout);

  this.__slideChangeTimeout = setTimeout((btnNext) => {
    btnNext.classList.add('active');

  }, 100, btnNext);

});

// истории успеха
const swiper3 = new Swiper(".mySwiper3", {
  navigation: {
    nextEl: ".js-slider-stories .js-slider-next",
    prevEl: ".js-slider-stories .js-slider-prev",
  },
  loop: true,
    // autoplay: true,
  grabCursor: true,
  slidesPerView: "auto",
  // spaceBetween: 32,
  // centeredSlides: true,
});


// новости
const swiper4 = new Swiper(".mySwiper4", {
  navigation: {
    nextEl: ".js-slider-news .js-slider-next",
    prevEl: ".js-slider-news .js-slider-prev",
  },
  loop: true,
    // autoplay: true,
  grabCursor: true,
  autoHeight: true,
  slidesPerView: "auto",
  // spaceBetween: 32,
  // centeredSlides: true,
});


// синий слайдер
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
    // autoplay: true,
  grabCursor: true,
  autoHeight: true,
  slidesPerView: "auto",
  spaceBetween: 32,
  centeredSlides: true,
});

swiper5.on('slideChange', function () {
  let btnNext = document.querySelector('.mySwiper5 .button--custom-next');

  btnNext.classList.remove('active');
  if (this.__slideChangeTimeout2)
    clearTimeout(this.__slideChangeTimeout2);

  this.__slideChangeTimeout2 = setTimeout((btnNext) => {
    btnNext.classList.add('active');

  }, 100, btnNext);

});
