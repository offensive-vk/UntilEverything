const Buffer = require('buffer').Buffer;

var Buf = Buffer.alloc(128);

Buf.write('This is a buffer');


console.log(Buf.length);
console.log(Buf.toString('UTF-8'));