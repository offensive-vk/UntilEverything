<?php 
// Single level inheritance in PHP
class Vehicle {
    protected $brand;
    protected $color;

    public function __construct($brand, $color) {
        $this->brand = $brand;
        $this->color = $color;
    }

    public function displayInfo() {
        echo "Brand: " . $this->brand . "<br>";
        echo "Color: " . $this->color . "<br>";
    }
}

class Car extends Vehicle {
    private $numDoors;

    public function __construct($brand, $color, $numDoors) {
        parent::__construct($brand, $color);
        $this->numDoors = $numDoors;
    }

    public function displayInfo() {
        parent::displayInfo();
        echo "Number of Doors: " . $this->numDoors . "<br>";
    }
}

// Usage:
$car = new Car("Nissan GTR", "Blue", 2);
$car->displayInfo();

?>