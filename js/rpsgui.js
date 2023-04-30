function getComputerChoice() {
    let n = (Math.floor(Math.random() * 10)) % 3;

    if (n === 0)
        return 'rock';
    if (n === 1)
        return 'paper';
    if (n === 2)
        return 'scissors';
}

//Return 1 if the player wins, 0 otherwise, -1 for a draw
function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'scissors')
        return 1;
    if (playerSelection === 'paper' && computerSelection === 'rock')
        return 1;
    if (playerSelection === 'scissors' && computerSelection === 'paper')
        return 1;

    if (playerSelection === computerSelection)
        return -1; //check for a draw

    return 0;
}

function play(choice) {

    const fieldplayer = document.querySelector(".playerchoice");
    const fieldcpu = document.querySelector(".computerchoice");
    const computerChoice = getComputerChoice();
    fieldcpu.textContent = `The computer selected ${computerChoice}`;
    fieldplayer.textContent = `You selected ${choice}`;

    const result = playRound(choice, computerChoice);
    fieldresult = document.querySelector(".matchresult");

    const pscorefield = document.querySelector("#pscore");
    const cscorefield = document.querySelector("#cscore");

    if (result === 1) {
        fieldresult.textContent = `${choice} beats ${computerChoice}. You Win!`;
        pscorefield.textContent++;
    } else if (result === 0) {
        fieldresult.textContent = `${computerChoice} beats ${choice}. You lose...`;
        cscorefield.textContent++;
    } else {
        fieldresult.textContent = "It's a draw";
    }
}

const buttons = document.querySelectorAll(".input");

buttons.forEach((button) => {
    button.addEventListener('click', () => play(button.id));
})
