const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const result = document.getElementById('result');
const choices = document.querySelectorAll('.choice');
const winScore = 5;
let userScore = 0;
let computerScore = 0;

// Play game
function play(e) {
    restart.style.display = 'inline-block'; // <--- shows button once user clicks hidden within css
    const playerChoice = e.target.id;
    const computerChoice = getComputerChoice();
    const winner = getWinner(playerChoice, computerChoice);
    showWin(winner, playerChoice, computerChoice);
    gameOver(userScore, computerScore);
    //  console.log(playerChoice, computerChoice, winner); <-- used to test,
}

// display final round out come.
//stop user from clicking buttons when game has stopped.
function gameOver(userScore, computerScore) {

    if (userScore === winScore) {
        choices.forEach(choice => choice.style.display = 'none');
        result.innerHTML = "YOU WON!";

    } else if (computerScore === winScore) {
        choices.forEach(choice => choice.style.display = 'none');
        result.innerHTML = "YOU LOSE!";
    }

}

//  Get computer choice
function getComputerChoice() {
    const choice = ["Rock", "Paper", "Scissors"];
    const randomNum = Math.floor(Math.random() * 3);

    // return random choice every time (rps)
    return choice[randomNum];

}

// set everything bag to zero.
function restartGame() {
    userScore = 0;
    computerScore = 0;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result.innerHTML = "Ready? Good Luck!";


    choices.forEach(choice => choice.style.display = 'block');
}

// show winner of turns played.
function showWin(winner, playerChoice, computerChoice) {
    if (winner === 'win') {
        userScore++
        userScore_span.innerHTML = userScore;
        result.innerHTML = `${playerChoice} beats ${computerChoice} You Win!`;
    } else if (winner === 'lose') {
        computerScore++
        computerScore_span.innerHTML = computerScore;
        result.innerHTML = `${computerChoice} beats ${playerChoice} You Lose!`;
    } else {
        result.innerHTML = `${playerChoice} Vs ${computerChoice} it\'s a Draw!`
    }
}

// gets winng, losing and drawing outcomes.
function getWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 'draw';

    } else if (
        (playerChoice === "Rock" && computerChoice === "Scissors") ||
        (playerChoice === "Paper" && computerChoice === "Rock") ||
        (playerChoice === "Scissors" && computerChoice === "Paper")
    ) {
        return "win";
    } else if (
        (playerChoice === "Scissors" && computerChoice === "Rock") ||
        (playerChoice === "Rock" && computerChoice === "Paper") ||
        (playerChoice === "Paper" && computerChoice === "Scissors")
    ) {
        return "lose";
    }


}



//Event listner
choices.forEach(choice => choice.addEventListener('click', play));
restart.addEventListener('click', restartGame);