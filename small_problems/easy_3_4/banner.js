/*
START

1.  IF length of input string is not longer than max
      GO to step 2
    ELSE
      GO to step 6
2.  PRINT '+-' plus '-' (times length of input string) plus '-+'
3.  PRINT '| ' plus ' ' (times length of input string) plus ' |'
4.  PRINT '| ' plus 'string' plus ' |'
5.  REPEAT step 1 and 2 in reverse order
6.  GET arrayOfLines (see other pseudocode below)
7.  PRINT '+-' plus '-' (times length of max) plus '-+'
8.  PRINT '| ' plus ' ' (times length of max) plus ' |'
9.  WHILE there are elements in arrayOfLines
      DO step 4
10. REPEAT steps 8 and 9 in reverse order

END

Here's the pseudocode for 'GET arrayOfLines' (step 6 above)

START

1.  SET numOfFullLines to the length of the input string divided by max
2.  SET index to 0;
3.  SET arrayOfLines to empty string.
4.  WHILE index is less than numOfFullLines
      1. SET line to substring(index * max, (index + 1) * max)
      2. PUSH line to arrayOfLines
      3. SET index to index plus 1
5.  RETURN arrayOfLines

END
*/

let readline = require('readline-sync');
let doWelcome = true;
let widthChoices = ['10', '20', '30', '40', ''];
let toRepeat;

function getUserInput(userInputP) {
  return readline.question(userInputP);
}

function getDashes(stringP) {
  let dashes = `+-${"-".repeat(stringP['length'])}-+`;
  return dashes;
}

function getSpaces(stringP) {
  let spaces = `| ${' '.repeat(stringP['length'])} |`;
  return spaces;
}

function printDashes(dashesP) {
  console.log(`${dashesP}`);
}

function printSpaces(spacesP) {
  console.log(`${spacesP}`);
}

function logInBigBox(stringP) {
  let dashes = getDashes(stringP);
  let spaces = getSpaces(stringP);

  printDashes(dashes);
  printSpaces(spaces);
  console.log(`| ${stringP} |`);
  printSpaces(spaces);
  printDashes(dashes);
}

function getMaxDashes(maxP) {
  let dashes = `+-${"-".repeat(maxP)}-+`;
  return dashes;
}

function getMaxSpaces(maxP) {
  let spaces = `| ${" ".repeat(maxP)} |`;
  return spaces;
}

function getArrayOfLines(maxP, stringP) {
  let numOfFullLines = stringP['length'] / maxP;
  let index = 0;
  let arrayOfLines = [];

  while (index < numOfFullLines) {
    let indexStart = index * maxP;
    let indexEnd = (index + 1) * maxP;
    let line = stringP.substring(indexStart, indexEnd);
    arrayOfLines.push(line);
    index += 1;
  }

  return arrayOfLines;
}

function logInLilBox(maxP, stringP) {
  let maxDashes = getMaxDashes(maxP);
  let maxSpaces = getMaxSpaces(maxP);

  let arrayOfLines = getArrayOfLines(maxP, stringP);

  printDashes(maxDashes);
  printSpaces(maxSpaces);
  arrayOfLines.forEach((ele, idx) => {
    if (idx !== (arrayOfLines['length'] - 1)) {
      console.log(`| ${ele} |`);
    } else {
      let padding = " ".repeat(maxP - ele['length']);
      console.log(`| ${ele}${padding} |`);
    }
  });
  printSpaces(maxSpaces);
  printDashes(maxDashes);
}

do {
  if (doWelcome) {
    console.log("Welcome to BannerizeIt! This is your one stop shop for turning messages into banners.");
    doWelcome = false;
  }

  let maxWidth = getUserInput("Enter one of the following numbers for max width:\n=>10\n=>20\n=>30\n=>40\nIf you don't want a max width, then simply press enter.\n");

  while (!widthChoices.includes(maxWidth)) {
    console.log("WHOOPS!");
    maxWidth = getUserInput();
  }

  if (maxWidth === '') {
    maxWidth = Infinity;
  } else {
    maxWidth = Number(maxWidth);
  }

  let userMessage = getUserInput("Enter the message of your choice.\n");

  let stringLength = userMessage['length'];

  if (!(stringLength > maxWidth)) {
    logInBigBox(userMessage);
  } else {
    logInLilBox(maxWidth, userMessage);
  }

  toRepeat = getUserInput("Enter 'y', to have another go; otherwise hit enter or enter any key to exit.\n").toLowerCase() === 'y';
} while (toRepeat);
