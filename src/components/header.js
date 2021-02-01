import { newElment } from './common';
import Tabs from './tabs';

export default class Header {
  constructor(container, main) {
    this.container = container;
    this.header = newElment('header', undefined, ['header']);
    this.main = main;
  }

  createtitle() {
    const title = newElment('h1', 'La Reserva Restaurant', ['title']);
    this.header.append(title);
  }

  renderHeader() {
    this.createtitle();
    this.container.append(this.header);
    const tabsCollection = new Tabs(this.container, this.main);
    tabsCollection.renderTabs();
  }
}