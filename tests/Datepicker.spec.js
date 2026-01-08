const{test,expect} =require('@playwright/test')

test.skip('Datepicker',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.locator('#datepicker').fill("09/15/2025");
    await page.waitForTimeout(3000);

})
test('Datepicker1',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    const year = "2025";
    const month = "March";
    const date = "12";

    await page.click("#datepicker");

    while(true)
    {
        const currentyear = await page.locator('.ui-datepicker-year').textContent();
        const currentmonth = await page.locator('.ui-datepicker-month').textContent();

        if(currentyear==year && currentmonth==month)
        {
            break;
        }
        await page.locator('//*[@id="ui-datepicker-div"]/div/a[1]/span').click();
    }
    const dates= await page.$$("//a[@class='ui-state-default']")

    for(const dt of dates)
    {
        if(await dt.textContent()==date)
        {
            await dt.click();
            break;
        }
    }
        await page.waitForTimeout(3000);
})