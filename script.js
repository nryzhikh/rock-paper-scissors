const buttons = document.querySelectorAll('button');
const result = document.querySelector('#result');
let roundsPlayed = 0;
let playerScore = 0;
let computerScore = 0;

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    if (playerScore >= 5 || computerScore >= 5) {
        playerScore = 0;
        computerScore = 0;
    };
        result.textContent = playRound(button.id, getComputerChoice());
  });
});

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) { return "rock";
    } else if (randomNumber === 1 ) {return "paper"
    } else {return "scissors"
 }
};


function playRound(playerSelection, computerSelection) {
    if ( 
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        playerScore += 1;
        if (playerScore >= 5) {
            return "You won the game! Your score: " + playerScore + " Computer score: " + computerScore;
        } else
        return "You Won! Your " + playerSelection + " beats " + computerSelection + " Your score: " + playerScore + " Computer score: " + computerScore;;
    } else if (playerSelection === computerSelection) {
        return "Draw " + playerSelection + " and " + computerSelection  + " Your score: " + playerScore + " Computer score: " + computerScore;;
    } else  {
        computerScore += 1;
        if (computerScore >= 5) {
            return "You lose the game!: Your score: " + playerScore + " Computer score: " + computerScore;

        } else
        return "You Lose! Your " + playerSelection + " beaten by " + computerSelection + " Your score: " + playerScore + " Computer score: " + computerScore;
    }
};

// ////////////////////////////////////////////// With for loop =>

// let playerScore = 0;
// let computerScore = 0;
// let roundsPlayed = 0

// function getComputerChoice() {
//     let randomNumber = Math.floor(Math.random() * 3);
//     if (randomNumber === 0) { return "rock";
//     } else if (randomNumber === 1 ) {return "paper"
//     } else {return "scissors"
//  }
// };
// function playRound(playerSelection, computerSelection) {
//     if ( 
//     (playerSelection.toLowerCase() === "rock" && computerSelection === "scissors") ||
//     (playerSelection.toLowerCase() === "paper" && computerSelection === "rock") ||
//     (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper")
//     ) {
//         playerScore++
//         roundsPlayed++
//     }
//     if (
//     (computerSelection === "rock" && playerSelection.toLowerCase() === "scissors") ||
//     (computerSelection === "paper" && playerSelection.toLowerCase() === "rock") ||
//     (computerSelection === "scissors" && playerSelection.toLowerCase() === "paper")
//     ) {
//          computerScore++
//          roundsPlayed++;
//     }
//     if (playerSelection.toLowerCase() === computerSelection) {
//         roundsPlayed++
//     } 
// };
// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
// function game() {
//     for (let roundsPlayed = 0; roundsPlayed < 5; roundsPlayed++) {
//         playRound(prompt(), getComputerChoice())
//     } 
//     if (playerScore > computerScore) {
//         return "Player Won\nPlayer score: " + playerScore + "\n" + "Computer score: " + computerScore;
//     }
//     else if (playerScore < computerScore) {
//         return "Computer Won\nPlayer score: " + playerScore + "\n" + "Computer score: " + computerScore;
//     }
//     else {
//         return "Draw\nPlayer score: " + playerScore + "\n" + "Computer score: " + computerScore;
//     }
// };
