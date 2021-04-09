let form = document.querySelector("form");
let loginBtn = document.getElementById("login-btn");
let emailInp = document.getElementById("email");
let passInp = document.getElementById("password");
let emailLab = document.getElementById("lab-email");
let passLab = document.getElementById("lab-password");
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
function labelsInputs(){
  if (emailLab !== null && emailLab.getAttribute('for')  == "email" &&
      passLab !== null && passLab.getAttribute('for')  == "password") {
    if (textValidations.innerHTML != `<li>Labels & inputs well associated :)</li>`) {
        textValidations.innerHTML += `<li>Labels & inputs well associated :)</li>`;
        }
    return true;
  } else {
    const labelsNotAssociated = `<li>Label not associated with input</li>`;
    styleChanges();
    if (textValidations.innerHTML != labelsNotAssociated) {
      textValidations.innerHTML += labelsNotAssociated;
    }
  }
}
function inputsAreRequired() {
  if (
    emailInp.hasAttribute("required") &&
    passInp.hasAttribute("required")
  ) {
    if (textValidations.innerHTML != `<li>Inputs are required :)</li>`) {
        textValidations.innerHTML += `<li>Inputs are required :)</li>`;
      }
    return true;
  } else {
    const liNotRequired = `<li>Inputs Not Required!</li>`;
    styleChanges();
    if (textValidations.innerHTML != liNotRequired) {
      textValidations.innerHTML += liNotRequired;
    }
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
    labelsInputs() == true &&
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
  labelsInputs();
  inputsAreRequired();
  btnCheck();
}
