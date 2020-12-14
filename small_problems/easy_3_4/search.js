/*
START

1.  SET n to length of initial numbers
2.  GET user numbers
3.  GET the number that the user wishes to search for
4.  IF the search number is included in the initial n numbers
      PRINT 'The number appears in first n numbers'
    ELSE
      PRINT 'The number does not appear in the first n numbers'

END
*/

let readline = require('readline-sync');

let initialNums = [];

let toRepeat;

function getUserInput(userInputP) {
  return readline.question(userInputP).toLowerCase();
}

function inputData(dataLengthP) {
  while (initialNums['length'] < dataLengthP) {
    console.clear();
    let userInput = Number(getUserInput("Enter a number:\n"));
    initialNums.push(userInput);
  }
}

function determineInclusion(searchP) {
  if (initialNums.includes(searchP)) {
    return `The number ${searchP} appears in ${initialNums}.`;
  } else {
    return `The number ${searchP} does not appear in ${initialNums}.`;
  }
}

function displayResult(resultP) {
  console.clear();
  console.log(resultP);
}

do {
  console.clear();

  initialNums = [];

  let lengthOfInitialNums = Number(getUserInput("How many numbers are we searching through?\n"));

  inputData(lengthOfInitialNums);

  console.clear();

  let searchFor = Number(getUserInput("Which number would you like to search for?\n"));

  let result = determineInclusion(searchFor);

  displayResult(result);

  toRepeat = getUserInput("Enter 'y' for another go; otherwise anything else to exit\n") === 'y';
} while (toRepeat);
