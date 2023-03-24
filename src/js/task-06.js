const inputEl = document.querySelector("#validation-input");
const lengthEl = inputEl.dataset.length;

const counterFunc = () => {
  if (inputEl.value.length == lengthEl) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  }
};

inputEl.addEventListener("blur", counterFunc);
