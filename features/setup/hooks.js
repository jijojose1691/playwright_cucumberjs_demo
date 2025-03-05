import { BeforeAll, Before, AfterStep, Status, setDefaultTimeout } from '@cucumber/cucumber';
import logger from '../support/logger.js';

setDefaultTimeout(60000);

import { chromium, firefox, webkit } from '@playwright/test';
BeforeAll(async function () {
    let options = { headless: false }
    switch (process.env.BROWSER) {
        case 'chrome':
            global.browser = await chromium.launch(options);
            break;
        case 'firefox':
            global.browser = await firefox.launch(options);
            break;
        case 'webkit':
            global.browser = await webkit.launch(options);
            break;
        default:
            global.browser = await chromium.launch(options);
            break;
    }
});

Before(async function (scenario) {
    logger.info(
        `The scenario ${JSON.stringify(scenario.pickle.name)} is starting`
    );
    global.context = await global.browser.newContext({
        permissions: ['clipboard-read', 'clipboard-write'],
        acceptDownloads: true,
    });
    global.page = await global.context.newPage();
    await global.context.tracing.start({ screenshots: true, snapshots: true });
    global.logger = logger;
});

AfterStep(async function ({ result }) {
    if (result.status === Status.FAILED) {
        const buffer = await this.page.screenshot();
        await this.page.screenshot({ path: `reports/${scenario.pickle.name}.png`, fullPage: true });
        this.attach(buffer.toString('base64'), 'base64:image/png');
    }
});
