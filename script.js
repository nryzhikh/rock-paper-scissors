function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) { return "rock";
    } else if (randomNumber === 1 ) {return "paper"
    } else {return "scissors"
 }
};
function playRound(playerSelection, computerSelection) {
    if ( 
    (playerSelection.toLowerCase() === "rock" && computerSelection === "scissors") ||
    (playerSelection.toLowerCase() === "paper" && computerSelection === "rock") ||
    (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper")
    ) {
        return "You Won! Your " + playerSelection + " beats " + computerSelection;
    } else if (
    (computerSelection === "rock" && playerSelection.toLowerCase() === "scissors") ||
    (computerSelection === "paper" && playerSelection.toLowerCase() === "rock") ||
    (computerSelection === "scissors" && playerSelection.toLowerCase() === "paper")
    ) {
        return "You Lose! Your " + playerSelection + " beaten by " + computerSelection;
    } else if (playerSelection.toLowerCase() === computerSelection) {
        return "Draw " + playerSelection + " and " + computerSelection;
    } else  {
        return "Wrong input";
    }
};
const playerSelection = "rock";
const computerSelection = getComputerChoice();
function game() {
    let result = playRound(prompt(), getComputerChoice()) + "\n" 
    + playRound(prompt(), getComputerChoice()) + "\n"
    + playRound(prompt(), getComputerChoice()) + "\n"
    + playRound(prompt(), getComputerChoice()) + "\n"
    + playRound(prompt(), getComputerChoice()) + "\n";
    return result;
};
console.log(game());


////////////////////////////////////////////// With for loop =>

let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) { return "rock";
    } else if (randomNumber === 1 ) {return "paper"
    } else {return "scissors"
 }
};
function playRound(playerSelection, computerSelection) {
    if ( 
    (playerSelection.toLowerCase() === "rock" && computerSelection === "scissors") ||
    (playerSelection.toLowerCase() === "paper" && computerSelection === "rock") ||
    (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper")
    ) {
        playerScore++
        roundsPlayed++
    }
    if (
    (computerSelection === "rock" && playerSelection.toLowerCase() === "scissors") ||
    (computerSelection === "paper" && playerSelection.toLowerCase() === "rock") ||
    (computerSelection === "scissors" && playerSelection.toLowerCase() === "paper")
    ) {
         computerScore++
         roundsPlayed++;
    }
    if (playerSelection.toLowerCase() === computerSelection) {
        roundsPlayed++
    } 
};
const playerSelection = "rock";
const computerSelection = getComputerChoice();
function game() {
    for (let roundsPlayed = 0; roundsPlayed < 5; roundsPlayed++) {
        playRound(prompt(), getComputerChoice())
    } 
    if (playerScore > computerScore) {
        return "Player Won\nPlayer score: " + playerScore + "\n" + "Computer score: " + computerScore;
    }
    else if (playerScore < computerScore) {
        return "Computer Won\nPlayer score: " + playerScore + "\n" + "Computer score: " + computerScore;
    }
    else {
        return "Draw\nPlayer score: " + playerScore + "\n" + "Computer score: " + computerScore;
    }
};
console.log(game());
