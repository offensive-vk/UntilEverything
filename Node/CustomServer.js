const http = require('http');
const fs = require('fs');

// Create an HTTP server that serves an external HTML file
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    console.log(`HTTP Server Version : ${req.httpVersion}`);

    // Read the content of the external HTML file
    fs.readFile('index.html', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.statusCode = 500;
            res.end('Internal Server Error');
            return;
        }
        // Send the HTML content as the response
        res.end(data);
    });
});

const port = 5000
server.listen(port, () => {
    console.log(`Sucessfully started NodeJS HTTP Server. \n`);
    console.log(`Server is running at http://localhost:${port}/`);
});
