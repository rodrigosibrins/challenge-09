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
function inputsExist() {
  if (
    nameInp !== null &&
    emailInp !== null &&
    passInp !== null &&
    confirmInp !== null
  ) {
    return true;
  } else {
    if (nameInp == null) {
      styleChanges();
      if (textValidations.innerHTML != `<li>Name input is missing</li>`) {
        textValidations.innerHTML += `<li>Name input is missing</li>`;
      }
    }
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
    if (confirmInp == null) {
      const liConfirmNull = `<li>Confirm Password input is missing</li>`;
      styleChanges();
      if (textValidations.innerHTML != liConfirmNull) {
        textValidations.innerHTML += liConfirmNull;
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
  let inpName = form.elements[0];
  let inpEmail = form.elements[1];
  let inpPassword = form.elements[2];
  let inpConfirmPass = form.elements[3];
  if (
    inpName.hasAttribute("required") &&
    document.getElementById("lab-name") !== null &&
    document.getElementById("lab-name").getAttribute("for") == "name" &&
    inpEmail.hasAttribute("required") &&
    document.getElementById("lab-email") !== null &&
    document.getElementById("lab-email").getAttribute("for") == "email" &&
    inpPassword.hasAttribute("required") &&
    document.getElementById("lab-password") !== null &&
    document.getElementById("lab-password").getAttribute("for") == "password" &&
    inpConfirmPass.hasAttribute("required") &&
    document.getElementById("lab-confirm") !== null &&
    document.getElementById("lab-confirm").getAttribute("for") ==
      "confirm-password"
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
  let anchorHref = document.getElementById("anchor").getAttribute('href');
  if (anchorHref == "./login.html") {
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
    inputsExist() == true &&
    formExist() == true &&
    inputsAreRequired() == true &&
    anchorRight() == true &&
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
  anchorRight();
  btnCheck();
}
