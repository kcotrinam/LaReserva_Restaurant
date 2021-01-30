import { newElment } from './common.js';
import { Tabs } from './tabs';


export class header {
  constructor(container){
    this.container = container;
    this.header = newElment('header')
  }

  get createtitle () {
    const title = newElment('h1', 'La Reserva Restaurant', ['title'])
    this.header.append(title)
  }

  renderHeader () {
    this.createtitle
    this.container.append(this.header)
    const tabsCollection = new Tabs(this.container)
    tabsCollection.renderTabs()
  }
}