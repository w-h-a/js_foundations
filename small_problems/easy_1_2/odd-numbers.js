/*
Loops through 1-99, inclusive, logging each to the console.
*/

// My solution:
/*
let index = 1;

while (index < 100) {
  console.log(index);
  index += 2;
}
*/
// Launch's solution:
/*
for (let number = 1; number < 100; number += 2) {
  console.log(number);
}
*/
// Futher exploration:
/*
1. Asks for user input and converts to number and rounds up.
2. If one of the inputs evaluates to NaN, throws error.
3. If the min is greater than than max, throws error.
4. Otherwise continues:
    1. Constructs array of the relevant numbers from min-max, inclusive.
    2. Logs each to the console.
*/

function oddNumbers(minParam, maxParam) {
  if (Number.isNaN(min) || Number.isNaN(max)) {
    console.log("Error: input must be number.");
  } else if (min > max) {
    console.log("Error: min can't be greater than max.");
  } else {
    let arrayOfNumbers = [];
    let index = min;
    while (index < max + 1) {
      if (index % 2 !== 0) {
        arrayOfNumbers.push(index);
      }
      index += 1;
    }
    arrayOfNumbers.forEach(element => console.log(element));
  }

}

function getInput(inputParam) {
  let rlSync = require('readline-sync');
  return Math.ceil(Number(rlSync.question(inputParam)));
}

let min = getInput("Please provide a min integer (no input will be treated as 0): ");
let max = getInput("Please provide a max integer (no input will be treated as 0): ");
let result = oddNumbers(min, max);
