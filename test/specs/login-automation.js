const LoginPage = require("../pageobjects/login.page");

describe("Login automation", () =>{
    beforeAll("Open browser", () => {
        LoginPage.open();
    });
    describe("Login email testing", () => {
        it("if email input is empty show the proper mssg", () => {
            LoginPage.inputEmail.click();
            LoginPage.inputEmail.keys("Tab");
            expect(LoginPage.emailScreen).toHaveText("Invalid Email");
            browser.pause(3000);    
        });
        it("if email is invalid show the proper mssg", () => {
            LoginPage.setEmail("invalid");
            expect(LoginPage.emailScreen).toHaveText("Invalid Email");
            browser.pause(2000);    
        });
        it("if email is valid show the proper mssg", () => {
            LoginPage.setEmail("prueba2021@gmail.com");
            expect(LoginPage.emailScreen).toHaveText("Correct");    
            browser.pause(2000);
        });
    });
    describe("Login password testing", () => {
        it("if password input is empty show the proper mssg", () => {
            LoginPage.inputPassword.click();
            LoginPage.inputPassword.keys("Tab");
            expect(LoginPage.passwordScreen).toHaveText("Doesn't match the password");
            browser.pause(3000);  
        });
        it("if password is invalid show the proper mssg", () => {
            LoginPage.setPassword("invalidpass");
            expect(LoginPage.passwordScreen).toHaveText("Doesn't match the password");
            browser.pause(2000);    
        }); 
        it("if password is valid show the proper mssg", () => {
            LoginPage.setPassword("password01");
            expect(LoginPage.passwordScreen).toHaveText("Correct");
            browser.pause(2000);    
        }); 
    });
    describe("Testing Login btn", () => {
        it("Register btn display user data", () => {
            LoginPage.login("validemail@gmail.com", "password01");
            LoginPage.btnLogin.keys("Tab");
            LoginPage.btnLogin.keys("Enter");
            expect(LoginPage.validations).toHaveTextContaining(["validemail@gmail.com",
            "password01"]);
            browser.pause(3000);  
        });
    });
    describe("Check href url is right", () => {
        it("check if link navigates to login page", () => {
            LoginPage.btnLogin.keys("Tab");
            LoginPage.btnLogin.keys("Tab");
            LoginPage.linkRegister.click();
            expect(browser).toHaveUrl("https://rodrigosibrins.github.io/challenge-09/register.html");
            expect(browser).toHaveTitle("Register");
            browser.pause(3000);  
        });
    });
});