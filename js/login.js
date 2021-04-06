let testScreen = document.getElementById("test");
let textValidations = document.getElementById("validations");
let form = document.querySelector("form");
let loginBtn = document.getElementById("login-btn");
let nameInp = document.getElementById("name");
let emailInp = document.getElementById("email");
let passInp = document.getElementById("password");
let confirmInp = document.getElementById("confirm-password");
function styleChanges() {
  testScreen.style.display = "flex";
  testScreen.style.border = "2px solid crimson";
}
function emailValidation() {
  let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (emailInp == null) {
    const liEmailNull = `<li>Email input is missing</li>`;
    styleChanges();
    if (textValidations.innerHTML != liEmailNull) {
      textValidations.innerHTML += liEmailNull;
    }
  } else if (emailInp == null || emailInp.value === "") {
    const liEmail = `<li>Not valid email</li>`;
    styleChanges();
    emailInp.style.border = "2px solid crimson";
    if (textValidations.innerHTML != liEmail) {
      textValidations.innerHTML += liEmail;
    } else if (emailInp.value.match(pattern)) {
      return true;
    }
  }
}
function passwordValidation() {
  if (passInp == null) {
    const liPassNull = `<li>Password input is missing</li>`;
    styleChanges();
    if (textValidations.innerHTML != liPassNull) {
      textValidations.innerHTML += liPassNull;
    }
  } else if (passInp.value.length < 8 || passInp.value.length >= 20) {
    const liPass = `<li>Password must have at least 8 characters</li>`;
    styleChanges();
    passInp.style.border = "2px solid crimson";
    if (textValidations.innerHTML != liPass) {
      textValidations.innerHTML += liPass;
    }
  } else {
    return true;
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
    emailValidation() == true &&
    passwordValidation() == true &&
    formExist() == true &&
    inputsAreRequired() == true &&
    btnCheck() == true
  ) {
    const liPassed = `<li>Every Validation has Passed!</li>`;
    testScreen.style.display = "flex";
    testScreen.style.border = "2px solid springgreen";
    emailInp.style.border = "2px solid springgreen";
    passInp.style.border = "2px solid springgreen";
    textValidations.innerHTML = liPassed;
  }
}
function clean() {
  if ((testScreen.style.display = "flex"));
  textValidations.innerHTML = "";
  testScreen.style.border = "2px solid";
}
function validateAll() {
  clean();
  validationsPassed();
  emailValidation();
  passwordValidation();
  formExist();
  inputsAreRequired();
  btnCheck();
}
