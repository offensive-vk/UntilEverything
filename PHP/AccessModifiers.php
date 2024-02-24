<?php 
class AccessModifiersDemo {
    public $publicVar = "Public";          // Public variable
    protected $protectedVar = "Protected"; // Protected variable
    private $privateVar = "Private";       // Private variable
    
    public function publicMethod() {
        echo "This is a public method.\n";
    }

    protected function protectedMethod() {
        echo "This is a protected method.\n";
    }

    private function privateMethod() {
        echo "This is a private method.\n";
    }

    public function accessAllModifiers() {
        echo "Public variable: " . $this->publicVar . "\n";
        echo "Protected variable: " . $this->protectedVar . "\n";
        echo "Private variable: " . $this->privateVar . "\n";

        $this->publicMethod();
        $this->protectedMethod();
        $this->privateMethod();
    }
}

$demo = new AccessModifiersDemo();
// Accessing public variable and method
echo $demo->publicVar . "\n";        // Output: Public
$demo->publicMethod();               // Output: This is a public method.

// Attempting to access protected variable and method (outside the class)
// Uncommenting the lines below will result in an error.
// echo $demo->protectedVar . "\n";  // Error: Cannot access protected property
// $demo->protectedMethod();         // Error: Call to protected method

// Attempting to access private variable and method (outside the class)
// Uncommenting the lines below will result in an error.
// echo $demo->privateVar . "\n";    // Error: Cannot access private property
// $demo->privateMethod();           // Error: Call to private method

// Accessing all modifiers through a public method
$demo->accessAllModifiers();

?>