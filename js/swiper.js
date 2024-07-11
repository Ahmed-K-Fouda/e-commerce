'use strict';
// swiper slide
const slideSwiper = new Swiper('.slide_swiper', {
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: 'true',
    clickable: 'true',
  },
  autoplay: {
    delay: 2500,
  },
  loop: true,
});

// sale_slide

const salesSwiper = new Swiper('.sale_sec', {
  autoplay: {
    delay: 2000,
  },
  slidesPerView: 5,
  spaceBetween: 30,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  loop: true,
  breakpoints: {
    1600: {
      slidesPerView: 5,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    700: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    0: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
  },
});

// swiper seconed products

const otherProduct = new Swiper('.product_swip', {
  autoplay: {
    delay: 2000,
  },
  slidesPerView: 4,
  spaceBetween: 30,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  loop: true,
  breakpoints: {
    1500: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    900: {
      spaceBetween: 2,
    },
    700: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    0: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
  },
});
