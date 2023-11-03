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
function getValue<TObj, TKey extends keyof TObj>(obj: TObj, key: TKey, ...args: Array<TKey>): TKey {
    if (!obj?.hasOwnProperty(key)) {
        console.log(`OOPS ! The Object Doesn't Consist The Key: ${key as string}\n`);
        return key;
    }
    return obj[key];
}