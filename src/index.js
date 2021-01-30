import { header } from './components/header';
import { carrousel } from './components/carrousel';
import { section } from './components/section';
import { Dishes } from './components/dishes';
import { Offer } from './components/offers';

import { Footer } from './components/footer';

const container = document.querySelector('.content')
const nav = new header();
nav.render()

const offers = new Offer(container)
offers.render()

const newfooter = new Footer(container)
newfooter.renderFooter()
