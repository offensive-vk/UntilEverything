/**
 * @param a Object A 
 * @param b Object B
 * @returns new Object of A + B
 */
function MergeObjects<T extends object, U extends object>(a: T, b: U): T & U {
    return { ...a, ...b };
}

// mergedObject is inferred as { a: number, b: string }
const mergedObject = MergeObjects({ a: 1 }, { b: 'two' });
console.log('Usage - Merged Object:', mergedObject);
export { };