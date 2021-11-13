let userCount = 0;
let cpuCount = 0;
//1. Generate a cpu choice in a function called computerPlay
function computerPlay() {
    //generate a number between 0 and 2
    let random = Math.floor(Math.random() * 3)
    //for corresponding number, return: 0 = rock, 1 = paper, 2 = scissor
    if (random == 0) {
        return "rock";
    }else if (random == 1){
        return "paper"
    }else{
        return "scissor"
    }
}

//2. Single round of game using above function and assuming to get user input
function singleRound(computerSelection,userSelection) {
    //convert user input into lowercase
    userSelection = userSelection.toLowerCase();
    //use if function to compare user and cpu choices, also declare winner
    if (userSelection === computerSelection) {
        return "Tie!"
    }else if (userSelection == "rock" && computerSelection == "scissor"){
        userCount++
        return `You win! Rock beats Paper`
    }else if (userSelection == "paper" && computerSelection == "rock"){
        userCount++
        return `You win! Paper beats Rock`
    }else if (userSelection == "scissor" && computerSelection == "paper"){
        userCount++
        return `You win! Scissor beats Paper`
    }else{
        cpuCount++
        return `You lose! ${computerSelection} beats ${userSelection}`
    }
}

//3. Function for a 5 round of game, taking user input
function game() {
    updateScore();
    //loop for 5 round
    for (let i = 0; i < 5; i++) {
        //each round prompt user input
        let getInput = prompt("Enter your pick: ").toLowerCase();
        //and play singleRound
        console.log("round " + (i + 1) + " : " + singleRound(computerPlay(),getInput));
        console.log("User: " + userCount + " CPU: " + cpuCount)
    }
    declareWinner();
}

//updating score with singleRound return;
function updateScore() {
    userCount = 0
    cpuCount = 0;
}

function declareWinner() {
    (userCount > cpuCount)? console.log("You win!") :
    (userCount == cpuCount)? console.log("Tie") :
    console.log("You lose :(")
}
