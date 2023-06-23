// Generates a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;

// Prompt the user to guess the number
let guess = Math.floor(Math.random() * 100) + 1;
console.log(guess);
// Convert the user's input to a number
guess = randomNumber;

// Check if the guess is correct and provide feedback
if (guess === randomNumber) {
  console.log("Congratulations! You guessed the correct number!");
} else {
  console.log("Sorry, that's incorrect. The number was " + randomNumber);
}
