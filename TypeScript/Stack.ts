class Stack<T> {
    private items: T[] = [];

    push(item: T): void {
        this.items.push(item);
    }

    pop(): T | undefined {
        return this.items.pop();
    }

    peek(): T | undefined {
        return this.items[this.items.length - 1];
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }

    size(): number {
        return this.items.length;
    }

    clear(): void {
        this.items = [];
    }
}

// Example usage:
const stack = new Stack<number>();

stack.push(457);
stack.push(227);
stack.push(300);

console.log("Stack size: " + stack.size());

console.log("Top element: " + stack.peek());

while (!stack.isEmpty()) {
    console.log("Popped: " + stack.pop());
}

console.log("Is the stack empty? " + stack.isEmpty());
export {}