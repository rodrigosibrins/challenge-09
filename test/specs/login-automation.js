const LoginPage = require("../pageobjects/login.page");

describe("Login automation", () =>{
    beforeAll('open browser', () => {
        LoginPage.open();
    });
    describe("Login email testing", () => {
        it('if email input is empty show the proper mssg', () => {
            LoginPage.inputEmail.click();
            LoginPage.inputEmail.keys("Tab");
            expect(LoginPage.emailScreen).toHaveText("Invalid Email");
            browser.pause(2000);    
        });
        it('if email is valid show the proper mssg', () => {
            LoginPage.inputEmail.click();
            LoginPage.inputEmail.setValue("prueba2021@gmail.com");
            LoginPage.inputEmail.keys("Tab");
            expect(LoginPage.emailScreen).toHaveText("Correct");    
            browser.pause(2000);
        });
    });
    describe("Login password testing", () => {
        it('if password input is empty show the proper mssg', () => {
            LoginPage.inputPassword.click();
            LoginPage.inputPassword.keys("Tab");
            expect(LoginPage.passwordScreen).toHaveText("Doesn't match the password");
            browser.pause(2000);  
        });
        it('if password is valid show the proper mssg', () => {
            LoginPage.inputPassword.click();
            LoginPage.inputPassword.setValue("password01");
            LoginPage.inputPassword.keys("Tab");
            expect(LoginPage.passwordScreen).toHaveText("Correct");
            browser.pause(2000);    
        }); 
    });
    describe("Login with valid data", () => {
        it('if inputs are correct, when clicking on btn Login display the user data', () => {
            LoginPage.login("prueba2021@gmail.com", "password01");
            expect(LoginPage.validations).toHaveText("prueba2021@gmail.com");
            browser.pause(4000);  
        });
    });
    describe("Check href url is right", () => {
        it('check if link navigates to register page', () => {
            LoginPage.linkRegister.click();
            expect(browser).toHaveUrl("https://rodrigosibrins.github.io/challenge-09/register.html");
            browser.pause(4000);  
        });
    });
});