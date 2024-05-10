/**
 * HMAC stands for "Keyed-Hash Message Authentication Code." It is a type of cryptographic hash function that involves a hash function in combination with a secret key. HMAC is used for message authentication, ensuring the integrity and authenticity of a message.
 */

const { createHmac } = require('crypto');

const key = 'super-secret!';
const message = 'secret';

const hmac = createHmac('sha256', key).update(message).digest('hex');

console.log(hmac);

const key2 = 'other-password';
const hmac2 = createHmac('sha256', key2).update(message).digest('hex');

console.log(hmac2);