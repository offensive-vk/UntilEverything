// Create a new XMLHttpRequest object
var xhr = new XMLHttpRequest();

// Configure the GET request
xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/1', true);

// Set up an event handler to handle the response
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        // The request is complete, and the response is successful (status code 200)
        var response = JSON.parse(xhr.responseText);
        console.log('Response:', response);
    } else if (xhr.readyState === 4 && xhr.status !== 200) {
        // The request is complete, but the response has an error status code
        console.error('Error:', xhr.status, xhr.statusText);
    }
};

// Send the request
xhr.send();