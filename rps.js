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

// set up 3 functions for each button as a choice.

function playRock(playerSelection,computerSelection) {
    playerSelection = 'rock';
    computerSelection = computerPlay();
    if (computerSelection === 'rock' && playerSelection === 'rock'){
        return;
    }   if (computerSelection === 'paper' && playerSelection === 'rock'){
        computerScore += 1;
        computerScorePrint.textContent = `${computerScore}`;
        return;
    }   if (computerSelection === 'scissors' && playerSelection === 'rock'){
        playerScore += 1;
        playerScorePrint.textContent = `${playerScore}`;
        return;
    }   if (pScore === 5) {
        location.reload();
    }   if (cScore === 5) {
        location.reload();
    }
}

function playPaper(playerSelection,computerSelection) {
    playerSelection = 'paper';
    computerSelection = computerPlay();
       if (computerSelection === 'rock' && playerSelection === 'paper'){
        playerScore += 1;
        playerScorePrint.textContent = `${playerScore}`;
        return;
    }   if (computerSelection === 'paper' && playerSelection === 'paper'){
        return;
    }   if (computerSelection === 'scissors' && playerSelection === 'paper'){
        computerScore += 1;
        computerScorePrint.textContent = `${computerScore}`;
        return;
    }   if (pScore === 5) {
        location.reload();
    }   if (cScore === 5) {
        location.reload();
    }
}

function playScissors(playerSelection,computerSelection) {
    playerSelection = 'scissors';
    computerSelection = computerPlay();
        if (computerSelection === 'rock' && playerSelection === 'scissors'){
        computerScore += 1;
        computerScorePrint.textContent = `${computerScore}`;
        return;
    }   if (computerSelection === 'paper' && playerSelection === 'scissors') {
        playerScore += 1;
        playerScorePrint.textContent = `${playerScore}`;
        return;
    }   if (computerSelection === 'scissors' && playerSelection === 'scissors'){
        return;
    }   if (pScore === 5) {
        location.reload();
    }   if (cScore === 5) {
        location.reload();
    }
}

//set variables below

let playerScore = 0;
let computerScore = 0;
let playerSelection;
let computerSelection;

//map functions to buttons below

let rockButton = document.querySelector('.rockB');
rockButton.addEventListener('click',playRock);

let paperButton = document.querySelector('.paperB');
paperButton.addEventListener('click',playPaper);

let scissorsButton = document.querySelector('.scissorsB');
scissorsButton.addEventListener('click',playScissors);

let playerScorePrint = document.querySelector('.pScore');
let computerScorePrint = document.querySelector('.cScore');

let pScore = playerScorePrint.textContent = `${playerScore}`;
let cScore = computerScorePrint.textContent = `${computerScore}`;

/*
function compWins () {
    if (computerScorePrint === 5) {
        alert(`The computer wins!`);
        location.reload();
        return;
    } if (playerScorePrint === 5) {
        alert(`The computer wins!`);
        location.reload();
        return;
    } if (playerScorePrint === 5 && computerScorePrint === 5) {
        alert(`It's a tie!`);
        location.reload;
        return;
    }
}
compWins();


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
*/