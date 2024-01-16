/**
 * Server-Sent Events (SSE) is a technology that enables unidirectional communication from a server to a client over an HTTP connection. 
 * Unlike traditional methods like polling, where the client constantly asks the server for updates, 
 * SSE allows the server to push updates to the client automatically. 
 */

const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url === '/events') {
        res.writeHead(200, {
            'Content-Type': 'text/event-stream',
            'Cache-Control': 'no-cache',
            Connection: 'keep-alive'
        });

        setInterval(() => {
            const message = `data: The server time is: ${new Date().toLocaleTimeString()}\n\n`;
            res.write(message);
        }, 1000); // Send a message every second
    } else {
        res.writeHead(404);
        res.end('Not Found');
    }
});

server.listen(3000, () => {
    console.log('Server listening on port 3000');
});

{/* <script> */}
const eventSource = new EventSource('http://localhost:3000/events');

eventSource.onmessage = (event) => {
  console.log('Received event:', event.data);
  // Display the message on the page, for example:
  document.getElementById('time').textContent = event.data;
};
{/* </script> */}
{/* <p id="time"></p> */}