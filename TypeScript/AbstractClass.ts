// This interface defines the properties and methods that all animals must have.
interface Animal {
    name: string;
    speak(): void;
}

// This abstract class implements the Animal interface and defines a method called eat().
abstract class AbstractAnimal implements Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
    speak() { };
        
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
}

// This function creates an instance of the Dog class and calls the speak() and eat() methods.
function main() {
    const dog = new Dog("Raccoon");
    console.log(dog.speak());
    console.log(dog.eat());
}

main();
export { }