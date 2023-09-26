class Node<T> {
    constructor(public data: T, public next: Node<T> | null = null) { }
}

class LinkedList<T> {
    private head: Node<T> | null = null;

    // Insert a new node at the end of the list
    insert(data: T): void {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    // Delete a node with the given data
    delete(data: T): void {
        if (!this.head) {
            return;
        }

        if (this.head.data === data) {
            this.head = this.head.next;
            return;
        }

        let current = this.head;
        while (current.next) {
            if (current.next.data === data) {
                current.next = current.next.next;
                return;
            }
            current = current.next;
        }
    }

    // Traverse and print the linked list
    display(): void {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

