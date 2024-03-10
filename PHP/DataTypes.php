<?php

// String
$name = "John Doe";

// Integer
$age = 30;

// Float
$price = 19.99;

// Boolean
$isStudent = true;

// Array
$fruits = ["apple", "banana", "orange"];

// Object (simple example)
class Person
{
    public $name;
    public $age;

    function __construct($name, $age)
    {
        $this->name = $name;
        $this->age = $age;
    }

    function greet()
    {
        echo "Hello, my name is $this->name!";
    }
}

$john = new Person("John Doe", 30);

// NULL
$emptyValue = null;

// Resource (not commonly used directly)
$fileHandle = fopen("example.txt", "r");

echo "**Data Types:**\n";

echo " - String: $name\n";
echo " - Integer: $age\n";
echo " - Float: $price\n";
echo " - Boolean: $isStudent\n";

echo " - Array:\n";
print_r($fruits);

echo " - Object:\n";
$john->greet();

echo " - NULL: $emptyValue\n";

// Close resource (not shown in echo)
fclose($fileHandle);
?>