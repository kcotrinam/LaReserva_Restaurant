import { newElment, newLinks } from './common.js';
import img1 from './../img/banner/banner1.png';
import img2 from './../img/banner/banner2.png';
import img3 from './../img/banner/banner3.png';

export const carrousel= () => {
  const container  = document.querySelector('.content')
  // container.innerHTML = ''
  const imgCollection = [img1, img2, img3]
  const imgcontainer =  newElment('img');
  setInterval(() => {
    displayCarrousel(imgcontainer, imgCollection)
    imgcontainer.src = img1
  }, 1000);
  container.append(imgcontainer)
}

let n = 0
const displayCarrousel = (carrouselContainer, img) => {
  if(n > 2) {
    n = 0
  }
  carrouselContainer.src = img[n]
    n++
}
