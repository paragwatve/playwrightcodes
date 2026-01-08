const{test,expect} =require('@playwright/test')

test('Handling static dropdown',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.locator("#country").selectOption("China");

})