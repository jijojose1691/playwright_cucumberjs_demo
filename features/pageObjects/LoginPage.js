import { expect } from '@playwright/test';
import {BASE_URL}  from '../config/portal.config.js';
import { PORTAL_TITLE } from '../support/constants.js'


let locators = {
    "username_input": "#user-name",
    "password_input": "#password",
    "login_button": "#login-button",
    "inventory_container": "#inventory_container",
    "error": "[data-test=\"error\"]"
}



export async function navigateToLoginScreen() {
    return await page.goto(BASE_URL);
}

export async function verifyLoginPageIsDisplayed() {
    return expect(await page.title()).toBe(PORTAL_TITLE);
}

export async function submitCredentials(usernmae, password) {
    const element = await page.waitForSelector(locators.username_input);
    await page.fill(locators.username_input, usernmae);
    await page.fill(locators.password_input, password);
    await page.click(locators.login_button);
}

export async function verifyAfterLoginPage() {
    await page.waitForSelector(locators.inventory_container);
    const visible = await page.isVisible(locators.inventory_container);
    return expect(visible).toEqual(true);
}

export async function verifyErrorMsg(error) {
    await page.waitForSelector(locators.error);
    const errorMsg = await page.locator(locators.error).innerText();
    return expect(errorMsg.includes(error)).toEqual(true, `was looking text : ${error} but did not find it. found text ${errorMsg}`);
}
