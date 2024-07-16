/* More Detailed */
async function main<T>(x: number | T, y: T | number, ...args: (unknown | undefined)[]): Promise<Array<T>> {
    
    await new Promise(resolve => setTimeout(resolve, 1500)); 

    // Create and return an array of type T
    const resultArray: T[] = [x, y, ...args.filter(arg => typeof arg !== 'undefined')] as Array<T>;
    return resultArray;
}

async function exampleUsage(): Promise<void> {
    try {
        const result: number[] = await main<number>(420, 560, undefined, 700);
        console.log(result);
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

exampleUsage();