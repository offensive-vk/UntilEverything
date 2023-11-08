abstract class Animal {
    abstract makeSound(): void;
    abstract move(): void;
}

class Dog extends Animal {
    makeSound(): void {
        console.log('Woof!');
    }
    move(): void {
        console.log('The dog is walking.');
    }
}
class Cat extends Animal {
    makeSound(): void {
        console.log('Meow!');
    }
    move(): void {
        console.log('The cat is jumping.');
    }
}

