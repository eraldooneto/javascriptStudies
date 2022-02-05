const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput;
  } else {
    console.log('Error! You must choose between: rock, paper or scissors.'); 
  }
};

const getComputerChoice = () => {
  const choice = Math.floor(Math.random() * 3);
  switch (choice) {
    case 0: return 'rock';
    break;
    case 1: return 'paper';
    break;
    case 2: return 'scissors';
    break;
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'The game was a tie!';
  }

  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'Computer is the winner!';
    } else {
      return 'User is the winner!';
    }
  } else if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'Computer is the Winner!';
    } else {
      if (computerChoice === 'rock') {
        return 'Computer is the winner!';
      } else {
        return 'User is the winner!';
      }
    }
  }
};

const playGame = () => {
  const userChoice = getUserChoice('paper');
  const computerChoice = getComputerChoice();

  console.log(`You chose: ${userChoice}`);
  console.log(`Computer chose: ${computerChoice}`);
  console.log(determineWinner(userChoice, computerChoice));
};

playGame();
