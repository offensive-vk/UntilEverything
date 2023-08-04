class MySafe {
    private secretKey = 12345;
    static pubKey: number = 81023;
    #money = 0;
    showMoney(): any{
        return `${typeof(this.#money)}`;
    }
}

const s = new MySafe();
// console.log(s.secretKey); Property 'secretKey' is private and only accessible within class 'MySafe'.
// OK to access by index method
console.log(s["secretKey"]);
console.log(s.showMoney());

/*Static variables | methods  in typescript */ 