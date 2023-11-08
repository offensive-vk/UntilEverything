// We create a utility function that can validate the input value against a constraint
function isType<T extends { [key: string]: any }>(input: any, constructor: new (...args: any[]) => T): input is T {
    return input instanceof constructor;
}
// Now, let's use these functions to validate type parameters in our generic function
function performAction<T extends { [key: string]: any }>(input: any, constructor: new (...args: any[]) => T): T {
    if (isType<T>(input, constructor)) {
        // If the input value satisfies the constraint, we perform the action and return the result
        return input;
    } else {
        throw new Error('Input does not satisfy the type constraint');
    }
}

