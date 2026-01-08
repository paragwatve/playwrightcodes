const{test,expect} =require('@playwright/test')

test('Parabank test',async({page})=>{
    await page.goto("https://parabank.parasoft.com/parabank/index.htm");
    await page.getByRole("link",{name:("Register")})
})