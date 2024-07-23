function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const coloredEl = document.querySelector('body');
const textEl = document.querySelector('.color');
const btnEl = document.querySelector('.change-color');

const onBackGroundChange = () => {
  coloredEl.style.backgroundColor = getRandomHexColor();
  textEl.textContent = `${getRandomHexColor()}`;
}

btnEl.addEventListener('click', onBackGroundChange);