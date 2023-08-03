// Usage example
function makeSound(animal) {
    console.log("".concat(animal.name, " says ").concat(animal.sound));
}
var dog = { kind: "dog", name: "Buddy", sound: "Woof!" };
var cat = { kind: "cat", name: "Whiskers", sound: "Meow!" };
makeSound(dog); // Output: Buddy says Woof!
makeSound(cat); // Output: Whiskers says Meow!
