var playerScore = 0;
var computerScore = 0;

function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissor"];
    let randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    var pSelect = playerSelection.toLowerCase();
    var cSelect = computerSelection.toLowerCase();
    if (pSelect === cSelect) {
        console.log("Draw! Neither both of you win.");
    } else if (pSelect !== cSelect) {
        if (pSelect === 'rock' && cSelect === 'paper') {
            console.log("Player lose!");
            computerScore++;
        } else if (pSelect === 'rock' && cSelect === 'scissor') {
            console.log("Player win!");
            playerScore++;
        } else if (pSelect === 'paper' && cSelect === 'rock') {
            console.log("Player win!");
            playerScore++;
        } else if (pSelect === 'paper' && cSelect === 'scissor') {
            console.log("Player lose!");
            computerScore++;
        } else if (pSelect === 'scissor' && cSelect === 'rock') {
            console.log("Player lose!");
            computerScore++;
        } else if (pSelect === 'scissor' && cSelect === 'paper') {
            console.log("Player win!");
            playerScore++;
        }
    console.log(`Player Score: ${playerScore} | Computer Score: ${computerScore}`);
    }
}

function game() {
    for (var i = 1; i < 6; i++) {
        console.log(`Round ${i}: START!`);
        let pSelect = prompt("Player, please enter your choices(rock/paper/scissor): ");
        let cSelect = getComputerChoice();
        playRound(pSelect, cSelect);
    }
    
    if (playerScore > computerScore) {
        console.log(`After playing for ${i - 1} round of the game, finally The Player is the WINNER!`);
    } else if (playerScore < computerScore) {
        console.log(`After playing for ${i - 1} round of the game, finally The Computer is the WINNER!`);
    } else {
        console.log("Both of you draw and no one win \uD83D\uDE22");
    }
}
