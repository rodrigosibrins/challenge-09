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


formExist();
inputsRightAmount();