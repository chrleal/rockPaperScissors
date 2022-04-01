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
function playRound(playerSelection, computerSelection){
 let player = playerSelection.toLowerCase();
    computerSelection = computerPlay()
    let computer = computerSelection.toLowerCase();
    if (player === computer) {
        console.log("It's a draw!");   
        console.log("Your Choice: " + playerSelection + ". " + "Computer: " + computerSelection);
    } else {
        if (player === "rock"){
            if (computer === "scissors") {
                console.log("Rock beats Scissors! You Win! :D");
                console.log("Your Choice: " + playerSelection + ". " + "Computer: " + computerSelection);
            } else {
                console.log("Paper beats Rock! You Lose! :(");
                console.log("Your Choice: " + playerSelection + ". " + "Computer: " + computerSelection);
            }
        } else if (player === "paper"){
            if (computer === "rock") {
                console.log("Paper beats Rock! You Win! :D");
                console.log("Your Choice: " + playerSelection + ". " + "Computer: " + computerSelection);
            } else {
                console.log("Scissor beats Paper! You Lose! :(");
                console.log("Your Choice: " + playerSelection + ". " + "Computer: " + computerSelection);
            }
        } else if (player === "scissors"){
            if (computer === "paper") {
                console.log("Scissor beats Paper! You Win! :D");
                console.log("Your Choice: " + playerSelection + ". " + "Computer: " + computerSelection);
            } else {
                console.log("Rock beats Scissors! You Lose! :(");
                console.log("Your Choice: " + playerSelection + ". " + "Computer: " + computerSelection);
            }
        }
    }    
    const playerChoice = "ROCK";
    playRound(playerChoice)

