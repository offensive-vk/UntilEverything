const http = require('http');
const { EventEmitter } = require('stream');

const server = http.createServer((req, res) => {
    // Set response headers
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Custom-Header', 'Hello, Custom Value');

    // Read request headers
    const userAgent = req.headers['user-agent'];
    
    // Send a response with request header information
    res.statusCode = 200;
    res.end()
    res.end(`User-Agent Header: ${userAgent}\n`);
});

const port = 3000;
server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
