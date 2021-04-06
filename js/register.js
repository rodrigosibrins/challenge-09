let testScreen = document.getElementById("test");
let textValidations = document.getElementById("validations");
let form = document.querySelector("form");
let registerBtn = document.getElementById("submit-btn");
let nameInp = document.getElementById("name");
let emailInp = document.getElementById("email");
let passInp = document.getElementById("password");
let confirmInp = document.getElementById("confirm-password");
function styleChanges() {
  testScreen.style.display = "flex";
  testScreen.style.border = "2px solid crimson";
}
function nameValidation() {
  if (nameInp == null) {
    styleChanges();
    textValidations.innerHTML = `<li>Name input is missing</li>`;
  } else if (nameInp.value === "" || nameInp.value === null) {
    const liName = `<li>Name input is empty</li>`;
    styleChanges();
    nameInp.style.border = "2px solid crimson";
    textValidations.innerHTML = liName;
  } else {
    return true;
  }
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
function confirmValidation() {
  if (confirmInp == null) {
    const liConfirmNull = `<li>Confirm Password input is missing</li>`;
    styleChanges();
    if (textValidations.innerHTML != liConfirmNull) {
      textValidations.innerHTML += liConfirmNull;
    }
  } else if (confirmInp.value != passInp.value || confirmInp.value === "") {
    const liConfirm = `<li>The confirm password is wrong!</li>`;
    styleChanges();
    confirmInp.style.border = "2px solid crimson";
    if (textValidations.innerHTML != liConfirm) {
      textValidations.innerHTML += liConfirm;
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
  let inpName = form.elements[0];
  let inpEmail = form.elements[1];
  let inpPassword = form.elements[2];
  let inpConfirmPass = form.elements[3];
  let labName = document.getElementById("lab-name").getAttribute("for");
  let labEmail = document.getElementById("lab-email").getAttribute("for");
  let labPassword = document.getElementById("lab-password").getAttribute("for");
  let labConfirmPass = document
    .getElementById("lab-confirm")
    .getAttribute("for");
  if (
    inpName.hasAttribute("required") &&
    labName == "name" &&
    inpEmail.hasAttribute("required") &&
    labEmail == "email" &&
    inpPassword.hasAttribute("required") &&
    labPassword == "password" &&
    inpConfirmPass.hasAttribute("required") &&
    labConfirmPass == "confirm-password"
  ) {
    return true;
  } else {
    const liNotRequired = `<li>Inputs & labels specifications not met</li>`;
    styleChanges();
    if (textValidations.innerHTML != liNotRequired) {
      textValidations.innerHTML += liNotRequired;
    }
  }
}
function anchorRight() {
  let anchorHref = document.getElementById("anchor").href;
  if (anchorHref == "http://127.0.0.1:5500/login.html") {
    return true;
  } else {
    const liWrongHref = `<li>Wrong Href</li>`;
    styleChanges();
    if (textValidations.innerHTML != liWrongHref) {
      textValidations.innerHTML += liWrongHref;
    }
  }
}
function btnCheck() {
  let btnSubmit = document.getElementById("submit-btn").value;
  let btnReset = document.getElementById("reset-btn").value;
  if (btnSubmit == "Register" && btnReset == "Reset") {
    return true;
  } else {
    const liBtn = `<li>Wrong values for the buttons</li>`;
    styleChanges();
    if (textValidations.innerHTML != liBtn) {
      textValidations.innerHTML += liBtn;
    }
  }
}
function validationsPassed() {
  if (
    nameValidation() == true &&
    emailValidation() == true &&
    passwordValidation() == true &&
    confirmValidation() == true &&
    formExist() == true &&
    inputsAreRequired() == true &&
    anchorRight() == true &&
    btnCheck() == true
  ) {
    const liPassed = `<li>Every Validation has Passed!</li>`;
    testScreen.style.display = "flex";
    testScreen.style.border = "2px solid springgreen";
    nameInp.style.border = "2px solid springgreen";
    emailInp.style.border = "2px solid springgreen";
    passInp.style.border = "2px solid springgreen";
    confirmInp.style.border = "2px solid springgreen";
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
  nameValidation();
  emailValidation();
  passwordValidation();
  confirmValidation();
  formExist();
  inputsAreRequired();
  anchorRight();
  btnCheck();
}
