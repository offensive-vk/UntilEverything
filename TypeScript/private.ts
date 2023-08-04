class MySafe {
    private secretKey = 12345;
    constructor(key: number){
        this.secretKey = key;
    }
}

const s:any = new MySafe(19331);
// Not allowed during type checking

console.log(s.secretKey);
//Property 'secretKey' is private and only accessible within class 'MySafe'.
// OK to access by index method
console.log(s["secretKey"]);