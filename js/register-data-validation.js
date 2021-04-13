let nameScreen = document.getElementById("name-screen");
let emailScreen = document.getElementById("email-screen");
let passwordScreen = document.getElementById("password-screen");
let confirmScreen = document.getElementById("confirm-screen");
let resetBtn = document.getElementById("reset-btn");
function nameRedStyles(){
  nameScreen.style.display = "flex";
  nameScreen.style.color = "Crimson";
  nameInp.style.border = "2px solid Crimson";
}
function checkName() {
  let symbolsReg = /([@"'.?*+^$])/;
  if (
    nameInp.value !== "" &&
    nameInp.value.length >= 8 &&
    nameInp.value.trim().split(" ").length >= 2 &&
    isNaN(parseInt(nameInp.value)) &&
    !nameInp.value.match(symbolsReg)
  ) {
    return true;
  } else {
    return false;
  }
}
nameInp.addEventListener("blur", function () {
  if (checkName()) {
    nameScreen.style.display = "flex";
    nameScreen.innerHTML = "Correct";
    nameScreen.style.color = "springgreen";
    nameInp.style.border = "2px solid springgreen";
  } else if(nameInp.value == "") {
    invalidStyles();
    nameScreen.innerHTML = "Complete with name and surname";
  }else if(!isNaN(parseInt(nameInp.value))) {
    invalidStyles();
    nameScreen.innerHTML = "Numbers and symbols are not allowed";
  } else if(nameInp.value.trim().split(" ").length < 2) {
    invalidStyles();
    nameScreen.innerHTML = "At least 8 characters with a space in between";
  } else if(nameInp.value.length < 8) {
    invalidStyles();
    nameScreen.innerHTML = "At least 8 characters with a space in between";
  } else {
    invalidStyles();
    nameScreen.innerHTML = "Numbers and symbols are not allowed";
  }
});
nameInp.addEventListener("focus", function () {
  nameScreen.style.display = "none";
  nameInp.style.border = "2px solid rgba(30, 144, 255, 0.4)";
});
function checkEmail() {
  let dotCom = /.com/;
  let mailReg = /@/;
  let subdomain = /(?<=@)[a-z]/;
  if (
    emailInp.value.match(mailReg) &&
    emailInp.value.match(dotCom) &&
    emailInp.value.match(subdomain)
  ) {
    console.log();
    return true;
  } else {
    return false;
  }
}
emailInp.addEventListener("blur", function () {
  if (checkEmail()) {
    emailScreen.style.display = "flex";
    emailScreen.innerHTML = "Correct";
    emailScreen.style.color = "springgreen";
    emailInp.style.border = "2px solid springgreen";
  } else {
    emailScreen.style.display = "flex";
    emailScreen.innerHTML = "Invalid Email";
    emailScreen.style.color = "Crimson";
    emailInp.style.border = "2px solid Crimson";
  }
});
emailInp.addEventListener("focus", function () {
  emailScreen.style.display = "none";
  emailInp.style.border = "2px solid rgba(30, 144, 255, 0.4)";
});
function checkPassword() {
  let symbolsRegex = /([@"'.?*+^$])/;
  var passwReg = /[0-9]/;
  if (passInp.value.match(passwReg) && passInp.value.length >= 8 && !passInp.value.match(symbolsRegex)) {
    return true;
  } else {
    return false;
  }
}
passInp.addEventListener("blur", function () {
  if (checkPassword()) {
    passwordScreen.style.display = "flex";
    passwordScreen.innerHTML = "Correct";
    passwordScreen.style.color = "springgreen";
    passInp.style.border = "2px solid springgreen";
  } else{
    passwordScreen.style.display = "flex";
    passwordScreen.style.color = "Crimson";
    passInp.style.border = "2px solid Crimson";
    passwordScreen.innerHTML = "At least 8 characters (only letters and numbers)";
  }
});
passInp.addEventListener("focus", function () {
  passwordScreen.style.display = "none";
  passInp.style.border = "2px solid rgba(30, 144, 255, 0.4)";
});
function checkConfirm() {
  if (confirmInp.value != "" && confirmInp.value == passInp.value) {
    return true;
  } else {
    return false;
  }
}
confirmInp.addEventListener("blur", function () {
  if (checkConfirm()) {
    confirmScreen.style.display = "flex";
    confirmScreen.innerHTML = "Correct";
    confirmScreen.style.color = "springgreen";
    confirmInp.style.border = "2px solid springgreen";
  } else {
    confirmScreen.style.display = "flex";
    confirmScreen.innerHTML = "Doesn't match the password";
    confirmScreen.style.color = "Crimson";
    confirmInp.style.border = "2px solid Crimson";
  }
});
confirmInp.addEventListener("focus", function () {
  confirmScreen.style.display = "none";
  confirmInp.style.border = "2px solid rgba(30, 144, 255, 0.4)";
});
form.addEventListener("submit", function (e) {
  if (checkName() && checkEmail() && checkPassword() && checkConfirm()) {
    testScreen.style.display = "flex";
    textValidations.innerHTML +=
      `<li>${nameInp.value}</li>` +
      `<li>${emailInp.value}</li>` +
      `<li>${passInp.value}</li>` +
      `<li>${confirmInp.value}</li>`;
    fetch(`https://jsonplaceholder.typicode.com/users?email=${emailInp.value}`)
      .then(response => console.log(response));
    e.preventDefault();
  } else {
    return false;
  }
});
resetBtn.addEventListener("click", function(e){
  e.preventDefault();
  location.reload();
});