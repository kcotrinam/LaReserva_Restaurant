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
    const header = this.createtitle()
    const links = newLinks(['link1', 'link2', 'link3'], ['link1', 'link2', 'link3'], ['./', './', './']);
    header.append(links)
    return header
  }

  render () {
    const container = document.querySelector('.content');
    const header = this.createLinks()
    container.append(header)
  }
}