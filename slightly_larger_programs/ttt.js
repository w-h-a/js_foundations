// global variables

let readline = require('readline-sync');

let playAgain;

let unusedSquare = ' ';

let humanMarker = 'X';

let computerMarker = 'O';

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

let winningLines = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
  [1, 4, 7], [2, 5, 8], [3, 6, 9], // columns
  [1, 5, 9], [3, 5, 7]             // diagonals
];

// functions w/o side-effects

function getRandomIdxFromInterval(minP, maxP) {
  return Math.floor((Math.random() * (maxP - minP + 1)) + minP);
}

function getEmpties() {
  return Object.keys(playerMoves).filter(ele => {
    return playerMoves[ele] === unusedSquare;
  });
}

function getIsBoardFull() {
  return getEmpties()['length'] === 0;
}

function getWinner() {
  for (let idx = 0; idx < winningLines['length']; idx += 1) {
    let [sq1, sq2, sq3] = winningLines[idx];

    if (
      playerMoves[sq1] === humanMarker &&
      playerMoves[sq2] === humanMarker &&
      playerMoves[sq3] === humanMarker
    ) {
      return 'You';
    } else if (
      playerMoves[sq1] === computerMarker &&
      playerMoves[sq2] === computerMarker &&
      playerMoves[sq3] === computerMarker
    ) {
      return 'Computer';
    }
  }

  return null;
}

// functions w/ side-effects

function getPlayerInput(userInputP) {
  return readline.question(userInputP).trim().toLowerCase();
}

function initializeBoard() {
  for (let prop in playerMoves) {
    playerMoves[prop] = unusedSquare;
  }
}

function displayBoard() {
  console.clear();

  console.log(`You are ${humanMarker}. Computer is ${computerMarker}.`);

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

function humanMoves() {
  let emptySquares = getEmpties();
  let humanSquare = getPlayerInput(`Choose a square (${emptySquares.join(', ')}):\n`);
  while (!emptySquares.includes(humanSquare)) {
    console.log("That is not an empty square.");
    humanSquare = getPlayerInput();
  }
  playerMoves[humanSquare] = humanMarker;
}

function computerMoves() {
  let emptySquares = getEmpties();
  let draw = getRandomIdxFromInterval(0, emptySquares['length'] - 1);
  let compSquare = emptySquares[draw];
  playerMoves[compSquare] = computerMarker;
}

// pseudocode

/*
1. DO
  - SET 3x3 board to empty
  - WHILE there is no winner and the board is not full
    - PRINT updated board
    - GET user's move
    - IF there is a winner or the board is full
      - BREAK out of WHILE
    - GET computer's move
  - PRINT updated board
  - IF the board is a winning board
    - PRINT winner
    ELSE
    - PRINT tie
  - GET user's response to "Play again?"
2. WHILE yes
  - GO back to step 1
3. PRINT "Goodbye!"
*/

// program

do {
  initializeBoard();

  while (!getWinner() && !getIsBoardFull()) {
    displayBoard();

    humanMoves();

    if (getWinner() || getIsBoardFull()) break;

    computerMoves();
  }

  displayBoard();


  if (getWinner()) {
    console.log(`${getWinner()} won!`);
  } else {
    console.log("The game is a draw!");
  }

  playAgain = getPlayerInput(
    "Enter 'y' if you'd like another go; otherwise enter any key or press enter to exit.\n"
  ) === 'y';
} while (playAgain);

console.log("Goodbye!");
