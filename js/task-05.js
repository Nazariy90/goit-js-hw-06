const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

const currentText = (event) => {
  outputEl.textContent =
    inputEl.value !== "" ? event.currentTarget.value : "Anonymous";
};
inputEl.addEventListener("input", currentText);
