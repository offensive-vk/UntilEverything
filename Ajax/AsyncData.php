<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Asynchronous JavaScript Techniques Example</title>
<script>
  // Function to make AJAX request
  function fetchData(callback) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
        var response = JSON.parse(xhr.responseText);
        callback(response);
      }
    };
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1", true);
    xhr.send();
  }

  // Function to display data
  function displayData(data) {
    document.getElementById("output").innerHTML = data.title;
  }

  // Asynchronous JavaScript techniques
  document.addEventListener("DOMContentLoaded", function() {
    // setTimeout example
    setTimeout(function() {
      console.log("setTimeout: Displaying data after 3 seconds");
      fetchData(displayData);
    }, 3000);

    // setInterval example
    var intervalId = setInterval(function() {
      console.log("setInterval: Fetching data every 5 seconds");
      fetchData(displayData);
    }, 5000);

    // Stop fetching data after 20 seconds
    setTimeout(function() {
      console.log("setTimeout: Stopping interval after 20 seconds");
      clearInterval(intervalId);
    }, 20000);

    // Event listener example
    document.getElementById("fetchButton").addEventListener("click", function() {
      console.log("Event listener: Fetching data on button click");
      fetchData(displayData);
    });
  });
</script>
</head>
<body>
    <h2>Asynchronous JavaScript Techniques Example</h2>
    <button id="fetchButton">Fetch Data</button>
    <div id="output"></div>
</body>
</html>
