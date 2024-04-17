const { Before, AfterStep, Status, setDefaultTimeout } = require('@cucumber/cucumber');
const { env } = process;
const logger = require('../support/logger');

setDefaultTimeout(60000);

const playwright = require('@playwright/test');
Before(async function (scenario) {
    logger.info(
        `The scenario ${JSON.stringify(scenario.pickle.name)} is starting`
    )
    let options = { headless: false }
    switch (env.BROWSER) {
        case 'chrome':
            this.browser = await playwright.chromium.launch(options);
            break;
        case 'firefox':
            this.browser = await playwright.firefox.launch(options);
            break;
        case 'webkit':
            this.browser = await playwright.webkit.launch(options);
            break;
        default:
            this.browser = await playwright.chromium.launch(options);
            break;
    }
    const context = await this.browser.newContext();
    this.page = await context.newPage();
    this.logger = logger
});


AfterStep(async function ({ result }) {
    if (result.status === Status.FAILED) {
        const buffer = await this.page.screenshot();
        await this.page.screenshot({ path: `reports/${scenario.pickle.name}.png`, fullPage: true });
        this.attach(buffer.toString('base64'), 'base64:image/png');
    }
});
