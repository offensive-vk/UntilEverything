<!DOCTYPE html>
<html>
<head>
    <title>PHP Performance Example</title>
</head>
<body>

<?php
// Start the timer
$start_time = microtime(true);

// Initialize a large array with random numbers
$numbers = range(1, 1000000);
shuffle($numbers);

// Perform a CPU-intensive operation: sorting the array
sort($numbers);

// Perform another operation: summing the array
$sum = array_sum($numbers);

// End the timer
$end_time = microtime(true);

// Calculate the execution time
$execution_time = $end_time - $start_time;

// Display the results
echo "<h1>PHP Performance Example</h1>";
echo "<p>Array sorted and summed.</p>";
echo "<p>Total Sum: " . number_format($sum) . "</p>";
echo "<p>Execution Time: " . number_format($execution_time, 6) . " seconds</p>";
?>

</body>
</html>