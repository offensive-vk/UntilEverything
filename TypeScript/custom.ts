type custom = string | boolean | number;
var random = Math.random();

const x: Array<custom> = new Array();
for(let i = 0; i <= 10; i++){
        x.push(`${Math.random() * 1000}`);
}

console.table(x);
