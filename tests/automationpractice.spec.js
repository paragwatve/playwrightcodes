const {test,expect} = require('@playwright/test');

const testdata = require('../testdata.json');

test.describe('Test automation', () => 
{
    for (const data of testdata) 
    {
        test.describe(`Testing with data ${data.id}`,function()
        {
            test('Practice test', async ({page}) =>
            {
                await page.goto('https://testautomationpractice.blogspot.com/');
                await page.locator('#name').fill(data.name);
                await page.locator('#email').fill(data.email);
                await page.locator('#phone').fill(data.phone);
                await page.locator('#textarea').fill(data.address);
                await expect(page).toHaveURL('https://testautomationpractice.blogspot.com/');
                //await page.pause();
            })
        })
    }
})
