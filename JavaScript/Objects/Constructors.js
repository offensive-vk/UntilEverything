const boxes = [
    { value: 1, getValue() { return this.value; } },
    { value: 2, getValue() { return this.value; } },
    { value: 3, getValue() { return this.value; } },
];

const boxPrototype = {
    getValue() {
        return this.value;
    },
};

const _boxes = [
    { value: 1, __proto__: boxPrototype },
    { value: 2, __proto__: boxPrototype },
    { value: 3, __proto__: boxPrototype },
];

// A constructor function using Functions
function Box(value) {
    this.value = value;
}
// Properties all boxes created from the Box() constructor
// will have
Box.prototype.getValue = function () {
    return this.value;
};

const moreboxes = [new Box(1), new Box(2), new Box(3)];

/*Using classes , same */
class Box {
    constructor(value) {
        this.value = value;
    }

    // Methods are created on Box.prototype
    getValue() {
        return this.value;
    }
}
