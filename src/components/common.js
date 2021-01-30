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
}