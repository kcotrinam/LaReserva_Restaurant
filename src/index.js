import Index from './components/main';
import './scss/styles.scss';

const container = document.querySelector('.content');
const renderHome = new Index(container);
renderHome.renderPage();
