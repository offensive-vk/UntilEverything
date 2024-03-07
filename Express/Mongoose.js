const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Connect to MongoDB using Mongoose
mongoose.connect('mongodb://localhost/my_database', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Define a schema
const Schema = mongoose.Schema;
const userSchema = new Schema({
    username: String,
    email: String
});

// Define a model
const User = mongoose.model('User', userSchema);

// Example route to save a new user
app.post('/user', async (req, res) => {
    try {
        const newUser = new User({
            username: req.body.username,
            email: req.body.email
        });
        const savedUser = await newUser.save();
        res.json(savedUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Example route to fetch all users
app.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});