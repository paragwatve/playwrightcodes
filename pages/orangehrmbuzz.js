exports.orangehrmbuzz =
class orangehrmbuzz
{
    constructor(page)
    {
        this.page=page;
        this.buzzlink='//*[@id="app"]/div[1]/div[1]/aside/nav/div[2]/ul/li[12]/a';
        this.postbox='//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div/div[1]/div[1]/div[2]/form/div/textarea';
        this.postbutton='//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div/div[1]/div[1]/div[2]/form/div/div/button';
    }
    async gotobuzzpage()
    {
        await this.page.locator(this.buzzlink).click();
        await this.page.waitForTimeout(3000);
    }
    async postbuzz(buzzmessage)
    {
        await this.page.locator(this.postbox).fill(buzzmessage);
        await this.page.locator(this.postbutton).click();
    }
}