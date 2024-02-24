<?php

// Define the function to be tested
function addNumbers($num1, $num2) {
    return $num1 + $num2;
}

// Create a test class
class AddNumbersTest extends PHPUnit\Framework\TestCase {

    // Test adding two positive numbers
    public function testAddPositiveNumbers() {
        $expected = 10;
        $actual = addNumbers(5, 5);
        $this->assertEquals($expected, $actual);
    }

    // Test adding negative numbers
    public function testAddNegativeNumbers() {
        $expected = -10;
        $actual = addNumbers(-5, -5);
        $this->assertEquals($expected, $actual);
    }
}

?>