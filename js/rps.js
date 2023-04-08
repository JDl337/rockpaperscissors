function getComputerChoice() {
    let n = (Math.floor(Math.random() * 10)) % 3;

    if (n === 0)
        return 'rock';
    if (n === 1)
        return 'paper';
    if (n === 2)
        return 'scissors';
}

//Return 1 if the player wins, 0 otherwise
function playRound(playerSelection, computerSelection) {

    if (playerSelection === 'rock' && computerSelection === 'scissors')
        return 1;
    if (playerSelection === 'paper' && computerSelection === 'rock')
        return 1;
    if (playerSelection === 'scissors' && computerSelection === 'paper')
        return 1;

    return 0; //The player loses because we checked all the win conditions
}

function game() {
    let playerScore = 0;
    let playerSelection;
    let roundResult = 0;
    for (let i = 0; i < 5; i++) {
        console.log(`Round ${i+1} starts...`);
        playerSelection = prompt(`Round ${i+1} Enter your choice: `);
        roundResult = playRound(playerSelection, getComputerChoice());

        if (roundResult === 1)
            console.log("You win this round!");
        else
            console.log("You lose this round.");

        playerScore += roundResult;
    }
    if (playerScore >= 3)
        console.log("You Win!");
    else
        console.log("You lose...");
}
