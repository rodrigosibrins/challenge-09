let form = document.querySelector("form");
let loginBtn = document.getElementById("login-btn");
let emailInp = document.getElementById("email");
let passInp = document.getElementById("password");
let testScreen = document.getElementById("test");
let textValidations = document.getElementById("validations");
function styleChanges() {
  testScreen.style.display = "flex";
  testScreen.style.border = "2px solid crimson";
}
function inputsExist() {
  if (
    emailInp !== null &&
    passInp !== null
  ) {
    return true;
  } else {
    if (emailInp == null) {
      const liEmailNull = `<li>Email input is missing</li>`;
      styleChanges();
      if (textValidations.innerHTML != liEmailNull) {
        textValidations.innerHTML += liEmailNull;
      }
    }
    if (passInp == null) {
      const liPassNull = `<li>Password input is missing</li>`;
      styleChanges();
      if (textValidations.innerHTML != liPassNull) {
        textValidations.innerHTML += liPassNull;
      }
    }
  }
}
function formExist() {
  if (form !== null) {
    return true;
  } else {
    const liForm = `<li>Form element doesn't exist</li>`;
    styleChanges();
    if (textValidations.innerHTML != liForm) {
      textValidations.innerHTML += liForm;
    }
  }
}
function inputsAreRequired() {
  let inpEmail = form.elements[0];
  let inpPassword = form.elements[1];
  if (
    inpEmail.hasAttribute("required") &&
    document.getElementById("lab-email") !== null &&
    document.getElementById("lab-email").getAttribute("for") == "email" &&
    inpPassword.hasAttribute("required") &&
    document.getElementById("lab-password") !== null &&
    document.getElementById("lab-password").getAttribute("for") == "password"
  ) {
    return true;
  } else {
    const liNotRequired = `<li>Inputs & labels specifications not met</li>`;
    styleChanges();
    textValidations.innerHTML += liNotRequired;
  }
}
function btnCheck() {
  let btnLogin = document.getElementById("login-btn").value;
  if (btnLogin == "Login") {
    return true;
  } else {
    const liBtn = `<li>Wrong value for the button</li>`;
    styleChanges();
    textValidations.innerHTML += liBtn;
  }
}
function validationsPassed() {
  if (
    inputsExist() == true &&
    formExist() == true &&
    inputsAreRequired() == true &&
    btnCheck() == true
  ) {
    const liPassed = `<li>Every DOM Validation has Passed!</li>`;
    testScreen.style.display = "flex";
    testScreen.style.border = "2px solid springgreen";
    textValidations.innerHTML = liPassed;
  }
}
function clean() {
  textValidations.innerHTML = "";
  testScreen.style.border = "2px solid";
}
function validateAll() {
  clean();
  validationsPassed();
  inputsExist();
  formExist();
  inputsAreRequired();
  btnCheck();
}
