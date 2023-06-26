<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>Loops in PHP</title>
</head>
<body>
<?php
    // Example 1: For Loop
    echo "Counting from 1 to 10 using a for loop:<br>";
    for ($i = 1; $i <= 10; $i++) {
        echo $i . "<br>";
    }
    
    // Example 2: While Loop
    echo "Counting from 10 to 1 using a while loop:<br>";
    $j = 10;
    while ($j >= 1) {
        echo $j . "<br>";
        $j--;
    }

    // Example 3: Foreach Loop
    $fruits = array("Apple", "Banana", "Orange");
    echo "List of fruits:<br>";
    foreach ($fruits as $fruit) {
        echo $fruit . "<br>";
    }
?>

</body>
</html>
