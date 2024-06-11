<?php 
function BubbleSort(&$arr) {
    for($i = 0; $i < count($arr) - 1; $i++) {
        for($j = 0; $j < count($arr) - 1 - $i; $j++) {
            if($arr[$j] > $arr[$j + 1]) {
                $temp = $arr[$j];
                $arr[$j] = $arr[$j + 1];
                $arr[$j + 1] = $temp;
            }
        }
    }
}

$arr = [35, 75, 15, 8, 65, 88, 90, 0];

echo "\nBefore Sorting:\n";
echo "\n" . implode(", ", $arr) . "\n";

BubbleSort($arr);

echo "\nAfter Sorting:\n";
echo "\n" . implode(", ", $arr) . "\n";
?>