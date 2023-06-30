let random = Math.random() * 1000 + 10;

const numbers = [random, random+random, random*random, random-random, random*2];
let sum = 0;

for (let num of numbers) {
    sum += Math.round(num);
}

console.log("Random Number : ", sum);
