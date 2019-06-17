// Selecting user choice.
// prompt user to input choice.
// make sure choice is validated (cant chose anything but RPS).
let UserChoice = prompt('Your choices... Rock, Paper, Scissors');

if (UserChoice === 'rock' || UserChoice === 'paper' || UserChoice === 'scissors') {
    console.log(`you chose ${UserChoice}!`);
} else {
    console.log('Invalid Choice!');
}

// Select Computer choice.
// store choice in an array.
// make a random number generate. Add to choice via array.
const choice = ['rock', 'paper', 'scissors']
const randomNum = Math.floor(Math.random() * 3);

console.log(`computer chose ${choice[randomNum]}`);
//console.log("computer chose " + choice[randomNum]);