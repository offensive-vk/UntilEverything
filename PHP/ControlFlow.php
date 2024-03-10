<?php
$age = 22;

if ($age >= 18) {
    echo "Welcome! You are eligible to access this content.";
} else {
    echo "Sorry, this content is restricted to users 18 and older.";
}
?>


<?php
$fruits = ["apple", "banana", "orange"];

for ($i = 0; $i < count($fruits); $i++) {
    echo "$fruits[$i]<br>";
}
?>

<?php
$choice = "2";

switch ($choice) {
    case "1":
        echo "You chose option 1.";
        break;
    case "2":
        echo "You chose option 2.";
        break;
    default:
        echo "Invalid choice.";
}
?>
