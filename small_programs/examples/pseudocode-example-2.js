/*
START

1. GET number from user and call it number1.
2. GET number from user and call it number2.
3. PRINT number1 + number2

END
*/

const READLINE = require('readline-sync')

function getUserInput(userInput) {
  return Number(READLINE.question(userInput));
}

function sum(firstNumParam, secondNumParam) {
  return firstNumParam + secondNumParam;
}

let number1 = getUserInput("Please provide a number: ");
let number2 = getUserInput("Please provide another: ");
let result = sum(number1, number2);
console.log(result);
