// all global variables
const play = document.querySelector('.play');
const buttons = document.querySelectorAll('button');
        buttons.forEach((button) => {
            button.addEventListener('click', () => {
                if (win >= 5 || lose >= 5) {
                    return;
                } else {
                    clickButton(button);
                }
            });
        });

const display = document.querySelector('.display');
display.setAttribute('style', 'margin-top: 5px; white-space: pre-line;');

const score = document.querySelector('.score');
score.setAttribute('style', 'margin-top: 5px; white-space: pre-line;');

const body = document.querySelector('body');

const congrats = document.createElement('div');
congrats.classList.add('congrats');
body.appendChild(congrats);

let round = '';
let win = 0;
let lose = 0;

// function that will randomly return either 'Rock', 'Paper' or 'Scissors'
function computerPlay() {
    let result;
    let number = Math.floor((Math.random() * 3) + 1);
    if (number == 1) {
        result = "Rock";
    } else if (number == 2) {
        result = "Paper";
    } else {
        result = "Scissors";
    }
    return result
}

// function that plays a single round of Rock Paper Scissors
function playRound(playerSelection, computerSelection){
    let text = ''
    let player = playerSelection.toLowerCase();
    computerSelection = computerPlay()
    let computer = computerSelection.toLowerCase();
    if (player === computer) {
        round = 'draw';
        text = "It's a draw!\n\nPlayer: " + playerSelection + "\n" + "Computer: " + computerSelection;
    } else if (player === "rock"){
        if (computer === "scissors") {
            round = 'win';
            text = "You Win! Rock beats Scissors!\n\nPlayer: " + playerSelection + "\n" + "Computer: " + computerSelection;
        } else {
            round = 'lose';
            text = "You Lose! Paper beats Rock!\n\nPlayer: " + playerSelection + "\n" + "Computer: " + computerSelection;
        }
    } else if (player === "paper"){
        if (computer === "rock") {
            round = 'win';
            text = "You Win! Paper beats Rock!\n\nPlayer: " + playerSelection + "\n" + "Computer: " + computerSelection;
        } else {
            round = 'lose';
            text = "You Lose! Scissor beats Paper!\n\nPlayer: " + playerSelection + "\n" + "Computer: " + computerSelection;
        }
    } else if (player === "scissors"){
        if (computer === "paper") {
            round = 'win';
            text = "You Win! Scissor beats Paper!\n\nPlayer: " + playerSelection + "\n" + "Computer: " + computerSelection;
        } else {
            round = 'lose';
            text = "You Lose! Rock beats Scissors!\n\nPlayer: " + playerSelection + "\n" + "Computer: " + computerSelection;
        }
    } 
    display.textContent = text;
    return display.textContent 
 }    

// function that plays a 5 round game, keeps score and reports a winner or loser at the end
function game(playerGame){
    let result = playRound(playerGame);
    console.log(result)

    if (round == 'win') {
        win++;
        score.textContent = "Player - " + win + "\nComputer - " + lose;
    } else if (round == 'lose') {
        lose++
        score.textContent = "Player - " + win + "\nComputer - " + lose;
    } else {
        score.textContent = "Player - " + win + "\nComputer - " + lose;
    } 
    
    if (win == 5 || lose == 5) {
    testRound(); 
    }
}

function clickButton(button) {
    let playerGame = '';
    if (button.className === 'rock') {
        playerGame = 'Rock';
    } else if (button.className === 'paper') {
        playerGame = 'Paper';
    } else {
        playerGame = 'Scissors';
    }
    game(playerGame);
}

function testRound() {
    if (win > lose) {
        congrats.textContent = ("Game Over. You Win!");
        resetButton ();
    } else if (lose > win) {
        congrats.textContent = ("Game Over. You lose! Try again.");
        resetButton ();
    } else {
        congrats.textContent = ("Game Over. It's a Draw!");
        resetButton ();
    }
}

function resetButton () {
    const reset = document.createElement('button');
    reset.classList.add('reset');
    body.appendChild(reset);
    reset.textContent = "Try Again!"
    reset.addEventListener('click', () => {
        location.reload(true);
    })
    
}


