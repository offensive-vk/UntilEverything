async function main<T>(x: number | T, y: T | number, ...args: (unknown | undefined)[]): Promise<T[]> {
    // Your asynchronous function logic here

    const resultArray: T[] = [];
    return resultArray;
}
main<number>(42, 56).then(result => {
    // 'result' is of type 'number[]'
    console.log(result);
});

/* More Detailed */
async function _main<T>(x: number | T, y: T | number, ...args: (unknown | undefined)[]): Promise<T[]> {
    
    await new Promise(resolve => setTimeout(resolve, 1500)); 

    // Create and return an array of type T
    const resultArray: T[] = [x, y, ...args.filter(arg => typeof arg !== 'undefined')] as T[];
    return resultArray;
}

async function exampleUsage() {
    try {
        const result: number[] = await _main<number>(42, 56, undefined, 70);
        console.log(result);
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

exampleUsage();
