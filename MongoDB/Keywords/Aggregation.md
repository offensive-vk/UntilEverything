# 1. $sum

The $sum operator is a powerful and commonly-used operator in MongoDB, which is primarily utilized in conjunction with the $group stage in the aggregation pipeline. As the name suggests, it allows you to calculate the sum of the numeric values in either specified fields or by evaluating expression values for each input document.

## Syntax

The basic syntax for using the $sum operator is as follows:

`{ $sum: <expression> }`
The <expression> can be a field, a number value, or another operator that returns a numeric value.

### Examples - Calculate Sum of Field Values

Suppose you have a collection of orders and you want to calculate the total revenue. You can use the $sum operator in combination with the $group stage to achieve this:

```js
db.orders.aggregate([
  {
    $group: {
      _id: null,
      totalRevenue: { $sum: '$price' },
    },
  },
]);
```

---

# 2. $lookup

The $lookup stage in MongoDB is a powerful aggregation pipeline operator that allows you to perform left outer join between two collections. It is used for combining data from multiple collections in a single aggregation pipeline operation.

Here’s a brief summary of $lookup operator:

## Syntax

```json
{
  "$lookup": {
    "from": "<collection_name>",
    "localField": "<field_from_input_documents>",
    "foreignField": "<field_from_documents_of_the_from_collection>",
    "as": "<output_array_field>"
  }
}
```

### Parameters

- `from`: The target collection to perform the join operation with.
- `localField`: The field from the input collection (i.e., the collection on which the `$lookup` is applied).
- `foreignField`: The field from the target collection (i.e., the from collection).
- `as`: The name of the output array field that will store the joined documents.

---

# 3. $unwind

The $unwind operator is a powerful aggregation pipeline stage in MongoDB that allows you to deconstruct an array field from input documents and generate a new document for each element in the array, essentially “unwinding” the array.

This operator is particularly useful when you have documents containing array fields, and you need to perform operations on the individual elements within those arrays. $unwind enables you to flatten the array structure and easily manipulate or analyze data within arrays as separate documents.

## Syntax

The general syntax for the $unwind operator is:

```json
{
  $unwind: {
    path: <field path>,
    includeArrayIndex: <string>, // Optional
    preserveNullAndEmptyArrays: <boolean> // Optional
  }
}
```

### Parameters

* `path`: A string representing the field path of the array you want to unwind. It must be prefixed with a $ to indicate referencing a field in the input document.
* `includeArrayIndex`: (Optional) A string representing the field name for the index of the array element. The output documents will include this field, with the value as the index of the element in the original array.
* `preserveNullAndEmptyArrays`: (Optional) A boolean value that determines whether to output a document for input documents that don’t have the specified path or have an empty array, null, or missing value. By default, these input documents are not included in the output.

### Example

Consider a sales collection with the following sample document:

```json
{
  _id: 1,
  item: "itemA",
  orders: [
    { quantity: 2, unitPrice: 10 },
    { quantity: 3, unitPrice: 20 },
    { quantity: 1, unitPrice: 15 }
  ]
}
```

---

# 4. $limit

The $limit operator limits the number of documents passed to the next stage in the pipeline. The $limit operator is useful for debugging and testing pipelines. It is also useful for limiting the number of documents that are returned by a pipeline.

## Here’s the syntax for the $limit operator:

`{ $limit: <number> }`
Here, <number> is the number of documents you want to limit the pipeline to.

### Example

Let’s say we have a collection named employees and we want to limit the number of documents to 5. We can do this using the $limit operator:

```json
db.employees.aggregate([
  {
    $limit: 5,
  },
]);
```

---
