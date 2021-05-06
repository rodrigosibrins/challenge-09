class RegisterPage {
    get inputName () { return $('#name') }
    get nameScreen () { return $('#name-screen') }
    get inputEmail () { return $('#email') }
    get emailScreen () { return $('#email-screen') }
    get inputPassword () { return $('#password') }
    get passwordScreen () { return $('#password-screen') }
    get inputConfirm () { return $('#confirm-password') }
    get confirmScreen () { return $('#confirm-screen') }
    get btnSubmit () { return $('#submit-btn') }
    get btnReset () { return $('#reset-btn') }
    get linkLogin () { return $('#anchor') }
    get validations () { return $('#validations') }

    completeRegister (name, email, password, confirm) {
        this.inputName.setValue(name);
        this.inputEmail.setValue(email);
        this.inputPassword.setValue(password);
        this.inputConfirm.setValue(confirm);
    }
    setName (value){
        this.inputName.click();
        this.inputName.setValue(value);
        this.inputName.keys("Tab");
    }
    setEmail (value){
        this.inputEmail.click();
        this.inputEmail.setValue(value);
        this.inputEmail.keys("Tab");
    }
    setPassword (value){
        this.inputPassword.click();
        this.inputPassword.setValue(value);
        this.inputPassword.keys("Tab");
    }
    setConfirm (value){
        this.inputConfirm.click();
        this.inputConfirm.setValue(value);
        this.inputConfirm.keys("Tab");
    }
    open () {
        return browser.url('https://rodrigosibrins.github.io/challenge-09/register.html');
    }
}

module.exports = new RegisterPage();