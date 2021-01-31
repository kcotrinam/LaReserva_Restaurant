import { newElment } from './common.js';
import { Tabs } from './tabs';

export class Header {
  constructor(container, main){
    this.container = container;
    this.header = newElment('header')
    this.main = main
  }

  get createtitle () {
    const title = newElment('h1', 'La Reserva Restaurant', ['title'])
    this.header.append(title)
  }

  renderHeader () {
    this.createtitle
    this.container.append(this.header)
    const tabsCollection = new Tabs(this.container, this.main)
    tabsCollection.renderTabs()
  }
}