let testScreen = document.getElementById('test');
let textValidations = document.getElementById('validations');
let form = document.querySelector('form');

function formExist(){
    if(document.forms = true){
        console.log("Validation Passed!");
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
        console.log("Validation Passed!")
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

    if(inpName.hasAttribute('required') && inpEmail.hasAttribute('required') &&
       inpPassword.hasAttribute('required') && inpConfirmPass.hasAttribute('required')){
        console.log("Validation Passed!");
        return true;
       }else{
        console.log("la batiste")
       }
}

function anchorRight(){
    let anchorHref = document.getElementById('anchor').href;
    if(anchorHref == 'http://127.0.0.1:5500/login.html'){
        console.log("Validation Passed");
        return true;
    }else{
        const liWrongHref = `<li>Wrong Href</li>`;
        testScreen.style.display = 'flex';
        testScreen.style.border = '2px solid red';
        textValidations.innerHTML += liWrongHref;
    }
}


formExist();
inputsRightAmount();
inputsAreRequired();
anchorRight();