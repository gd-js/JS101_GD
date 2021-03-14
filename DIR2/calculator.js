/// CONSTANTS AND FUNCTIONS ///

const readline = require('readline-sync');

const MESSAGES = require('./calculator_messages.json');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

/// LOOPS ///

while (true) {

  /// USER INPUT ///

  prompt("en/de?");
  KEY = readline.question();

  prompt(MESSAGES[KEY]["swelcome"]);

  prompt(MESSAGES[KEY]["qfirst"]);
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt(MESSAGES[KEY]["sdoesnt_look_good"]);
    number1 = readline.question();
  }


  prompt(MESSAGES[KEY]["qsecond"]);
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt(MESSAGES[KEY]["sdoesnt_look_good"]);
    number2 = readline.question();
  }


  prompt(MESSAGES[KEY]["qwhatoperator"]);
  let operation = readline.question();


  while (!['1', '2', '3', '4', '5'].includes(operation)) {
    prompt('Must choose 1, 2, 3, 4 or 5');
    operation = readline.question();
  }

  /// CALCULATOR FUNCTIONALITY ///

  number1 = Number(number1)
  number2 = Number(number2)

  let output;
  switch (operation) {
    case "1":
      output = number1 + number2;
      break;
    case "2":
      output = number1 - number2;
      break;
    case "3":
      output = number1 * number2;
      break;
    case "4":
      output = number1 / number2;
      break;
    case "5":
      output = number1 ** number2;
      break;
  }

  prompt(`The result is: ${output}`);

  prompt(MESSAGES[KEY]["qanother_operator"]);
  
  let answer = readline.question();

  if (answer !== "y" && answer !== "Y" )
  
  break;

}