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

getComputerChoice();

