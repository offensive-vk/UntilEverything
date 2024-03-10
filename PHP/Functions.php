<?php

// Function with no arguments
function greet() {
    echo "Hello, world!<br>";
}

// Function with required arguments
function greetPerson($name) {
    echo "Hello, $name!<br>";
}

// Function with default arguments
function displayMessage($message = "This is a default message.") {
    echo "$message<br>";
}

// Function with variable arguments
function sum(...$numbers) {
    $total = 0;
    foreach ($numbers as $number) {
        $total += $number;
    }
    echo "Sum: $total<br>";
}

// Call functions based on form submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    greet();
    greetPerson($_POST["name"]);
    displayMessage($_POST["message"]);
    sum($_POST["age"], 10, 20);
}

?>
