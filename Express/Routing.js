const express = require('express');
const app = express();
const port = 3000;

// Route for the home page
app.get('/', (req, res) => {
    res.send('Welcome to the home page');
});

// Route for about page
app.get('/about', (req, res) => {
    res.send('This is the about page');
});

// Route for contact page
app.get('/contact', (req, res) => {
    res.send('Contact us at contact@example.com');
});

// Route with dynamic parameter
app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`Viewing user profile for user ID ${userId}`);
});

// Route with query parameters
app.get('/search', (req, res) => {
    const query = req.query.q;
    res.send(`Searching for: ${query}`);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
