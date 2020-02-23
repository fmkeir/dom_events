document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#dragonForm');
  const submit = document.querySelector('#submit');
  const list = document.querySelector('#dragonList');
  const deleteAll = document.querySelector('#deleteAll')

  submit.addEventListener('click', () => {
    handleFormSubmit(form, list);
  });

  deleteAll.addEventListener('click', () => {
    handleDeleteClick(list)
  })
});

const handleFormSubmit = (input, list) => {
  event.preventDefault();
  const newListItem = document.createElement('li');
  const name = document.createElement('h2');
  const description = document.createElement('h3');
  name.textContent = `${input.name.value}`;
  if (input.size.value === "Wyrmling") {
    description.textContent = `${input.colour.value} Dragon ${input.size.value}`
  } else {
  description.textContent = `${input.size.value} ${input.colour.value} Dragon`
  }
  colourDragonDescription(input.colour.value, description)
  newListItem.appendChild(name);
  newListItem.appendChild(description);
  list.insertBefore(newListItem, list.childNodes[0]);
};

const generateElement = (container, tag, content, classes=[]) => {
  const element = document.createElement(tag);
  element.textcontent = content;

  classes.forEach((className) => {
   element.classList.add(className);
  });

  container.appendChild(element);
}

const colourDragonDescription = (colour, element) => {
  let colours = [
    "black", "blue", "green", "red", "white",
    "brass", "bronze", "copper", "gold", "silver"]

  if (colours.includes(colour)) {
    element.classList.add(`${colour.toLowerCase()}`);
    element.classList.add('shadow');
  }
  if (colour === "black") {
    element.classList.add(`${colour.toLowerCase()}`);
  }
}

const handleDeleteClick = (list) => {
  list.textContent = '';
}
