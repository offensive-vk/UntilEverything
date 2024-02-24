<?php
// Database connection details
$servername = "localhost";
$username = "your_username";
$password = "your_password";
$dbname = "your_database_name";

// Create a connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Function to register a new user
function registerUser($name, $email, $password) {
    global $conn;
    
    // Hash the password
    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
    
    // Prepare and execute the SQL statement
    $stmt = $conn->prepare("INSERT INTO users (name, email, password) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $name, $email, $hashedPassword);
    
    if ($stmt->execute()) {
        echo "Registration successful.";
    } else {
        echo "Error: " . $stmt->error;
    }
    
    $stmt->close();
}

// Function to authenticate a user
function authenticateUser($email, $password) {
    global $conn;
    
    // Prepare and execute the SQL statement
    $stmt = $conn->prepare("SELECT password FROM users WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $stmt->bind_result($hashedPassword);
    $stmt->fetch();
    
    // Verify the password
    if (password_verify($password, $hashedPassword)) {
        echo "Authentication successful.";
    } else {
        echo "Authentication failed.";
    }
    
    $stmt->close();
}

// Usage examples
registerUser("John", "john@example.com", "password123");
authenticateUser("john@example.com", "password123");

// Close the connection
$conn->close();
?>
