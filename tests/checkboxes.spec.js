const{test,expect} =require('@playwright/test')

test('Checkboxes',async({page})=>{
    await page.goto("https://demo.automationtesting.in/Register.html");
    await page.locator("#checkbox1").check();
    await expect(page.locator("#checkbox1")).toBeChecked();
    await page.waitForTimeout(5000);
    await page.locator("#checkbox2").check();
    await expect(page.locator("#checkbox2")).toBeChecked();
    await page.waitForTimeout(5000);
    await page.locator("#checkbox2").uncheck();
    await expect(page.locator("#checkbox2")).not.toBeChecked();
    await page.waitForTimeout(5000);
    await page.locator("#checkbox3").check();
    await expect(page.locator("#checkbox3")).toBeChecked();
})