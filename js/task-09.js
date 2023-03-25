const changeColorBTN = document.querySelector(".change-color");
const colorValue = document.querySelector(".color");
const bodyEl = document.body;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function changeColorFoo() {
  bodyEl.style.backgroundColor = getRandomHexColor();
  colorValue.textContent = bodyEl.style.backgroundColor;
}

changeColorBTN.addEventListener("click", changeColorFoo);
