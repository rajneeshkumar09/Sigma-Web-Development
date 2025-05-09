// let obj = {
//     a: 1,
//     b: "Abhishek"
// }

// console.log(typeof(obj), obj);

// let animal = {
//     eats: true
// };

// let rabbit = {
//     jumps: true
// };

// rabbit.__proto__ = animal; //sets rabbit.[[prototype]] : animal


class Animal {
    constructor(name) {
        this.name = name;
        console.log('Object is created...');
    };

    eats() {
        console.log('Kha rha hu');
    };

    jumps() {
        console.log('kood rha hu');
    };
};

class Lion extends Animal{
    constructor(name) {
        super(name);
        console.log('Object is created and he is a lion');
    };

    /* Method Overriding */ 
    eats() {
        super.eats();
        console.log('Kha rha hu ROAR');
    }
};

let a = new Animal("Bunny");
console.log(a);

let l = new Lion("Shera")
console.log(l);