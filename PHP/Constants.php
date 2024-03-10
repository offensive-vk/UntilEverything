<?php

// Define constants
define("PI", 3.14159);
define("GREETING", "Hello, World!");

// Access constants
echo "The value of PI is: " . PI . "\n"; // Outputs "The value of PI is: 3.14159"
echo GREETING . "\n"; // Outputs "Hello, World!"

// Constants are case-sensitive
define("welcome", "Welcome to PHP!");
echo welcome . "\n"; // Outputs "Welcome to PHP!"
echo WELCOME . "\n"; // Outputs nothing, because WELCOME is not defined

// Constants can be used in expressions
$r = 5;
$area = PI * ($r * $r);
echo "The area of the circle with radius $r is: $area"; // Outputs "The area of the circle with radius 5 is: 78.53975"

// Constants can be defined in a case-insensitive manner
define("GREETING_CASE_INSENSITIVE", "Hello, World!", true);
echo greeting_case_insensitive . "\n"; // Outputs "Hello, World!"
echo GREETING_CASE_INSENSITIVE . "\n"; // Outputs "Hello, World!"
echo Greeting_Case_Insensitive . "\n"; // Outputs "Hello, World!"

?>

<?php

// Define class with constants
class MathConstants {
    const PI = 3.14159;
    const GREETING = "Hello, World!";
}

// Access class constants
echo "The value of PI is: " . MathConstants::PI . "\n"; // Outputs "The value of PI is: 3.14159"
echo MathConstants::GREETING . "\n"; // Outputs "Hello, World!"

// Constants are case-sensitive
echo MathConstants::pi . "\n"; // Outputs nothing, because pi is not defined

// Constants can be used in expressions
$r = 5;
$area = MathConstants::PI * ($r * $r);
echo "The area of the circle with radius $r is: $area"; // Outputs "The area of the circle with radius 5 is: 78.53975"

?>
