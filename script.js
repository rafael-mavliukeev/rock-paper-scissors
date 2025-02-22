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

playGame()