// The randomized RPS computer choices

function computerPlay() {
    let rps = Math.floor((Math.random() * 3) + 1);
    if (rps === 1) {
        return 'rock';
    } if (rps === 2) {
        return 'paper';
    } if (rps === 3) {
        return 'scissors';
    } else {
        return 'Something went wrong!'
    }
}

// Make a round of RPS w/ result output.

function playRound(playerSelection,computerSelection) {
    playerSelection = prompt('Make your choice of rock, paper, or scissors'),'';
    computerSelection = computerPlay();
    if (computerSelection === 'rock' && playerSelection === 'rock'){
        return `It's a rock tie!`;
    }   if (computerSelection === 'paper' && playerSelection === 'rock'){
        computerScore += 1;
        return `The computer wins! Paper against rock!`;
    }   if (computerSelection === 'scissors' && playerSelection === 'rock'){
        playerScore += 1;
        return `The player wins! Rock against scissors!`;
    }   if (computerSelection === 'rock' && playerSelection === 'paper'){
        playerScore += 1;
        return`The player wins! Paper against rock!`;
    }   if (computerSelection === 'paper' && playerSelection === 'paper'){
        return `It's a paper tie!`;
    }   if (computerSelection === 'scissors' && playerSelection === 'paper'){
        computerScore += 1;
        return`The computer wins! Scissors against paper!`;
    }   if (computerSelection === 'rock' && playerSelection === 'scissors'){
        computerScore += 1;
        return `The computer wins! Rock against scissors.`;
    }   if (computerSelection === 'paper' && playerSelection === 'scissors') {
        playerScore += 1;
        return `The player wins! Scissors against paper!`;
    }   if (computerSelection === 'scissors' && playerSelection === 'scissors'){
        return `It's a scissors tie!`;
    }   else {
        return alert('Must enter "rock", "paper", or "scissors" only.');
    }
}

//Send results to alerts and webpage for final results.

let playerScore = 0;
let computerScore = 0;
let playerSelection;
let computerSelection;
function game() {
for (let i = 1; i <= 5; i++) {
    alert(playRound(playerSelection,computerSelection));
    alert(`Computer: ${computerScore} ; Player: ${playerScore}`);
}
if (computerScore > playerScore) {
    location.replace('computer.html');
}   else if (computerScore === playerScore) {
    location.replace('tie.html');
}   else {
        location.replace('player.html');
    }
}