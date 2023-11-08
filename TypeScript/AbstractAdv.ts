// Abstract class with generics
abstract class AbstractContainer<T> {
    private items: T[] = [];

    // Abstract method for adding an item of type T
    abstract addItem(item: T): void;

    // Abstract method for getting an item of type T by index
    abstract getItem(index: number): T;

    // Concrete method for getting the number of items
    getLength(): number {
        return this.items.length;
    }
}
// Subclass for a container of strings
class StringContainer extends AbstractContainer<string> {
    // Implementation of addItem for strings
    addItem(item: string): void {
        this.items.push(item);
    }

    // Implementation of getItem for strings
    getItem(index: number): string {
        if (index >= 0 && index < this.getLength()) {
            return this.items[index];
        } else {
            throw new Error("Index out of bounds.");
        }
    }
}

// Subclass for a container of numbers

