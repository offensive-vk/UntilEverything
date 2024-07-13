/**
 * @param arr Array to check
 * @returns data type of the given array
 */
function getArrayType(arr: any[]): string {
    const elementType = arr.length > 0 ? typeof arr[0] : 'unknown';
    
    if (elementType === 'object' && arr[0] instanceof Array) {
        return `Array of ${getArrayType(arr[0])}`;
    } else {
        return `Array of ${elementType}s`;
    }
}

console.log(`Type of Array is ${getArrayType([75,854,864, false])}`)