const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');

// Connection URI
const uri = 'mongodb://localhost:27017';
// Database Name
const dbName = 'my_database';

const app = express();
const port = 3000;

app.use(express.json());

// Create a new MongoClient
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Function to connect to MongoDB
async function connectToMongoDB() {
    try {
        // Connect the client to the server
        await client.connect();
        console.log('Connected to MongoDB server');
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
    }
}

// Function to close MongoDB connection
async function closeMongoDBConnection() {
    try {
        // Close the client
        await client.close();
        console.log('Disconnected from MongoDB server');
    } catch (err) {
        console.error('Error closing MongoDB connection:', err);
    }
}

// Middleware to handle MongoDB connection
app.use(async (req, res, next) => {
    req.dbClient = client;
    req.dbName = dbName;
    next();
});

// Route to insert a document
app.post('/insert', async (req, res) => {
    try {
        const db = req.dbClient.db(req.dbName);
        const result = await db.collection('my_collection').insertOne(req.body);
        res.json({ insertedId: result.insertedId });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Route to query documents
app.get('/query', async (req, res) => {
    try {
        const db = req.dbClient.db(req.dbName);
        const documents = await db.collection('my_collection').find({}).toArray();
        res.json(documents);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Route to update a document
app.put('/update/:id', async (req, res) => {
    try {
        const db = req.dbClient.db(req.dbName);
        const result = await db.collection('my_collection').updateOne(
            { _id: ObjectId(req.params.id) },
            { $set: req.body }
        );
        res.json({ modifiedCount: result.modifiedCount });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Route to delete a document
app.delete('/delete/:id', async (req, res) => {
    try {
        const db = req.dbClient.db(req.dbName);
        const result = await db.collection('my_collection').deleteOne({ _id: ObjectId(req.params.id) });
        res.json({ deletedCount: result.deletedCount });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Start the Express server
app.listen(port, async () => {
    await connectToMongoDB();
    console.log(`Server is running on port ${port}`);
});

// Close MongoDB connection when the server shuts down
process.on('SIGINT', async () => {
    await closeMongoDBConnection();
    process.exit();
});
