const { MongoClient } = require('mongodb');

async function run() {
    const uri = "mongodb://localhost:27017";
    const client = new MongoClient(uri);

    try {
        await client.connect();
        const database = client.db("indexDemo");
        const collection = database.collection("sampleData");

        // Drop the collection if it exists
        await collection.drop().catch(() => {});

        // Insert sample documents
        await collection.insertMany([
            { name: "Alice", age: 30, city: "New York", score: 85 },
            { name: "Bob", age: 25, city: "Los Angeles", score: 90 },
            { name: "Charlie", age: 35, city: "Chicago", score: 78 },
            { name: "David", age: 28, city: "San Francisco", score: 88 }
        ]);

        // 1. Single Field Index
        await collection.createIndex({ name: 1 });
        console.log("Single Field Index on 'name' created.");

        // 2. Compound Index (multiple fields)
        await collection.createIndex({ city: 1, age: -1 });
        console.log("Compound Index on 'city' and 'age' created.");

        // 3. Multikey Index (for arrays)
        await collection.updateMany({}, { $set: { tags: ["developer", "mongodb"] } });
        await collection.createIndex({ tags: 1 });
        console.log("Multikey Index on 'tags' created.");

        // 4. Text Index (for text search)
        await collection.createIndex({ name: "text", city: "text" });
        console.log("Text Index on 'name' and 'city' created.");

        // 5. Geospatial Index
        await collection.updateOne({ name: "Alice" }, { $set: { location: { type: "Point", coordinates: [-73.935242, 40.730610] } } });
        await collection.createIndex({ location: "2dsphere" });
        console.log("Geospatial Index on 'location' created.");

        // 6. Unique Index
        await collection.createIndex({ score: 1 }, { unique: true });
        console.log("Unique Index on 'score' created.");

        // 7. Partial Index
        await collection.createIndex({ score: 1 }, { partialFilterExpression: { score: { $gt: 80 } } });
        console.log("Partial Index on 'score' created for scores greater than 80.");

        // Querying using indexes
        const result1 = await collection.find({ name: "Alice" }).toArray();
        console.log("Query using Single Field Index:", result1);

        const result2 = await collection.find({ $text: { $search: "New York" } }).toArray();
        console.log("Query using Text Index:", result2);

        const result3 = await collection.find({ location: { $near: { $geometry: { type: "Point", coordinates: [-73.935242, 40.730610] } } } }).toArray();
        console.log("Query using Geospatial Index:", result3);
    } finally {
        await client.close();
    }
}

run().catch(console.dir);