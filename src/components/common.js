export const newElment = (tag, text, classes , id) => {
  const element = document.createElement(tag);
  if (text) element.innerText = text;
  if (classes) {
    classes.forEach( cl => {
      element.classList.add(cl);
    });
  } 
  if (id) element.id = id;
  return element
}

export const newLinks = (classes, texts, links) => {
  const ul = document.createElement('ul');
  texts.forEach((txt, idx) => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.innerText = txt
    a.classList.add(classes[idx]);
    a.href = links[idx]
    li.append(a)
    ul.append(li)
  })
  return ul;
}

export const newList = (classes, texts) => {
  const ul = document.createElement('ul');
  texts.forEach((txt, idx) => {
    const li = document.createElement('li');
    li.innerText = txt
    li.classList.add(classes[idx]);
    ul.append(li)
  })
  return ul;
};

export const createImageCollection = (container, imgCollection) => {
  imgCollection.forEach(img => {
    const imgTag = newElment('img')
    imgTag.src = img
    container.append(imgTag)
  });

  return container
};

export const createCards = (container, titles, images) => {
  titles.forEach((title, idx) => {
    const card = newElment('article', undefined, ['card']);
    const cardTitle = newElment('h3', title, ['card__title']);
    const cardImgContainer = newElment('div', undefined, ['card__img']);
    const cardImg = newElment('img');
    const cardBtn = newElment('div', 'buy', ['card__btn']);

    cardImg.src = images[idx]
    cardImgContainer.append(cardImg)

    card.append(cardTitle, cardImgContainer, cardBtn)
    container.append(card)
  } )
}