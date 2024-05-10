const { createHash } = require('crypto');

// Create a string hash
function hash(input) {
    return createHash('sha256').update(input).digest('base64');
}

// Compare two hashed passwords
let password = 'hello!';
const hash1 = hash(password);
console.log(`Original Hash : ${hash1}\n`);

password = 'hello!';
const hash2 = hash(password);
const match = hash1 === hash2;
console.log(`Duplicate Hash : ${hash2}\n`);

console.log(match ? '✔️ Correct' : '❌ Incorrect');