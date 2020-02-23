document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#dragonForm');
  const submit = document.querySelector('#submit');
  const list = document.querySelector('#dragonList');
  const deleteAll = document.querySelector('#deleteAll');

  submit.addEventListener('click', () => {
    handleFormSubmit(form, list);
  });

  deleteAll.addEventListener('click', () => {
    handleDeleteClick(list)
  });
});

const handleFormSubmit = (input, list) => {
  event.preventDefault();

  const newListItem = document.createElement('li');
  list.insertBefore(newListItem, list.childNodes[0]);

  generateElement(newListItem, 'h2', input.name.value);
  generateElement(
    newListItem,
    'h3',
    createDragonDescription(input.colour.value, input.size.value)
  );
  colourDragonDescription(input.colour.value, document.querySelector('h3'));
};

const generateElement = (container, tag, content, classes=[]) => {
  const element = document.createElement(tag);
  element.textContent = content;

  classes.forEach((className) => {
   element.classList.add(className);
  });

  container.appendChild(element);
}

const createDragonDescription = (colour, size) => {
  if (size === "Wyrmling") {
    content = `${colour} Dragon ${size}`;
  } else {
  content  = `${size} ${colour} Dragon`;
  }
  return content;
};

const colourDragonDescription = (colour, element) => {
  let checkColour = colour.toLowerCase()
  let colours = [
    "black", "blue", "green", "red", "white",
    "brass", "bronze", "copper", "gold", "silver"];

  if (colours.includes(checkColour)) {
    element.classList.add(`${checkColour.toLowerCase()}`);
    if (checkColour !== "black") {
      element.classList.add('shadow');
    }
  }
};

const handleDeleteClick = (list) => {
  list.textContent = '';
};
