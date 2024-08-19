class coffeeShopTill {
    constructor (drink, price){
        this.drink=drink;
        this.price=price;
    }
    order() {
        console.log(`the drinks order consists of ${this.drink}`);
        return this;
    };
    priceTotal() {
        console.log(`the order of ${this.drink} will cost £${this.price}`);
        return this;
    };
}

const drinksBought = new coffeeShopTill ('tea', 5);
drinksBought.order().priceTotal();
