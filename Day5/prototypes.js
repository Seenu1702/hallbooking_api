// before es6 we have this function prototype
// // function prototype
function Person(name) {
    this.name = name;
    console.log(name);
}


Person.prototype.greet = function () {
     console.log(`Hello, my name is ${this.name}`);
}

let person101 = new Person('Krish');

person101.greet();