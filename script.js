document.addEventListener('DOMContentLoaded', function(){

    let computerChoice = 0;
    let playerChoice = 0;
    let computerScore = 0;
    let playerScore = 0;
    let computerScoreDisplay = document.getElementById('computerScoreDisplay');
    let playerScoreDisplay = document.getElementById('playerScoreDisplay');
    let roundResult = document.getElementById('roundResult');
    let numberOfRound = 5;
    computerScore = 0;
    playerScore = 0;


    const buttons = document.querySelectorAll('.weapon');
    let playerChoiceDisplay = document.getElementById('playerChoiceDisplay');
    let computerChoiceDisplay = document.getElementById('computerChoiceDisplay');

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            getComputerChoice();
            playerChoice = button.id;
            playerChoiceDisplay.textContent = button.id;
            updateScore(playerChoice, computerChoice);
        });
    });

    function getComputerChoice() {
        switch(Math.floor(Math.random()*3)+1) {
            case 1:
                computerChoice = "rock";
                break;
            case 2:
                computerChoice = "paper";
                break;
            case 3:
                computerChoice = "scissors";
                break;
        }
        return computerChoiceDisplay.textContent = computerChoice;
    }

    function updateScore(playerChoice, computerChoice) {
        playerChoiceDisplay = playerChoice;
        computerChoiceDisplay = computerChoice;

        if(computerChoice == playerChoice) {
            roundResult.textContent = "Equality";
        }else if(playerChoice == "rock" && computerChoice == "paper" ||
                 playerChoice == "paper" && computerChoice == "scissors" ||
                 playerChoice == "scissors" && computerChoice == "rock") {
            roundResult.textContent = "Computer wins ! " + computerChoice + " beats " + playerChoice;
            return computerScoreDisplay.textContent = computerScore++;
        } else if(computerChoice == "rock" && playerChoice == "paper" ||
                  computerChoice == "paper" && playerChoice == "scissors" ||
                  computerChoice == "scissors" && playerChoice == "rock") {
            roundResult.textContent = "You win ! " + playerChoice + " beats " + computerChoice;
            return playerScoreDisplay.textContent = playerScore++;
        }
    }


});

/*


function playRound(numberOfRound){
    for(let i=0; i < numberOfRound; i++){
        getPlayerChoice();
    }
}





function getPlayerChoice() {
    playerInput = prompt("Rock, Paper or Scissors ?")
    playerChoice = playerInput.charAt(0).toUpperCase() + playerInput.slice(1).toLowerCase();
    computerChoice = getComputerChoice();

    if(computerChoice == playerChoice) {
        console.log("Equality");
    }else if(playerChoice == "Rock" && computerChoice == "Paper" ||
             playerChoice == "Paper" && computerChoice == "Scissors" ||
             playerChoice == "Scissors" && computerChoice == "Rock") {
        console.log("Computer wins! " + computerChoice + " beats " + playerChoice);
        computerScore++;
    } else if(computerChoice == "Rock" && playerChoice == "Paper" ||
              computerChoice == "Paper" && playerChoice == "Scissors" ||
              computerChoice == "Scissors" && playerChoice == "Rock") {
        console.log("You win! " + playerChoice + " beats " + computerChoice);
        playerScore++;
    }
    console.log("Player : " + playerScore + "  |  " + computerScore + " : Computer");
}

*/