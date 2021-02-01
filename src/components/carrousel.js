import { newElment } from './common';
import img1 from '../img/banner/banner1.png';
import img2 from '../img/banner/banner2.png';
import img3 from '../img/banner/banner3.png';

let n = 0;
const displayCarrousel = (carrouselContainer, img) => {
  if (n > 2) {
    n = 0;
  }
  carrouselContainer.src = img[n];
  n += 1;
};

const carrousel = (container) => {
  container.innerHTML = '';
  const imgCollection = [img1, img2, img3];
  const bannerContainer = newElment('div', undefined, ['baner-container']);
  const imgcontainer = newElment('img');
  imgcontainer.src = img1;

  setInterval(() => {
    displayCarrousel(imgcontainer, imgCollection);
  }, 1000);
  bannerContainer.append(imgcontainer);
  container.append(bannerContainer);
};

export { carrousel as default };
