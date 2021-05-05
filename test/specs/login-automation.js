const LoginPage = require("../pageobjects/login.page");

describe("Login email testing", () => {
    it('email is empty', () => {
        LoginPage.open();
        browser.pause(4000);
    });
});