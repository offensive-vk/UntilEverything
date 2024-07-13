// This interface defines the properties and methods that all animals must have.
interface Animal {
    name: string | any;
    type: string | Animal;
    speak(): void;
    sleep(): void;
}

// This abstract class implements the Animal interface and defines a method called eat().
abstract class AbstractAnimal implements Animal {
    name: string;
    type: string | Animal;
    constructor(n: string, t: string) {
        this.name = n;
        this.type = t;
    }
    speak() { };
    sleep() { };
    abstract eat(): void;
}

// This class extends the AbstractAnimal class and implements the eat() method.
class Dog extends AbstractAnimal {
    eat() {
        return `${this.name} is eating!`;
    }
    speak() {
        return `${this.name} is speaking !`;
    }
    sleep() {
        return `${this.name} of type ${this.type} is sleeping.`;
    }
}

// This function creates an instance of the Dog class and calls the speak() and eat() methods.
function main() {
    const dog = new Dog("Raccoon", "Dog");
    console.log(dog.speak());
    console.log(dog.eat());
    console.log(dog.sleep());
}

main();
export { }