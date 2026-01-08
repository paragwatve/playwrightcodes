const { test, expect } = require('@playwright/test');

test('iframes', async ({ page }) => {
  await page.goto("https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onclick");
  // Use frameLocator to directly target elements inside the iframe
  const frame = page.frameLocator('#iframeResult');
  // Click the button inside the iframe
  await frame.locator("button[onclick='myFunction()']").click();
  // Verify the result (the paragraph text changes after click)
  const resultText = await frame.locator("#demo").textContent();
  expect(resultText).toContain("Hello World");
  await page.waitForTimeout(5000);
  await page.locator("//button[@id='runbtn']").click();
  expect(page.locator("//button[@id='runbtn']")).toBeTruthy();
})