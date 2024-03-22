function isInheritingFromClass(child: any): boolean {
    let proto = Object.getPrototypeOf(child.prototype);
    while (proto !== null) {
        if (proto.constructor !== Object) {
            return true;
        }
        proto = Object.getPrototypeOf(proto);
    }
    return false;
}

class MyClass {}

class ChildClass extends MyClass {}

console.log(isInheritingFromClass(ChildClass)); // Output: true
console.log(isInheritingFromClass(MyClass));   // Output: false

export { }