# What are Web Sockets?

WebSockets in Node.js enable real-time, full-duplex communication between clients and servers. Unlike traditional HTTP requests, where the client initiates the communication and the server responds, WebSockets allow both the client and server to send messages to each other independently once the connection is established.

## How WebSockets Work

1. Handshake: A WebSocket connection starts as an HTTP request and is "upgraded" to a WebSocket connection using a special handshake.
2. Full-Duplex Communication: Once established, the WebSocket connection allows both the client and server to send and receive messages simultaneously.
3. Persistent Connection: The connection remains open, allowing continuous data exchange without the overhead of repeated HTTP requests.

## Benefits

- Low Latency: Real-time communication with minimal latency.
- Efficiency: Reduced overhead compared to HTTP as headers are only sent once during the handshake.
- Bidirectional: Both client and server can initiate communication.