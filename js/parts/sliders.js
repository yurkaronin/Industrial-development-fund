const swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".js-slider-next",
    prevEl: ".js-slider-prev",
  },
  loop: true,
  autoplay: true,
  grabCursor: true,
  autoHeight: true,

  centeredSlides: true,
  breakpoints: {
    // when window width is >= 425px
    425: {
      slidesPerView: 1,
      spaceBetween: 32,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: "auto",
      spaceBetween: 32,
    },

  }
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
  autoplay: true,
  grabCursor: true,
  slidesPerView: "auto",
  centeredSlides: true,
});


swiper2.on('slideChange', function () {
  let btnNext = document.querySelector('.mySwiper2 .button--custom-next');
  let btnPrev = document.querySelector('.mySwiper2 .button--custom-prev');

  btnNext.classList.remove('active');
  btnPrev.classList.remove('active');
  if (window.__slideChangeTimeout)
    clearTimeout(window.__slideChangeTimeout);

    window.__slideChangeTimeout = setTimeout((btnNext)=>{
      btnNext.classList.add('active');
      btnPrev.classList.add('active');

    }, 100, btnNext);

});

const swiper3 = new Swiper(".mySwiper3", {
  navigation: {
    nextEl: ".js-slider-stories .js-slider-next",
    prevEl: ".js-slider-stories .js-slider-prev",
  },
  loop: true,
  autoplay: true,
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
   autoplay: true,
  grabCursor: true,
  autoHeight: true,
  slidesPerView: "auto",
  spaceBetween: 32,
  centeredSlides: true,
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
   autoplay: true,
  grabCursor: true,
  autoHeight: true,
  slidesPerView: "auto",
  spaceBetween: 32,
  centeredSlides: true,
});

swiper5.on('slideChange', function () {
  let btnNext = document.querySelector('.mySwiper5 .button--custom-next');
  // let btnPrev = document.querySelector('.mySwiper5 .button--custom-prev');

  btnNext.classList.remove('active');
  // btnPrev.classList.remove('active');
  if (window.__slideChangeTimeout)
    clearTimeout(window.__slideChangeTimeout);

    window.__slideChangeTimeout = setTimeout((btnNext)=>{
      btnNext.classList.add('active');
      // btnPrev.classList.add('active');

    }, 100, btnNext);

});
