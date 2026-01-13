import {test, expect} from '@playwright/test';
import { Parabankregister } from '../pages/Parabankregister';
import { parabanklogin } from '../pages/Parabanklogin';

test("parabank register and login", async ({page})=>
{
    //Register
    const register = new Parabankregister (page);
    await register.gotoregisterpage();
    await register.register("suraj","shinde","117 asara society","mumbai","maharashtra","400003","9876543201","1234","surajshinde","test#123");
    await page.waitForTimeout(5000);

    //Login
    const login = new parabanklogin (page);
    await login.gotologinpage();
    await login.login("surajshinde","test#123");
    await page.waitForTimeout(5000);
    await expect(page).toHaveURL("https://parabank.parasoft.com/parabank/login.htm");
});