exports.Parabankregister =
 class Parabankregister 
 {
    constructor(page) {
        this.page = page;
        this.registerlink = '//*[@id="loginPanel"]/p[2]/a';
        this.firstnameInput = '#customer\\.firstName';
        this.lastnameInput = '#customer\\.lastName';
        this.addressInput = '//*[@id="customer.address.street"]';
        this.cityInput = '//*[@id="customer.address.city"]';
        this.stateInput = '//*[@id="customer.address.state"]';
        this.zipcodeInput = '//*[@id="customer.address.zipCode"]';
        this.phonenumberInput = '//*[@id="customer.phoneNumber"]';
        this.ssnInput = '//*[@id="customer.ssn"]';
        this.usernameInput = '//*[@id="customer.username"]';
        this.passwordInput = '//*[@id="customer.password"]';
        this.registerbutton = '//*[@id="customerForm"]/table/tbody/tr[13]/td[2]/input';
    }
    async gotoregisterpage (){
        await this.page.goto("https://parabank.parasoft.com/parabank/index.htm");
    }
    async register(firstname,lastname,address,city,state,zipcode,phonenumber,ssn,username,password) 
    {
        await this.page.locator(this.registerlink).click();
        await this.page.locator(this.firstnameInput).fill(firstname);
        await this.page.locator(this.lastnameInput).fill(lastname);
        await this.page.locator(this.addressInput).fill(address);
        await this.page.locator(this.cityInput).fill(city);
        await this.page.locator(this.stateInput).fill(state);
        await this.page.locator(this.zipcodeInput).fill(zipcode);
        await this.page.locator(this.phonenumberInput).fill(phonenumber);
        await this.page.locator(this.ssnInput).fill(ssn);
        await this.page.locator(this.usernameInput).fill(username);
        await this.page.locator(this.passwordInput).fill(password);
        await this.page.locator(this.registerbutton).click();
    }
}
//module.exports = { Parabankregister };