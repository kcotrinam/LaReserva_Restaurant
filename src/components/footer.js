import { newElment, newList } from './common';
import logo from '../img/logo.png';

export default class Footer {
  constructor(container) {
    this.container = container;
    this.footer = newElment('footer', [], ['footer']);
    this.footerLeft = newElment('div', [], ['footer__left']);
  }

  title() {
    const footerTitle = newElment('h4', 'La Reserva Restaurant', ['footer__title']);
    this.footerLeft.append(footerTitle);
  }

  location() {
    const address = newList(
      ['Av. La Marina 201', '650-8000'],
      ['footer-address', 'footer-number'],
    );

    this.footerLeft.append(address);
  }

  logo() {
    const img = newElment('img');
    img.src = logo;
    this.footer.append(img);
  }

  renderFooter() {
    this.footer.append(this.footerLeft);
    this.title();
    this.location();
    this.logo();
    this.container.append(this.footer);
  }
}
