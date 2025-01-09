let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 0;


function getComputerChoice() {
    const computerChoice = ['📄', '✂️', '👊'];
    const randomChoice = Math.floor(Math.random() * computerChoice.length);

    return computerChoice[randomChoice]
}

function playRound(humanChoice, computerChoice ){
    if(humanChoice === computerChoice){
        return "Tied"
    } else if(
        (humanChoice === "👊" && computerChoice === "✂️") ||
        (humanChoice === "📄" && computerChoice === "👊") ||
        (humanChoice === "✂️" && computerChoice === "📄")
    ){
        humanScore++
        return "You won this round!"
    } else {
        computerScore++
        return "Computer won this round!"
    }
}

function playGame(humanChoice) {
    const computerChoice = getComputerChoice();
    const roundResult = playRound(humanChoice, computerChoice);
    roundsPlayed++

    // Update the UI
    document.querySelector(".computerChoice > span").textContent = `De Computer chose: ${computerChoice}`
    document.getElementById("winner-round").textContent = roundResult;

    const computerScoreValue = document.querySelector(".computerScore")
    const humanScoreValue = document.querySelector(".humanScore")

    if(roundResult === "Computer won this round!"){
        computerScoreValue.textContent = computerScore
    } else if(roundResult === "You won this round!"){
        humanScoreValue.textContent = humanScore
    }

    if(roundsPlayed === 5){
        announceFinalWinner();
    }
}

function announceFinalWinner(){
    let finalMessage;
    if(humanScore > computerScore){
        finalMessage = "You won the game!!"
        document.querySelector(".outcome").setAttribute("style", "color: green")
    } else if(computerScore > humanScore){
        finalMessage = "Computer won, you lose..."
        document.querySelector(".outcome").setAttribute("style", "color: red")
    } else {
        finalMessage = "The game is tied"
    }

    document.querySelector(".outcome").textContent = finalMessage
    document.querySelector(".choices").style.pointerEvents = "none";
}

document.querySelector(".choices").addEventListener("click", (event) => {
    if (event.target.tagName === "SPAN" && roundsPlayed < 5) {
      const humanChoice = event.target.textContent;
      playGame(humanChoice);
    }
  });