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
        return "You Won! " + playerSelection + " beats " + computerSelection;
    } else if (playerSelection.toLowerCase() === computerSelection) {
        return "Draw";
    } else  {
        return "You Lose! " + computerSelection + " beats " + playerSelection;
    }
};
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));