<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $feedback = $_POST['feedback'];

    $data = "Name: $name\nEmail: $email\nFeedback: $feedback\n";
    file_put_contents('form_data.txt', $data, FILE_APPEND);

    // Redirect to a thank you page or display a success message
    header('Location: index.html');
    exit();
}
?>
