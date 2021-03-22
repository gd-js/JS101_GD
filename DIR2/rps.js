/// CONSTANTS AND FUNCTIONS ///

const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

function prompt(message) {
  console.log(`=> ${message}`);
}

function displayWinner(choice, computerChoice) {
  prompt(`You chose ${choice}, computer chose ${computerChoice}`);

  if ((choice === 'rock' && (computerChoice === ('scissors' || 'lizard'))) ||
      (choice === 'paper' && (computerChoice === ('rock' || 'spock'))) ||
      (choice === 'scissors' && (computerChoice === ('paper'|| 'lizard'))) ||
      (choice === 'spock' && (computerChoice === ('scissors' || 'rock')))) {
    prompt('You win!');
  } else if (choice === computerChoice) {
    prompt('It\'s a tie!');
  } else {
    prompt('Computer wins!');
  }
}

/// LOOPS ///

let answer = 'true';

while (answer !== false ) {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let choice = readline.question();

  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice");
    choice = readline.question();
  }

  /// WINNER CALCULATION AND PLAY AGAIN OPTIONALITY ///

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  displayWinner(choice, computerChoice);

  prompt('Do you want to play again (y/n)?');
  answer = readline.question().toLowerCase();
  while (answer !== 'n' && answer !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }
}