import { newElment, newLinks, newList, createImageCollection } from './common.js';
import bannerImg from './../img/offers/prex.jpg';

export class Offer {
  constructor(container) {
    this.container = container;
    this.main = newElment('main');
  }

  get title () {
    const offersContainer = newElment('section', undefined, ['offers']);
    const title = newElment('h2', 'Offers', ['offers__title']);
    offersContainer.append(title);
    this.main.append(offersContainer);
  }

  get banner () {
    const imgContainer = newElment('div', undefined, ['offers__img-container'] )
    createImageCollection(imgContainer, [bannerImg])
    this.main.append(imgContainer)
  }

  render() {
    this.title
    this.banner
    this.container.append(this.main);
  }
}