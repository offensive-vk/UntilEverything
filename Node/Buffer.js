// Buffer Module in Node.js for performing operations on binary data.
const Buffer = require('buffer').Buffer;

var Arr = [543,547,731,851,458];
var ArrayBuf = Buffer.from(Arr);
console.log(ArrayBuf);

var Buf = Buffer.alloc(128);
Buf.write('This is a buffer');

// Buf.fill(Arr);
console.log(Buf.byteLength);
console.log(Buffer.from('This is another buffer').toLocaleString());
console.log(Buf.length);
console.log(Buf.toString('UTF-8'));
