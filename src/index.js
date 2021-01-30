import { header } from './components/header';
import { Tabs } from './components/tabs';



import { Footer } from './components/footer';
import styles from './scss/styles.scss';

const container = document.querySelector('.content')

const headerContainer = new header(container);
headerContainer.renderHeader()

const foot = new Footer(container)
foot.renderFooter()