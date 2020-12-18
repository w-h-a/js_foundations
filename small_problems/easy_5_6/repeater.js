/*
START

1.  GET user's choice.
2.  GET user's string.
3.  IF user chose repeater
      SET arrayRep to split string
      RETURN arrayRep reduced to repeat
    ELSE
      SET arrayRep to split string
      RETURN arrayRep reduced to double consonants only

END
*/

const DOUBLED = 2;

const CONSONANTS = 'BbCcDdFfGgHhJjKkLlMmNnPpQqRrSsTtVvWwXxYyZz';

const READLINE = require('readline-sync');

let doWelcome = true;
let toRepeat;

function getUserInput(inputP) {
  return READLINE.question(inputP);
}

function repeater(stringP) {
  let arrayRep = stringP.split('');
  return arrayRep.reduce((acc, ele) => {
    acc.push(ele.repeat(DOUBLED));
    return acc;
  }, []).join('');
}

function doubleConsonants(stringP) {
  let arrayRep = stringP.split('');
  return arrayRep.reduce((acc, ele) => {
    if (CONSONANTS.split('').includes(ele)) {
      acc.push(ele.repeat(DOUBLED));
    } else {
      acc.push(ele);
    }
    return acc;
  }, []).join('');
}

do {
  console.clear();

  if (doWelcome) {
    console.log("Welcome to DDoouubblleerr!!");
    doWelcome = false;
  }

  let choice = getUserInput(
    "Enter 'cc', if you'd like every character to be doubled;\n" +
    "otherwise, simply hit enter (or enter any key) to have only consonants doubled.\n"
  ).toLowerCase() === 'cc';

  let string = getUserInput("Enter a string of your choice\n");

  if (choice) {
    console.log(repeater(string));
  } else {
    console.log(doubleConsonants(string));
  }

  toRepeat = getUserInput(
    "Enter 'y', for another go; otherwise enter anything to exit.\n"
  ).toLowerCase() === 'y';

} while (toRepeat);
