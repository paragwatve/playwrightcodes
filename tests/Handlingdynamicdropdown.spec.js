const{test,expect} =require('@playwright/test')

test('Handling dynamic dropdown',async({page})=>{
    await page.goto("https://www.yatra.com/");
    await page.waitForTimeout(5000);
    await page.locator("span[class='style_cross__q1ZoV'] img[alt='cross']").click();
    await page.waitForTimeout(5000);
    await page.locator("p[title='New Delhi']").click();
    const departfrom = page.locator("#input-with-icon-adornment");
    await departfrom.clear({delay:1000});
    await departfrom.pressSequentially('New',{delay:1000});
    await page.locator("//span[normalize-space()='John F Kennedy Airport']").click();
    await page.waitForTimeout(5000);
})