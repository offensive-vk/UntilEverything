// Abstract class with generics
abstract class AbstractContainer<T> {
    protected items: T[] = [];

    // Abstract method for adding an item of type T
    abstract addItem(item: T): void;

    // Abstract method for getting an item of type T by index
    abstract getItem(index: number): T;

    // Concrete method for getting the number of items
    public getLength(): number {
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
class NumberContainer extends AbstractContainer<number> {
    // Implementation of addItem for numbers
    public addItem(item: number): void {
        this.items.push(item);
    }

    // Implementation of getItem for numbers
    public getItem(index: number): number {
        if (index >= 0 && index < this.getLength()) {
            return this.items[index];
        } else {
            throw new Error("Index out of bounds.");
        }
    }
}

// String container
const stringContainer = new StringContainer();
stringContainer.addItem("Apple");
stringContainer.addItem("Banana");
console.log("String Container Items:");
console.log(stringContainer.getItem(0));
console.log(stringContainer.getItem(1));

// Number Container
const numberContainer = new NumberContainer();
numberContainer.addItem(42);
numberContainer.addItem(7);
console.log("Number Container Items:");
console.log(numberContainer.getItem(0));
console.log(numberContainer.getItem(1));