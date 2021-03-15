/// CONSTANTS AND FUNCTIONS ///

const readline = require('readline-sync');

const MESSAGES = require('./loanShark_messages.json');

const REGEXP = /[en][eng][de][ger]/i;

function prompt(message) {
  console.log(`(((=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number)) || number <= 0;
}

function invalidKEY(KEY) {
  return REGEXP.test(KEY) || KEY.length < 2;
}

/// LOOP ///

while (true) {

  /// USER INPUT ///

  prompt("en/de?");
  let lowerKEY = readline.question();
  let KEY = lowerKEY.toLowerCase();

  while (invalidKEY(KEY)) {
    prompt("You must enter 'de' for german or 'en' for english \n for respective language support.");
    lowerKEY = readline.question();
    KEY = lowerKEY.toLowerCase();

  }

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

  let output = loanAmount * (monthlyInterest /
  (1 - Math.pow((1 + loanAmount), (-durationMonths))));

  prompt(`Your loan will cost per month: \n ~ ${output} USD ~`);

  /// REPEAT PROGRAM OPTIONALITY ///

  prompt(MESSAGES[KEY]["qanother_operation"]);
  let answer = readline.question();

  if (answer !== "y" && answer !== "Y") break;

  console.clear();

}