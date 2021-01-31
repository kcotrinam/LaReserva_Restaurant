import { newElment, newLinks } from './common.js';
import { carrousel } from './carrousel';
import { Home } from './section';
import { Dishes } from './dishes';
import { Offer } from './offers';

export class Tabs {
  constructor(container, main) {
    this.container = container;
    this.activeTab = 0;
    this.main = main
  }

  createTabs () {
    const navBar = newElment('nav', undefined, ['nav'])
    const links = newLinks(['tab', 'tab', 'tab'], ['Branches', 'dishes', 'Offers'], ['#', '#', '#']);
    navBar.append(links)
    this.container.append(navBar)
  }

  listenTabs () {
    this.createTabs();
    const links = [...document.querySelectorAll('.tab')];
    this.setTab(links)
    this.AddActiveClass(links, this.activeTab);
  }

  setTab (tabs) {
    tabs.forEach((tab, idx) => {
      tab.addEventListener('click', () => {
        this.removeActiveTabs(tabs)
        this.activeTab = idx
        this.AddActiveClass(tabs)
        this.displayContent(this.activeTab)
      })
    });
  }

  AddActiveClass (linksCollection) {
    linksCollection[this.activeTab].classList.add('active-tab')
  }

  removeActiveTabs (tabs) {
    tabs.forEach(tab => {
      tab.classList.remove('active-tab')
    })
  }

  displayContent (tabIdx) {
    switch (tabIdx) {
      case 0:
        const loc = new Home(this.main);
        carrousel(this.main)
        loc.renderHome
        break;
      case 1:
        const dish = new Dishes(this.main);
        dish.renderDishes
        break;
      default:
        const off = new Offer(this.main)
        off.renderOffers
        break;
    }
  }

  renderTabs () {
    this.listenTabs()
    this.container.append(this.main)
  }
}