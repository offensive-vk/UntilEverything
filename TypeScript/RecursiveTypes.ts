/*
Recursive types in TypeScript are a way to define a type that references itself. 
Recursive types are used to define complex data structures, such as trees or linked lists, 
where a value can contain one or more values of the same type.
*/

// Define a type for a binary tree node that may have left and right children.
type TreeNode<T> = {
    value: T;
    left?: TreeNode<T>;
    right?: TreeNode<T>;
};

// Create a binary tree with some sample data.
const tree: TreeNode<number> = {
    value: 1,
    left: {
        value: 2,
        left: { value: 4 },
        right: { value: 5 },
    },
    right: {
        value: 3,
        left: { value: 6 },
        right: { value: 7 },
    },
};

// Function to recursively traverse and print the tree.
function printTree(node: TreeNode<number> | undefined) {
    if (node) {
        console.log(node.value);
        printTree(node.left);
        printTree(node.right);
    }
}

// Print the binary tree using a recursive function.
console.log("Binary Tree:");
printTree(tree);