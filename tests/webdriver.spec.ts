import { test, expect } from "./fixtures/webdriver.fixture";

test("Navigate to example domain", async ({ driver }, testInfo)=>{
    await driver.navigateTo("https://example.com");
    debugger;
    const title = await driver.getTitle()
    expect(title).not.toBe(undefined);
    const screenshot = await driver.saveScreenshot("./screen.png");
    await testInfo.attach("webdriver screenshot", { body: screenshot, contentType:"image/png" });
    debugger
})