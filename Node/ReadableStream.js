const { Readable, Writable } = require('stream');

// Example Readable Stream
const readableStream = new Readable({
  read(size) {
    // Push data to the stream
    this.push(Buffer.from('Hello World'));
    this.push(null); // Signal end of data
  }
});

// Example Writable Stream
const writableStream = new Writable({
  write(chunk, encoding, callback) {
    console.log(chunk.toString()); // Output: 'Hello World'
    callback();
  }
});

readableStream.pipe(writableStream); // Pipe readable stream to writable stream
