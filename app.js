const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const result_p = document.querySelector("result > p");
const choices = document.querySelectorAll('.choice');
let userScore = 0;
let computerScore = 0;

// Play game
function play(e) {
    const playerChoice = e.target.id;
    const computerChoice = getComputerChoice();
    const winner = getWinner(playerChoice, computerChoice);

    console.log(playerChoice, computerChoice, winner);
}

//  Get computer choice
function getComputerChoice() {
    const choice = ["rock", "paper", "scissors"];
    const randomNum = Math.floor(Math.random() * 3);

    // return random choice every time (rps)
    return choice[randomNum];

}

function getWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 'draw';
        // console.log(
        //     `It\'s a Tie! You chose ${playerChoice} and Computer chose ${computerChoice} `
        // );
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        // console.log(`You Win! ${playerChoice} beats ${computerChoice}`);
        return "win";
    } else if (
        (playerChoice === "scissors" && computerChoice === "rock") ||
        (playerChoice === "rock" && computerChoice === "paper") ||
        (playerChoice === "paper" && computerChoice === "scissors")
    ) {
        // console.log(`You Lose! ${playerChoice} lost to ${computerChoice}`);
        return "lose";
    }
}

//Event listner
choices.forEach(choice => choice.addEventListener('click', play));