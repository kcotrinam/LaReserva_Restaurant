import { newElment, newLinks, newList } from './common.js';
import logo from './../img/logo.png';

export class Footer {
  constructor(container){
    this.container = container;
    this.footer = newElment('footer', [], ['footer'])
  }

  title () {
    const footerTitle = newElment('h4', 'La Reserva Restaurant')
    this.footer.append(footerTitle)
  }

  location () {
    const address = newList(['footer-address', 'footer-number'], ['Av. La Marina 201', '650-8000'])

    this.footer.append(address)
  }

  logo () {
    const img = newElment('img')
    img.src = logo
    this.footer.append(img)
  }

  renderFooter() {
    this.title()
    this.location()
    this.logo()
    this.container.append(this.footer)
  }

}
