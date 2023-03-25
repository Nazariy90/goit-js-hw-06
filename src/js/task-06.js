const inputEl = document.querySelector("#validation-input");
const lengthEl = Number(inputEl.dataset.length);

const counterFunc = () => {
  if (inputEl.value.length === lengthEl) {
    inputEl.classList.add("valid").remove("invalid");
  } else {
    inputEl.classList.add("invalid").remove("valid");
  }
};

inputEl.addEventListener("blur", counterFunc);
