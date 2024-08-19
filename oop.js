// class Person {
//     constructor (name, age, job){
//         this.name = name;
//         this.age = age;
//         this.job = job;
//     }


// talk() {
//     console.log(`hi my names ${this.name}, 
// i am ${this.age} and my job is ${this.job}.`)
// }

// work() {
//     console.log (`i am going to work now as a ${this.job}.`)
// }
// }
// const dave = new Person ("dave", 43, "builder");
// dave.talk();

class Dog {
    constructor(name,breed,age) {
        this.name=name;
        this.breed=breed;
        this.age=age;
    }

    walk() {
        console.log (`taking ${this.name} the ${this.breed} for a walk`)
        return this;
    }

    eat() {
        console.log(`${this.name} has ate his food`)
        return this
    }

}

const stanley = new Dog ("stanley", "bulldog");
stanley.walk().eat();
