exports.orangehrmlogin =
class orangehrmlogin 
{
    constructor (page)
    {
        this.page=page;
        this.usernameInput='//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[1]/div/div[2]/input';
        this.passwordInput='//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[2]/div/div[2]/input';
        this.loginbutton='//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[3]/button';
    }
    async gotologinpage ()
    {
        await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    
    }
    async login(username,password)
    {
        await this.page.locator(this.usernameInput).fill(username);
        await this.page.locator(this.passwordInput).fill(password);
        await this.page.locator(this.loginbutton).click();
    }
}
//module.exports = { orangehrmlogin};