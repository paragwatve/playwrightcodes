exports.Loginpage =
 class Loginpage{

    constructor(page) {
        this.page = page;
        this.loginlink = "#login2";
        this.usernameInput ="#loginusername";
        this.passwordInput = "#loginpassword";
        this.loginbutton = '//*[@id="logInModal"]/div/div/div[3]/button[2]';
    }

    async gotologinpage (){
        await this.page.goto("https://demoblaze.com/");
    }
    async login (username,password) {
        await this.page.locator(this.loginlink).click();
        await this.page.locator( this.usernameInput).fill(username);
        await this.page.locator(this.passwordInput).fill(password);
        await this.page.locator(this.loginbutton).click();
    }

}
//module.exports = { Loginpage };