<?php

$lines = 7;

for ($i = 1; $i <= $lines; $i++) {
    $count = (2 * $i) + 1;

    for ($k = 1; $k <= ($lines - $i); $k++) {
        echo str_repeat(" ", 1);
    }

    $j = 1;

    for ($j; $j <= $count / 2; $j++) {
        echo $j;
    }

    $j--;

    for ($k = ($j - 1); $k >= 1; $k--) {
        echo $k;
    }
    echo "\n";
}
?>

// Another
<?php

for ($i = 1; $i <= 5; $i++) {
    for ($j = 1; $j <= $i; $j++) {
        echo "*";
    }

    echo "\n";
}

?>

//Another one

<?php

for ($i = 1; $i <= 5; $i++) {
    for ($j = 1; $j <= $i; $j++) {
        echo $j . " ";
    }
    echo "\n";
}
?>