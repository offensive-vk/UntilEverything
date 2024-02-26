<?php

// Define a namespace
namespace MyNamespace;

// Define a class within the namespace
class MyClass {
    public function __construct() {
        echo "Object of MyClass created!\n";
    }
}

// Define a function within the namespace
function myFunction() {
    echo "Function myFunction() called!\n";
}

// Using the class and function within the namespace
$obj = new MyClass(); // Outputs: Object of MyClass created!
myFunction(); // Outputs: Function myFunction() called!

// Using fully qualified namespace path
$obj = new MyNamespace\MyClass(); // Outputs: Object of MyClass created!
MyNamespace\myFunction(); // Outputs: Function myFunction() called!

// Using "use" keyword to alias a namespace
use MyNamespace as AliasNamespace;

$obj = new AliasNamespace\MyClass(); // Outputs: Object of MyClass created!
AliasNamespace\myFunction(); // Outputs: Function myFunction() called!

// Using "use" keyword to import specific class or function
use MyNamespace\MyClass;
use function MyNamespace\myFunction as myFunc;

$obj = new MyClass(); // Outputs: Object of MyClass created!
myFunc(); // Outputs: Function myFunction() called!

// Using nested namespaces
namespace MyNamespace\SubNamespace;

class SubClass {
    public function __construct() {
        echo "Object of SubClass created!\n";
    }
}

// Using fully qualified namespace path for nested namespace
$obj = new \MyNamespace\SubNamespace\SubClass(); // Outputs: Object of SubClass created!

?>
