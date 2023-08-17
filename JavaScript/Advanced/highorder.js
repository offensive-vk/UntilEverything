function applyOperation(operation, x, y) {
    return operation(x, y);
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

const result1 = applyOperation(add, 50, 30);
const result2 = applyOperation(subtract, 100, 40);
