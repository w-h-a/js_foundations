// global variables

let readline = require('readline-sync');

let playAgain;

let doWelcome = true;

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

let cache = {};

let entry = '0';

// functions w/o side-effects

function getEmpties(movesParam = playerMoves) {
  return Object.keys(movesParam).filter(ele => {
    return movesParam[ele] === unusedSquare;
  });
}

function getWinner(movesParam = playerMoves) {
  for (let idx = 0; idx < winningLines['length']; idx += 1) {
    let [sq1, sq2, sq3] = winningLines[idx];

    if (
      movesParam[sq1] === humanMarker &&
      movesParam[sq2] === humanMarker &&
      movesParam[sq3] === humanMarker
    ) {
      return 'You';
    } else if (
      movesParam[sq1] === computerMarker &&
      movesParam[sq2] === computerMarker &&
      movesParam[sq3] === computerMarker
    ) {
      return 'Computer';
    }
  }

  return null;
}

function joinWith(arrParam, delimParam = ', ', wordParam = 'or') {
  if (arrParam['length'] < 2) return arrParam.join('');
  if (arrParam['length'] === 2) return `${arrParam[0]} ${wordParam} ${arrParam[1]}`;
  let initialStr = arrParam.slice(0, arrParam['length'] - 1).join(delimParam);
  return `${initialStr}${delimParam}${wordParam} ${arrParam[arrParam['length'] - 1]}`;
}

function minHumanMaxComputer(playerParam, possParam) {
  if (playerParam === 'human') {
    return getHumanBestMove(possParam);
  } else {
    return getComputerBestMove(possParam);
  }
}

function getHumanBestMove(possParam) {
  let minScore = Infinity;
  return possParam.reduce((acc, ele, idx) => {
    if (ele['score'] < minScore) {
      minScore = ele['score'];
      acc = idx;
    }
    return acc;
  }, undefined);
}

function getComputerBestMove(possParam) {
  let maxScore = -Infinity;
  return possParam.reduce((acc, ele, idx) => {
    if (ele['score'] > maxScore) {
      maxScore = ele['score'];
      acc = idx;
    }
    return acc;
  }, undefined);
}

function checkInMemory() {
  let currGameState = Object.entries(playerMoves);
  return Object.entries(cache).some(ele => {
    let result = Object.entries(ele[1]['gameState']).reduce((acc, _, idx, src) => {
      if (src[idx][1] !== currGameState[idx][1]) {
        acc = false;
      }
      return acc;
    }, true);
    return result;
  });
}

function pullFromMemory() {
  let currGameState = Object.entries(playerMoves);
  return Object.entries(cache).filter(ele => {
    let result = Object.entries(ele[1]['gameState']).reduce((acc, _, idx, src) => {
      if (src[idx][1] !== currGameState[idx][1]) {
        acc = false;
      }
      return acc;
    }, true);
    return result;
  })[0][1]['bestMove'];
}

// functions w/ side-effects

function getHumanInput(userInputParam) {
  return readline.question(userInputParam).trim().toLowerCase();
}

function initializeBoard() {
  for (let prop in playerMoves) {
    playerMoves[prop] = unusedSquare;
  }
}

function displayBoard(movesParam = playerMoves) {
  console.clear();

  console.log(`You are ${humanMarker}. Computer is ${computerMarker}.`);

  console.log('');
  console.log('     |     |');
  console.log(`  ${movesParam['1']}  |  ${movesParam['2']}  |  ${movesParam['3']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${movesParam['4']}  |  ${movesParam['5']}  |  ${movesParam['6']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${movesParam['7']}  |  ${movesParam['8']}  |  ${movesParam['9']}`);
  console.log('     |     |');
  console.log('');
}

function humanMoves() {
  let emptySquares = getEmpties();
  let humanSquare = getHumanInput(`Choose a square (${joinWith(emptySquares)}):\n`);
  while (!emptySquares.includes(humanSquare)) {
    console.log("That is not an empty square.");
    humanSquare = getHumanInput();
  }
  playerMoves[humanSquare] = humanMarker;
}

function computerMoves() {
  if (checkInMemory()) {
    let compSquare = pullFromMemory()['square'];
    playerMoves[compSquare] = computerMarker;
  } else {
    let compSquare = getStrategy(playerMoves, "computer")['square'];
    playerMoves[compSquare] = computerMarker;
  }
}

function getStrategy(movesParam, playerParam) {
  let copyOfMoves = Object.assign({}, movesParam);

  let emptySquares = getEmpties(copyOfMoves);

  if (getWinner(copyOfMoves) === 'You') return {score: -1};
  if (getWinner(copyOfMoves) === "Computer") return {score: 1};
  if (emptySquares['length'] === 0) return {score: 0};

  let possibleMoves = getMoves(emptySquares, copyOfMoves, playerParam);

  let optimalMove = minHumanMaxComputer(playerParam, possibleMoves);

  if (playerParam === 'computer') {
    let chosenSquare = possibleMoves[optimalMove];
    addToMemory(copyOfMoves, chosenSquare);
  }

  return possibleMoves[optimalMove];
}

function getMoves(emptiesParam, movesParam, playerParam) {
  return emptiesParam.reduce((acc, ele) => {
    let move = {};
    let temp = movesParam[ele];
    move['square'] = ele;

    if (playerParam === 'human') {
      getHumanMove(movesParam, ele, move);
    } else {
      getComputerMove(movesParam, ele, move);
    }

    movesParam[ele] = temp;

    acc.push(move);
    return acc;
  }, []);
}

function getHumanMove(movesParam, eleParam, singleMoveParam) {
  movesParam[eleParam] = humanMarker;
  singleMoveParam['score'] = getStrategy(movesParam, "computer")['score'];
}

function getComputerMove(movesParam, eleParam, singleMoveParam) {
  movesParam[eleParam] = computerMarker;
  singleMoveParam['score'] = getStrategy(movesParam, "human")['score'];
}

function addToMemory(movesParam, squareParam) {
  entry = String(Number(entry) + 1);
  cache[entry] = {gameState: movesParam, bestMove: squareParam};
}

// program

do {
  if (doWelcome) {
    console.clear();
    console.log("Welcome to Tic Tac Toe!");
    doWelcome = false;
  }

  initializeBoard();

  let currentPlayer = (
    getHumanInput("Enter 'c' if you'd like the computer to go first; otherwise, enter any key or hit enter.\n") === 'c' ? 'computer' : 'human'
  );

  while (!getWinner() &&  getEmpties()['length'] !== 0) {
    displayBoard();

    if (currentPlayer === 'human') humanMoves();
    if (currentPlayer === 'computer') computerMoves();

    currentPlayer = (currentPlayer === 'human' ? 'computer' : 'human');
  }

  displayBoard();

  if (getWinner()) {
    console.log(`${getWinner()} won!`);
  } else {
    console.log("The game is a draw!");
  }

  playAgain = getHumanInput("Enter 'y' if you'd like another go; otherwise enter any key or press enter to exit.\n") === 'y';
} while (playAgain);

console.log("Goodbye!");
