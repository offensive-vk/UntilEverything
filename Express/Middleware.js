const express = require('express');
const app = express();

// Middleware function to log the timestamp of each request
const logTimestamp = (req, res, next) => {
    console.log(`Timestamp: ${new Date().toLocaleString()}`);
    next(); // Call the next middleware in the stack
};

// Middleware function to log the request method and URL
const logRequestDetails = (req, res, next) => {
    console.log(`Request Method: ${req.method}, URL: ${req.url}`);
    next();
};

// Middleware function to simulate authentication
const authenticateUser = (req, res, next) => {
    // For simplicity, let's assume authentication is successful
    req.user = { id: 123, username: 'john_doe' };
    next();
};

// Use middleware in the application
app.use(logTimestamp);
app.use(logRequestDetails);
app.use(authenticateUser);

// Route handler
app.get('/', (req, res) => {
    res.send(`Hello, ${req.user.username}!`);
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
