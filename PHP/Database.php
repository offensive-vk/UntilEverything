<?php

// Example of connecting to a MySQL database
$servername = "localhost";
$username = "root";
$password = "password";
$dbname = "test_db";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

echo "Connected successfully to the database!";
$conn->close();
?>
