/*
START

1.  GET user's age
2.  GET user's age of retirement
3.  GET current year
4.  SET difference to user's age of retirement minus user's age.
5.  PRINT year that the user will retire (current year plus difference)
6.  PRINT how many more years of work (difference)

END
*/

let readline = require('readline-sync');

function getUserInput(userInputP) {
  return Number(readline.question(userInputP));
}

let age = getUserInput("Current age:\n");

let retirementAge = getUserInput("Age of retirement:\n");

let difference = retirementAge - age;

let today = new Date();

let currentYear = today.getFullYear();

let retirementYear = currentYear + difference;

console.log(`You will retire in ${retirementYear}.`);
console.log(`You have ${difference} more years of work.`);
