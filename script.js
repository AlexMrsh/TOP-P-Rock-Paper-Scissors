let computerChoice = 0;
let playerChoice = 0;
let computerScore = 0;
let playerScore = 0;

let numberOfRound = prompt("How many rounds do you want to play ?");
playRound(numberOfRound);


function playRound(numberOfRound){
    for(let i=0; i < numberOfRound; i++){
        getPlayerChoice();
    }
}

function getComputerChoice() {
    switch(Math.floor(Math.random()*3)+1) {
        case 1:
            computerChoice = "Rock";
            break;
        case 2:
            computerChoice = "Paper";
            break;
        case 3:
            computerChoice = "Scissors";
            break;
    }
    return computerChoice;
}

function getPlayerChoice() {
    playerInput = prompt("Rock, Paper or Scissors ?")
    playerChoice = playerInput.charAt(0).toUpperCase() + playerInput.slice(1).toLowerCase();
    computerChoice = getComputerChoice();

    if(computerChoice == playerChoice) {
        console.log("Equality");
    }else if(playerChoice == "Rock" && computerChoice == "Paper" || playerChoice == "Paper" && computerChoice == "Scissors" || playerChoice == "Scissors" && computerChoice == "Rock") {
        console.log("Computer wins! " + computerChoice + " beats " + playerChoice);
        computerScore++;
    } else if(computerChoice == "Rock" && playerChoice == "Paper" || computerChoice == "Paper" && playerChoice == "Scissors" || computerChoice == "Scissors" && playerChoice == "Rock") {
        console.log("You win! " + playerChoice + " beats " + computerChoice);
        playerScore++;
    }
    console.log("Player : " + playerScore + "  |  " + computerScore + " : Computer");
}