function getComputerChoice() {
    let choicesArr = ["Rock", "Paper", "Scissors"];
    let computerSelection = choicesArr[Math.floor(Math.random() * choicesArr.length)];
    return computerSelection;
}

function getPlayerChoice() {
    let playerSelection = prompt("Make your selection: ROCK, PAPER, SCISSORS")
    return playerSelection
}

function playRound() {
    let playerSelection = getPlayerChoice().toUpperCase();
    let computerSelection = getComputerChoice().toUpperCase();
    
    if (playerSelection === "ROCK") {
        if (computerSelection === "ROCK") {
            return "TIE";
        }
        else if (computerSelection === "PAPER") {
            return "COMPUTER";
        }
        else {
            return "PLAYER";
        }
    }
    else if (playerSelection === "PAPER") {
        if (computerSelection === "PAPER") {
            return "TIE";
        }
        else if (computerSelection === "ROCK") {
            return "PLAYER";
        }
        else {
            return "COMPUTER";
        }
    }
    else {
        if (computerSelection === "SCISSORS") {
            return "TIE";
        }
        else if (computerSelection === "PAPER") {
            return "PLAYER";
        }
        else {
            return "COMPUTER";
        }
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let winner = playRound();
        if (winner === "PLAYER") {
            playerScore++;
            alert(`YOU GOT IT! You win this battle, but not the war!\nYOU: ${playerScore} COMPUTER: ${computerScore}`);
        }
        else if (winner === "COMPUTER") {
            computerScore++;
            alert(`YOU LOST IT! Computer wins this battle, but not the war!
            \nYOU: ${playerScore} COMPUTER: ${computerScore}`);
        }
        else { 
            alert("IT'S A TIE FOR NOW!");
        }
    }
    if (playerScore === computerScore) {
        alert("IT'S A TIE!");
    }
    else if (playerScore > computerScore) {
        alert("YOU WIN!");
    }
    else {
        alert("THE COMPUTER WINS! :(");
    }
}

game();
