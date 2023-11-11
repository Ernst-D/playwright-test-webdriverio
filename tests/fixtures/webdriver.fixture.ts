import { remote  } from "webdriverio";
import { test as base } from "@playwright/test";
import { WebdriverConfig } from "../../types";

type BaseFixture = {
    driver: WebdriverIO.Browser,
}

export const test = base.extend<BaseFixture & WebdriverConfig>({
    webdriver: [ { capabilities:{} }, { option: true } ],

    driver: async ({ webdriver }, use) => {
        const driver = await remote(webdriver);

        await use(driver);
        await driver.deleteSession();
    },
});

export { expect } from "@playwright/test";