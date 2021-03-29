/// CONSTANTS AND FUNCTIONS ///
///to add: best of five
///to add: clear screen

const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock', 'sp', 'r', 'p', 'sc', 'l'];

function prompt(message) {
  console.log(`=> ${message}`);
}

function letterToName(singleLetter) {
  let nameOutput;
  switch (singleLetter) {
    case "r":
      nameOutput = "rock";
      return nameOutput;
    case "p":
      nameOutput = "paper";
      return nameOutput;
    case "sc":
      nameOutput = "scissors";
      return nameOutput;
    case "l":
      nameOutput = "lizard";
      return nameOutput;
    case "sp":
      nameOutput = "spock";
      return nameOutput;
    default:
      nameOutput = singleLetter;
      return nameOutput;
      break;
  }
}


function displayChoices(displayChoiceOutput, displayComputerChoiceOutput) {
  displayChoiceInput = 
  prompt(`You chose ${displayChoiceOutput}, computer chose ${displayComputerChoiceOutput}`);
}

function displayWinner(choice, computerChoice) {
  if (((choice === ('rock' || 'r') && (computerChoice === ('scissors' || 'lizard')))) ||
    ((choice === ('paper' || 'p') && (computerChoice === ('rock' || 'spock')))) ||
    ((choice === ('scissors' || 'sc') && (computerChoice === ('paper' || 'lizard')))) ||
    ((choice === ('spock' || 'sp') && (computerChoice === ('scissors' || 'rock')))) ||
    ((choice === ('lizard' || 'l') && (computerChoice === ('spock' || 'paper'))))) {
    prompt('You win!');
  } else if (choice === computerChoice) {
    prompt('It\'s a tie!');
  } else {
    prompt('Computer wins!');
  }
}

/// WHILE LOOP ///

while (true) {
  prompt('Choose one: Rock/r, Paper/p, Scissors/sc, Lizard/l or Spock/sp');
  let choice = readline.question().toLowerCase();

  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice. Try again!");
    choice = readline.question().toLowerCase();
  }

  let randomIndex = Math.floor(Math.random() * (VALID_CHOICES.length - 5));
  let computerChoice = VALID_CHOICES[randomIndex];

  displayChoices(choice, computerChoice);
  displayWinner(choice, computerChoice);

  prompt('Do you want to play again (y/n)?');
  let answer = readline.question().toLowerCase();

  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n". Try again!');
    answer = readline.question().toLowerCase();
  }

  if (answer[0] !== 'y') break;

}