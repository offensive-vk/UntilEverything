// Import necessary modules
const express = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');

// Create an Express application
const app = express();

// Define a simple React component
const HelloMessage = (props) => {
    return React.createElement('div', null, `Hello, ${props.name}!`);
};

// Define a route for SSR
app.get('/', (req, res) => {
    // Render the React component to HTML
    const html = ReactDOMServer.renderToString(React.createElement(HelloMessage, { name: 'Server-Side Rendering' }));
    // Send the HTML response to the client
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Server-Side Rendering Example</title>
    </head>
    <body>
        <div id="root">${html}</div>
        <script src="client.js"></script>
    </body>
    </html>`
    );
});


// Start the server on port 3000
const port = 3000;
app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
});