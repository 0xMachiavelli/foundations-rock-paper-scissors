function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissor'];
    const random = Math.floor(Math.random() * choices.length);
    return choices[random];
}

function playRound() {
    let computerChoice = getComputerChoice();
    let playerChoice = prompt("Choose between rock, paper and scissor")
    playerChoice = playerChoice.toLowerCase();
    if (computerChoice === playerChoice){
        return "tie";
    } else if (
        (computerChoice === "rock" && playerChoice === "scissor") ||
        (computerChoice === "scissor" && playerChoice === "paper") ||
        (computerChoice === "paper" && playerChoice === "rock")
        ){
        return "lose"; 
    } else {
        return "win";
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let result = playRound();
        if (result === "win") {
            playerScore++;
            console.log(playerScore);
            console.log(computerScore);
        } else if (result === "lost") {
            computerScore++;
            console.log(playerScore);
            console.log(computerScore);
        } else {
            console.log("tie");
            console.log(playerScore);
            console.log(computerScore);
        }
    } 
    if (playerScore > computerScore){
        console.log('You win');
    } else if (playerScore < computerScore){
        console.log('You lose');
    } else {
        console.log('It\'s a tie');
    }
}

game();