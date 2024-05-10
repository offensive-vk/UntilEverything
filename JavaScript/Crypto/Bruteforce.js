const crypto = require('crypto');

// Given hash value
const hashValue = '7c4a8d09ca3762af61e59520943dc26494f8941b';

// List of possible passwords (this is just an example)
const passwords = ['password', '123456', 'qwerty', 'letmein'];

// Function to check if a password generates the given hash
function checkPassword(password, hash) {
    const hashedPassword = crypto.createHash('sha1').update(password).digest('hex');
    return hashedPassword === hash;
}

// Try each password in the list
for (let password of passwords) {
    if (checkPassword(password, hashValue)) {
        console.log('Password found:', password);
        break;
    }
}
