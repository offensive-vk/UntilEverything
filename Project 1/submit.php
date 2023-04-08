<?php
// Check if the form has been submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  
  // Store the form data in variables
  $name = $_POST["name"];
  $email = $_POST["email"];
  $message = $_POST["message"];
  
  // Open a file to store the form data
  $file = fopen("formdata.txt", "a");
  
  // Write the form data to the file
  fwrite($file, "Name: " . $name . "\n");
  fwrite($file, "Email: " . $email . "\n");
  fwrite($file, "Message: " . $message . "\n");
  
  // Close the file
  fclose($file);
  
  // Redirect the user to a thank-you page
  header("Location: thankyou.html");
  exit;
}
?>
