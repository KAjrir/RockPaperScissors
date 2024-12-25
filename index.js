function getComputerChoice() {
    
    const computerChoice = Math.floor(Math.random() * 3 + 1);
    
    if (computerChoice === 1){
        return console.log("Computer chose Paper!")
    } else if (computerChoice === 2){
        return console.log("Computer chose Scissors!")
    } else if (computerChoice === 3) {
        return console.log("Computer chose Rock!")
    }
}

function getHumanChoice(){
    const myChoice = parseInt(prompt("What do you choose?\nPaper = 1, Scissors = 2, Rock = 3", 1));
    let selectedChoice = 0;
    
    if (myChoice === 1){
        selectedChoice = 1;
        return console.log("You selected Paper!");
    } else if (myChoice === 2){
        selectedChoice = 2;
        return console.log("You selected Scissors!");
    } else if (myChoice === 3){
        selectedChoice = 3;
        return console.log("You selected Rock!");
    }
}