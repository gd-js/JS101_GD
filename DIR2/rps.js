/// CONSTANTS AND FUNCTIONS ///
///to add: best of five
///to add: letter input

const readline = require('readline-sync');
const VALID_CHOICES = ['rock','r','paper','p','scissors','sc','lizard','l','spock','sp'];

function prompt(message) {
  console.log(`=> ${message}`);
}

function letterToName(choiceInput) {
  switch (choiceInput) {
  case "r":
    choice = "Rock";
    computerChoice = "Rock";
    return choice;
    return computerChoice;
  case "p": 
    choice = "Paper";
    computerChoice = "Paper";
    return choice;
    return computerChoice;
    break;
  case "sc":
    choice = "Scissors";
    computerChoice = "Scissors";
    return choice;
    return computerChoice;
    break;
  case "l":
    choice = "Lizard";
    computerChoice = "Lizard";
    return choice;
    return computerChoice;
    break;
  case "sp":
    choice = "Spock";
    computerChoice = "Spock";
    return choice;
    return computerChoice;
    break;
  case "rock" || "paper" || "scissors" || "lizard" || "spock":
    return inputChoice;
    break; 
  }
}

function displayWinner(choice, computerChoice) {
  prompt(`You chose ${letterToName(choice)}, computer chose ${letterToName(computerChoice)}`);

  if (((choice === ('rock' || 'r') && (computerChoice === ('scissors' || 'sc' || 'lizard' || 'l')))) ||
      ((choice === ('paper' || 'p') && (computerChoice === ('rock' || 'r' || 'spock' || 'sp')))) ||
      ((choice === ('scissors' || 'sc') && (computerChoice === ('paper' || 'p' || 'lizard' || 'l')))) ||
      ((choice === ('spock' || 'sp') && (computerChoice === ('scissors' || 'sc' || 'rock' || 'r')))) ||
      ((choice === ('lizard' || 'l') && (computerChoice === ('spock' || 'sp' || 'paper' || 'p'))))){
    prompt('You win!');
  } else if (choice === computerChoice) {
    prompt('It\'s a tie!');
  } else {
    prompt('Computer wins!');
  }
}

/// LOOP ///

while (true) {
  prompt('Choose one: Rock/r, Paper/p, Scissors/sc, Lizard/l or Spock/sp');
  let choice = readline.question().toLowerCase();

  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice");
    choice = readline.question();
  }

  let randomIndex = Math.floor(Math.random() * (VALID_CHOICES.length - 5));
  let computerChoice = VALID_CHOICES[randomIndex];

  displayWinner(choice, computerChoice);

  prompt('Do you want to play again (y/n)?');
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }

  if (answer[0] !== 'y') break;

}