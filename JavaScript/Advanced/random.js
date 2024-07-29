var random = Math.random();
var x = new Array();
for (var i = 0; i <= 10; i++) {
    x.push("".concat(Math.random() * 1000));
}
console.table(x);