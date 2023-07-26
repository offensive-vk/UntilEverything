// Base interface for Animal
interface Animal {
    name: string;
    sound: string;
    makeSound(): void;
}

// Base class implementing the Animal interface
class BaseAnimal implements Animal {
    constructor(public name: string, public sound: string) { }

    makeSound() {
        console.log(`${this.name} says ${this.sound}`);
    }
}

// Derived class Dog, extending from BaseAnimal
class Dog extends BaseAnimal {
    constructor(name: string) {
        super(name, "Woof!");
    }
}

// Derived class Cat, extending from BaseAnimal
class Cat extends BaseAnimal {
    constructor(name: string) {
        super(name, "Meow!");
    }
}

// Usage example
const dog = new Dog("Buddy");
const cat = new Cat("Cute");

dog.makeSound(); // Output: Buddy says Woof!
cat.makeSound(); // Output: Whiskers says Meow!
