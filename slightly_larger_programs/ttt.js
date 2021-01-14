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

// functions w/o side-effects

/* no longer needed
function getRandomIdxFromInterval(minParam, maxParam) {
  return Math.floor((Math.random() * (maxParam - minParam + 1)) + minParam);
}
*/

function getEmpties(movesParam = playerMoves) {
  return Object.keys(movesParam).filter(ele => {
    return movesParam[ele] === unusedSquare;
  });
}

function getIsBoardFull(movesParam = playerMoves) {
  return getEmpties(movesParam)['length'] === 0;
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

function getHumanBestMove(movesParam) {
  let result;
  let minScore = Infinity;
  movesParam.forEach((ele, idx) => {
    if (ele['score'] < minScore) {
      minScore = ele['score'];
      result = idx;
    }
  });
  return result;
}

function getComputerBestMove(movesParam) {
  let result;
  let maxScore = -Infinity;
  movesParam.forEach((ele, idx) => {
    if (ele['score'] > maxScore) {
      maxScore = ele['score'];
      result = idx;
    }
  });
  return result;
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

function chooseSquare(playerParam) {
  if (playerParam === 'human') {
    humanMoves();
  } else {
    computerMoves();
  }
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

/* Old computerMoves
function computerMoves() {
  let emptySquares = getEmpties();
  let draw = getRandomIdxFromInterval(0, emptySquares['length'] - 1);
  let compSquare = emptySquares[draw];
  playerMoves[compSquare] = computerMarker;
}
*/

function computerMoves() {
  let compSquare = getStrategy(playerMoves, "computer")['key'];
  playerMoves[compSquare] = computerMarker;
}

/*
for getStrategy(playerMoves, currentPlayer)
1. SET copyOfMoves set copy of possible playersMove object
2. SET emptySquares to getEmpties(copyOfMoves)
3. IF human is the winner
  - RETURN {score: -1}
  ELSE IF computer is the winner
  - RETURN {score: 1}
  ELSE IF board full
  - RETURN {score: 0}
4. SET possibleMoves to getMoves(emptySquares, copyOfMoves, playerParam)
5. SET optimalMove to undefined
6. IF player is human
  - SET optimalMove to getHumanBestMove(moves)
  ELSE
  - SET optimalMove to getComputerBestMove(moves)
7. RETURN possibleMoves[optimalMove]

for getMoves(empties, playerMoves, playerParam)
1. SET possMoves to array of length 0
2. WHILE there are elements in empties
  - SET move be an object
  - SET temp variable to the value of playerMoves given key of index empties
  - SET move['key'] to element at idx of empties
  - IF playerMoves is human
    - SET playerMoves[emptiesParam[idx]] to humanMarker
    - SET result to getStrategy(playerMoves, currentPlayer)
    - SET move['score'] to result['score']
    ELSE
    - SET playerMoves[emptiesParam[idx]] to computerMarker
    - SET result to getStrategy(playerMoves, currentPlayer)
    - SET move['score'] to result['score']
  - SET playerMoves[emptiesParam[idx]] to temp
  - SET possMoves to inlucde move
3. RETURN possMoves

for getHumanBestMove(possibleMoves)
1. SET result to undefined
2. SET minScore to Infinity
3. WHILE there are elements in possibleMoves
  - IF ele['score'] less than minScore
    - SET minScore to ele['score']
    - SET reuslt to idx
4. RETURN result

for getComputerBestMove(possibleMoves)
1. SET result to undefined
2. SET maxScore to -Infinity
3. WHILE there are elements in possibleMoves
  - IF ele['score'] greater than maxScore
    - SET maxScore to ele['score']
    - SET reuslt to idx
4. RETURN result
*/

function getStrategy(movesParam, playerParam) {
  let copyOfMoves = Object.assign({}, movesParam);

  let emptySquares = getEmpties(copyOfMoves);

  if (getWinner(copyOfMoves) === 'You') {
    return {score: -1};
  } else if (getWinner(copyOfMoves) === "Computer") {
    return {score: 1};
  } else if (getIsBoardFull(copyOfMoves)) {
    return {score: 0};
  }

  let possibleMoves = getMoves(emptySquares, copyOfMoves, playerParam);

  let optimalMove;

  if (playerParam === "human") {
    optimalMove = getHumanBestMove(possibleMoves);
  } else {
    optimalMove = getComputerBestMove(possibleMoves);
  }

  return possibleMoves[optimalMove];
}

function getMoves(emptiesParam, movesParam, playerParam) {
  return emptiesParam.reduce((acc, _, idx) => {
    let move = {};
    let temp = movesParam[emptiesParam[idx]];
    move['key'] = emptiesParam[idx];

    if (playerParam === 'human') {
      movesParam[emptiesParam[idx]] = humanMarker;
      let result = getStrategy(movesParam, "computer");
      move['score'] = result['score'];
    } else {
      movesParam[emptiesParam[idx]] = computerMarker;
      let result = getStrategy(movesParam, "human");
      move['score'] = result['score'];
    }

    movesParam[emptiesParam[idx]] = temp;

    acc.push(move);
    return acc;
  }, []);
}

// pseudocode

/*
1. DO
  - IF doWelcome is true
    - PRINT 'Welcome!'
    - SET doWelcome to false
  - SET 3x3 board to empty
  - SET (initialize) currentPlayer to 'human'
  - WHILE there is no winner and the board is not full
    - PRINT updated board
    - GET currentPlayer's move (either human or computer)
    - SET currentPlayer to GET switchPlayer(currentPlayer)
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
  if (doWelcome) {
    console.clear();
    console.log("Welcome to Tic Tac Toe!");
    doWelcome = false;
    getHumanInput("When you are ready, enter any key or hit enter to continue.\n");
  }

  initializeBoard();

  let currentPlayer = 'human';

  while (!getWinner() && !getIsBoardFull()) {
    displayBoard();

    chooseSquare(currentPlayer);

    currentPlayer = (currentPlayer === 'human' ? 'computer' : 'human');
  }

  displayBoard();

  if (getWinner()) {
    console.log(`${getWinner()} won!`);
  } else {
    console.log("The game is a draw!");
  }

  playAgain = getHumanInput(
    "Enter 'y' if you'd like another go; otherwise enter any key or press enter to exit.\n"
  ) === 'y';
} while (playAgain);

console.log("Goodbye!");
