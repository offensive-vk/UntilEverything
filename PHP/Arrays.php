<?php 
$numbers = [5, 3, 8, 2, 9, 1, 7, 4, 6];

// Printing the original array
echo "Original array: " . implode(', ', $numbers) . "\n";

// Sorting the array in ascending order
sort($numbers);
echo "Sorted array (ascending): " . implode(', ', $numbers) . "\n";

// Reversing the array
$reversed = array_reverse($numbers);
echo "Reversed array: " . implode(', ', $reversed) . "\n";

// Finding the length of the array
$count = count($numbers);
echo "Array length: $count\n";

// Checking if a value exists in the array
$searchValue = 7;
if (in_array($searchValue, $numbers)) {
    echo "$searchValue exists in the array.\n";
} else {
    echo "$searchValue does not exist in the array.\n";
}

// Getting the first element of the array
$firstElement = reset($numbers);
echo "First element: $firstElement\n";

// Getting the last element of the array
$lastElement = end($numbers);
echo "Last element: $lastElement\n";

// Removing the last element from the array
$removedElement = array_pop($numbers);
echo "Removed element: $removedElement\n";
echo "Array after removing last element: " . implode(', ', $numbers) . "\n";

// Adding an element to the beginning of the array
array_unshift($numbers, 0);
echo "Array after adding 0 to the beginning: " . implode(', ', $numbers) . "\n";

// Merging arrays
$otherNumbers = [10, 11, 12];
$merged = array_merge($numbers, $otherNumbers);
echo "Merged array: " . implode(', ', $merged) . "\n";

// Finding the maximum and minimum values in the array
$maxValue = max($numbers);
$minValue = min($numbers);
echo "Maximum value: $maxValue\n";
echo "Minimum value: $minValue\n";

?>