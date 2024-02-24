<?php

declare(strict_types=1);

class Calculator {
    public static function add(int $a, int $b): int {
        return $a + $b;
    }
}

function multiply(int $a, int $b): int {
    return $a * $b;
}

// Strictly typed function call
$result1 = Calculator::add(5, 3); // Works fine
// $result2 = Calculator::add(5.5, 3); // Error: Argument 1 passed to Calculator::add() must be of the type int, float given

// Strictly typed function call
$result3 = multiply(5, 3); // Works fine
// $result4 = multiply('5', 3); // Error: Argument 1 passed to multiply() must be of the type int, string given

echo "Result 1: $result1\n";
echo "Result 3: $result3\n";