function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissor'];
    const random = Math.floor(Math.random() * choices.length);
    return choices[random];
}

function playRound(computerChoice, playerChoice) {
    computerChoice = getComputerChoice();
    playerChoice = prompt("Choose between rock, paper and scissor")
    playerChoice = playerChoice.toLowerCase();
    if (computerChoice === playerChoice){
        return "It's a tie!"
    } else if (
        (computerChoice === "rock" && playerChoice === "scissor") ||
        (computerChoice === "scissor" && playerChoice === "paper") ||
        (computerChoice === "paper" && playerChoice === "rock")
        ){
        return " You lost!"; 
    } else {
        return "You win!";
    }
}

function game() {
    playRound()
    for (let i = 0; i < 5; i++) {

    }
}