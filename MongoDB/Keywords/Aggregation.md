
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

# 5. $skip

The `$skip` operator is a useful tool for paginating query results or skipping over a specified number of documents in a collection. This operator can be applied in the aggregation pipeline using the `skip()` method.

## Syntax

In the following example, we will demonstrate how to use the $skip operator:

```json
db.collection.aggregate([
  {
    $skip: <number>
  }
]);
```

Here, <number> is the number of documents you want to skip in the collection.

### Example

Let’s say we have a collection named employees and we want to skip the first 5 documents of the collection (e.g., for paginating results). We can do this using the $skip operator:

```json
db.employees.aggregate([
  {
    $skip: 5,
  },
]);

```

---

# 6. $project

The $project operator helps in selecting or controlling the fields in a document by passing only the necessary attributes to the next stage in the pipeline.

```json
db.collection.aggregate([
  {
    $project:
      {
        field1: <1 or 0>,
        field2: <1 or 0>,
        ...
      }
  }
])
```

The value 1 or 0 in the syntax represents whether the field should be included or excluded, respectively.

---

# 7. $sort

The $sort operator is an aggregation operator in MongoDB that sorts the documents that are passed through the pipeline. It takes one or more fields as parameters and sorts the documents in ascending or descending order based on the values in the specified fields.

## Here’s the syntax for the $sort operator:

```{ $sort: { field1: <sort order>, field2: <sort order>, ... } }```

The <sort order> parameter can be either 1 or -1, which corresponds to ascending or descending order, respectively.

For example, suppose we have a collection of documents containing information about books, and we want to sort the documents by the book’s title in ascending order. We can use the following $sort operator:

`db.books.aggregate([{ $sort: { title: 1 } }]);`

---

# 8. $group

The $group operator in MongoDB is used to aggregate and perform operations on the grouped data. The operator allows you to categorize documents in a collection based on specific fields and perform various operations on each group. These operations range from counting the number of documents in a group, to summing up the values of a particular field, to calculating average values, and many more.

## Basic Usage
The basic syntax for the $group operator is as follows:

```json
{
  $group: {
    _id: <expression>,
    <field1>: { <accumulator1> : <expression1> },
    ...
  }
}
```

*Here’s a quick breakdown of the components*:

- _id: This field represents the criteria for grouping the documents. It can be a single field name or an expression that returns a value.
- field1: This is the name of the field you want to create in the resulting documents, which store the computed values from the group.
- accumulator1: This is one of the accumulators that MongoDB provides (e.g. $sum, $avg, $min, $max, $push, etc.). They specify the operation to perform on the grouped data.
- expression1: This is the field or expression that the $group operator applies to the specific accumulator.
Suppose we have a collection called orders, which contains documents representing sales data.

---

# 9. $match

The $match operator is used to filter documents within the pipeline in the MongoDB aggregation framework. It helps in excluding documents that do not fulfill the specified condition(s). The $match operator filters documents and passes only those that match the specified conditions to the next stage of the pipeline.

## The basic syntax for the $match operator is as follows:

`{ $match: { <query> } }`

Where <query> contains the conditions and the fields which the documents should match.

---

<p align="center">
  <i>&copy; <a href="https://github.com/offensive-vk/">Vedansh </a> 2023 - Present</i><br>
  <i>Licensed under <a href="https://github.com/offensive-vk/UntilEverything?tab=CC0-1.0-1-ov-file#CC0-1.0-1-ov-file">CC0-1.0</a></i><br>
  <a href="https://github.com/npm-run-test"><img src="https://i.ibb.co/4KtpYxb/octocat-clean-mini.png" /></a><br>
  <sup>Thanks for visiting :)</sup>
</p>
