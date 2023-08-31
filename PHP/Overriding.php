<?php 
class Shape {
    public function area() {
        return 0; // Default implementation
    }
}

class Circle extends Shape {
    private $radius;
    
    public function __construct($radius) {
        $this->radius = $radius;
    }
    
    public function area() {
        return pi() * pow($this->radius, 2);
    }
}

class Square extends Shape {
    private $side;
    
    public function __construct($side) {
        $this->side = $side;
    }
    
    public function area() {
        return pow($this->side, 2);
    }
}

$circle = new Circle(5);
$square = new Square(4);

echo "Circle Area: " . $circle->area() . "\n";
echo "Square Area: " . $square->area() . "\n";

?>