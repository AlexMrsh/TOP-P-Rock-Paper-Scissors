document.addEventListener('DOMContentLoaded', function(){

    let computerChoice = 0;
    let playerChoice = 0;
    let computerScore = document.getElementById('computerScore');
    let playerScore = document.getElementById('playerScore');
    let numberOfRound = 5;

    const buttons = document.querySelectorAll('.weapon');
    const playerChoiceDisplay = document.getElementById('playerChoiceDisplay');
    const computerChoiceDisplay = document.getElementById('computerChoiceDisplay');

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            getComputerChoice();
            playerChoice = button.id;
            playerChoiceDisplay.textContent = button.id;
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

    function getResults() {

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