let userScore = 0;
let computerScore = 0;

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
  if (userChoice === computerChoice) {
    console.log(
      `It\'s a Tie! You chose ${userChoice} and Computer chose ${computerChoice} `
    );
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log(`You Win! ${userChoice} beats ${computerChoice}`);
    return "win";
  } else if (
    (userChoice === "scissors" && computerChoice === "rock") ||
    (userChoice === "rock" && computerChoice === "paper") ||
    (userChoice === "paper" && computerChoice === "scissors")
  ) {
    console.log(`You Lose! ${userChoice} lost to ${computerChoice}`);
    return "lose";
  }
}
//score for player and computer.
function score(winner) {
  if (winner === "win") {
    userScore++;
    console.log(
      `The score is Player: ${userScore} vs Computer ${computerScore}`
    );
  } else if (winner === "lose") {
    computerScore++;
    console.log(
      `The score is Player: ${userScore} vs Computer ${computerScore}`
    );
  } else {
    console.log(
      `The score is Player: ${userScore} vs Computer ${computerScore}`
    );
  }
}
// Selecting user choice.
// prompt user to input choice.
// make sure choice is validated (cant chose anything but RPS).
// loop 5 times.
function game() {
  for (let i = 0; i < 5; i++) {
    const userChoice = prompt("Your Choices... Rock, Paper, Scissors");
    const computerChoice = getComputerChoice();

    console.log(`You chose ${userChoice}`);
    console.log(`Computer chose ${computerChoice}`);
    console.log(score(playRound(userChoice, computerChoice)));
  }
  // print final score outcome to user at end of rounds(loop).
  if (userScore > computerScore) {
    console.log(
      `Well done you WON! Player Score:${userScore} - Computer Score: ${computerScore}`
    );
  } else if (userScore < computerScore) {
    console.log(
      `Oh-No You Lost! Player Score:${userScore} - Computer Score: ${computerScore}`
    );
  } else {
    console.log(
      `It\'s a DRAW! Player Score:${userScore} - Computer Score: ${computerScore}`
    );
  }
}

game();
