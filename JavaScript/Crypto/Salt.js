const crypto = require('crypto');

// Example usage of scryptSync function
const password = 'myPassword';
const salt = crypto.randomBytes(16); // Generate a salt
const key = crypto.scryptSync(password, salt, 64); // Derive a key
console.log('Derived key:', key.toString('hex'));

// Example usage of randomBytes function
const randomBytesExample = crypto.randomBytes(16);
console.log('Random bytes:', randomBytesExample.toString('hex'));

// Example usage of timingSafeEqual function
const buffer1 = Buffer.from('Hello');
const buffer2 = Buffer.from('Hello');
const buffer3 = Buffer.from('hello');

console.log('Buffers 1 and 2 are equal:', crypto.timingSafeEqual(buffer1, buffer2)); // true
console.log('Buffers 1 and 3 are equal:', crypto.timingSafeEqual(buffer1, buffer3)); // false
