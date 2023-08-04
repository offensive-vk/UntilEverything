"use strict";
var MySafe = /** @class */ (function () {
    function MySafe() {
        this.secretKey = 12345;
    }
    MySafe.prototype.showMoney = function () {
        return "You have total ".concat(MySafe._money, "$ of ").concat(typeof this.secretKey, " type");
    };
    MySafe.pubKey = 81023;
    MySafe._money = 10000;
    return MySafe;
}());
var safe = new MySafe();
var s = new MySafe();
// console.log(s.secretKey); Property 'secretKey' is private and only accessible within class 'MySafe'.
// OK to access by index method
console.log(s["secretKey"]);
console.log(s.showMoney());
console.log("\t Cash : ".concat(MySafe._money, "\n"));
