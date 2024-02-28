function makeRequest(method, url, data, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status >= 200 && xhr.status < 300) {
                var contentType = xhr.getResponseHeader('Content-Type');
                var response = null;

                if (contentType && contentType.indexOf('application/json') !== -1) {
                    response = JSON.parse(xhr.responseText);
                } else {
                    response = xhr.responseText;
                }

                callback(null, response);
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
    makeRequest('GET', 'https://jsonplaceholder.typicode.com/posts/1', null, function (err, response) {
        if (err) {
            console.error('Error:', err.message);
            console.error('Status:', err.status);
        } else {
            console.log('Response:', response);
        }
    });
}