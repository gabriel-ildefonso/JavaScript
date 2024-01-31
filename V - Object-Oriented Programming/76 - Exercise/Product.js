class Product{
    constructor(name, description, price){
        this.name = name
        this.description = description
        this.price = price
        this.inStock = 0
    }

    addToStock(quantity){
        this.inStock += quantity 
    }

    calculateDiscount(discount){
        return this.price * ((100 - discount) /100)
    }
}

//testing
const tv = new Product("smartTV", "it's just a tv", "100")

tv.addToStock(99)
const priceWithDiscount = tv.calculateDiscount(15)
console.log(tv)
console.log(priceWithDiscount)