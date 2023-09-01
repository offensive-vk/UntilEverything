<?php 
interface Shape {
    public function calculateArea();
}

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

$circle = new Circle(5103);
$square = new Square(4393);

$circle->display();
$square->display();

?>