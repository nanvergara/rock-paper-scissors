const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();

if( userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput

} else {
    console.log('You need to pick rock, paper, or scissors');
};

};

//console.log(getUserChoice('Hammer!'));

let getComputerChoice = () => {
    getComputerChoice = Math.floor(Math.random() * 3 );

    switch (getComputerChoice) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    };
};

//console.log(getComputerChoice());

const determineWinner = (userChoice, computerChoice) => {

    if (userChoice === computerChoice) {
        return 'The game was a tie';
    };

    if (userChoice === 'rock') {
        if(computerChoice === 'paper') {
            return 'The computer has won';
        } else {
            return 'The player has won';
        }
    };

    if(computerChoice === 'paper') {
        if(computerChoice === 'scissors') {
            return 'The computer has won';
        } else {
            return 'The player has won'
        }
    };

if(userChoice === 'scissors') {
    if(computerChoice === 'rock') {
        return 'The computer has won'
    } else {
        return 'The player has won'
    }
};

if(userChoice === 'bomb') {
    return 'The game is over! The user has won!';
};

};

//console.log(determineWinner('scissors', 'paper'));

const playGame = () => {
    const userChoice = getUserChoice('rock');
    console.log(`The player throws ${getComputerChoice}!!!`);

    const computerChoice = getComputerChoice();
    console.log(`The computer prints ${computerChoice}!!!`);

    console.log(determineWinner(userChoice, computerChoice));
};

playGame();
