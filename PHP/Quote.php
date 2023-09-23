<?php
// Array of quotes
$quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Success is not the key to happiness. Happiness is the key to success. - Albert Schweitzer",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "In the middle of every difficulty lies opportunity. - Albert Einstein"
];

// Generate a random index
$randomIndex = rand(0, count($quotes) - 1);

// Get a random quote
$randomQuote = $quotes[$randomIndex];

// Display the random quote
echo "Random Quote: $randomQuote";
?>
