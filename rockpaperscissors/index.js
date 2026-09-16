//Rock Paper Scissors
let computerScore = 0;
let playerScore = 0;

function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);

    if (choice == 0) {
        alert("Computer chose rock!")
        return "rock"
    }
    else if (choice == 1){
        alert("Computer chose paper!")
        return "paper"
    }
    else {
        alert("Computer chose scissors!")
        return "scissors"
    }
}

function getPlayerChoice(){
    let choice = prompt("Do you choose rock, paper, or scissors?");
    alert("You chose " + choice + "!")
    return choice;
}

function playRound(playChoice, compChoice){
    if (playChoice == compChoice) {
        return String("Tie!")
    }

    else if (playChoice == "rock" && compChoice == "paper" || 
            playChoice == "paper" && compChoice == "scissors" ||
            playChoice == "scissors" && compChoice == "rock"){
        computerScore ++;
        return String("Loss!")
    }
    else {
        playerScore ++;
        return String ("Win!")

    }
}

function playGame(){
    for (let i = 0; i <= 4; i++){
        alert("Round " + (i + 1) + ": " + playRound(getPlayerChoice(), getComputerChoice()) + 
             "\nScore: " + playerScore + "-" + computerScore)
    }
    
    if (playerScore > computerScore){
        alert("Player Score: " + playerScore + "\nComputer Score: " + computerScore + "\nYOU WIN!");
    }

    else if (computerScore > playerScore){
        alert("Player Score: " + playerScore + "\nComputer Score: " + computerScore + "\nYOU LOSE!");
    }

    else alert("Player Score: " + playerScore + "\nComputer Score: " + computerScore + "\nITS A TIE!!!")
}

playGame();



    
