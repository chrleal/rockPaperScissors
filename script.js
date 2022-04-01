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
    let player = playerSelection.toLowerCase();
    computerSelection = computerPlay()
    let computer = computerSelection.toLowerCase();
    if (player === computer) {
        round = 'draw'
        return("It's a draw!\nYour Choice: " + playerSelection + ". " + "Computer: " + computerSelection)
    } else if (player === "rock"){
        if (computer === "scissors") {
            round = 'win'
            return("You Win! Rock beats Scissors! :D\nYour Choice: " + playerSelection + ". " + "Computer: " + computerSelection);
        } else {
            round = 'lose'
            return("You Lose! Paper beats Rock! :(\nYour Choice: " + playerSelection + ". " + "Computer: " + computerSelection);
        }
    } else if (player === "paper"){
        if (computer === "rock") {
            round = 'win'
            return("You Win! Paper beats Rock! :D\nYour Choice: " + playerSelection + ". " + "Computer: " + computerSelection);
        } else {
            round = 'lose'
            return("You Lose! Scissor beats Paper! :(\nYour Choice: " + playerSelection + ". " + "Computer: " + computerSelection);
        }
    } else if (player === "scissors"){
        if (computer === "paper") {
            round = 'win'
            return("You Win! Scissor beats Paper! :D\nYour Choice: " + playerSelection + ". " + "Computer: " + computerSelection);
        } else {
            round = 'lose'
            return("You Lose! Rock beats Scissors! :(\nYour Choice: " + playerSelection + ". " + "Computer: " + computerSelection);
        }
    } else {
        round = 'error'
        return("Something went wrong. Please type only: Rock, Paper or Scissors")
        }
 }    

// function that plays a 5 round game, keeps score and reports a winner or loser at the end
function game(){
    let win = 0;
    let lose = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Choose: Rock, Paper or Scissors. " + (i+1) + " out of 5.")
        let result = playRound(playerSelection);
        console.log(result) 

        if (round == 'win') {
            win++;
            console.log("Score: \nPlayer = " + win + ".\nComputer = " + lose + ".")
        } else if (round == 'lose') {
            lose++
            console.log("Score: \nPlayer = " + win + ".\nComputer = " + lose + ".")
        }

    }

    if (win > lose) {
        console.log("Congratulations! You Win!")
    } else if (lose > win) {
        console.log("You lose! Try again.")
    } else {
        console.log("It's a Draw!")
    }
}
let round;
game();
