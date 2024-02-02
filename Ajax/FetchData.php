<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>AJAX Example</title>
<script>
  function fetchData() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var response = JSON.parse(this.responseText);
        document.getElementById("output").innerHTML = response.message;
      }
    };
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts/1", true);
    xhttp.send();
  }
</script>
</head>
<body>
  <h2>AJAX Example</h2>
  <button onclick="fetchData()">Fetch Data</button>
  <div id="output"></div>
</body>
</html>