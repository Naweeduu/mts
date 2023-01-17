
const swiper = new Swiper(".mySwiper", {
  // effect: "fade",
  // loop: true,
  // slidesPerView: 1,
  slidesPerView: 1,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

});

const swiper_2 = new Swiper(".mySwiper2", {
  pagination: {
    el: ".swiper-pagination2",
    clickable: true,
  },
});

const swiper_3 = new Swiper(".mySwiper3", {
  pagination: {
    el: ".swiper-pagination3",
    clickable: true,
  },
});


  
const swiper_4 = new Swiper('.docs__download', {
  // Optional parameters
  direction: 'horizontal',
  spaceBetween: 20,
  slidesPerView: 4,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination-docs',
    clickable: true,
  },
  breakpoints: {
    1421: {
      slidesPerView: 4,
    },
    1420: {
      slidesPerView: 3.5,
    },
    1281:{
      slidesPerView:3.5
    },
    1280: {
      slidesPerView: 3,
    },
    993: {
      slidesPerView: 3,

    },
    992:{
      slidesPerView:2.5,
      spaceBetween: 8,
    },
    769:{
      spaceBetween: 8,
      slidesPerView:2.5
    },
    768:{
      spaceBetween: 8,
      slidesPerView:2
    },
    460:{
      spaceBetween: 8,
      slidesPerView:2
    },
    459: {
      spaceBetween: 8,
      slidesPerView: 1
    },
    320:{
      spaceBetween: 8,
      slidesPerView:1
    }
  }
});