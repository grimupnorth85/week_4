class Animal {
    constructor (name){
        this.name=name;
        this.health=100;
        this.hunger=100;
    }
    drinks(){
        this.health += 5;
        return this;
    }
    eats() {
        this.health += 5;
        this.hunger += 10;
        console.log (`${this.name}s health is currently ${this.health}`);
    }
    stats() {
        return console.table({
        name: this.name,
        health: this.health
        })
    }
}

const percy = new Animal("percy");
percy.drinks();
percy.eats()
percy.stats();

class Dog extends Animal {
    constructor (name, happy){
        super (name, happy);
        this.happy = happy;
    }
    playBall() {
        this.health += 10;
        this.hunger += 10;
        console.log(`${this.name} is playing with the ball`);
        return this;
    }
    walks() {
        console.log(`${this.name} has been out for a walk`)
        this.health += 10;
        return this;
    }
}

const pickle = new Dog("Pickle");
pickle.playBall()
pickle.walks()