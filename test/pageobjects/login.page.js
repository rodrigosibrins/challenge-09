class LoginPage {
    get inputEmail () { return $('#email') }
    get emailScreen () { return $('#email-screen') }
    get inputPassword () { return $('#password') }
    get passwordScreen () { return $('#password-screen') }
    get btnLogin () { return $('#login-btn') }
    get linkRegister () { return $('#link-reg') }
    get validations () { return $('#validations') }

    login (email, password) {
        this.inputEmail.setValue(email);
        this.inputPassword.setValue(password);
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
    open () {
        return browser.url('https://rodrigosibrins.github.io/challenge-09/login.html');
    }
}

module.exports = new LoginPage();
