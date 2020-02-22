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

const colourDragonDescription = (colour, element) => {
  element.classList.add(`${colour.toLowerCase()}`);
  if (colour.toLowerCase() !== "black") {
    element.classList.add('shadow');
  }
}

const handleDeleteClick = (list) => {
  list.textContent = '';
}
