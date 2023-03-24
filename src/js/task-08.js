const loginFormSubmit = document.querySelector(".login-form");
const objOLL = {};

function onSendForm(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("всі поля повинні бути заповнені");
  }

  objOLL.email = email.value;
  objOLL.password = password.value;
  console.log(objOLL);

  loginFormSubmit.reset();
}

loginFormSubmit.addEventListener("submit", onSendForm);
