let emailScreen = document.getElementById("email-screen");
let passwordScreen = document.getElementById("password-screen");
function checkEmail() {
  let dotCom = /.com/;
  let mailReg = /@/;
  let subdomain = /(?<=@)[a-z]/;
  if (
    emailInp.value.match(mailReg) &&
    emailInp.value.match(dotCom) &&
    emailInp.value.match(subdomain)
  ) {
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
  var passwReg = /[0-9]/;
  if (passInp.value.match(passwReg) && passInp.value.length >= 8) {
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
  } else {
    passwordScreen.style.display = "flex";
    passwordScreen.innerHTML = "Invalid Password";
    passwordScreen.style.color = "Crimson";
    passInp.style.border = "2px solid Crimson";
  }
});
passInp.addEventListener("focus", function () {
  passwordScreen.style.display = "none";
  passInp.style.border = "2px solid rgba(30, 144, 255, 0.4)";
});
form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (checkEmail() && checkPassword()) {
    testScreen.style.display = "flex";
    textValidations.innerHTML += `<li>${emailInp.value}</li>` +
      `<li>${passInp.value}</li>`;
  } else {
    return false;
  }
});