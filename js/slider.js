var swiper = new Swiper(".swiper__block", {
  spaceBetween: 10,
  slidesPerView: 3,
  watchSlidesProgress: true,
  breakpoints: {
    670: {
    slidesPerView: 3,
    },
    220: {
    slidesPerView: 2,
    },    
}
  })
var swiper2 = new Swiper(".mySwiper2", {
  spaceBetween: 10,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    loop: true,
},
  thumbs: {
    swiper: swiper,
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
    loop: true,
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