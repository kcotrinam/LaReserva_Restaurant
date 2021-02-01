import { newElment, newList } from './common.js';

export class Home {
  constructor(container) {
    this.container = container;
    this.section = newElment('section', undefined, ['frames-container']);
  }

  generateLocations(amount, link) {
    for (let i = 0; i < amount; i++) {
      const frameContainer = newElment('div', undefined, ['frame-container']);
      const frame = newElment('iframe');
      const aside = newElment('aside', undefined, ['frame__list']);
      const locationList = newList(
        ['Miraflores - Av. Ricardo Palma 145', 'San Miguel - Av. La Marina 201', 'Comas - Alfredo Mendiola 1545'],
        ['frame__list-item', 'frame__list-item', 'frame__list-item'],
      );
      frame.src = link;


      aside.append(locationList);
      frameContainer.append(frame, aside);
      this.section.append(frameContainer);
    }
  }

  get location() {
    this.generateLocations(3, 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.898824056072!2d-77.03080558684975!3d-12.11907469141914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c819e28cfb87%3A0x1b388d2c07ef80c2!2sAv.+Ricardo+Palma+145%2C+Miraflores+15074!5e0!3m2!1ses-419!2spe!4v1544554739888');
    // this.container.innerHTML = '';
  }

  renderHome() {
    this.location;
    this.container.append(this.section);
  }
}
