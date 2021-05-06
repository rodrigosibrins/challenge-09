const RegisterPage = require("../pageobjects/register.page");

describe("Register automation", () =>{
    beforeAll("Open browser", () => {
        RegisterPage.open();
    });
    describe("Register name testing", () => {
        it("if name input is empty show the proper mssg", () => {
            RegisterPage.inputName.click();
            RegisterPage.inputName.keys("Tab");
            expect(RegisterPage.nameScreen).toHaveText("Complete with name and surname");
            browser.pause(3000);    
        });
        it("if name is invalid show the proper mssg", () => {
            RegisterPage.setName("invalidname");
            expect(RegisterPage.nameScreen).toHaveText("At least 8 characters with a space in between");
            browser.pause(2000);    
        });
        it("if name has numbers show the proper mssg", () => {
            RegisterPage.setName("2222 2222");
            expect(RegisterPage.nameScreen).toHaveText("Numbers and symbols are not allowed");    
            browser.pause(2000);
        });
        it("if name is valid show the proper mssg", () => {
            RegisterPage.setName("User Valid");
            expect(RegisterPage.nameScreen).toHaveText("Correct");
            browser.pause(2000);    
        });
    });
    describe("Register email testing", () => {
        it("if email input is empty show the proper mssg", () => {
            RegisterPage.inputEmail.click();
            RegisterPage.inputEmail.keys("Tab");
            expect(RegisterPage.emailScreen).toHaveText("Invalid Email");
            browser.pause(3000);    
        });
        it("if email is invalid show the proper mssg", () => {
            RegisterPage.setEmail("invalidmail.com");
            expect(RegisterPage.emailScreen).toHaveText("Invalid Email");
            browser.pause(2000);    
        });
        it("if email is valid show the proper mssg", () => {
            RegisterPage.setEmail("valid@gmail.com");
            expect(RegisterPage.emailScreen).toHaveText("Correct");    
            browser.pause(2000);
        });
    });
    describe("Register password testing", () => {
        it("if password input is empty show the proper mssg", () => {
            RegisterPage.inputPassword.click();
            RegisterPage.inputPassword.keys("Tab");
            expect(RegisterPage.passwordScreen).toHaveText("At least 8 characters (only letters and numbers)");
            browser.pause(3000);    
        });
        it("if password is invalid show the proper mssg", () => {
            RegisterPage.setPassword("invalidpassword");
            expect(RegisterPage.passwordScreen).toHaveText("At least 8 characters (only letters and numbers)");
            browser.pause(2000);    
        });
        it("if password is valid show the proper mssg", () => {
            RegisterPage.setPassword("validpass01");
            expect(RegisterPage.passwordScreen).toHaveText("Correct");    
            browser.pause(2000);
        });
    });
    describe("Register confirm password testing", () => {
        it("if confirm input is empty show the proper mssg", () => {
            RegisterPage.inputConfirm.click();
            RegisterPage.inputConfirm.keys("Tab");
            expect(RegisterPage.confirmScreen).toHaveText("Doesn't match the password");
            browser.pause(3000);    
        });
        it("if confirm password is wrong show the proper mssg", () => {
            RegisterPage.setConfirm("wrongpass01");
            expect(RegisterPage.confirmScreen).toHaveText("Doesn't match the password");
            browser.pause(2000);    
        });
        it("if confirm password is right show the proper mssg", () => {
            RegisterPage.setConfirm("validpass01");
            expect(RegisterPage.confirmScreen).toHaveText("Correct");    
            browser.pause(2000);
        });
    });
    describe("Testing Reset btn", () => {
        it("Reset btn erase all inputs", () => {
            RegisterPage.btnSubmit.keys("Tab");
            RegisterPage.btnReset.keys("Enter");
            expect(RegisterPage.nameScreen).toHaveText("");
            browser.pause(3000);  
        });
    });
    describe("Testing Register btn", () => {
        it("Register btn display user data", () => {
            RegisterPage.completeRegister("Valid User", "validemail@gmail.com", "password01", "password01");
            RegisterPage.btnSubmit.keys("Tab");
            RegisterPage.btnSubmit.keys("Enter");
            expect(RegisterPage.validations).toHaveTextContaining(["Valid User", "validemail@gmail.com",
            "password01", "password01"]);
            browser.pause(3000);  
        });
    });
    describe("Check href url is right", () => {
        it("check if link navigates to login page", () => {
            RegisterPage.btnSubmit.keys("Tab");
            RegisterPage.btnSubmit.keys("Tab");
            RegisterPage.linkLogin.click();
            expect(browser).toHaveUrl("https://rodrigosibrins.github.io/challenge-09/login.html");
            expect(browser).toHaveTitle("Login");
            browser.pause(3000);  
        });
    });
});