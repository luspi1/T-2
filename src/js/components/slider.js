import { Swiper } from "swiper/bundle";


// Инициализация слайдеров

const swiperObjectDoc = new Swiper('.object-doc-swiper', {
  navigation: {
    nextEl: '.object-doc-swiper__swiper-button-next',
    prevEl: '.object-doc-swiper__swiper-button-prev'
  },

  noSwiping: true,
  noSwipingClass: 'swiper-no-swiping',

  spaceBetween: 30,
  slidesPerView: 1,
  breakpoints: {
    550: {
      spaceBetween: 10,
      slidesPerView: 2,
    },

    768: {
      spaceBetween: 10,
      slidesPerView: 4,
    },
    1024: {
      spaceBetween: 10,
      slidesPerView: 6,
    }
  }
});

const swiperObjectPic = new Swiper('.object-pic-swiper', {
  navigation: {
    nextEl: '.object-pic-swiper__swiper-button-next',
    prevEl: '.object-pic-swiper__swiper-button-prev'
  },

  noSwiping: true,
  noSwipingClass: 'swiper-no-swiping',

  spaceBetween: 10,
  slidesPerView: 1,
  breakpoints: {

    550: {
      spaceBetween: 10,
      slidesPerView: 2,
    },

    768: {
      spaceBetween: 10,
      slidesPerView: 4,
    },
    1024: {
      spaceBetween: 10,
      slidesPerView: 6,
    }
  }
});

