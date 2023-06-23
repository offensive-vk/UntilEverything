
const randomNumber = Math.floor(Math.random() * 100) + 1;

let guess = Math.floor(Math.random() * 100) + 1;
console.log(guess);

guess = randomNumber; //easy

if (guess === randomNumber) {
  console.log("Congratulations! You guessed the correct number!");
} else {
  console.log("Sorry, that's incorrect. The number was " + randomNumber);
}
