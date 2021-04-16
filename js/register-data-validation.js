let nameScreen = document.getElementById("name-screen");
let emailScreen = document.getElementById("email-screen");
let passwordScreen = document.getElementById("password-screen");
let confirmScreen = document.getElementById("confirm-screen");
let resetBtn = document.getElementById("reset-btn");
function nameRedStyles(){
  nameScreen.style.display = "flex";
  nameScreen.style.color = '#f05945';
  nameInp.style.border = "2px solid #f05945";
}
function checkName() {
  let symbolsReg = /([@"'.?*+^$#])/;
  let numbersReg = /[0-9]/;
  if (
    nameInp.value !== "" &&
    nameInp.value.length >= 8 &&
    nameInp.value.trim().split(" ").length >= 2 &&
    !nameInp.value.match(numbersReg) &&
    !nameInp.value.match(symbolsReg)
  ) {
    return true;
  } else {
    return false;
  }
}
nameInp.addEventListener("blur", function () {
  let symbolsReg = /([@"'.?*+^$#])/;
  let numbersReg = /[0-9]/;
  if (checkName()) {
    nameScreen.style.display = "flex";
    nameScreen.innerHTML = "Correct";
    nameScreen.style.color = "springgreen";
    nameInp.style.border = "2px solid springgreen";
  } else if(nameInp.value == "") {
    nameRedStyles();
    nameScreen.innerHTML = "Complete with name and surname";
  }else if(nameInp.value.match(numbersReg) && nameInp.value.match(symbolsReg)) {
    nameRedStyles();
    nameScreen.innerHTML = "Numbers and symbols are not allowed";
  } else if(nameInp.value.trim().split(" ").length < 2) {
    nameRedStyles();
    nameScreen.innerHTML = "At least 8 characters with a space in between";
  } else if(nameInp.value.length < 8) {
    nameRedStyles();
    nameScreen.innerHTML = "At least 8 characters with a space in between";
  } else {
    nameRedStyles();
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
    emailScreen.style.color = "#f05945";
    emailInp.style.border = "2px solid #f05945";
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
    passwordScreen.style.color = "#f05945";
    passInp.style.border = "2px solid #f05945";
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
    confirmScreen.style.color = "#f05945";
    confirmInp.style.border = "2px solid #f05945";
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
    fetch('http://localhost:4000/register', {
      method: 'POST',
      body: JSON.stringify({name: `${nameInp.value}`, email: `${emailInp.value}`,
                            password: `${passInp.value}`}),
      headers: {'Content-Type': 'application/json'}
    });
    e.preventDefault();
  } else {
    return false;
  }
});
resetBtn.addEventListener("click", function(e){
  e.preventDefault();
  location.reload();
});