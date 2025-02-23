function getComputerChoice(){
    let choice = Math.random()
    console.log(choice)
    if (choice <= 1/3) {
        return "rock"
    }
    else if (choice <= 2/3) {
        return "paper"
    }
    else {
        return "scissors"
    }
}

function getHumanChoice(){
    return prompt("What is your choice?")
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == "rock") {
        if (computerChoice == "rock") return [0, 0]
        else if (computerChoice == "paper") return [0, 1]
        else return [1, 0]
    }
    else if (humanChoice == "paper") {
        if (computerChoice == "rock") return [1, 0]
        else if (computerChoice == "paper") return [0, 0]
        else return [0, 1]        
    }
    else if (humanChoice == "scissors") {
        if (computerChoice == "rock") return [0, 1]
        else if (computerChoice == "paper") return [1, 0]
        else return [0, 0]        
    }
}

function playGame () {
    let humanChoice = getHumanChoice()
    console.log(humanChoice)
    let computerChoice = getComputerChoice()
    console.log([humanChoice, computerChoice])
    console.log(playRound(humanChoice, computerChoice))
}

function choiceButtonClick (event){
    let button = event.target
    playerChoicePicture.setAttribute("src", `./pictures/${button.id}.png`)
    playerChoice = button.id
}

function goButtonClick () {

    choiceImageRotation()

}

async function choiceImageRotation () {
    for (let i=0; i<10; i++){
        await sleep(500 - 40 * i)
        computerChoicePicture.setAttribute("src", `./pictures/${choices[i%2]}.png`)
    } 
    let computerChoice = getComputerChoice()
    computerChoicePicture.setAttribute("src", `./pictures/${computerChoice}.png`)
    let gameResult = playRound(playerChoice, computerChoice)
    playerScore.textContent = Number(playerScore.textContent) + gameResult[0]
    computerScore.textContent = Number(computerScore.textContent) + gameResult[1]

    if (Number(playerScore.textContent)== 3) {
        alert("Вы выиграли")
    }
    else if (Number(computerScore.textContent) == 3) {
        alert("Компьютер выиграл")
    }
}

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

const playerScore = document.querySelector("#player-score")
const computerScore = document.querySelector("#computer-score")
const playerButtons = document.querySelector(".choice-buttons")
const playerChoicePicture = document.querySelector("#player-choice-picture")
const computerChoicePicture = document.querySelector("#computer-choice-picture")
const goButton = document.querySelector("#go")
const gameResult = document.querySelector("#result")

let choices = ["rock", "paper", "scissors"]
let playerChoice = "rock"

playerButtons.addEventListener("click", choiceButtonClick)
goButton.addEventListener("click", goButtonClick)

