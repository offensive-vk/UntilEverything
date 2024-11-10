abstract class Animal {
  abstract makeSound(): void;
  abstract move(): void;
}

class Dog extends Animal {
  makeSound(): void {
    console.log("Woof!");
  }
  move(): void {
    console.log("The dog is walking.");
  }
}
class Cat extends Animal {
  makeSound(): void {
    console.log("Meow!");
  }
  move(): void {
    console.log("The cat is jumping.");
  }
}

class Snake extends Animal {
  makeSound(): void {
    console.log("Hisss!");
  }
  move(): void {
    console.log("The snake is slithering.");
  }
}

abstract class Action<T extends Animal> {
  abstract execute(animal: T): void;
}

class MakeSound<T extends Animal> extends Action<T> {
  execute(animal: T): void {
    animal.makeSound();
  }
}

class Move<T extends Animal> extends Action<T> {
  execute(animal: T): void {
    animal.move();
  }
}

class TestAnimal<T extends Animal> {
  constructor(private action: Action<T>, private animal: T) {}

  PerformAction(): void {
    this.action.execute(this.animal);
  }
}

// Test
let testDog = new TestAnimal(new MakeSound<Dog>(), new Dog());
testDog.PerformAction();

let testCat = new TestAnimal(new Move<Cat>(), new Cat());
testCat.PerformAction();

let testSnake = new TestAnimal(new MakeSound<Snake>(), new Snake());
testSnake.PerformAction();
export {};
