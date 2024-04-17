const burger = document.querySelector('.burger')
const menu = document.querySelector('.menu')

burger .addEventListener('click',() =>{
    menu.classList.toggle('open')
})



// SWIPER

const swiper = new Swiper('.swiper', {
  
    pagination: {
      el: '.swiper-pagination',
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  
    slidesPerView: 1,
    spaceBetween: 20,
    
    breakpoints: {
      1450: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 2,
      }
    }
  });
  