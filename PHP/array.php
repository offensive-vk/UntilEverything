<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>Arrays in PHP</title>
</head>
<body>
    <?php
        // Creating an array
        $fruits = array("Apple", "Banana", "Orange");

        // Accessing array elements
        echo $fruits[0];  // Output: Apple
        echo $fruits[1];  // Output: Banana
        echo $fruits[2];  // Output: Orange
    ?>

    <?php
        $numbers = array(1, 2, 3, 4, 5);
        // Counting the number of elements in an array
        $count = count($numbers);
        echo "Array length: " . $count;  // Output: Array length: 5

        // Looping through an array
        foreach ($numbers as $number) {
            echo $number . " ";
        }
        // Output: 1 2 3 4 5
    ?>


</body>
</html>
