<?php

// This is a single-line comment

/*
   This is a
   multi-line comment
*/

# This is also a single-line comment

// Single-line comment inside code block
echo "Hello, "; // Outputs "Hello, "
echo "World!";  // Outputs "World!"

/*
   Multi-line comment
   inside code block
*/
echo "\n";

// Single-line comment inside code block with echo statement
echo "This is a single-line comment inside code block"; // Outputs "This is a single-line comment inside code block"

# Single-line comment inside code block with echo statement
echo "This is also a single-line comment inside code block"; // Outputs "This is also a single-line comment inside code block"

/*
   Multi-line comment
   inside code block with echo statement
*/
echo "\n";

// Here is a single-line comment with echo statement
echo "This is a single-line comment with echo statement"; // Outputs "This is a single-line comment with echo statement"

# Here is also a single-line comment with echo statement
echo "This is also a single-line comment with echo statement"; // Outputs "This is also a single-line comment with echo statement"

/*
   Here is a multi-line comment
   with echo statement
*/
echo "\n";

// PHPDoc-style comment for a function
/**
 * This function adds two numbers.
 *
 * @param int $a The first number.
 * @param int $b The second number.
 * @return int The sum of $a and $b.
 */
function add($a, $b) {
    return $a + $b;
}

echo "The sum of 5 and 3 is: " . add(5, 3); // Outputs "The sum of 5 and 3 is: 8"
?>
