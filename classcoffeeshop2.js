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

class customer {
    constructor (name, totalCashPre, totalCashPost){
        this.name=name;
        this.totalCashPre=totalCashPre;
        this.totalCashPost=totalCashPost;
    }
    spend() {
        console.log(`${this.price} will be taken from ${this.totalCashPre}, leaving ${this.totalCashPost}`)
    }
    spent() {
        console.log(`${this.totalCashPost} remaining`)
    }
}

// thanks to chatgpt for this bit lol
// const drinksList = {
    
// }

// const drinksBought = new coffeeShopTill (drinksList[2]);
// drinksBought.order().priceTotal();
