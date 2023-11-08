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
