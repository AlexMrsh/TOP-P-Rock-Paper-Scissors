document.addEventListener('DOMContentLoaded', function(){

    let computerChoice;
    let playerChoice;
    let computerScore = 0;
    let playerScore = 0;
    let maxScore = 5;

    let computerScoreDisplay = document.getElementById('computer-score-display');
    let playerScoreDisplay = document.getElementById('player-score-display');
    let roundResult = document.getElementById('round-result');
    let playerChoiceDisplay = document.getElementById('player-choice-display');
    let computerChoiceDisplay = document.getElementById('computer-choice-display');
    let playerChoiceImg = document.getElementById('player-choice-img');
    let computerChoiceImg = document.getElementById('computer-choice-img');
    const buttons = document.querySelectorAll('.weapon');

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            getComputerChoice();
            playerChoice = button.id;
            playerChoiceImg.setAttribute('src', `img/${button.id}.png`);
            playerChoiceImg.setAttribute('alt', `${button.id}`);
            updateScore(playerChoice, computerChoice);

            console.log('max player computer : ' + maxScore + ' ' + playerScore + ' ' + computerScore);

            if(maxScore == playerScore || maxScore == computerScore){
                buttons.forEach(function(element){
                    element.classList.add('hidden')});
                if(playerScore > computerScore){
                    roundResult.textContent = "Player won the game !"
                } else if(computerScore > playerScore){
                    roundResult.textContent = "Computer won the game !"
                }
            }

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
        computerChoiceImg.setAttribute('src', `img/${computerChoice}.png`);
        computerChoiceImg.setAttribute('alt', `${computerChoice}`);
        return computerChoiceDisplay.textContent = computerChoice;
    }

    function updateScore(playerChoice, computerChoice) {
        playerChoiceDisplay.textContent = playerChoice;
        computerChoiceDisplay.textContent = computerChoice;

        if(computerChoice == playerChoice) {
            roundResult.textContent = "Equality";
        }else if(playerChoice == "rock" && computerChoice == "paper" ||
                 playerChoice == "paper" && computerChoice == "scissors" ||
                 playerChoice == "scissors" && computerChoice == "rock") {
            roundResult.textContent = "Computer wins ! " + computerChoice + " beats " + playerChoice;
            return computerScoreDisplay.textContent = ++computerScore;
        } else if(computerChoice == "rock" && playerChoice == "paper" ||
                  computerChoice == "paper" && playerChoice == "scissors" ||
                  computerChoice == "scissors" && playerChoice == "rock") {
            roundResult.textContent = "You win ! " + playerChoice + " beats " + computerChoice;
            return playerScoreDisplay.textContent = ++playerScore;
        }
    }
});