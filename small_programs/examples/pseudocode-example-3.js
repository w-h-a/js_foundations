/*
START

1. SET variable named 'array' to empty array.
2. WHILE GET answer as to whether user wishes to continue is true:
  1. GET string from user
  2. Push string to array variable.
3. PRINT result of joining element of array variable.

END
*/

const READLINE = require('readline-sync');

function getInput(userParam) {
  return READLINE.question(userParam);
}

let array = [];

do {
  let string = getInput("Enter a string: ");
  array.push(string);
} while (getInput("Do you wish to continue? Enter 'y' if so.") === 'y');

let result = array.join(' ');
console.log(result);
