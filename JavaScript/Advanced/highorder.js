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

// Functional programming
function multiplier(factor) {
    return function(x) {
        return x * factor;
    };
}

const double = multiplier(2);
const triple = multiplier(3);

const result3 = double(5);
const result4 = triple(5);
