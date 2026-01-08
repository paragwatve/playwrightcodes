const{test,expect} =require('@playwright/test')
let page;

test.beforeEach('Hooks 1',async({browser})=>{
    page=await browser.newPage();
    await page.goto('https://www.demoblaze.com/');
    await page.locator("#login2").click();
    await page.locator("#loginusername").fill('pavanol');
    await page.locator("#loginpassword").fill('test@123');
    await page.locator('//*[@id="logInModal"]/div/div/div[3]/button[2]').click();
})
test.afterEach(async()=>{
    await page.locator('#logout2').click();
})
test('Homepage Test',async()=>{
    const products = await page.$$('.hrefch');
    expect (products).toHaveLength(9);
})
test('Add to Cart',async()=>{
    await page.locator('//*[@id="tbodyid"]/div[1]/div/div/h4/a').click();
    await page.locator('//*[@id="tbodyid"]/div[2]/div/a').click();

    page.on('dialog',async dialog=>{
        expect (dialog.message()).toContain('Product added.')
        await dialog.accept();
    })
})