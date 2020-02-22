document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#dragonForm');
  const submit = document.querySelector('#submit');
  const list = document.querySelector('#dragonList');

  submit.addEventListener('click', () => {
    handleButtonClick(form, list);
  });
});

const handleButtonClick = (input, list) => {
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
  newListItem.appendChild(name);
  newListItem.appendChild(description);
  list.appendChild(newListItem);
}
