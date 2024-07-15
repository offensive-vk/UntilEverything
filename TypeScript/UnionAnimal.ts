// Base interface for Animal
interface Animal {
    name: string;
    sound: string;
}

// Derived interfaces using union types
interface Dog extends Animal {
    kind: "dog";
}

interface Cat extends Animal {
    kind: "cat";
}

// Usage example
function makeSound(animal: Dog | Cat) {
    console.log(`${animal.name} says ${animal.sound}`);
}

const dog: Dog = { kind: "dog", name: "Buddy", sound: "Woof!" };
const cat: Cat = { kind: "cat", name: "Whiskers", sound: "Meow!" };

makeSound(dog); // Output: Buddy says Woof!
makeSound(cat); // Output: Whiskers says Meow!
export { };