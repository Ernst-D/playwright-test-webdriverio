import { test, expect } from "./fixtures/webdriver.fixture";

test("Navigate to example domain", async ({ driver })=>{
    await driver.navigateTo("https://example.com");
    debugger;
    const title = await driver.getTitle()
    expect(title).not.toBe(undefined);
    debugger
})