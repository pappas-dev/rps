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

function playRock(playerSelection,computerSelection) {
    playerSelection = 'rock';
    computerSelection = computerPlay();
    if (computerSelection === 'rock' && playerSelection === 'rock'){
        computerScore+= 1;
        playerScore += 1;
        playerScorePrint.textContent = `${playerScore}`;
        computerScorePrint.textContent = `${computerScore}`;
        return playerScore, computerScore;
    }   if (computerSelection === 'paper' && playerSelection === 'rock'){
        computerScore += 1;
        computerScorePrint.textContent = `${computerScore}`;
        return computerScore;
    }   if (computerSelection === 'scissors' && playerSelection === 'rock'){
        playerScore += 1;
        playerScorePrint.textContent = `${playerScore}`;
        return playerScore;
    }
}

function playPaper(playerSelection,computerSelection) {
    playerSelection = 'paper';
    computerSelection = computerPlay();
       if (computerSelection === 'rock' && playerSelection === 'paper'){
        playerScore += 1;
        playerScorePrint.textContent = `${playerScore}`;
        return playerScore;
    }   if (computerSelection === 'paper' && playerSelection === 'paper'){
        computerScore += 1;
        playerScore += 1;
        playerScorePrint.textContent = `${playerScore}`;
        computerScorePrint.textContent = `${computerScore}`;
        return playerScore, computerScore;
    }   if (computerSelection === 'scissors' && playerSelection === 'paper'){
        computerScore += 1;
        computerScorePrint.textContent = `${computerScore}`;
        return computerScore;
    }
}

function playScissors(playerSelection,computerSelection) {
    playerSelection = 'scissors';
    computerSelection = computerPlay();
        if (computerSelection === 'rock' && playerSelection === 'scissors'){
        computerScore += 1;
        computerScorePrint.textContent = `${computerScore}`;
        return computerScore;
    }   if (computerSelection === 'paper' && playerSelection === 'scissors') {
        playerScore += 1;
        playerScorePrint.textContent = `${playerScore}`;
        return playerScore;
    }   if (computerSelection === 'scissors' && playerSelection === 'scissors'){
        computerScore += 1;
        playerScore += 1;
        playerScorePrint.textContent = `${playerScore}`;
        computerScorePrint.textContent = `${computerScore}`;
        return playerScore, computerScore;
    }
}

// kill buttons with score of 5. not implemented yet.

function disableButtons() {
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
    }

//map functions to buttons below

let rockButton = document.querySelector('.rockB');
rockButton.addEventListener('click',playRock);

let paperButton = document.querySelector('.paperB');
paperButton.addEventListener('click',playPaper);

let scissorsButton = document.querySelector('.scissorsB');
scissorsButton.addEventListener('click',playScissors);

let playerScorePrint = document.querySelector('.pScore');
let computerScorePrint = document.querySelector('.cScore');