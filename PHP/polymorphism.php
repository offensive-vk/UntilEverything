<?php 
//Program demonstrates the functionality of polymorphic behaviour in PHP
interface Shape {
    public function calculateArea();
}

class Rectangle implements Shape {
    private $length;
    private $width;

    public function __construct($length, $width) {
        $this->length = $length;
        $this->width = $width;
    }

    public function calculateArea() {
        return $this->length * $this->width;
    }
}

class Circle implements Shape {
    private $radius;

    public function __construct($radius) {
        $this->radius = $radius;
    }

    public function calculateArea() {
        return pi() * $this->radius * $this->radius;
    }
}

// Usage:
$rectangle = new Rectangle(5, 8);
$circle = new Circle(3);

echo "Rectangle Area: " . $rectangle->calculateArea() . "<br>";
echo "Circle Area: " . $circle->calculateArea() . "<br>";

?>