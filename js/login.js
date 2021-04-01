let testScreen = document.getElementById('test');
let textValidations = document.getElementById('validations');
let form = document.querySelector('form');
function formExist(){
    if(document.forms = true){
        return true;
    }else{
        const liForm = `<li>Form element doesn't exist</li>`
        testScreen.style.display = 'flex';
        testScreen.style.border = '2px solid red';
        textValidations.innerHTML += liForm;
    }   
}

function inputsRightAmount(){
    if(form.elements['email'] && form.elements['password']){
        return true;
    }else{
        const liMissingInp = `<li>Missing Input</li>`;
        testScreen.style.display = 'flex';
        testScreen.style.border = '2px solid red';
        textValidations.innerHTML += liMissingInp;
        console.log("error");
    }
}

function inputsAreRequired(){
    let inpEmail = form.elements[0];
    let inpPassword = form.elements[1];
    let labEmail = document.getElementById('lab-email').getAttribute('for');
    let labPassword = document.getElementById('lab-password').getAttribute('for');
   
    if(
       inpEmail.hasAttribute('required') && labEmail == 'email' &&
       inpPassword.hasAttribute('required') && labPassword == 'password'){
        return true;
       }else{
        const liNotRequired = `<li>Inputs specifications not met</li>`;
        testScreen.style.display = 'flex';
        testScreen.style.border = '2px solid red';
        textValidations.innerHTML += liNotRequired;
       }
}

function btnCheck(){
    let btnLogin = document.getElementById('login-btn').value;
    if(btnLogin == 'Login'){
        return true;
    }else{
        const liBtn = `<li>Wrong value for the button</li>`;
        testScreen.style.display = 'flex';
        testScreen.style.border = '2px solid red';
        textValidations.innerHTML += liBtn;
    }
}

function validationsPassed(){
    if(formExist() == true && inputsRightAmount() == true && inputsAreRequired() == true && 
       btnCheck() == true){
        const liPassed = `<li>All Validations Passed!</li>`;
        testScreen.style.display = 'flex';
        textValidations.innerHTML += liPassed;
       } else{
           console.log("Something went wrong :(");
       }
}

formExist();
inputsRightAmount();
inputsAreRequired();
btnCheck();
validationsPassed();