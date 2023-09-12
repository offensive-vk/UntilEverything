var http = require('http');

// Create an HTTP server that responds with "Hello, Node.js!" to all requests
var server = http.createServer(function (req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, Node.js!\n');
});

// Listen on port 5000
var port = 5000;
server.listen(port, function () {
    console.log("Server is running at http://localhost:".concat(port, "/"));
});
