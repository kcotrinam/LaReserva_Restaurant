import { newElment, newLinks, newList, createImageCollection, createCards } from './common.js';
import bannerImg from './../img/offers/prex.jpg';
import mondayOffer from './../img/offers/prlunes.jpg';
import tuesdayOffer from './../img/offers/prmartes.jpg';
import wednesdayOffer from './../img/offers/prmiercoles.jpg';
import thursdayOffer from './../img/offers/prjueves.png';
import fridayOffer from './../img/offers/prfin.jpg';
export class Offer {
  constructor(container) {
    this.container = container;
    this.main = newElment('main');
    this.days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    this.images = [mondayOffer, tuesdayOffer, wednesdayOffer, thursdayOffer, fridayOffer]
  }

  get title () {
    const offersContainer = newElment('section', undefined, ['offers']);
    const title = newElment('h2', 'Offers', ['offers__title']);
    offersContainer.append(title);
    this.main.append(offersContainer);
  }

  get banner () {
    const imgContainer = newElment('div', undefined, ['offers__img-container'] );
    createImageCollection(imgContainer, [bannerImg]);
    this.main.append(imgContainer);
  }

  get card () {
    const cardContainer = newElment('div', undefined, ['card-container']);
    createCards(this.days, this.imageOffers)
    this.main.append(cardContainer);
  }

  render() {
    this.title
    this.banner
    this.card
    this.container.append(this.main);
  }
}