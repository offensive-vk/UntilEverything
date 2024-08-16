/**
Ordered Bulk Write: In this type of bulk operation, MongoDB executes the write operations in the order you provide. 
If a write operation fails, MongoDB returns an error and does not proceed with the remaining operations.

Unordered Bulk Write: In this type of bulk operation, MongoDB can execute the write operations in any order
If a write operation fails, MongoDB will continue to process the remaining write operations.
*/
const orderedBulk = db.collection('mycollection').initializeOrderedBulkOp();

orderedBulk.insert({ _id: 1, name: 'John' });
orderedBulk.find({ _id: 2 }).updateOne({ $set: { name: 'Jane' } });
orderedBulk.find({ _id: 3 }).remove();

orderedBulk.execute((err, result) => {
  if(err) throw err;
  console.log(`The Result is : ${result}\n`)
});


const unorderedBulk = db.collection('mycollection').initializeUnorderedBulkOp();

unorderedBulk.insert({ _id: 1, name: 'John' });
unorderedBulk.find({ _id: 2 }).updateOne({ $set: { name: 'Jane' } });
unorderedBulk.find({ _id: 3 }).remove();

unorderedBulk.execute((err, result) => {
  if(err) throw err;
  console.log(`The Result is : ${result}\n`)
});
