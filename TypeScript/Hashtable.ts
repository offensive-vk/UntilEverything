class HashTable {
    private table: { [key: string]: any } = {};

    // Hash function to generate an index for the key
    private hash(key: string): number {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % 37; // Using a prime number for better distribution
    }

    // Insert a key-value pair into the hash table
    public set(key: string, value: any): void {
        const index = this.hash(key);
        this.table[index] = value;
    }

    // Retrieve the value associated with a key
    public get(key: string): any {
        const index = this.hash(key);
        return this.table[index];
    }

    // Check if a key exists in the hash table
    public has(key: string): boolean {
        const index = this.hash(key);
        return this.table.hasOwnProperty(index);
    }

    // Remove a key-value pair from the hash table
    public delete(key: string): void {
        const index = this.hash(key);
        delete this.table[index];
    }
    public printTable(): HashTable | void {
        if(this.table.length === 0) { 
            console.log(`length is zero lol`);
        }
        console.table(this.table);
    }
}

// Example usage:
const myHashTable = new HashTable();

myHashTable.set('name', 'John');
myHashTable.set('age', 25);
myHashTable.set('extra-user', false);

console.log(myHashTable.get('name')); // Output: John
console.log(myHashTable.get('age'));  // Output: 25
console.log(myHashTable.has('name')); // Output: true

myHashTable.delete('age');
console.log(myHashTable.get('age'));  // Output: undefined
myHashTable.printTable(); // Prints in table format.