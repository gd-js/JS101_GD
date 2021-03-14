/// CONSTANTS AND FUNCTIONS ///

const readline = require('readline-sync');

const MESSAGES = require('./loanShark_messages.json');

function prompt(message) {
  console.log(`(((=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

/// LOOP ///

while (true) {

  /// USER INPUT ///

  prompt("en/de?");
  KEY = readline.question();

  prompt(MESSAGES[KEY]["swelcome"]);

  prompt(MESSAGES[KEY]["qloanAmount"]);
  let loanAmount = readline.question();

  while (invalidNumber(loanAmount)) {
    prompt(MESSAGES[KEY]["sdoesnt_look_good"]);
    loanAmount = readline.question();
  }

  prompt(MESSAGES[KEY]["qmonthlyInterest"]);
  let monthlyInterest = readline.question();

  while (invalidNumber(monthlyInterest)) {
    prompt(MESSAGES[KEY]["sdoesnt_look_good"]);
    monthlyInterest = readline.question();
  }

  prompt(MESSAGES[KEY]["qdurationMonths"]);
  let durationMonths = readline.question();

  while (invalidNumber(durationMonths)) {
    prompt(MESSAGES[KEY]["sdoesnt_look_good"]);
    durationMonths = readline.question();
  }

  /// LOAN CALCULATION ///

  /// m = p * (j / (1 - Math.pow((1 + j), (-n))));

  let output = loanAmount * (monthlyInterest / (1 - Math.pow((1 + loanAmount), (- durationMonths))));


  prompt(`Your loan will cost per month: \n ${output} USD`);
  
  prompt(MESSAGES[KEY]["qanother_operation"]);
  
  let answer = readline.question();

  if (answer !== "y" && answer !== "Y" )
  break;
  console.clear()
}