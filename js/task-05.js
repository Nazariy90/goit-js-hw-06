const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

inputEl.addEventListener("input", (event) => {
  if (inputEl.value === "") {
    outputEl.innerHTML = "Anonymous";

    return;
  }

  outputEl.innerHTML = inputEl.value;
});
