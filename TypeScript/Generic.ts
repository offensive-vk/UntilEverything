class Global<T>{
    private value: T | undefined;
    private reg: T | undefined;
}


function Sample<T>(anything?: any): T {
    return arguments[0];
}

let _sample = Sample<string>('TypeScript');
console.log(_sample);