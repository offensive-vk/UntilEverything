<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>Conditional Statements</title>
</head>
<body>
<?php
    $random = random_int(10, 99);
    $age = 25;
    if ($random >= 18) {
        echo "You are eligible to vote.<br>";
        echo $random;
    } else {
        echo "You are not eligible to vote.<br>";
        echo $random;
    }
?>

</body>
</html>
