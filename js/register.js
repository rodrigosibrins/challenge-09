let testScreen = document.getElementById("test");
let textValidations = document.getElementById("validations");
let form = document.querySelector("form");
let registerBtn = document.getElementById("submit-btn");
let nameInp = document.getElementById("name");
let emailInp = document.getElementById("email");
let passInp = document.getElementById("password");
let confirmInp = document.getElementById("confirm-password");
function styleChanges(){
    testScreen.style.display = "flex";
    testScreen.style.border = "2px solid crimson";
}
function nameValidation() {
  if (nameInp.value === "" || nameInp.value == null) {
    let liName = `<li>Name input is empty</li>`;
    styleChanges();
    nameInp.style.border = "2px solid crimson";
    textValidations.innerHTML = liName;
  } else {
      return true;
  }
}
function emailValidation() {
  let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (emailInp.value === "") {
    const liEmail = `<li>Not valid email</li>`;
    styleChanges();
    emailInp.style.border = "2px solid crimson";
    textValidations.innerHTML += liEmail;
  } else if (emailInp.value.match(pattern)) {
    return true;
  }
}
function passwordValidation() {
  if (passInp.value.length < 8 || passInp.value.length >= 20) {
    const liPass = `<li>Password must have at least 8 characters</li>`;
    styleChanges();
    passInp.style.border = "2px solid crimson";
    textValidations.innerHTML += liPass;
  } else {
    return true;
  }
}
function confirmValidation() {
  if (confirmInp.value != passInp.value || confirmInp.value === '') {
    const liConfirm = `<li>The confirm password is wrong!</li>`;
    styleChanges();
    confirmInp.style.border = "2px solid crimson";
    textValidations.innerHTML += liConfirm;
    return false;
  } else {
    return true;
  }
}
function formExist() {
  if ((document.forms = true)) {
    return true;
  } else {
    const liForm = `<li>Form element doesn't exist</li>`;
    styleChanges();
    textValidations.innerHTML += liForm;
  }
}
function inputsRightAmount() {
  if (
    form.elements["name"] &&
    form.elements["email"] &&
    form.elements["password"] &&
    form.elements["confirm-password"]
  ) {
    return true;
  } else {
    const liMissingInp = `<li>Missing Input</li>`;
    styleChanges();
    textValidations.innerHTML += liMissingInp;
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
    const liNotRequired = `<li>Inputs specifications not met</li>`;
    styleChanges();
    textValidations.innerHTML += liNotRequired;
  }
}
function anchorRight() {
  let anchorHref = document.getElementById("anchor").href;
  if (anchorHref == "http://127.0.0.1:5500/login.html") {
    return true;
  } else {
    const liWrongHref = `<li>Wrong Href</li>`;
    styleChanges();
    textValidations.innerHTML += liWrongHref;
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
    textValidations.innerHTML += liBtn;
  }
}
function validationsPassed(){
  if (
    nameValidation() == true &&
    emailValidation() == true &&
    passwordValidation() == true &&
    confirmValidation() == true &&
    formExist() == true &&
    inputsRightAmount() == true &&
    inputsAreRequired() == true &&
    anchorRight() == true &&
    btnCheck() == true
  ) {
    const liPassed = `<li>Every Validation has Passed!</li>`;
    testScreen.style.display = "flex";
    testScreen.style.border = "2px solid green";
    textValidations.innerHTML = liPassed;
  } 
}
function validateAll(){
  validationsPassed();
  nameValidation();
  emailValidation();
  passwordValidation();
  confirmValidation();
  formExist();
  inputsRightAmount();
  inputsAreRequired();
  anchorRight();
  btnCheck();
}


