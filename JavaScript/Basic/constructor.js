class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

const person1 = new Person("John", 30);
person1.sayHello(); // Output: Hello, my name is John and I am 30 years old.

const person2 = new Person("Jane", 25);
person2.sayHello();
