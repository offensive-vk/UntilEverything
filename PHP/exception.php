<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>Exceptions in PHP</title>
</head>
<body>
<?php
    try {
        $numerator = 10;
        $denominator = 0;

        if ($denominator === 0) {
            throw new Exception("Division by zero is not allowed.");
        }

        $result = $numerator / $denominator;

        echo "Result: " . $result;
        } catch (Exception $e) {
            echo "Exception caught: " . $e->getMessage();
    }
?>

</body>
</html>
