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