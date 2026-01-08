const { test, expect } = require('@playwright/test');

test('mousehover', async ({ page }) => {
    await page.goto("https://www.amazon.com/");
    await page.locator("//div[@id='nav-link-accountList']").hover();
    await page.waitForTimeout(3000);
    await page.locator('//*[@id="nav-flyout-ya-signin"]/a/span').click();
    await page.waitForTimeout(3000);
    expect(page.locator('//*[@id="nav-flyout-ya-signin"]/a/span')).toBeTruthy();
})