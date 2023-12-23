
//Sending binary data over a network:
const net = require('net');
net.Server
const server = net.createServer((socket) => {
    socket.write(Buffer.from('Hello, world!'));

});

// Import the events module
const EventEmitter = require('events');

// Create an instance of EventEmitter
const myEmitter = new EventEmitter();

// Subscribe to an event
myEmitter.on('myEvent', (data) => {
  console.log('Event occurred with data:', data);
});

// Emit the event
myEmitter.emit('myEvent', { message: 'Hello, EventEmitter!' });
