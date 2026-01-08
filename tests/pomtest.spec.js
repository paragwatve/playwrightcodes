import {test,expect} from '@playwright/test';
import {Loginpage} from '../pages/Loginpage';
import {Homepage} from '../pages/Homepage';
import {Cartpage} from '../pages/Cartpage';

test('pomtest',async({page})=>{
    //Login
    const login = new Loginpage(page);
    await login.gotologinpage();
    await login.login('pavanol','test@123');
    await page.waitForTimeout(5000);

    //Homepage
    const home = new Homepage(page);
    await home.addproducttocart("Nexus 6");
    await page.waitForTimeout(3000);
    await home.gotocart();

    //Cartpage
    const cart = new Cartpage(page);
    await page.waitForTimeout(3000);
    const status = await cart.checkproductincart('Nexus 6')
    expect (status).toBe(true);
})