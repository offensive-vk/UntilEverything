//Example of super keyword in javascript
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }

    speak() {
        console.log(`${this.name} barks.`);
    }

    displayBreed() {
        console.log(`${this.name} is a ${this.breed}.`);
    }
}

const dog = new Dog("Buddy", "Labrador");
dog.speak();
dog.displayBreed(); 
