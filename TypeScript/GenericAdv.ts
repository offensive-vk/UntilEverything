// 1. Generic class that represents a stack of elements of type T
class Stack<T> {
    private elements: T[] = [];
    public static StackName: string | undefined = '';

    push(element: T): void {
        this.elements.push(element);
    }

    pop(): T | undefined {
        return this.elements.pop();
    }

    isEmpty(): boolean {
        return this.elements.length === 0;
    }
    delete(): void{
        this.elements.length = 0;
        console.log(`Stack is empty.`);
    }
}

// Create a stack of numbers
const numberStack = new Stack<number>();
numberStack.push(1);
numberStack.push(2);
numberStack.push(3);

while (!numberStack.isEmpty()) {
    const num = numberStack.pop();
    console.log(num);
}

// Create a stack of strings
const stringStack = new Stack<string>();
stringStack.push("Hello");
stringStack.push("TypeScript");

while (!stringStack.isEmpty()) {
    const str = stringStack.pop();
    console.log(str);
}

// 2. Functional Approach
// Generic interface for Creating a key-value pair
interface KeyValuePair<K, V> {
    key: K;
    value: V;
}

// Generic function to create a KeyValuePair
async function createKeyValuePair<K, V>(key: K, value: V): Promise<KeyValuePair<K, V>> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ key, value });
        }, 2000);
    });
}

(async () => {
    // Create a KeyValuePair with number key and string value
    const numberStringPair = await createKeyValuePair<number, string>(1, "TypeScript");

    // Create a KeyValuePair with string key and boolean value
    const stringBooleanPair = await createKeyValuePair<string, boolean>("isTrue", true);

    // Print the key-value pairs
    console.log(numberStringPair);
    console.log(stringBooleanPair); 
})();