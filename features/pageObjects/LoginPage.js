const { expect } = require("@playwright/test");
const portalConfig = require('../config/portal.config');
const { PORTAL_TITLE } = require('../support/constants')


let locators = {
    "username_input": "#user-name",
    "password_input": "#password",
    "login_button": "#login-button",
    "inventory_container": "#inventory_container",
    "error": "[data-test=\"error\"]"
}


/**
 * The POM class to represent Login page
 */
class LoginPage {

    constructor(page) {
        this.page = page;
    }

    async navigateToLoginScreen() {
        return await this.page.goto(portalConfig.BASE_URL);
    }

    async verifyLoginPageIsDisplayed() {
        return expect(await this.page.title()).toBe(PORTAL_TITLE);
    }

    async submitCredentials(usernmae, password) {
        const element = await this.page.waitForSelector(locators.username_input);
        await this.page.fill(locators.username_input, usernmae);
        await this.page.fill(locators.password_input, password);
        await this.page.click(locators.login_button);
    }

    async verifyAfterLoginPage() {
        await this.page.waitForSelector(locators.inventory_container);
        const visible = await this.page.isVisible(locators.inventory_container);
        return expect(visible).toEqual(true);
    }

    async verifyErrorMsg(error) {
        await this.page.waitForSelector(locators.error);
        const errorMsg = await this.page.locator(locators.error).innerText();
        return expect(errorMsg.includes(error)).toEqual(true, `was looking text : ${error} but did not find it. found text ${errorMsg}`);
    }

}

module.exports = { LoginPage };