exports.parabanklogin =
 class Parabanklogin 
 {
    constructor(page) 
    {
        this.page =page;
        this.usernameInput = '#loginPanel > form > div:nth-child(2) > input';
        this.passwordInput = '#loginPanel > form > div:nth-child(4) > input';
        this.loginbutton = '#loginPanel > form > div:nth-child(5) > input';
    }
    async gotologinpage ()
    {
        await this.page.goto("https://parabank.parasoft.com/parabank/index.htm");
    }
    async login (username,password)
    {
        await this.page.locator(this.usernameInput).fill(username);
        await this.page.locator(this.passwordInput).fill(password);
        await this.page.locator(this.loginbutton).click();
    }
 }
 //module.exports = { Parabanklogin };