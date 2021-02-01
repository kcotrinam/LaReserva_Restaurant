import { newElment } from './common';
import Header from './header';
import carrousel from './carrousel';
import Home from './section';
import Footer from './footer';

export default class Index {
  constructor(container) {
    this.container = container;
    this.main = newElment('main');
  }

  renderPage() {
    const newHeader = new Header(this.container, this.main);
    newHeader.renderHeader();
    carrousel(this.main);
    const firstPage = new Home(this.main);
    firstPage.renderHome();
    this.container.append(this.main);
    const footer = new Footer(this.container);
    footer.renderFooter();
  }
}
