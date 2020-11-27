/*
1. Ask the user for the first number.
2. Ask the user for the second number.
3. Ask the user for an operation to perform.
4. Perform the operation on the two numbers.
5. Print the result to the terminal.
*/

const READLINE = require('readline-sync');

function getUserInput(inputParam) {
  return READLINE.question(inputParam);
}

function calculator(firstNumParam, secondNumParam, operationParam) {
  let output;
  if (operationParam === '1') {
    output = firstNumParam + secondNumParam;
  } else if (operationParam === '2') {
    output = firstNumParam - secondNumParam;
  } else if (operation === '3') {
    output = firstNumParam * secondNumParam;
  } else if (operation === '4') {
    output = firstNumParam / secondNumParam;
  }
  return `The result is: ${output}`
}

console.log('Welcome to Calculator!');

let number1 = getUserInput("What's the first number?\n");
let number2 = getUserInput("What's the second number?\n");
number1 = Number(number1);
number2 = Number(number2);
let operation = getUserInput(
  "What operation would you like to perform?\n1) Add\n2) Subtract\n3) Multiply\n4) Divide\nEnter the number of your choice.\n"
)
let result = calculator(number1, number2, operation);
console.log(result);
