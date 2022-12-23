let playerScore = document.getElementById("player-score")
let computerScore = document.getElementById("computer-score")
let modal = document.getElementById("modal")
let result = document.getElementById("result")
let rock = document.getElementById("rock")
let paper = document.getElementById("paper")
let scissors = document.getElementById("scissors")
let pScoreCount = 0
let cScoreCount = 0

playerScore.innerText = 0
computerScore.innerText = 0

document.getElementById("choices").addEventListener('click', getPlayerChoice)
document.getElementById("play-again").addEventListener('click', resetGame)

function showModal() {
    modal.style.display = "block"
}

function getPlayerChoice(event) {
    let choice = event.target.id
    if (choice) {
        getComputerChoice()
        stylePlayerChoice(event)
    }
    renderScore(choice, getComputerChoice(choice))
}

function getComputerChoice() {
    let generator = Math.floor(Math.random() * 3 + 1)
    let choice = ""
    let choiceDisplay = ""
    if (generator === 1) {
        choice = "rock"
        choiceDisplay = "✊"
    } else if (generator === 2) {
        choice = "paper"
        choiceDisplay = "✋"
    } else if (generator === 3) {
        choice = "scissors"
        choiceDisplay = "✌"
    }
    document.getElementById("computer-choice").innerText = choiceDisplay
    return choice
}

function renderScore(playerChoice, computerChoice) {
    const rules = {
        "scissors": "paper",
        "rock": "scissors",
        "paper": "rock"
    }

    if (playerChoice === computerChoice) {
        result.innerText = "Draw"
    } else if (rules[playerChoice] === computerChoice) {
        result.innerText = "You Win"
        pScoreCount++
    } else {
        result.innerText = "You Lose"
        cScoreCount++
    }

    if (pScoreCount === 5 || cScoreCount === 5) {
        if (pScoreCount === 5) {
            document.getElementById("modal-text").innerText = "You Won!"
        } else if (cScoreCount === 5) {
            document.getElementById("modal-text").innerText = "You Lost"
        }
        showModal()
    }

    playerScore.innerText = pScoreCount 
    computerScore.innerText = cScoreCount
}

function resetGame() {
    modal.style.display = "none"

    pScoreCount = 0
    cScoreCount = 0
    playerScore.innerText = 0
    computerScore.innerText = 0

    rock.style.filter = "grayscale(1)"
    paper.style.filter = "grayscale(1)"
    scissors.style.filter = "grayscale(1)"

    result.innerText = "Good Luck!"
    document.getElementById("computer-choice").innerText = ""
}

function stylePlayerChoice(event) {
    if (event.target.id === "rock") {
        rock.style.filter = "grayscale(0)"
        paper.style.filter = "grayscale(1)"
        scissors.style.filter = "grayscale(1)"
    } else if (event.target.id === "paper") {
        rock.style.filter = "grayscale(1)"
        paper.style.filter = "grayscale(0)"
        scissors.style.filter = "grayscale(1)"
    } else if (event.target.id === "scissors") {
        rock.style.filter = "grayscale(1)"
        paper.style.filter = "grayscale(1)"
        scissors.style.filter = "grayscale(0)"
    } 
}