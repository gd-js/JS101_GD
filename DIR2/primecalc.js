const readline = require("readline-sync");


console.log("first number?");

number1 = readline.question();


console.log("second number?");

number2 = readline.question();


console.log("choose mathematical operation\n1) exponentiate 2) modulus");

operation = readline.question();


let output;
if  (operation === "1") {
  output = Number(number1) ** Number(number2);

} else if
  (operation === "2") {
  output = Number(number1) % Number(number2);
  }


console.log(`the output is ... .. . \n\n${output}\n\n`);

for (let i = 2; i < output; i++) {
  if (output % i === 0) {
  isPrime = false;
  break;
  }
}

if (isPrime) {
  console.log(`${output} is a prime number`);
} else {
  console.log(`${output} is a not prime number`);
}