## Aggregate Framework

MongoDB Aggregation framework provides a way to process and transform data that is stored in our MongoDB collections. It allows you to perform calculations and return the calculated results using various data aggregation tools such as aggregation pipelines, map-reduce functions, or single-purpose aggregation methods.
Aggregation Pipeline
The aggregation pipeline is a framework in MongoDB that enables the developers to execute a series of data transformations on the documents in a collection. The pipeline consists of multiple stages, and each stage applies a specific operation on the input documents. Among these operations, you can find features like filtering, sorting, projecting, and grouping.

*Example of a simple aggregation pipeline*:

```js
db.collection.aggregate([
  { $match: { status: 'A' } },
  { $group: { _id: '$cust_id', total: { $sum: '$amount' } } },
  { $sort: { total: -1 } },
]);

```
