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
  const colour = document.createElement('h3');
  const size = document.createElement('h4');
  name.textContent = `${input.name.value}`;
  colour.textContent = `${input.colour.value}`;
  size.textContent = `${input.size.value}`;
  newListItem.appendChild(name);
  newListItem.appendChild(colour);
  newListItem.appendChild(size);
  list.appendChild(newListItem);
}
