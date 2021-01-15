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

let arrayOfPossibleGames = [];

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
  let minScore = Infinity;
  return movesParam.reduce((acc, ele, idx) => {
    if (ele['score'] < minScore) {
      minScore = ele['score'];
      acc = idx;
    }
    return acc;
  }, undefined);
}

function getComputerBestMove(movesParam) {
  let maxScore = -Infinity;
  return movesParam.reduce((acc, ele, idx) => {
    if (ele['score'] > maxScore) {
      maxScore = ele['score'];
      acc = idx;
    }
    return acc;
  }, undefined);
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
  //console.clear();

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

function chooseSquare(playerParam) {
  if (playerParam === 'human') humanMoves();
  if (playerParam === 'computer') computerMoves();
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
  let compSquare = getStrategy(playerMoves, "computer")['square'];
  playerMoves[compSquare] = computerMarker;
}

function getStrategy(movesParam, playerParam) {
  if (movesParam === playerMoves) arrayOfPossibleGames = [];

  let copyOfMoves = Object.assign({}, movesParam);
  arrayOfPossibleGames.push(copyOfMoves);

  if (getWinner(copyOfMoves) === 'You') {
    return {score: -1};
  } else if (getWinner(copyOfMoves) === "Computer") {
    return {score: 1};
  } else if (getIsBoardFull(copyOfMoves)) {
    return {score: 0};
  }

  let emptySquares = getEmpties(copyOfMoves);

  let possibleMoves = getMoves(emptySquares, copyOfMoves, playerParam);

  let stepsForward = arrayOfPossibleGames.reduce((acc, ele, idx) => {
    if (copyOfMoves === ele) {
      acc = idx;
    }
    return acc;
  }, undefined);

  if (getEmpties(playerMoves)['length'] < 4) {
    console.log("From the starting assumption of...");
    displayBoard(copyOfMoves);
    console.log(`...which is ${stepsForward} step(s) forward,\nthe computer consdered the following ${playerParam} moves:`, possibleMoves);
    getHumanInput("When you are ready, enter any key or hit enter to continue.\n");
  }

  let optimalMove;

  if (playerParam === "human") {
    optimalMove = getHumanBestMove(possibleMoves);
  } else {
    optimalMove = getComputerBestMove(possibleMoves);
  }

  if (getEmpties(playerMoves)['length'] < 4) {
    console.log(`${playerParam}'s optimal move is:`, possibleMoves[optimalMove]);
    getHumanInput("When you are ready, enter any key or hit enter to continue.\n");
  }

  return possibleMoves[optimalMove];
}

function getMoves(emptiesParam, movesParam, playerParam) {
  return emptiesParam.reduce((acc, ele) => {
    let move = {};
    let temp = movesParam[ele];
    move['square'] = ele;

    if (playerParam === 'human') {
      movesParam[ele] = humanMarker;

      let stepsForward = arrayOfPossibleGames.reduce((acc, ele, idx) => {
        if (movesParam === ele) {
          acc = idx;
        }
        return acc;
      }, undefined);

      if (getEmpties(playerMoves)['length'] < 4) {
        console.log(`The computer is ready to think about what would happen if ${playerParam} chose ${Number(ele)}, ${stepsForward + 1} step(s) forward.`);
        displayBoard(movesParam);
        getHumanInput("When you are ready, enter any key or hit enter to continue.\n");
      }

      let result = getStrategy(movesParam, "computer")['score'];
      move['score'] = result;

      if (getEmpties(playerMoves)['length'] < 4 && move['score'] === -1) {
        console.log(`The computer sees you'd win and assigns a -1 to the outcome of this series of moves,\n which is ${stepsForward + 1} step(s) forward and ends with ${playerParam}'s ${move['square']}.`);
        getHumanInput("When you are ready, enter any key or hit enter to continue.\n");
      } else if (getEmpties(playerMoves)['length'] < 4 && move['score'] === 0) {
        console.log(`The computer sees the game would end in a draw and assigns a 0 to the outcome of this series of moves,\n which is ${stepsForward + 1} step(s) forward and ends with ${playerParam}'s ${move['square']}.`);
        getHumanInput("When you are ready, enter any key or hit enter to continue.\n");
      } else if (getEmpties(playerMoves)['length'] < 4 && move['score'] === 1) {
        console.log(`The computer sees it'd win and assigns a +1 to the outcome of this series of moves,\n which is ${stepsForward + 1} step(s) forward and ends with ${playerParam}'s ${move['square']}.`);
        getHumanInput("When you are ready, enter any key or hit enter to continue.\n");
      }
    } else {
      movesParam[ele] = computerMarker;

      let stepsForward = arrayOfPossibleGames.reduce((acc, ele, idx) => {
        if (movesParam === ele) {
          acc = idx;
        }
        return acc;
      }, undefined);

      if (getEmpties(playerMoves)['length'] < 4) {
        console.log(`The computer is ready to think about what would happen if ${playerParam} chose ${Number(ele)}, ${stepsForward + 1} step(s) forward.`);
        displayBoard(movesParam);
        getHumanInput("When you are ready, enter any key or hit enter to continue.\n");
      }

      let result = getStrategy(movesParam, "human")['score'];
      move['score'] = result;

      if (getEmpties(playerMoves)['length'] < 4 && move['score'] === -1) {
        console.log(`The computer sees you'd win and assigns a -1 to the outcome of this series of moves,\n which is ${stepsForward + 1} step(s) forward and ends with ${playerParam}'s ${move['square']}.`);
        getHumanInput("When you are ready, enter any key or hit enter to continue.\n");
      } else if (getEmpties(playerMoves)['length'] < 4 && move['score'] === 0) {
        console.log(`The computer sees the game would end in a draw and assigns a 0 to the outcome of this series of moves,\n which is ${stepsForward + 1} step(s) forward and ends with ${playerParam}'s ${move['square']}.`);
        getHumanInput("When you are ready, enter any key or hit enter to continue.\n");
      } else if (getEmpties(playerMoves)['length'] < 4 && move['score'] === 1) {
        console.log(`The computer sees it'd win and assigns a +1 to the outcome of this series of moves,\n which is ${stepsForward + 1} step(s) forward and ends with ${playerParam}'s ${move['square']}.`);
        getHumanInput("When you are ready, enter any key or hit enter to continue.\n");
      }
    }

    arrayOfPossibleGames.pop();
    movesParam[ele] = temp;

    acc.push(move);
    return acc;
  }, []);
}

// program

do {
  if (doWelcome) {
    console.clear();
    console.log("Welcome to Tic Tac Toe!");
    doWelcome = false;
    getHumanInput("When you are ready, enter any key or hit enter to continue.\n");
  }

  initializeBoard();

  let currentPlayer = 'computer';

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
