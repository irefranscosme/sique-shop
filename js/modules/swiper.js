export function useSwiper(){
  const swiper = new Swiper('.swiper', {
    // infinite loop through image
    loop: true,
  
    // Autoplay image
    // autoplay: {
    //   delay: 2500,
    //   disableOnInteraction: false
    // },
    
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    
  });
}


