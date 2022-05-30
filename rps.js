//set variables below

let playerScore = 0;
let computerScore = 0;
let playerSelection;
let computerSelection;

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

function playRock(computerSelection) {
    computerSelection = computerPlay();
    if (computerSelection === 'rock'){
        computerScore+= 1;
        playerScore += 1;
        playerScorePrint.textContent = `${playerScore}`;
        computerScorePrint.textContent = `${computerScore}`;
    }   if (computerSelection === 'paper'){
        computerScore += 1;
        computerScorePrint.textContent = `${computerScore}`;
    }   if (computerSelection === 'scissors'){
        playerScore += 1;
        playerScorePrint.textContent = `${playerScore}`;
    }   gameOver();
        return;
}

function playPaper(computerSelection) {
    computerSelection = computerPlay();
       if (computerSelection === 'rock'){
        playerScore += 1;
        playerScorePrint.textContent = `${playerScore}`;
    }   if (computerSelection === 'paper'){
        computerScore += 1;
        playerScore += 1;
        playerScorePrint.textContent = `${playerScore}`;
        computerScorePrint.textContent = `${computerScore}`;
    }   if (computerSelection === 'scissors'){
        computerScore += 1;
        computerScorePrint.textContent = `${computerScore}`;
    }   gameOver();
        return;
}

function playScissors(computerSelection) {
    computerSelection = computerPlay();
        if (computerSelection === 'rock'){
        computerScore += 1;
        computerScorePrint.textContent = `${computerScore}`;
    }   if (computerSelection === 'paper') {
        playerScore += 1;
        playerScorePrint.textContent = `${playerScore}`;
    }   if (computerSelection === 'scissors'){
        computerScore += 1;
        playerScore += 1;
        playerScorePrint.textContent = `${playerScore}`;
        computerScorePrint.textContent = `${computerScore}`;
    }   gameOver();
        return;
} 


// kill buttons with score of 5 and play again button.

function gameOver() {
    if (playerScore === 5) {
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
        playerPrint.textContent = `you won!`;
    } if (computerScore === 5) {
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
        computerPrint.textContent = `the computer won!`;
    } if (playerScore === 5 && computerScore === 5) {
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
        playerPrint.textContent = `it was a tie!`;
        computerPrint.textContent = `it was a tie!`;  
    }
 }
// new game.
function playAgain() {
    location.reload();
}

//map functions to buttons below

let rockButton = document.querySelector('.rockB');
rockButton.addEventListener('click',playRock);

let paperButton = document.querySelector('.paperB');
paperButton.addEventListener('click',playPaper);

let scissorsButton = document.querySelector('.scissorsB');
scissorsButton.addEventListener('click',playScissors);

let playBtn = document.querySelector('.play');
playBtn.addEventListener('click',playAgain);

let playerScorePrint = document.querySelector('.pScore');
let computerScorePrint = document.querySelector('.cScore');

let playerPrint = document.querySelector('.pText');
let computerPrint = document.querySelector('.cText');