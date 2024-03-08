const app = require('express')();
const port = 5000;
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/sample_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('error', err => {
    console.error('MongoDB connection error:', err);
});

app.get('/', (req, res) => {
    res.send('Server Says Hello @ root directory / page!!');
});

app.get('/hello', (req, res) => {
    res.send('You are at http://localhost:5000/hello \n\t Server Says Hello !!');
});

app.get('/about', (req, res) => {
    res.send('You are at http://localhost:5000/about \n\t Server Says Hello !!');
});

app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
    console.log(`Mongoose version: ${mongoose.version}`);
});
