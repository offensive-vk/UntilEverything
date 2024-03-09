const express = require('express');
const app = express();
const port = 3000;

// Define a route that responds with a message
app.get('/greet', (req, res) => {
    res.send('Hello from the /greet route!');
});

// Define another route
app.get('/about', (req, res) => {
    res.send('This is the about page.');
});

// Define a route with a dynamic parameter
app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`You requested information about User ${userId}.`);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});