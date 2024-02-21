const { MongoClient } = require('mongodb');

// Connection URI
const uri = 'mongodb://localhost:27017';

// Database Name
const dbName = 'my_database';

// Create a new MongoClient
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Function to perform operations
async function main() {
    try {
        // Connect the client to the server
        await client.connect();
        console.log('Connected to MongoDB server');

        const db = client.db(dbName);

        // Insert a document
        const insertResult = await db.collection('my_collection').insertOne({
            name: 'John',
            age: 30,
            email: 'john@example.com'
        });
        console.log('Inserted document:', insertResult.insertedId);

        // Query documents
        const queryResult = await db.collection('my_collection').find({}).toArray();
        console.log('Documents:', queryResult);

        // Update a document
        const updateResult = await db.collection('my_collection').updateOne(
            { name: 'John Doe' },
            { $set: { age: 35 } }
        );
        console.log('Modified document count:', updateResult.modifiedCount);

        // Query documents after update
        const updatedQueryResult = await db.collection('my_collection').find({}).toArray();
        console.log('Documents after update:', updatedQueryResult);

        // Delete a document
        const deleteResult = await db.collection('my_collection').deleteOne({ name: 'John Doe' });
        console.log('Deleted document count:', deleteResult.deletedCount);

    } catch (err) {
        console.error('Error:', err);
    } finally {
        // Close the client
        await client.close();
        console.log('Disconnected from MongoDB server');
    }
}

// Run the main function
main();