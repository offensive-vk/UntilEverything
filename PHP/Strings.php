<?php

// Define a sample string
$string = "Hello, World!";

// String length
$length = strlen($string);
echo "Length of the string: $length\n"; // Outputs: Length of the string: 13

// Convert string to lowercase
$lowercase = strtolower($string);
echo "Lowercase string: $lowercase\n"; // Outputs: Lowercase string: hello, world!

// Convert string to uppercase
$uppercase = strtoupper($string);
echo "Uppercase string: $uppercase\n"; // Outputs: Uppercase string: HELLO, WORLD!

// Replace part of a string
$replaced = str_replace("World", "PHP", $string);
echo "Replaced string: $replaced\n"; // Outputs: Replaced string: Hello, PHP!

// Substring
$substring = substr($string, 7);
echo "Substring from position 7: $substring\n"; // Outputs: Substring from position 7: World!

// String concatenation
$concatenated = $string . " Have a nice day!";
echo "Concatenated string: $concatenated\n"; // Outputs: Concatenated string: Hello, World! Have a nice day!

// Trim whitespace from the beginning and end of a string
$trimmed = "   This is a sentence with whitespace.   ";
$trimmedResult = trim($trimmed);
echo "Trimmed string: \"$trimmedResult\"\n"; // Outputs: Trimmed string: "This is a sentence with whitespace."

// Check if a string contains another string
$search = "Hello";
if (strpos($string, $search) !== false) {
    echo "The string contains \"$search\"\n"; // Outputs: The string contains "Hello"
} else {
    echo "The string does not contain \"$search\"\n";
}

// Split a string into an array
$splitString = "apple,banana,orange";
$array = explode(",", $splitString);
echo "Array elements: ";
print_r($array); // Outputs: Array elements: Array ( [0] => apple [1] => banana [2] => orange )

?>
