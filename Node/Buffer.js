const Buffer = require('buffer').Buffer;

var Arr = [543,547,731,851,458];
var ArrayBuf = Buffer.from(Arr);


var Buf = Buffer.alloc(128);
Buf.write('This is a buffer');
Buf.write('Bruh another buffer');
// Buf.fill(Arr);

console.log(Buffer.from('This is another buffer').toLocaleString());
console.log(Buf.length);
console.log(Buf.toString('UTF-8'));
