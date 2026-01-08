const{test,expect} =require('@playwright/test')

test('Drag and Drop',async({page})=>{
    await page.goto("https://jqueryui.com/droppable/");
    const pageIframe = await page.frameLocator('//*[@id="content"]/iframe');
    const toDrag = await pageIframe.locator("//div[@id='draggable']");
    const toDrop = await pageIframe.locator("//div[@id='droppable']");
    await toDrag.dragTo(toDrop);    
})