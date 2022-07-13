import './style.css'

import {useSwiper} from './js/modules/swiper.js'
import {navIndicator} from './js/modules/nav.js'

const sliderImages = document.querySelector('.swiper-wrapper')
const sliderImagesArray = ["./images/backgrounds/pmv-chamara-unsplash-dark.webp","./images/backgrounds/pmv-chamara-unsplash-light.webp"]
const sliderImagesAlt = ["dark sique shop bottle spray product with magazine","light sique shop bottle spray product with magazine"]


function renderImages(images){
  let imgList = ""
  for(let i = 0; i < images.length; i++){
      imgList += `
        <div class="swiper-slide"> 
          <img class="swiper-img" src="${images[i]}">
        </div>
      `
  }
  sliderImages.innerHTML = imgList
}

function renderAlt(images, alternate ){

  for (let i = 0; i < images.length && alternate.length; i++) {
      images[i].alt = `${alternate[i]}`
  }
}
renderImages(sliderImagesArray)
const sliderImagesAltEl = document.querySelectorAll('.swiper-img')
renderAlt(sliderImagesAltEl, sliderImagesAlt)



useSwiper()
navIndicator()


console.dir(document)