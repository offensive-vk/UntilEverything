/**
 * Retrieves the value corresponding to a specified key from an object.
 * If the key does not exist in the object, it returns the key itself.
 * @author Vedansh ✨.
 * @template TObj - The type of the object.
 * @template TKey - The type of the key.
 * @param {TObj} obj - The object from which to retrieve the value.
 * @param {TKey} key - The key to check and retrieve the value for.
 * @param {...TKey[]} args - Additional keys to check and retrieve the values for.
 * @returns {TKey | TObj[TKey]} - The value corresponding to the specified key if it exists in the object,
 * otherwise the key itself.
 */
function getValue<TObj, TKey extends keyof TObj>(
    obj: TObj, key: TKey, ...args: Array<TKey>
): TObj[TKey] | Record<string, TObj[TKey]> {
    if (!obj?.hasOwnProperty(key)) {
        console.log(`Error! The Object Doesn't Consist The Key: ${key as string}\n`);
        if (args.length === 0) {
            return {} as Record<string, TObj[TKey]>;
        }
    }

    const result: Record<string, TObj[TKey]> = {} as Record<string, TObj[TKey]>;

    if (obj?.hasOwnProperty(key)) {
        result[key as string] = obj[key] as TObj[TKey];
    }

    for (const arg of args) {
        if (!obj?.hasOwnProperty(arg)) {
            console.log(`OOPS! The Object Doesn't Consist The Key: ${arg as string}\n`);
        } else {
            result[arg as string] = obj[arg] as TObj[TKey];
        }
    }

    return result;
}

// Testing
var Test = {
    nothing: null,
    first: true,
    second: 2,
    middle: "something",
    last: false
};

const Search = getValue(Test, "middle", "second");
console.log(Search);