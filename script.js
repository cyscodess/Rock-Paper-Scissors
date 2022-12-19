function getComputerChoice() {
    let generator = Math.floor(Math.random() * 3 + 1)
    let choice = generator
    if (generator === 1) {
        choice = "rock"
    } else if (generator === 2) {
        choice = "paper"
    } else {
        choice = "scissors"
    }
    return choice
}

// document.getElementById("start-game").addEventListener("click", getPlayerChoice)



function getPlayerChoice() {
    let choice = prompt("Rock, Paper, or Scissors?").value
    console.log(choice.toLowerCase())
}

function startGame(playerSelection, computerSelection) {
    
}