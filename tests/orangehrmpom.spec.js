import {test,expect} from '@playwright/test';
import { orangehrmlogin } from '../pages/orangehrmlogin';
import { orangehrmbuzz } from '../pages/orangehrmbuzz';

test("orangehrm login and post buzz",async({page})=>{
    //Login
    const loginpage = new orangehrmlogin(page);
    await loginpage.gotologinpage();
    await loginpage.login("Admin","admin123");
    await page.waitForTimeout(5000);
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");

    //Post Buzz
    const buzzpage = new orangehrmbuzz(page);
    await buzzpage.gotobuzzpage();
    await buzzpage.postbuzz("Hello World");
    await page.waitForTimeout(5000);
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/buzz/viewBuzz");
})