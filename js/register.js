let testScreen = document.getElementById('test');
let textValidations = document.getElementById('validations');
let form = document.querySelector('form');

function formExist(){
    if(document.forms = true){
        return true;
    }else{
        const liForm = `<li>Form element doesn't exist</li>`;
        testScreen.style.display = 'flex';
        testScreen.style.border = '2px solid red';
        textValidations.innerHTML += liForm;
    }   
}

function inputsRightAmount(){
    if(form.elements['name'] && form.elements['email'] && form.elements['password'] &&
       form.elements['confirm-password']){
        return true;
    }else{
        const liMissingInp = `<li>Missing Input</li>`;
        testScreen.style.display = 'flex';
        testScreen.style.border = '2px solid red';
        textValidations.innerHTML += liMissingInp;
    }
}

function inputsAreRequired(){
    let inpName = form.elements[0];
    let inpEmail = form.elements[1];
    let inpPassword = form.elements[2];
    let inpConfirmPass = form.elements[3];
    let labName = document.getElementById('lab-name').getAttribute('for');
    let labEmail = document.getElementById('lab-email').getAttribute('for');
    let labPassword = document.getElementById('lab-password').getAttribute('for');
    let labConfirmPass = document.getElementById('lab-confirm').getAttribute('for');
   
    if(inpName.hasAttribute('required') && labName == 'name' &&
       inpEmail.hasAttribute('required') && labEmail == 'email' &&
       inpPassword.hasAttribute('required') && labPassword == 'password' &&
       inpConfirmPass.hasAttribute('required') && labConfirmPass == 'confirm-password'){
        return true;
       }else{
        const liNotRequired = `<li>Inputs specifications not met</li>`;
        testScreen.style.display = 'flex';
        testScreen.style.border = '2px solid red';
        textValidations.innerHTML += liNotRequired;
       }
}

function anchorRight(){
    let anchorHref = document.getElementById('anchor').href;
    if(anchorHref == 'http://127.0.0.1:5500/login.html'){
        return true;
    }else{
        const liWrongHref = `<li>Wrong Href</li>`;
        testScreen.style.display = 'flex';
        testScreen.style.border = '2px solid red';
        textValidations.innerHTML += liWrongHref;
    }
}

function btnCheck(){
    let btnSubmit = document.getElementById('submit-btn').value;
    let btnReset = document.getElementById('reset-btn').value;
    if(btnSubmit == 'Register' && btnReset == 'Reset'){
        return true;
    }else{
        const liBtn = `<li>Wrong values for the buttons</li>`;
        testScreen.style.display = 'flex';
        testScreen.style.border = '2px solid red';
        textValidations.innerHTML += liBtn;
    }
}

function validationsPassed(){
    if(formExist() == true && inputsRightAmount() == true && inputsAreRequired() == true &&
       anchorRight() == true && btnCheck() == true){
        const liPassed = `<li>All Validations Passed!</li>`;
        testScreen.style.display = 'flex';
        textValidations.innerHTML += liPassed;
       }
}

formExist();
inputsRightAmount();
inputsAreRequired();
anchorRight();
btnCheck();
validationsPassed();