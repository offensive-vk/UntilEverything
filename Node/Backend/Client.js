// Networking Example - HTTP Client

const http = require('http');

const options = {
    hostname: 'localhost',
    port: 3000,
    path: '/',
    method: 'GET',
};

const req = http.request(options, (res) => {
    console.log(`Status Code: ${res.statusCode}`);
    res.setEncoding('utf8');
    res.on('data', (chunk) => {
        console.log(`Response: ${chunk}`);
    });
});

req.on('error', (e) => {
    console.error(`Request error: ${e.message}`);
});

req.end();
