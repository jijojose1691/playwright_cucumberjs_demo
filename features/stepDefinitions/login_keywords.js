import { Given, When, Then } from '@cucumber/cucumber';
import { PASSWORD } from '../config/portal.config.js';
import {
    navigateToLoginScreen, verifyLoginPageIsDisplayed,
    verifyAfterLoginPage, verifyErrorMsg,
    submitCredentials
} from '../pageObjects/LoginPage.js';


Given('I am on the login screen', async function () {
    await navigateToLoginScreen();
    await verifyLoginPageIsDisplayed();
});

Then('I should be able to see the home screen', async function () {
    await verifyAfterLoginPage();
});

Then('I should see error {string}', async function (errorMsg) {
    await verifyErrorMsg(errorMsg);
});

Given('I fill the login form with {string} and {string}', async function (username, password) {
    await submitCredentials(username, password);
});

Given('I fill the login form with valid username {string}', async function (username) {
    await submitCredentials(username, PASSWORD);
});

Then('Verify error message {string} is shown', async function (errorMsg) {
    await verifyErrorMsg(errorMsg);
});
