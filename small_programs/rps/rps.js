/*
START

1.  GET user's preference for game-play or watch-play
2.  IF game-play
      GO to step 3
    ELSE watch-play
      GO to step 7
3.  GET user's preference for best of.
4.  IF user's selection is permissible
      SET rounds variable to user choice
    ELSE
      WHILE impermissible input
        GO back to step 1
5.  WHILE neither player has won Math.ceil(round / 2)
      1.  GET user's move
      2.  IF user's selection is permissible
            SET choice to user's move
          ELSE
            WHILE impermissible input
              GO back to step 5.1.
      3.  GET computer's move
      4.  PRINT choices
      5.  PRINT winner
      6.  SET number of wins
6.  PRINT grand winner
7.  GET computers' strategies
8.  PRINT torus of computers, identified by their strategies
9.  WHILE user wishes to watch
      1. SET scores and update probabilities to 0
      2. SET computers that are in play
      3. SET scores
      4. SET update prob distribution over strategies for focal computer
      5. SET strategy of focal computer
      6. PRINT torus of computers, identified by their strategies

STOP
*/

const READLINE = require('readline-sync');

const ROUNDS = ['1', '3', '5', '7'];

const CHOICES = {
  choiceArray: ['r', 'p', 's'],
  r: 'rock',
  p: 'paper',
  s: 'scissors'
};

const WINNER = {
  r: ['s'],
  p: ['r'],
  s: ['p']
};

let doWelcome = true;

let score = {
  user: 0,
  computer: 0
};

let toRepeat;

const NEIGHBORS = 'neighbors';

const UPDATE = ['1', '2'];

let computer0 = {};
let computer1 = {};
let computer2 = {};
let computer3 = {};
let computer4 = {};
let computer5 = {};
let computer6 = {};
let computer7 = {};

let arrayOfComputers = [
  computer0, computer1, computer2, computer3,
  computer4, computer5, computer6, computer7
];

arrayOfComputers = arrayOfComputers.reduce((acc, ele, idx) => {
  let idxMinus;
  let idxPlus;
  if ((idx - 1) === -1) {
    idxMinus = 7;
  } else {
    idxMinus = (idx - 1);
  }
  if ((idx + 1) === 8) {
    idxPlus = 0;
  } else {
    idxPlus = (idx + 1);
  }
  ele[NEIGHBORS] = [arrayOfComputers[idxMinus], arrayOfComputers[idxPlus]];
  acc.push(ele);
  return acc;
}, []);

let scoresAndProbs = {
  paperScore: 0,
  scissorsScore: 0,
  rockScore: 0,
  probToPaper: 0,
  probToScissors: 0,
  probToRock: 0,
};

function getUserInput(userInputP) {
  return READLINE.question(userInputP).toLowerCase();
}

function readyToContinue() {
  let isReady = getUserInput("=> When you're ready to continue, enter 'c'.\n") === 'c';
  while (!isReady) {
    console.log("=> Whoops!");
    isReady = getUserInput() === 'c';
  }
}

function displayChoices(userP, computerP) {
  console.clear();
  console.log(`=> You chose ${CHOICES[userP]}, and computer chose ${CHOICES[computerP]}.`);
}

function displayWinner(userP, computerP) {
  if (playerWins(userP, computerP)) {
    console.log("=> You win!");
  } else if (userP === computerP) {
    console.log("=> It's a tie!");
  } else {
    console.log("=> Computer wins!");
  }
}

function updateWins(userP, computerP) {
  if (playerWins(userP, computerP)) {
    score['user'] += 1;
  } else if (userP !== computerP) {
    score['computer'] += 1;
  }
}

function playerWins(userP, computerP) {
  return WINNER[userP].includes(computerP);
}

function displayWins() {
  console.log(`=> You have ${score['user']} wins, and computer has ${score['computer']} wins. Good luck!`);
}

function displayGrandWinner(firstToP) {
  if (score['user'] === firstToP) {
    console.log("=> You are the Grand Master! It's your birthday!");
  } else {
    console.log("=> Computer is the Grand Master! It's its birthday!");
  }
}

function setInitialStrategies() {
  arrayOfComputers = arrayOfComputers.reduce((acc, ele) => {
    let randomIndex = Math.floor(Math.random() * CHOICES['choiceArray']['length']);
    ele['choice'] = CHOICES['choiceArray'][randomIndex];
    acc.push(ele);
    return acc;
  }, []);
}

function resetScoresAndProbs() {
  scoresAndProbs = {
    paperScore: 0,
    scissorsScore: 0,
    rockScore: 0,
    probToPaper: 0,
    probToScissors: 0,
    probToRock: 0,
  };
}

function getLocaleOfAction(activeP) {
  let focal = arrayOfComputers[activeP];
  let left = arrayOfComputers[activeP][NEIGHBORS][0];
  let leftOfLeft = left[NEIGHBORS][0];
  let right = arrayOfComputers[activeP][NEIGHBORS][1];
  let rightOfRight = right[NEIGHBORS][1];
  return [leftOfLeft, left, focal, right, rightOfRight];
}

function addUpPaperScore(arrayP) {
  if (arrayP[1]['choice'] === 'p') {
    if (WINNER[arrayP[1]['choice']].includes(arrayP[0]['choice'])) {
      scoresAndProbs['paperScore'] += 1;
    }
    if (WINNER[arrayP[1]['choice']].includes(arrayP[2]['choice'])) {
      scoresAndProbs['paperScore'] += 1;
    }
  }

  if (arrayP[3]['choice'] === 'p') {
    if (WINNER[arrayP[3]['choice']].includes(arrayP[2]['choice'])) {
      scoresAndProbs['paperScore'] += 1;
    }
    if (WINNER[arrayP[3]['choice']].includes(arrayP[4]['choice'])) {
      scoresAndProbs['paperScore'] += 1;
    }
  }
}

function addUpScissorsScore(arrayP) {
  if (arrayP[1]['choice'] === 's') {
    if (WINNER[arrayP[1]['choice']].includes(arrayP[0]['choice'])) {
      scoresAndProbs['scissorsScore'] += 1;
    }
    if (WINNER[arrayP[1]['choice']].includes(arrayP[2]['choice'])) {
      scoresAndProbs['scissorsScore'] += 1;
    }
  }

  if (arrayP[3]['choice'] === 's') {
    if (WINNER[arrayP[3]['choice']].includes(arrayP[2]['choice'])) {
      scoresAndProbs['scissorsScore'] += 1;
    }
    if (WINNER[arrayP[3]['choice']].includes(arrayP[4]['choice'])) {
      scoresAndProbs['scissorsScore'] += 1;
    }
  }
}

function addUpRockScore(arrayP) {
  if (arrayP[1]['choice'] === 'r') {
    if (WINNER[arrayP[1]['choice']].includes(arrayP[0]['choice'])) {
      scoresAndProbs['rockScore'] += 1;
    }
    if (WINNER[arrayP[1]['choice']].includes(arrayP[2]['choice'])) {
      scoresAndProbs['rockScore'] += 1;
    }
  }

  if (arrayP[3]['choice'] === 'r') {
    if (WINNER[arrayP[3]['choice']].includes(arrayP[2]['choice'])) {
      scoresAndProbs['rockScore'] += 1;
    }
    if (WINNER[arrayP[3]['choice']].includes(arrayP[4]['choice'])) {
      scoresAndProbs['rockScore'] += 1;
    }
  }
}

function proportionateProbUpdate() {
  if ((scoresAndProbs['paperScore'] + scoresAndProbs['scissorsScore'] + scoresAndProbs['rockScore']) !== 0) {
    scoresAndProbs['probToPaper'] = (scoresAndProbs['paperScore'] / (scoresAndProbs['paperScore'] + scoresAndProbs['scissorsScore'] + scoresAndProbs['rockScore']));
    scoresAndProbs['probToScissors'] = (scoresAndProbs['scissorsScore'] / (scoresAndProbs['paperScore'] + scoresAndProbs['scissorsScore'] + scoresAndProbs['rockScore']));
    scoresAndProbs['probToRock'] = (scoresAndProbs['rockScore'] / (scoresAndProbs['paperScore'] + scoresAndProbs['scissorsScore'] + scoresAndProbs['rockScore']));
  }
}

function maxProbUpdate() {
  if ((scoresAndProbs['paperScore'] + scoresAndProbs['scissorsScore'] + scoresAndProbs['rockScore']) !== 0) {
    let max = Math.max(scoresAndProbs['paperScore'], scoresAndProbs['scissorsScore'], scoresAndProbs['rockScore']);
    if (
      ((scoresAndProbs['paperScore'] === max) && (scoresAndProbs['scissorsScore'] === max) && (scoresAndProbs['rockScore'])) || // This condition is not needed unless we expand the game to a 2d surface
      ((scoresAndProbs['paperScore'] === max) && (scoresAndProbs['scissorsScore'] === max)) ||
      ((scoresAndProbs['paperScore'] === max) && (scoresAndProbs['rockScore'] === max)) ||
      ((scoresAndProbs['rockScore'] === max) && (scoresAndProbs['scissorsScore'] === max))
    ) {
      proportionateProbUpdate();
    } else if (scoresAndProbs['paperScore'] === max) {
      scoresAndProbs['probToPaper'] = 1;
    } else if (scoresAndProbs['scissorsScore'] === max) {
      scoresAndProbs['probToScissors'] = 1;
    } else {
      scoresAndProbs['probToRock'] = 1;
    }
  }
}

function updateRStrategy(arrayP) {
  let draw = Math.random();
  if (draw <= scoresAndProbs['probToPaper']) {
    arrayP[2]['choice'] = 'p';
  } else if (draw <= (scoresAndProbs['probToPaper'] + scoresAndProbs['probToScissors'])) {
    arrayP[2]['choice'] = 's';
  } else {
    arrayP[2]['choice'] = 'r';
  }
}

function updatePStrategy(arrayP) {
  let draw = Math.random();
  if (draw <= scoresAndProbs['probToScissors']) {
    arrayP[2]['choice'] = 's';
  } else if (draw <= (scoresAndProbs['probToScissors'] + scoresAndProbs['probToRock'])) {
    arrayP[2]['choice'] = 'r';
  } else {
    arrayP[2]['choice'] = 'p';
  }
}

function updateSStrategy(arrayP) {
  let draw = Math.random();
  if (draw <= scoresAndProbs['probToRock']) {
    arrayP[2]['choice'] = 'r';
  } else if (draw <= (scoresAndProbs['probToRock'] + scoresAndProbs['probToPaper'])) {
    arrayP[2]['choice'] = 'p';
  } else {
    arrayP[2]['choice'] = 's';
  }
}

function displayResults() {
  console.log(`=> The results are in!\n===> Rock players scored ${scoresAndProbs['rockScore']} wins!\n===> Paper players scored ${scoresAndProbs['paperScore']} wins!\n===> Scissors players scored ${scoresAndProbs['scissorsScore']} wins!`);

  let population = `[${arrayOfComputers[0]['choice']}] [${arrayOfComputers[1]['choice']}] [${arrayOfComputers[2]['choice']}] [${arrayOfComputers[3]['choice']}] [${arrayOfComputers[4]['choice']}] [${arrayOfComputers[5]['choice']}] [${arrayOfComputers[6]['choice']}] [${arrayOfComputers[7]['choice']}]`;

  console.log(`=> Here's our little population now:\n===> ${population}`);
}

do {
  console.clear();

  if (doWelcome) {
    console.log("=> Welcome to Rock, Paper, Scissors!");
    doWelcome = false;
    readyToContinue();
  }

  console.clear();
  let playOrEvolve = getUserInput("=> Enter 'y', if you'd like to play the game; otherwise, enter any key or press enter to watch computers play.\n");

  if (playOrEvolve === 'y') {
    console.clear();

    let bestOf = getUserInput("=> Enter the number of your choosing:\n===> 1: Best of 1\n===> 3: Best of 3\n===> 5: Best of 5\n===> 7: Best of 7\n");

    while (!ROUNDS.includes(bestOf)) {
      console.log("=> Whoops!");
      bestOf = getUserInput();
    }

    bestOf = Number(bestOf);

    let firstTo = Math.ceil(bestOf / 2);

    score['user'] = 0;
    score['computer'] = 0;

    while (!((score['user'] === firstTo) || (score['computer'] === firstTo))) {
      console.clear();

      let choice = getUserInput("=> Make a choice: 'r' for rock, 'p' for paper, or 's' for scissors\n");

      while (!CHOICES['choiceArray'].includes(choice)) {
        console.log("=> Whoops!");
        choice = getUserInput();
      }

      let randomIndex = Math.floor(Math.random() * CHOICES['choiceArray']['length']);

      let computerChoice = CHOICES['choiceArray'][randomIndex];

      displayChoices(choice, computerChoice);
      displayWinner(choice, computerChoice);
      updateWins(choice, computerChoice);
      displayWins();
      readyToContinue();
    }

    displayGrandWinner(firstTo);
  } else {
    console.clear();

    setInitialStrategies();

    let population = `[${arrayOfComputers[0]['choice']}] [${arrayOfComputers[1]['choice']}] [${arrayOfComputers[2]['choice']}] [${arrayOfComputers[3]['choice']}] [${arrayOfComputers[4]['choice']}] [${arrayOfComputers[5]['choice']}] [${arrayOfComputers[6]['choice']}] [${arrayOfComputers[7]['choice']}]`;

    console.log(`=> Here we have a little population of computers on a 1-dimensional torus:\n===> ${population}\n=> Each computer is identified by its strategy.\n=> Each computer's neighbors are those to its immediate left and immediate right.\n=> The computers at the edges are neighbors of one another.`);

    let updateMethod = getUserInput("=> How would you like the computers to update their strategy?\n=> Enter the number of your choosing:\n===> 1: Players copy a neighbor chosen according to probabilities that are proportional to the neighbor's payoff.\n===> 2: Players copy a neighbor with maximum payoff.\n=> Note: For our little game, the difference between these update methods can be seen\n=> only on the (rare) occassion that one neighbor wins twice and the other wins once.\n");

    while (!UPDATE.includes(updateMethod)) {
      console.log("=> Whoops!");
      updateMethod = getUserInput();
    }

    let toEvolve;

    do {
      resetScoresAndProbs();

      let active = Math.floor(Math.random() * arrayOfComputers['length']);
      let activeMinus;
      let activePlus;

      if ((active - 1) === -1) {
        activeMinus = 7;
      } else {
        activeMinus = (active - 1);
      }

      if ((active + 1) === 8) {
        activePlus = 0;
      } else {
        activePlus = (active + 1);
      }

      console.log(`=> The computer at index ${activeMinus} is playing against its neighbors.\n=> The computer at index ${activePlus} is playing against its neighbors.`);
      console.log(`=> The results of those matches will determine how the computer at index ${active} chooses its strategy in the next round.`);
      console.log("=> If there are no wins, no computer updates its strategy.");
      readyToContinue();

      let arrayOfRPS = getLocaleOfAction(active);

      addUpPaperScore(arrayOfRPS);
      addUpScissorsScore(arrayOfRPS);
      addUpRockScore(arrayOfRPS);

      if (updateMethod === '1') {
        proportionateProbUpdate();
      } else {
        maxProbUpdate();
      }

      if (arrayOfRPS[2]['choice'] === 'r') {
        updateRStrategy(arrayOfRPS);
      } else if (arrayOfRPS[2]['choice'] === 'p') {
        updatePStrategy(arrayOfRPS);
      } else {
        updateSStrategy(arrayOfRPS);
      }

      displayResults();

      toEvolve = getUserInput("=> When you want to see the next iteration, enter 'c'; otherwise enter any key or press enter to stop.\n") === 'c';
    } while (toEvolve);
  }

  toRepeat = getUserInput("=> Enter 'y', if you'd like another go; otherwise, enter any key or press enter to exit.\n") === 'y';
} while (toRepeat);
