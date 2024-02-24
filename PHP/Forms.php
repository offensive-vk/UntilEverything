<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>Form Handling in PHP</title>
</head>
<body>
  <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
      $name = $_POST["name"];
      $email = $_POST["email"];
      // Process the form data or store it in a database
      // ...
      echo "Thank you for submitting the form, $name!";
    }
  ?>
  <form method="POST" action="<?php echo $_SERVER['PHP_SELF']; ?>">
      <input type="text" name="name" placeholder="Your Name" required>
      <input type="email" name="email" placeholder="Your Email" required>
      <button type="submit">Submit</button>
  </form>
</body>
</html>
