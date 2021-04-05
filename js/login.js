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
  if (emailInp.value === "") {
      return false;
  } else if (emailInp.value.match(pattern)) {
      return true;
  }
}
function passwordValidation() {
  if (passInp.value.length < 8) {
      return false;
  } else if (passInp.value.length >= 20) {
      return false;
  } else {
      return true;
  }
}
function formExist() {
  if ((document.forms = true)) {
      return true;
  }else {
      const liForm = `<li>Form element doesn't exist</li>`;
      styleChanges();
      textValidations.innerHTML += liForm;
  }
}
function inputsRightAmount() {
  if (form.elements["email"] && form.elements["password"]) {
      return true;
  } else {
      const liMissingInp = `<li>Missing Input</li>`;
      styleChanges();
      textValidations.innerHTML += liMissingInp;
      console.log("error");
  }
}
function inputsAreRequired() {
  let inpEmail = form.elements[0];
  let inpPassword = form.elements[1];
  let labEmail = document.getElementById("lab-email").getAttribute("for");
  let labPassword = document.getElementById("lab-password").getAttribute("for");

  if (
    inpEmail.hasAttribute("required") &&
    labEmail == "email" &&
    inpPassword.hasAttribute("required") &&
    labPassword == "password"
  ) {
      return true;
  } else {
      const liNotRequired = `<li>Inputs specifications not met</li>`;
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
loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    emailValidation() == true &&
    passwordValidation() == true &&
    formExist() == true &&
    inputsRightAmount() == true &&
    inputsAreRequired() == true &&
    btnCheck() == true
  ) {
      const liPassed = `<li>Every Validation has Passed!</li>`;
      testScreen.style.display = "flex";
      textValidations.innerHTML += liPassed;
  }
  if (emailValidation() == false) {
      const liEmail = `<li>Not valid email</li>`;
      styleChanges();
      emailInp.style.border = "2px solid crimson";
      textValidations.innerHTML += liEmail;
  }
  if (passwordValidation() == false) {
      const liPass = `<li>Password must have at least 8 characters</li>`;
      styleChanges();
      passInp.style.border = "2px solid crimson";
      textValidations.innerHTML += liPass;
  }
  formExist();
  inputsRightAmount();
  inputsAreRequired();
  btnCheck();
});
