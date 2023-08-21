"use strict"

const swiper = new Swiper('.swiper', {
   // Optional parameters
   autoHeight: true,
   loop: true,

   // If we need pagination
   pagination: {
      el: '.swiper-pagination',
      clickable: true,
   },
   autoplay: {
      delay: 5000,
   },

});
