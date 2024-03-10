<?php
// Start the session
session_start();

// Check if the user is logged in
if(isset($_SESSION['username'])) {
    $username = $_SESSION['username'];
    $message = "Welcome back, $username!";
} else {
    $message = "Welcome, Guest!";
}

// Set a cookie to store the visit count
if(isset($_COOKIE['visit_count'])) {
    $visit_count = $_COOKIE['visit_count'] + 1;
} else {
    $visit_count = 1;
}

setcookie('visit_count', $visit_count, time() + 3600 * 24 * 30); // Cookie expires in 30 days

// Display the message and visit count
echo "<p>$message</p>";
echo "<p>This is your $visit_count visit to our website.</p>";

// If the user is logged in, provide a logout link
if(isset($_SESSION['username'])) {
    echo "<a href='logout.php'>Logout</a>";
} else {
    echo "<a href='login.php'>Login</a>";
}

?>