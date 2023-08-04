"use strict";
type money = number | string | boolean;
class MySafe {
    private secretKey = 12345;
    static pubKey: number = 81023;
    static _money: number = 10000;
    showMoney(): any{
        return `You have total ${MySafe._money}$ of ${typeof this.secretKey} type`;
    }
}
const safe = new MySafe();
const s = new MySafe();
// console.log(s.secretKey); Property 'secretKey' is private and only accessible within class 'MySafe'.
// OK to access by index method
console.log(s["secretKey"]);
console.log(s.showMoney());
console.log(`\t Cash : ${MySafe._money}\n`);

/*Static variables | methods  in typescript */ 
