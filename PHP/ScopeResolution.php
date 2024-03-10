<?php

class MathOperations {
    const PI = 3.14159;
    public static $counter = 0;

    public static function incrementCounter() {
        self::$counter++;
    }

    public static function areaOfCircle($radius) {
        return self::PI * ($radius ** 2);
    }
}

// Accessing class constant using ::
echo "The value of PI is: " . MathOperations::PI . "\n"; // Outputs "The value of PI is: 3.14159"

// Accessing and modifying static property using ::
echo "Counter before increment: " . MathOperations::$counter . "\n"; // Outputs "Counter before increment: 0"
MathOperations::incrementCounter();
echo "Counter after increment: " . MathOperations::$counter . "\n"; // Outputs "Counter after increment: 1"

// Calling static method using ::
$radius = 5;
$area = MathOperations::areaOfCircle($radius);
echo "The area of the circle with radius $radius is: $area"; // Outputs "The area of the circle with radius 5 is: 78.53975"

?>
