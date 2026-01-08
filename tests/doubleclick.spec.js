const{test,expect} =require('@playwright/test')

test('Double click',async({page})=>{
     await page.goto("https://qa-practice.netlify.app/double-click");
     const doubleclick = await page.locator('//*[@id="double-click-btn"]');
     doubleclick.dblclick();
     await page.waitForTimeout(5000);
})