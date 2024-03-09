const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

// WebSocket connection handling
wss.on('connection', function connection(ws) {
    console.log('WebSocket connection established');

    ws.on('message', function incoming(message) {
        console.log('Received: %s', message);
        // Echo the received message back to the client
        ws.send(`Server received: ${message}`);
    });

    ws.on('close', function close() {
        console.log('WebSocket connection closed');
    });
});

// Express route handling
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
