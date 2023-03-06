import { Swiper } from "swiper/bundle";
import {auto} from "@popperjs/core";


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


//На главной странице

const swiperMainTop = new Swiper('.swiper-main-page-top', {
  spaceBetween: 30,
  grabCursor: true,
  slidesPerView: "auto",
  centeredSlides: true,
loop: true,
  autoplay: {
    delay: 5000,
  },

});

const swiperMainAuction = new Swiper('.swiper-main-page-auction', {
  spaceBetween: 30,
  grabCursor: true,
  slidesPerView: 4,
  loop: true,
  /*autoplay: {
    delay: 5000,
  },*/
  navigation: {
    nextEl: ".swiper-main-page-auction-button-next",
    prevEl: ".swiper-main-page-auction-button-prev",
  },
});
