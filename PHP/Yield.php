<?php
/**
 * 
In PHP, 
the {yield} keyword is used in generator functions to enable the iteration of a sequence of values 
without needing to create an array to hold them all at once. 
The generator function returns an iterator that allows you to iterate over the values one at a time, 
saving memory and improving performance, especially for large datasets.
 */

// Define a generator function
function generateNumbers($start, $end) {
    for ($i = $start; $i <= $end; $i++) {
        yield $i;
    }
}

// Use the generator function to create an iterable
$iterator = generateNumbers(1, 5);

// Iterate over the iterable using foreach loop
foreach ($iterator as $number) {
    echo $number . "\n";
}
?>