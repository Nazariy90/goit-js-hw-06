const sizeControl = document.querySelector("#font-size-control");
const textChange = document.querySelector("#text");

function onSizeChange(event) {
  textChange.style.fontSize = event.target.value + "px";
}

sizeControl.addEventListener("input", onSizeChange);
