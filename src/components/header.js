import { newElment, newLinks } from './common.js';


export class header {
  constructor(){}

  createtitle () {
    const header = newElment('header')
    const title = newElment('h1', 'La Reserva Restaurant', ['title'])
    header.append(title)
    return header
    
  }

  createLinks () {
    const container = document.querySelector('.content');
    const header = this.createtitle()
    const links = newLinks(['link', 'link', 'link'], ['link1', 'link2', 'link3'], ['./', './', './']);
    header.append(links)
    container.append(header)
    // return header
  }

  tabs () {
    this.createLinks()
    const links = [...document.querySelectorAll('.link')]
    console.log(links)
  }

  render () {
    const container = document.querySelector('.content');
    const header = this.createLinks()
    container.append(header)
  }
}