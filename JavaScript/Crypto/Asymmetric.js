const { publicEncrypt, privateDecrypt } = require('crypto');
const { publicKey, privateKey } = require('./Keys');

const message = 'Cryptography is Cool.'

const encryptedData = publicEncrypt(
    publicKey,
    Buffer.from(message)
);

console.log(encryptedData.toString('hex'))

const decryptedData = privateDecrypt(
    privateKey,
    encryptedData
);

console.log(decryptedData.toString('utf-8'));