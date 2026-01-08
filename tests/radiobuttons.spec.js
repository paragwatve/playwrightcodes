const{test,expect} =require('@playwright/test')

test('Radiobuttons',async({page})=>{
    await page.goto("https://demo.automationtesting.in/Register.html");
    await page.locator("input[value='Male']").click();
    await expect (page.locator("input[value='Male']")).toBeChecked();
    await page.waitForTimeout(5000);
    await page.locator("input[value='FeMale']").click();
    await expect (page.locator("input[value='FeMale']")).toBeChecked();
    await page.waitForTimeout(5000);

})