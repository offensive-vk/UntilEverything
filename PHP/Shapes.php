<?php 
// Defining an interface
interface Shape {
    public function calculateArea();
}

// Defining an abstract class that implements the Shape interface
abstract class AbstractShape implements Shape {
    protected $name;
    
    public function __construct($name) {
        $this->name = $name;
    }
    
    abstract public function calculateArea();
    
    public function display() {
        echo "This is a {$this->name}.\n";
        echo "Area: " . $this->calculateArea() . "\n";
    }
}

// Concrete classes that extend the abstract class
class Circle extends AbstractShape {
    private $radius;
    public function __construct($radius) {
        parent::__construct("Circle");
        $this->radius = $radius;
    }
    
    public function calculateArea() {
        return pi() * pow($this->radius, 2);
    }
}

class Square extends AbstractShape {
    private $side;
    
    public function __construct($side) {
        parent::__construct("Square");
        $this->side = $side;
    }
    
    public function calculateArea() {
        return pow($this->side, 2);
    }
}

// Using the classes
$circle = new Circle(5);
$square = new Square(4);

$circle->display();
$square->display();

?>