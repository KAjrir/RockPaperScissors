function getComputerChoice() {
    
    const randomChoice = Math.floor(Math.random() * 3 + 1);
    let computerChoice = '';
    
    if (randomChoice === 1){
        computerChoice = 'paper';
    } else if (randomChoice === 2){
        computerChoice = 'scissors';
    } else if (randomChoice === 3) {
        computerChoice = 'rock';
    }
    return computerChoice;
}


function getHumanChoice(){
    const myChoice = parseInt(prompt("What do you choose?\nPaper = 1, Scissors = 2, Rock = 3", 1));
    let humanChoice = 0;
    
    if (myChoice === 1){
        humanChoice = 1;
        return console.log("You selected Paper!");
    } else if (myChoice === 2){
        humanChoice = 2;
        return console.log("You selected Scissors!");
    } else if (myChoice === 3){
        humanChoice = 3;
        return console.log("You selected Rock!");
    }

    return humanChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice ){

}