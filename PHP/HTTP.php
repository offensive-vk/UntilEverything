<?php

// URL to make the request to
$url = 'https://api.example.com/data';

// Make the GET request
$response = file_get_contents($url);

// Output the response
echo $response;
?>

<?php
// URL to make the request to
$url = 'https://jsonplaceholder.typicode.com/posts/1';

// Initialize cURL session
$ch = curl_init();

// Set cURL options
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

// Execute the request
$response = curl_exec($ch);

// Check for errors
if(curl_errno($ch)){
    echo 'Error: ' . curl_error($ch);
}

// Close cURL session
curl_close($ch);

// Decode JSON response
$data = json_decode($response, true);

// Output the response
if($data) {
    echo "Title: " . $data['title'] . "<br>";
    echo "Body: " . $data['body'] . "<br>";
} else {
    echo "Failed to retrieve data.";
}

?>