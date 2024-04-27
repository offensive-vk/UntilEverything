const jwt = require('jsonwebtoken');
const config = require('./config');

// Function to generate a JWT
function generateToken(user) {
  const payload = {
    sub: user.id,
    username: user.username,
    iat: Date.now(),
    exp: Date.now() + 12 * 60 * 60 * 1000 // 12 hours
  };

  const token = jwt.sign(payload, config.jwtSecret, { algorithm: 'RS256' });
  return token;
}

// Function to verify a JWT
function verifyToken(token) {
  return new Promise((resolve, reject) => {
    jwt.verify(token, config.jwtSecret, { algorithms: ['RS256'] }, (err, user) => {
      if (err) {
        reject(err);
      } else {
        resolve(user);
      }
    });
  });
}

// Generate a JWT for a user
const user = { id: 1, username: 'testuser' };
const token = generateToken(user);
console.log(`Generated token: ${token}`);

// Verify the JWT
verifyToken(token)
  .then(user => {
    console.log(`Verified token for user: ${user.username}`);
  })
  .catch(err => {
    console.error(`Error verifying token: ${err.message}`);
  });
