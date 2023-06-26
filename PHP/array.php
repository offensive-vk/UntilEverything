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
    <?php
        // Adding elements to an array
        $colors = array("Red", "Green", "Blue");
        $colors[] = "Yellow"; // Add element at the end

        // Removing elements from an array
        unset($colors[1]); // Remove element at index 1

        // Modifying array elements
        $colors[0] = "Purple";

        // Displaying array contents
        print_r($colors);
        /* Output:
        Array
        (
            [0] => Purple
            [2] => Blue
            [3] => Yellow
        )
        */
    ?>
    <?php
        $numbers = array(4, 2, 1, 3, 5);

        // Searching for an element in an array
        $key = array_search(3, $numbers);
        echo "Element found at index: " . $key;  // Output: Element found at index: 3

        // Sorting an array in ascending order
        sort($numbers);
        print_r($numbers);
        // Output: Array ( [0] => 1 [1] => 2 [2] => 3 [3] => 4 [4] => 5 )
    ?>

</body>
</html>
