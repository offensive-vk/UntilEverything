"use strict";
type money = number | string | boolean;
class MySafe {
    private secretKey = 12345;
    static pubKey: number = 81023;
    static _money: money = '$78203';
    showMoney(): any {
        return `You have total ${MySafe._money} of ${typeof this.secretKey} type`;
    }
}

const s = new MySafe();
// console.log(s.secretKey); Property 'secretKey' is private and only accessible within class 'MySafe'.
// OK to access by index method
console.log(s["secretKey"]);
console.log(s.showMoney());
console.log(`\t Cash : ${MySafe._money}\n`);

/* Static variables and methods in typescript */
class MyClass {
    static x = 0;
    static printX() {
        console.log(MyClass.x);
    }
    static greeting() {
        return "Hello man what's up!";
    }
    static reg = {
        reg: function () { },
        value: null,
    };
}

class Derived extends MyClass {
    myGreeting = MyClass.greeting();
}

MyClass.x++;
console.log(MyClass.x);
MyClass.printX();
MyClass.greeting();
export { }