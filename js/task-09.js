const changeColorBTN = document.querySelector(".change-color");
const colorValue = document.querySelector(".color");
const bodyEl = document.body;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function changeColorFoo() {
  const currentColor = getRandomHexColor();
  bodyEl.style.backgroundColor = currentColor;
  colorValue.textContent = currentColor;
}

changeColorBTN.addEventListener("click", changeColorFoo);
