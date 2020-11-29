/*
START

1. GET the first number.
2. Check if input is permissible, otherwise, ask for another
3. GET the second number.
4. Check if input is permissible, otherwise, ask for another
5. GET the operator.
6. Check if input is permissible, otherwise, ask again
7. PRINT number operator number
8. GET user's answer to the question "Would you like to do another?"

END
*/

const READLINE = require('readline-sync');

function getUserInput(inputParam) {
  return READLINE.question(`=> ${inputParam}`);
}

function impermissibleNumber(numberParam) {
  return numberParam.trim() === '' || Number.isNaN(Number(numberParam));
}

function calculator(firstNumParam, secondNumParam, operationParam) {
  let output;
  switch (operationParam) {
    case '1':
      output = firstNumParam + secondNumParam;
      break;
    case '2':
      output = firstNumParam - secondNumParam;
      break;
    case '3':
      output = firstNumParam * secondNumParam;
      break;
    case '4':
      output = firstNumParam / secondNumParam;
      break;
  }
  return `=> The result is: ${output}`;
}

console.log('=> Welcome to Calculator!');

let number1 = getUserInput("What's the first number?\n");

while (impermissibleNumber(number1)) {
  console.log("=> Hmm... that doesn't look like a number.");
  number1 = READLINE.question();
}

let number2 = getUserInput("What's the second number?\n");

while (impermissibleNumber(number2)) {
  console.log("=> Hmm... that doesn't look like a number.");
  number2 = READLINE.question();
}

number1 = Number(number1);
number2 = Number(number2);

let operation = getUserInput(
  "What operation would you like to perform?\n1) Add\n2) Subtract\n3) Multiply\n4) Divide\nEnter the number of your choice.\n"
);

while (!['1', '2', '3', '4'].includes(operation)) {
  console.log("=> Must choose 1, 2, 3 or 4");
  operation = READLINE.question();
}

let result = calculator(number1, number2, operation);
console.log(result);
