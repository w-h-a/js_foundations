/*
START

1.  GET n from user
2.  WHILE n is impermissible
      GO back to step 1
3.  SET spaceNum to n
4.  SET starNum to 0
5.  WHILE spaceNum >= 0
      PRINT repeated spaces for spaceNum and repeated stars for starNum
      spaceNum -= 1
      starNum += 1

END
*/

let readline = require('readline-sync');

function getUserInput(inputP) {
  return readline.question(inputP);
}

function impermissibleNumber(userInputP) {
  return Number.isNaN(Number(userInputP)) || Number(userInputP) <= 0;
}

function triangle(nP) {
  let numSpaces = nP;
  let numStars = 0;

  while (numSpaces >= 0) {
    console.log(`${" ".repeat(numSpaces)}${"*".repeat(numStars)}`);
    numSpaces -= 1;
    numStars += 1;
  }
}

console.clear();

let userInput = getUserInput("Enter a positive integer:\n");

while (impermissibleNumber(userInput)) {
  console.log("Whoops!");
  userInput = getUserInput();
}

let posInteger = Number.parseInt(userInput, 10);

triangle(posInteger);
