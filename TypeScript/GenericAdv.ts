// Generic class that represents a stack of elements of type T
class Stack<T> {
    private elements: T[] = [];
    public static StackName: string | undefined  = '';

    push(element: T): void {
        this.elements.push(element);
    }

    pop(): T | undefined {
        return this.elements.pop();
    }

    isEmpty(): boolean {
        return this.elements.length === 0;
    }
}

// Create a stack of numbers
const numberStack = new Stack<number>();
numberStack.push(1);
numberStack.push(2);
numberStack.push(3);

while (!numberStack.isEmpty()) {
    const num = numberStack.pop();
    console.log(num); // Output: 3, 2, 1
}

// Create a stack of strings
const stringStack = new Stack<string>();
stringStack.push("Hello");
stringStack.push("TypeScript");

while (!stringStack.isEmpty()) {
    const str = stringStack.pop();
    console.log(str);
}
