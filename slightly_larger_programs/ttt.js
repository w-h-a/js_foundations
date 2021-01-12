/*
1. DO
  - PRINT the intial empty 3x3 board
  - WHILE there is no winner and the board is not full
    - GET user's move
    - GET computer's move
    - PRINT updated board state
  - IF the board is a winning board
    - PRINT winner
    ELSE
    - PRINT tie
  - GET user's response to "Play again?"
2. WHILE yes
3. PRINT "Goodbye!"
*/

let unusedSquare = ' ';

let humanMarker = 'X';

let computerMarker = 'O';

let playAgain;

let readline = require('readline-sync');

let playerMoves = {
  1: unusedSquare, // top left
  2: unusedSquare, // top center
  3: unusedSquare, // top right
  4: unusedSquare, // middle left
  5: unusedSquare, // center
  6: unusedSquare, // middle right
  7: unusedSquare, // bottom left
  8: unusedSquare, // bottom center
  9: unusedSquare, // bottom right
};

function getPlayersChoice(userInputP) {
  return readline.question(userInputP).trim();
}

function getEmpties() {
  return Object.keys(playerMoves).filter(ele => {
    return playerMoves[ele] === unusedSquare;
  });
}

function initializeBoard() {
  for (let prop in playerMoves) {
    playerMoves[prop] = unusedSquare;
  }
}

function displayBoard() {
  console.log('');
  console.log('     |     |');
  console.log(`  ${playerMoves['1']}  |  ${playerMoves['2']}  |  ${playerMoves['3']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${playerMoves['4']}  |  ${playerMoves['5']}  |  ${playerMoves['6']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${playerMoves['7']}  |  ${playerMoves['8']}  |  ${playerMoves['9']}`);
  console.log('     |     |');
  console.log('');
}

do {
  console.clear();
  initializeBoard();
  displayBoard();

  // while (false) {
    let emptySquares = getEmpties();
    let humanSquare = getPlayersChoice(`Choose a square (${emptySquares.join(', ')}):\n`);
    while (!emptySquares.includes(humanSquare)) {
      console.log("That is not an empty square.");
      humanSquare = getPlayersChoice();
    }
    playerMoves[humanSquare] = humanMarker;


    emptySquares = getEmpties();
    let draw = Math.floor(Math.random() * emptySquares['length']);
    let compSquare = emptySquares[draw];
    playerMoves[compSquare] = computerMarker;
    
    displayBoard();
  // }

  playAgain = false;
} while (playAgain);
console.log("Goodbye!");
