const express = require('express');
const app = express();

// Example route that throws an error
app.get('/test', (req, res, next) => {
    // Simulating an error
    const err = new Error("This is a test error");
    err.status = 500; // Set the status code of the error
    next(err); // Pass the error to the error handling middleware
});

// Error handling middleware
app.use((err, req, res, next) => {
    // Default error status is 500 if it's not set
    res.status(err.status || 500);
    
    // Send the error message as JSON response
    res.json({
        error: {
            message: err.message
        }
    });
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});