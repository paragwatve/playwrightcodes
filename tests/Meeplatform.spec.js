const{test,expect} =require('@playwright/test')

test('MEE App',async({page})=>{
  await page.goto('https://meeqa.macmillaneducationeverywhere.com');
  await page.getByRole('button', { name: 'Accept all cookies' }).click();
  await page.locator("#Primary2").click();
  await page.locator("#username").fill("opt.dm");
  await page.locator("#password").fill("password1234");
  await page.locator("//button[normalize-space()='Log in']").click();
  await page.waitForTimeout(3000);
  await page.locator("#checkbox1").click();
  await expect(page.locator("#checkbox1")).toBeChecked();
  await page.locator("#Yes").click();
  await page.waitForTimeout(3000);

  // Clicking Placement test
  await page.locator('//*[@id="u1csob52b71ffu2zumqx"]').click();
  await page.locator("#opt").click();
  await expect(page.locator('//*[@id="teacher_dashboardTitle"]/span')).toHaveText("Dashboard");
  await page.waitForTimeout(3000);

  // Edit Test
  await page.locator('//*[@id="dropdownId00"]/span').click();
  await page.locator('//*[@id="179340"]/div[2]/div/maced-dropdown/div/div/div[2]/ul/li[1]/div/a').hover();
  await page.click('//*[@id="179340"]/div[2]/div/maced-dropdown/div/div/div[2]/ul/li[1]/div/a')
  await page.waitForTimeout(3000);

})
