// Selecting user choice.
// prompt user to input choice.
// make sure choice is validated (cant chose anything but RPS).
let userChoice = prompt('Your choices... Rock, Paper, Scissors');

if (userChoice === 'rock' || userChoice === 'paper' || userChoice === 'scissors') {
    console.log(`you chose ${userChoice}!`);
} else {
    console.log('Invalid Choice!');
}

// Select Computer choice.
// store choice in an array.
// make a random number generate. Add to choice via array.
function getComputerChoice() {
    const choice = ['rock', 'paper', 'scissors']
    const randomNum = Math.floor(Math.random() * 3);

    // return random choice every time (rps)
    return `computer chose ${choice[randomNum]}`;
}
console.log(getComputerChoice());


//Game Function.
// Decide who wins by using switch statment.

function game(userChoice) {
    const computerChoice = getComputerChoice;

    switch (userChoice + computerChoice) {
        case 'rock', 'scissors':
        case 'paper', 'rock':
        case 'scissors', 'paper':
            win(userChoice, computerChoice);
            break;

        case 'paper', 'scissors':
        case 'scissors', 'rock':
        case 'rock', 'paper':
            lose(userChoice, computerChoice);
            break;

        case 'paper', 'paper':
        case 'scissors', 'scissors':
        case 'rock', 'rock':
            draw(userChoice, computerChoice);
            break;

    }

}

game();