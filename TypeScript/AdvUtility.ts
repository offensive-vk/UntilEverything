// We create a utility function that can validate the input value against a constraint
function isType<T extends { [key: string]: any }>(input: any, constructor: new (...args: any[]) => T): input is T {
    return input instanceof constructor;
}
