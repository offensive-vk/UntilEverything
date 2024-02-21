const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
  console.log('Client connected');

  ws.on('message', (message) => {
    console.log('Received message:', message);

    // Broadcast message to all connected clients (except sender)
    wss.clients.forEach((client) => {
      if (client !== ws) {
        client.send(message);
      }
    });
  });
});

// index.html
const ws = new WebSocket('ws://localhost:8080');

ws.onopen = () => {
  console.log('Connected to server');
};

ws.onmessage = (event) => {
  console.log('Received message:', event.data);
};

// Send a message to the server
const sendButton = document.getElementById('send');
sendButton.addEventListener('click', () => {
  ws.send('Hello from the client!');
});