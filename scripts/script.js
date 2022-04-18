function getComputerAnswer() {
    let getRandomNumber = Math.floor(Math.random() * 3) + 1;
    switch(getRandomNumber) {
        case 1:
            return 'Rock';
            break;
        case 2:
            return 'Paper';
            break;
        case 3:
            return 'Scissors';
            break;
        default:
            return console.error('Unable to get computer answer!');
    }
}

function playRound(user, computer) {
    if (user === computer) {
        return 'tie';
    } else if (user === 'Scissors' && computer !== 'Rock') {
        return true;
    } else if (user === 'Paper' && computer !== 'Scissors') {
        return true;
    } else if (user === 'Rock' && computer !== 'Paper') {
        return true;
    }
    return false;
}

function game() {
    let round = 1
    let gameLoop = 0;
    let computerScore = 0;
    let playerScore = 0;

    while (gameLoop < 5) {
        let computerAnswer = getComputerAnswer();
        let userInput = prompt('Please enter either rock, paper, or scissors!', '');
        
        if (userInput === null) {
            gameLoop = 5;
            return console.log('No input provided or cancelled.');
        }

        userAnswer = userInput[0].toUpperCase() + userInput.substring(1).toLowerCase();
        
        if (userAnswer !== 'Rock' && userAnswer !== 'Paper' && userAnswer !== 'Scissors') {
            userAnswer = getComputerAnswer();
            console.log('Invalid player input. Computer will choose for you!');
        }

        let results = playRound(userAnswer, computerAnswer);
        
        if (results === true) {
            console.log(`Round ${round}: You won! ${userAnswer} beats ${computerAnswer}!`);
            round++;
            gameLoop++;
            playerScore++;
        } else if (results === false) {
            console.log(`Round ${round}: You lost! ${userAnswer} does not beat ${computerAnswer}!`);
            round++ ;
            gameLoop++ ;
            computerScore++;
        } else {
            console.log(`Round ${round}: You tied! You both picked ${userAnswer}!`);
            round++;
        }
    }

    if (playerScore > computerScore) {
        return `You won! Your score: ${playerScore}! Computer score: ${computerScore}!`;
    }
    return `You lost! Your score: ${playerScore}! Computer score: ${computerScore}!`;
}

console.log(game());
