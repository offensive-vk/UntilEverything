const http = require('http');

const server = http.createServer((req, res) => {
    // Set the response headers
    res.setHeader('Content-Type', 'text/plain');
    
    // Handling different HTTP methods and routes
    if (req.method === 'GET' && req.url === '/') {
        // Handling a GET request to the root URL
        res.statusCode = 200;
        res.end('Welcome to the Home Page!');
    } else if (req.method === 'GET' && req.url === '/about') {
        // Handling a GET request to the '/about' route
        res.statusCode = 200;
        res.end('About Us Page');
    } else if (req.method === 'POST' && req.url === '/submit') {
        // Handling a POST request to the '/submit' route
        let body = '';
        
        // Collect data from the request stream
        req.on('data', (chunk) => {
            body += chunk.toString();
        });

        // When data collection is complete, respond with the collected data
        req.on('end', () => {
            res.statusCode = 200;
            res.end(`Received data: ${body}`);
        });
    } else {
        // Handling other requests with a 404 (Not Found) response
        res.statusCode = 404;
        res.end('Page Not Found');
    }
});

const port = 5000;
server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
