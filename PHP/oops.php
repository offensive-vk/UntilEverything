<?php 
//  public function __construct($width, $height) {}
// is a constructor on rectangle class.

class Rectangle {
    private $width;
    private $height;

    public function __construct($width, $height) {
        $this->width = $width;
        $this->height = $height;
    }

    public function getArea() {
        return $this->width * $this->height;
    }

    public function getPerimeter() {
        return 2 * ($this->width + $this->height);
    }
}

// Create an object of the Rectangle class
$rectangle = new Rectangle(5, 3);

// Access properties and methods of the object
echo "Area: " . $rectangle->getArea() . "\n";
echo "Perimeter: " . $rectangle->getPerimeter() . "\n";


?>