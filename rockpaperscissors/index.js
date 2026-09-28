//Rock Paper Scissors
let computerScore = 0;
let playerScore = 0;
const rockBtn = document.querySelector("#rockBtn");
const paperBtn = document.querySelector("#paperBtn");
const scissorsBtn = document.querySelector("#scissorsBtn");
const scoreboard = document.querySelector("#scoreboard");
const playScore = document.querySelector("#playerScore");
const compScore = document.querySelector("#compScore");
const playByPlay = document.createElement("div");
const compChoice = document.createElement("p");
const playerChoice = document.createElement("p");

rockBtn.addEventListener("click", () => playRound("rock", getComputerChoice()));
rockBtn.addEventListener("click", () => playerChoice.textContent = "You chose rock!");
paperBtn.addEventListener("click", () => playRound("paper", getComputerChoice()));
paperBtn.addEventListener("click", () => playerChoice.textContent = "You chose paper!");
scissorsBtn.addEventListener("click", () => playRound("scissors", getComputerChoice()));
scissorsBtn.addEventListener("click", () => playerChoice.textContent = "You chose scissors!");


scoreboard.appendChild(playerChoice);
scoreboard.appendChild(compChoice);
scoreboard.appendChild(playByPlay);



function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);

    if (choice == 0) {
        compChoice.textContent = "Computer chose rock!";
        return "rock"
    }
    else if (choice == 1){
        compChoice.textContent = "Computer chose paper!";
        return "paper"
    }
    else {
        compChoice.textContent = "Computer chose scissors!";
        return "scissors"
    }
}

function playRound(playChoice, compChoice){
    if (playChoice == compChoice) {
        playByPlay.textContent = "Tie!"
    }

    else if (playChoice == "rock" && compChoice == "paper" || 
            playChoice == "paper" && compChoice == "scissors" ||
            playChoice == "scissors" && compChoice == "rock"){
        computerScore ++;
        compScore.textContent = "Computer Score: " + computerScore;
        if(computerScore == 5){
            playByPlay.textContent = "COMPUTER WINS!!!"
        }
        else{
            playByPlay.textContent = "Computer scores!";
        }
        
    }
    else {
        playerScore ++;
        if(playerScore == 5){
            playByPlay.textContent = "YOU WIN!!!"
        }
        else{
            playByPlay.textContent = "Player scores!";
        }
        playScore.textContent = "Player Score: " + playerScore;

    }
}




    
