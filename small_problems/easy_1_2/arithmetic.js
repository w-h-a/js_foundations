/*
1. Asks user for positive integer.
2. Asks user for another positive integer.
3. Performs the operations
addition,
subtraction,
product,
quotient,
remainder, and
power.
4. Returns the result, one-by-one.
*/

function getNumber(userInputParam) {
  let rlSync = require('readline-sync');
  return Number(rlSync.question(userInputParam));
}

function performArithmetic(firstNumParam, secondNumParam) {
  let sum = firstNumParam + secondNumParam;
  let sub = firstNumParam - secondNumParam;
  let prod = firstNumParam * secondNumParam;
  let quot = firstNumParam / secondNumParam;
  let rem = firstNumParam % secondNumParam;
  let pow = firstNumParam ** secondNumParam;

  console.log(`${firstNumParam} plus ${secondNumParam} is ${sum}.`);
  console.log(`${firstNumParam} minus ${secondNumParam} is ${sub}.`);
  console.log(`${firstNumParam} times ${secondNumParam} is ${prod}.`);
  console.log(`${firstNumParam} divided by ${secondNumParam} is ${quot}.`);
  console.log(`${firstNumParam} remainder ${secondNumParam} is ${rem}.`);
  console.log(`${firstNumParam} raised to ${secondNumParam} is ${pow}.`);
}

let firstPosInteger = getNumber("Welcome to All Of Arithmetic!\nEnter a positive integer: ");
let secondPosInteger = getNumber("Enter another positive integer: ");
performArithmetic(firstPosInteger, secondPosInteger);
