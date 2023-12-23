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

// listener 1
myEmitter.addListener('myEvent', () => {
    console.log(`Well, Hello from first listener !!`);
});

// listener 2
myEmitter.addListener('sayHello', () => {
    console.log(`Well, Hello from second listener !!`);
});

// Emit the events
myEmitter.emit('myEvent', { message: 'Hello, EventEmitter!' });

myEmitter.emit('sayHello');