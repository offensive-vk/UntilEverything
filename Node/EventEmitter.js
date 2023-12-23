// Import the events module
const EventEmitter = require('events');

// Create an instance of EventEmitter
const myEmitter = new EventEmitter();

// Subscribe to an event
myEmitter.on('myEvent', (data) => {
    setTimeout(() => {
        console.log('Event occurred with data: ', data);
    }, 1500);
});

// another event
myEmitter.on('sayHello', () => {
    setTimeout(() => {
        console.log(`Saying Hello from Event.`);
    }, 1500)
})

// Emit the event
myEmitter.emit('myEvent', { message: 'Hello, EventEmitter!' });

myEmitter.emit('sayHello');

myEmitter.addListener('sayHello', () => {
    console.log(`Well, Hello !!`);
});