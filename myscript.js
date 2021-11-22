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
    //highlight the choices on UI
    highlightChoice(computerSelection,userSelection);
    //use if function to compare user and cpu choices, also declare winner
    if (userSelection === computerSelection) {
        return "The round is tie! No point for both 🎲"
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
        result.textContent = `You won the game 🥇! Press 'Start Again' to play again`
        result.classList.add('won')
    }else{
        result.textContent = `You have lost the game 🥈 Press 'Start Again' to get your revenge! 😉`
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
        removeHighlight();
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
    const userselect = document.querySelector(`#${userSelection}`)
    const cpuselect = document.querySelector(`#${computerSelection}`)
    if (computerSelection === userSelection){
        userselect.classList.add('tieChoice');
    }else if (userSelection == "rock" && computerSelection == "scissor"){
        cpuselect.classList.add('lostChoice')
        userselect.classList.add('wonChoice')
    }else if (userSelection == "paper" && computerSelection == "rock"){
        cpuselect.classList.add('lostChoice')
        userselect.classList.add('wonChoice')
    }else if (userSelection == "scissor" && computerSelection == "paper"){
        cpuselect.classList.add('lostChoice')
        userselect.classList.add('wonChoice')
    }else{
        cpuselect.classList.add('wonChoice')
        userselect.classList.add('lostChoice')
    }
}

function removeHighlight() {
    const rock = document.querySelector('#rock');
    rock.classList.remove('wonChoice','lostChoice','tieChoice');

    const paper = document.querySelector('#paper');
    paper.classList.remove('wonChoice','lostChoice','tieChoice');    

    const scissor = document.querySelector('#scissor');
    scissor.classList.remove('wonChoice','lostChoice','tieChoice');

}

//how about winners being green???