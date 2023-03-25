let counterValue = 0;

const valueCurrent = document.querySelector("#value");
const decrementButton = document.querySelector(
  'button[data-action="decrement"]'
);
const incrementButton = document.querySelector(
  'button[data-action="increment"]'
);

const handleClickDecrement = (event) => {
  counterValue -= 1;
  valueCurrent.textContent = counterValue;
};

decrementButton.addEventListener("click", handleClickDecrement);

const handleClickIncrement = (event) => {
  counterValue += 1;
  valueCurrent.textContent = counterValue;
};

incrementButton.addEventListener("click", handleClickIncrement);
