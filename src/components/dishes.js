import { newElment, newLinks, createImageCollection } from './common.js';
import coast from './../img/coast/coast.jpg'
import sierra from './../img/coast/sierra.jpg'
import selva from './../img/coast/selva.jpg'
import lasagna from './../img/pasta/lasagna.jpg'
import ravioles from './../img/pasta/ravioles.jpg'
import spaghetti from './../img/pasta/spaghetti.jpg'
import mariscos from './../img/seafood/arrosconmariscos.jpg'
import ceviche from './../img/seafood/ceviche.jpg'
import chupe from './../img/seafood/chupe.jpg'
import grill from './../img/grill/grill.jpg'

export class Dishes {
  constructor (container) {
    this.container = container;
    this.main = newElment('main');
    this.imgByRegion = [coast, sierra, selva];
    this.imgPasta = [lasagna, ravioles, spaghetti];
    this.imgSeaFood = [mariscos, ceviche, chupe];
    this.imgGrill = [grill]
  }

  get title () {
    const title = newElment('h2', 'Our Dishes');
    this.main.append(title)
  }

  subtitle(content) {
    return newElment('h3', `${content}`)
  }

  article (subtitle, images) {
    const card = newElment('article', undefined, ['card'])
    const imgcontainer = newElment('div', undefined, ['card__img-container'])
    

    createImageCollection(imgcontainer, images)

    card.append(this.subtitle(`${subtitle}`))
    card.append(imgcontainer)

    this.main.append(card)
  }

  render () {
    this.title
    this.article('Regional Dishes', this.imgByRegion)
    this.article('Pastas', this.imgPasta)
    this.article('Seafood', this.imgSeaFood)
    this.article('Meat and Grill', this.imgGrill)
    this.container.append(this.main)
  }
}