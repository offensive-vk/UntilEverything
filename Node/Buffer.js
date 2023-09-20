const Buffer = require('buffer').Buffer;
var Arr = [54,547,73,8,458,48];

var Buf = Buffer.alloc(128);
Buf.write('This is a buffer');
Buf.write('Bruh another buffer');
Buf.fill(Arr);

console.log(Buffer.from('This is another buffer').toLocaleString());
console.log(Buf.length);
console.log(Buf.toString('UTF-8'));
console.log(Buf)