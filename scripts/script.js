let userInput = prompt('Enter rock, paper, or scissors', '')

function validatePlayerInput(input) {
    input = userInput.toLowerCase(); 
    if (input === 'scissors' || input === 'rock' || input === 'paper') {
        let result = input;
        return result;
    }
    userInput = prompt('Invalid input! Please enter either rock, paper, or scissors!', '')
    return validatePlayerInput(userInput);
}

function getComputerAnswer() {
    let getRandomNumber = Math.floor(Math.random() * 3) + 1;
    switch(getRandomNumber) {
        case 1:
            return 'rock';
            break;
        case 2:
            return 'paper';
            break;
        case 3:
            return 'scissors';
            break;
        default:
            return console.error('Unable to get computer answer!');
    }
}

let userAnswer = validatePlayerInput(userInput)
let computerAnswer = getComputerAnswer();

function gameResult(user, computer) {
    if (user === computer) {
        return `The game was a tie! User picked ${user} and computer picked ${computer}`;
    } else if (user === 'scissors' && computer !== 'rock') {
        return `You won! ${user} beats ${computer}!`;
    } else if (user === 'paper' && computer !== 'scissors') {
        return `You won! ${user} beats ${computer}!`;
    } else if (user === 'rock' && computer !== 'paper') {
        return `You won! ${user} beats ${computer}!`;
    }
    return `You lose! ${computer} beats ${user}!`;
}

let finalResults = gameResult(userAnswer, computerAnswer);

console.log(finalResults)




//function playAgain(result) {
//    console.log(result)
//    let repeatGame = prompt('Would you like to play again', '');
//    repeatGame = repeatGame.toLowerCase();
//    if (repeatGame === 'yes') {
//        return playAgain(finalResults);
//    }
//    return console.log('Game ended!');
//}