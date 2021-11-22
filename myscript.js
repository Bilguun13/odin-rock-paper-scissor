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
        return "The round is tie!"
    }else if (userSelection == "rock" && computerSelection == "scissor"){
        userCount++;
        return `You have won this round! Rock beats Paper 🥳`
    }else if (userSelection == "paper" && computerSelection == "rock"){
        userCount++;
        return `You have won this round! Paper beats Rock 👑`
    }else if (userSelection == "scissor" && computerSelection == "paper"){
        userCount++;
        return `You have won this round! Scissor beats Paper 🥁`
    }else{
        cpuCount++;
        return `OOPS! You lost this round ... ${computerSelection} beats ${userSelection} 😓`
    }
}


//updating score with singleRound return;
function resetScore() {
    userCount = 0
    cpuCount = 0;
}

function declareWinner() {
    const result = document.querySelector('#log');
    if (userCount > cpuCount){
        result.textContent = `You won the game! Press 'Start Again' to play again`
        result.classList.add('won')
    }else{
        result.textContent = `You have lost the game :( Press 'Start Again' to get your revenge!`
        result.classList.add('lost')
    }
}


//Adding UI: idea - make it water theme and first one to reach 5 gets to breath
const scope = document.querySelector('.choice')
const btns = scope.querySelectorAll('button');

btns.forEach((button) => {
    //add a listener to every button
    button.addEventListener('click', () => {
        if (userCount === 5 || cpuCount ===5 ) {
            return;
        }
        displayResult(button);
        updateScore();
        if (userCount === 5 || cpuCount === 5) {
            declareWinner();
            return;
        }
    })
})
//restart button:

const restart = document.querySelector('#restart');

restart.addEventListener('click', () => {
    startNew();
})

//displaying result:
function displayResult(button) {
    const display = document.querySelector('#log');
    display.textContent = singleRound(computerPlay(),button.id)
}

function updateScore() {
    const userScore = document.querySelector('#user-score');
    const cpuScore = document.querySelector('#cpu-score');

    userScore.textContent = userCount;
    cpuScore.textContent = cpuCount;
}

function startNew() {
    resetScore();
    updateScore()
    const result = document.querySelector('#log');
    result.classList.remove('won','lost')
    result.textContent = 'Choose your hand'
}


//turn own choice to green color and computer choice to redish color
function highlightChoice(computerSelection,userSelection) {
    let userChoice = document.querySelector(`#${userSelection}`);

    let computerChoice = document.querySelector(`#${computerSelection}`);

    if (userSelection === computerSelection) {
        userChoice.classList.add('tieChoice')
    }else if (userSelection == "rock" && computerSelection == "scissor"){
        computerChoice.classList.add('cpuChoice')
        userSelection.classList.add('userChoice')
    }else if (userSelection == "paper" && computerSelection == "rock"){
        computerChoice.classList.add('cpuChoice')
        userSelection.classList.add('userChoice')
    }else if (userSelection == "scissor" && computerSelection == "paper"){
        computerChoice.classList.add('cpuChoice')
        userSelection.classList.add('userChoice')
    }else{
        computerChoice.classList.add('cpuChoice')
        userSelection.classList.add('userChoice')
    }
}

function removeHighlight() {
    const rock = document.querySelector('#rock');
    rock.classList.remove('cpuChoice');

    const paper = document.querySelector('#paper');
    paper.classList.remove('cpuChoice');    

    const scissor = document.querySelector('#scissor');
    scissor.classList.remove('cpuChoice');
}