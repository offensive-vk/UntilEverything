<?php
// Parent class
class Animal {
    protected $name;
    protected $sound;

    // Constructor
    public function __construct($name, $sound) {
        $this->name = $name;
        $this->sound = $sound;
    }

    // Method to make the animal speak
    public function speak() {
        return $this->name . " says " . $this->sound . "!<br>";
    }
}

// Child class inheriting from Animal
class Dog extends Animal {
    public function fetch() {
        return $this->name . " is fetching.<br>";
    }
}

// Child class inheriting from Animal
class Cat extends Animal {
    public function climb() {
        return $this->name . " is climbing.<br>";
    }
}

// Creating objects
$dog = new Dog("Doggy", "Woof");
$cat = new Cat("Kitty", "Meow");

// Using polymorphism
$animals = [$dog, $cat];
foreach ($animals as $animal) {
    echo $animal->speak();
    
    // Checking for specific methods
    if ($animal instanceof Dog) {
        echo $animal->fetch();
    } elseif ($animal instanceof Cat) {
        echo $animal->climb();
    }
}

?>

/**

Class: Animal, Dog, and Cat are classes representing different types of animals.
Object: $dog and $cat are objects created from the Dog and Cat classes, respectively.
Inheritance: Dog and Cat classes inherit properties and methods from the Animal class.
Encapsulation: Properties ($name and $sound) are declared as protected, encapsulating them within the class and preventing direct access from outside the class.
Polymorphism: The speak() method is overridden in the child classes Dog and Cat, demonstrating polymorphism.
Constructor: The __construct() method is used as a constructor to initialize object properties.
Method Overriding: speak() method is overridden in child classes Dog and Cat.

*/