exports.Homepage = 
class Homepage {

    constructor(page){
        this.page = page;
        this.productlist = '//*[@id="tbodyid"]/div/div/div/h4/a';
        this.addtocartbtn = "//a[normalize-space()='Add to cart']";
        this.cart = "#cartur";
    }
    async addproducttocart(productname){
        const productlist = await this.page.$$(this.productlist);
        for(const product of productlist) {
            if (productname=== await product.textContent()){
                await product.click()
                break;
            }
        }
        await this.page.on('dialog',async dialog=>{
            if(dialog.message().includes('added')){
                await dialog.accept();
            }
        })
        await this.page.locator(this.addtocartbtn).click();
    }
    async gotocart(){
        await this.page.locator(this.cart).click();
    }
}