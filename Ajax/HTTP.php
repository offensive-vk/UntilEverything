<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>AJAX HTTP Methods Example</title>
<script>
    function makeRequest(method, url, data, callback) {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            if (xhr.status >= 200 && xhr.status < 300) {
            callback(null, xhr.responseText);
            } else {
            callback(new Error('Request failed: ' + xhr.statusText));
            }
        }
        };
        xhr.open(method, url, true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(data));
    }


</script>
</head>
<body>
    <h2>AJAX HTTP Methods Example</h2>
    <button onclick="getMethod()">GET Request</button>
    <button onclick="postMethod()">POST Request</button>
    <button onclick="putMethod()">PUT Request</button>
    <button onclick="deleteMethod()">DELETE Request</button>
</body>
</html>