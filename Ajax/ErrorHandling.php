<!DOCTYPE html>
<html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AJAX Error Handling Example</title>
    <script>
        function makeRequest(method, url, data, callback) {
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status >= 200 && xhr.status < 300) {
                        callback(null, xhr.responseText);
                    } else {
                        var error = new Error('Request failed: ' + xhr.statusText);
                        error.status = xhr.status;
                        callback(error, null);
                    }
                }
            };
            xhr.onerror = function () {
                callback(new Error('Network error occurred'), null);
            };
            xhr.open(method, url, true);
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.send(JSON.stringify(data));
        }

        function fetchData() {
            makeRequest('GET', 'https://jsonplaceholder.typicode.com/posts/invalid', null, function (err, response) {
                if (err) {
                    console.error('Error:', err.message);
                    console.error('Status:', err.status);
                } else {
                    console.log('Response:', response);
                }
            });
        }
    </script>
</head>
<body>
    <h2>AJAX Error Handling Example</h2>
    <button onclick="fetchData()">Fetch Data (with Error)</button>
</body>
</html>
