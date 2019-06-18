const userScore = 0;
const computerScore = 0;

// Select Computer choice.
// store choice in an array.
// make a random number generate. Add to choice via array.
function getComputerChoice() {
  const choice = ["rock", "paper", "scissors"];
  const randomNum = Math.floor(Math.random() * 3);

  // return random choice every time (rps)
  return choice[randomNum];
}

//Round Function.
// Decide who wins by using switch statment.
function playRound(userChoice, computerChoice) {
  switch (userChoice + computerChoice) {
    case ("rock", "scissors"):
    case ("paper", "rock"):
    case ("scissors", "paper"):
      console.log(`You Win! ${userChoice} beats ${computerChoice}`);
      win(userChoice, computerChoice);
      break;

    case ("scissors", "rock"):
    case ("rock", "paper"):
    case ("paper", "scissors"):
      console.log(`You Lost! ${userChoice} dont beat ${computerChoice}`);
      lose(userChoice, computerChoice);
      break;

    case ("rock", "rock"):
    case ("paper", "paper"):
    case ("scissors", "scissors"):
      console.log(`You both Tie! ${userChoice}  ${computerChoice}`);
      draw(userChoice, computerChoice);
      break;
  }
}

function score(winner) {
  if (winner === win) {
    userScore++;
    return console.log(
      `The score is Player: ${userScore} vs Computer ${computerScore}`
    );
  } else if (winner === lose) {
    computerScore++;
    return console.log(
      `The score is Player: ${userScore} vs Computer ${computerScore}`
    );
  } else {
    return console.log(
      `The score is Player: ${userScore} vs Computer ${computerScore}`
    );
  }
}
// Selecting user choice.
// prompt user to input choice.
// make sure choice is validated (cant chose anything but RPS).
function game() {
  for (let i = 0; i < 5; i++) {
    const userChoice = prompt("Your Choices... Rock, Paper, Scissors");
    const computerChoice = getComputerChoice();

    console.log(`You chose ${userChoice}`);
    console.log(`Computer chose ${computerChoice}`);
    console.log(score(playRound(userChoice, computerChoice)));
  }
}

game();
