import {
  newElment, createImageCollection, createCards,
} from './common';
import bannerImg from '../img/offers/prex.jpg';
import mondayOffer from '../img/offers/prlunes.jpg';
import tuesdayOffer from '../img/offers/prmartes.jpg';
import wednesdayOffer from '../img/offers/prmiercoles.jpg';
import thursdayOffer from '../img/offers/prjueves.png';
import fridayOffer from '../img/offers/prfin.jpg';

export class Offer {
  constructor(container) {
    this.container = container;
    this.main = newElment('main');
    this.days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    this.images = [mondayOffer, tuesdayOffer, wednesdayOffer, thursdayOffer, fridayOffer];
    this.offersContainer = newElment('div', undefined, ['offers-container']);
  }

  title() {
    this.container.innerHTML = '';
    const offersContainer = newElment('section', undefined, ['offers']);
    const title = newElment('h2', 'Offers', ['offers__title']);
    offersContainer.append(title);
    this.main.append(offersContainer);
  }

  banner() {
    const imgContainer = newElment('div', undefined, ['offers__img-container']);
    createImageCollection(imgContainer, [bannerImg]);
    this.main.append(imgContainer);
  }

  displaycards() {
    const cardContainer = newElment('div', undefined, ['card-container']);
    const subtitle = newElment('h3', 'Weekly Offers', ['subtitle']);

    cardContainer.append(subtitle);
    createCards(this.offersContainer, this.days, this.images);
    this.main.append(cardContainer);
    this.main.append(this.offersContainer);
  }

  renderOffers() {
    this.title();
    this.banner();
    this.displaycards();
    this.container.append(this.main);
  }
}