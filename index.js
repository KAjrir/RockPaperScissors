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

console.log(getComputerChoice());

function getHumanChoice() {
    const myChoice = prompt("What do you choose?");
    let humanChoice = '';
    
    if (myChoice === 'paper'){
        humanChoice = 'paper';
    } else if (myChoice === 'scissors'){
        humanChoice = 'scissors';
    } else if (myChoice === 'rock'){
        humanChoice = 'rock';
    } else if (myChoice === null || myChoice === undefined){
        console.log("u heeft het veld verlaten")
    } else{
        console.log("invalid input, again")
        location.reload(true);
    }

    return humanChoice;
}

console.log(getHumanChoice())

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice ){

}