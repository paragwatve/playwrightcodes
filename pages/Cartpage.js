exports.Cartpage =
class Cartpage {

    constructor (page){
        this.page =page;
        this.noofproducts='//tbody[@id="tbodyid"]/tr/td[2]';
    }
    async checkproductincart(productname){
        const productsincart = await this.page.$$(this.noofproducts)
        for (const product of productsincart) {
            console.log(await product.textContent())
            if(productname=== await product.textContent()) {
                return true;
                break;
            }
        }
    }
}