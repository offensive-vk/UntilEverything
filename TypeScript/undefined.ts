async function main<T>(x: number | T, y: T | number, ...args: (unknown | undefined)[]): Promise<T[]> {
    console.log(`Value of X: ${x}, Y: ${y}`);
    console.log(`Extra Arguments: ${args}`);

    const resultArray: T[] = [x, y, args] as T[];
    return resultArray;
}
main<number>(42, 56, true).then(result => {
    // 'result' is of type 'number[]'
    console.log(result);
});

/* More Detailed */
async function _main<T>(x: number | T, y: T | number, ...args: (unknown | undefined)[]): Promise<Array<T>> {
    
    await new Promise(resolve => setTimeout(resolve, 1500)); 

    // Create and return an array of type T
    const resultArray: T[] = [x, y, ...args.filter(arg => typeof arg !== 'undefined')] as Array<T>;
    return resultArray;
}

async function exampleUsage(): Promise<void> {
    try {
        const result: number[] = await _main<number>(420, 560, undefined, 700);
        console.log(result);
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

exampleUsage();