

function getValue<TObj, TKey extends keyof TObj>(obj: TObj, key: TKey, ...args: Array<TKey>): void {
    if(!obj?.hasOwnProperty(key)){
        console.log(`OOPS ! The Object Doesn't Consist The Key: ${key as string}\n`);
        return;
    }
    
}