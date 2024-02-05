const express = require('express');
const path = require('path');

const app = express();

// Define a static directory to serve files from
const staticDirectory = path.join(__dirname, 'public');

// Middleware to serve static files from the specified directory
app.use(express.static(staticDirectory));

// Route handler
app.get('/', (req, res) => {
    res.sendFile(path.join(staticDirectory, 'index.html'));
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});