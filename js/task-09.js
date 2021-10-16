function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorEl = document.querySelector('.change-color');
const spanEl = document.querySelector('.color');
const bodyElem = document.querySelector("body");

changeColorEl.addEventListener('click', changeColor)

function changeColor() {
  const color = getRandomHexColor();
  bodyElem.style.backgroundColor = color;
  spanEl.textContent = color;
}