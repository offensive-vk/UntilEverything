/**
 * Signing, in the context of cryptography and security, refers to the process of attaching a digital signature to a piece of data, typically a message or a document. This digital signature serves as a cryptographic proof of the authenticity and integrity of the data.
 */

const { createSign, createVerify } = require('crypto');
const { publicKey, privateKey } = require('./Keys');

const message = 'Verified Certificates.';

/// SIGN
const signer = createSign('rsa-sha256');
signer.update(message);
const signature = signer.sign(privateKey, 'hex');

/// VERIFY
const verifier = createVerify('rsa-sha256');
verifier.update(message);
const isVerified = verifier.verify(publicKey, signature, 'hex');

console.log(`Verified: ${isVerified}`)