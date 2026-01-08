const{test,expect} =require('@playwright/test')

test.skip('Simple alert',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    // Enabling alert handling
    page.on('dialog',async dialog=>{
        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain('I am an alert box!');
        await dialog.accept();
    })
await page.click("#alertBtn");
await page.waitForTimeout(3000);

})
test.skip('Confirmation alert',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    // Enabling alert handling
    page.on('dialog',async dialog=>{
        expect(dialog.type()).toContain('confirm');
        expect(dialog.message()).toContain('Press a button!');
        await dialog.accept();
        //await dialog.dismiss();
    })
await page.click("#confirmBtn");
await page.waitForTimeout(3000);
})
test('Prompt alert',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    // Enabling alert handling
    page.on('dialog',async dialog=>{
        expect(dialog.type()).toContain('prompt');
        expect(dialog.message()).toContain('Please enter your name:');
        expect (dialog.defaultValue()).toContain("Harry Potter")
        await dialog.accept('john');
    })
await page.click("#promptBtn");
await expect(page.locator('//*[@id="demo"]')).toHaveText("Hello john! How are you today?");
await page.waitForTimeout(3000);
})