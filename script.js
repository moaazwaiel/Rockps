
function getComputerChoice(){
    let num = Math.floor(Math.random() * 3);
    switch(num){
        case 0:
            return 'Rock';
        case 1:
            return 'Paper';
        case 2:
            return 'Scissors';
    }
}
let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection , computerSelection){
    if (
        (playerSelection == 'Rock' && computerSelection == 'Scissors') ||
        (playerSelection == 'Scissors' && computerSelection == 'Paper') ||
        (playerSelection == 'Paper' && computerSelection == 'Rock')
      ){
        console.log("You Win!" + playerSelection + "Beats" + computerSelection );
        playerScore++;
      }
      else if (playerSelection == computerSelection){
        console.log("Withdraw!");
      }
      else{
        console.log("You Lost!" + computerSelection + "Beats" + playerSelection);
        computerScore++;
      }
}
const playerSelection = "Rock";
const computerSelection = getComputerChoice();


function game(){
    for(let i = 0; i < 5;i++){
        
        playRound(playerSelection , getComputerChoice());
    }
}
let finalscore=0;
function finalScore(){
    if(playerScore > computerScore){
        finalscore = playerScore;
        console.log(" Player wins");
    }
    else if(computerScore > playerScore){
        finalscore = computerScore;
        console.log("Computer wins");
    }
    else{
        console.log("withdraw!!!");
    }
    console.log(finalscore);
}
console.log(game());
finalScore();