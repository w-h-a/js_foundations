// globals

let readline = require('readline-sync');

let doWelcome = true;

let playAgain;

let deck = [];

let playerHand = [];

let dealerHand = [];

let dealerLimit = 17;

// functions without side-effects

function getTotal(cardsParam) {
  let values = getCardValues(cardsParam);
  let acesElevenSum = getAcesElevenSum(values);
  return correctForAcesSum(values, acesElevenSum);
}

function getCardValues(cardsParam) {
  return cardsParam.map(card => card[1]);
}

function getAcesElevenSum(valuesParam) {
  return valuesParam.reduce((acc, ele) => {
    if (ele === 'A') {
      acc += 11;
    } else if (['J', 'Q', 'K'].includes(ele)) {
      acc += 10;
    } else {
      acc += Number(ele);
    }
    return acc;
  }, 0);
}

function correctForAcesSum(valuesParam, sumParam) {
  valuesParam.filter(ele => ele === 'A').forEach(_ => {
    if (sumParam > 21) sumParam -= 10;
  });
  return sumParam;
}

function busts(subjParam) {
  if (subjParam === 'player') {
    return getTotal(playerHand) > 21;
  } else {
    return getTotal(dealerHand) > 21;
  }
}

function getWinner(playerTotParam, dealerTotParam) {
  if (playerTotParam === dealerTotParam) {
    return 'draw';
  } else if (playerTotParam > dealerTotParam) {
    return 'player';
  } else {
    return 'dealer';
  }
}

// functions with side-effects

function getHumanInput(userInputParam) {
  return readline.question(userInputParam).trim().toLowerCase();
}

function shuffle() {
  for (let idx = deck['length'] - 1; idx > 0; idx -= 1) {
    let jdx = Math.floor(Math.random() * (idx + 1));
    [deck[idx], deck[jdx]] = [deck[jdx], deck[idx]];
  }
}

function printPartialGameSit() {
  console.clear();
  console.log('==============');
  console.log(`Dealer has: ${dealerHand[0]}`);
  console.log(`Dealer has: unknown`);
  console.log('==============');
  playerHand.forEach(ele => console.log(`You have: ${ele}`));
  console.log(`Your total is ${getTotal(playerHand)}`);
  console.log('==============');
}

function printFullGameSit() {
  console.clear();
  console.log('==============');
  dealerHand.forEach(ele => console.log(`Dealer has: ${ele}`));
  console.log(`Dealer's total is ${getTotal(dealerHand)}`);
  console.log('==============');
  playerHand.forEach(ele => console.log(`You have: ${ele}`));
  console.log(`Your total is ${getTotal(playerHand)}`);
  console.log('==============');
}

function doInitialDeal() {
  let dealTo = 'player';
  while (playerHand['length'] < 2 || dealerHand['length'] < 2) {
    deal(dealTo);
    dealTo = (dealTo === 'player' ? 'dealer' : 'player');
  }
}

function deal(toWhomParam) {
  if (toWhomParam === 'player') {
    playerHand.push(deck.pop());
  } else {
    dealerHand.push(deck.pop());
  }
}

function getHumanTurn() {
  let answer;
  while (answer !== 'stay' && answer !== 's' && getTotal(playerHand) < 21) {
    answer = getHumanInput('hit or stay?\n');
    while (!['hit', 'stay', 'h', 's'].includes(answer)) {
      console.log('You may only exclusively choose either (h)it or (s)tay.');
      answer = getHumanInput();
    }
    if (answer === 'hit' || answer === 'h') deal('player');
    printPartialGameSit();
  }
}

function getDealerTurn() {
  while (getTotal(dealerHand) < dealerLimit) {
    deal('dealer');
  }
  if (getTotal(dealerHand) === dealerLimit && dealerHand.some(card => card[1] === 'A')) {
    deal('dealer');
  }
}

function printBustedOutcome(subjParam) {
  printFullGameSit();
  if (subjParam === 'player') {
    console.log('You busted. Dealer wins.');
  } else {
    console.log('Dealer busted. You win!');
  }
}

function printNoBustsOutcome(outcomeParam) {
  if (outcomeParam === 'draw') {
    console.log(`The game is a draw`);
  } else if (outcomeParam === 'player') {
    console.log(`You win!`);
  } else {
    console.log(`Dealer wins.`);
  }
}

function getPlayAgain() {
  return getHumanInput("Enter 'y' if you'd like another go; otherwise enter any key or press enter to exit.\n") === 'y';
}

// program

do {
  if (doWelcome) {
    console.clear();
    console.log("Welcome to Twenty-One!");
    doWelcome = false;
    getHumanInput("When you are ready, enter any key or hit enter to continue.\n");
  }

  deck = [
    ['♥', '2'], ['♥', '3'], ['♥', '4'], ['♥', '5'], ['♥', '6'], ['♥', '7'], ['♥', '8'],
    ['♥', '9'], ['♥', '10'], ['♥', 'J'], ['♥', 'Q'], ['♥', 'K'], ['♥', 'A'],
    ['♦', '2'], ['♦', '3'], ['♦', '4'], ['♦', '5'], ['♦', '6'], ['♦', '7'], ['♦', '8'],
    ['♦', '9'], ['♦', '10'], ['♦', 'J'], ['♦', 'Q'], ['♦', 'K'], ['♦', 'A'],
    ['♣', '2'], ['♣', '3'], ['♣', '4'], ['♣', '5'], ['♣', '6'], ['♣', '7'], ['♣', '8'],
    ['♣', '9'], ['♣', '10'], ['♣', 'J'], ['♣', 'Q'], ['♣', 'K'], ['♣', 'A'],
    ['♠', '2'], ['♠', '3'], ['♠', '4'], ['♠', '5'], ['♠', '6'], ['♠', '7'], ['♠', '8'],
    ['♠', '9'], ['♠', '10'], ['♠', 'J'], ['♠', 'Q'], ['♠', 'K'], ['♠', 'A'],
  ];

  playerHand = [];

  dealerHand = [];

  shuffle();

  doInitialDeal();

  printPartialGameSit();

  getHumanInput("When you are ready, enter any key or hit enter to continue.\n");

  getHumanTurn();

  if (busts('player')) {
    printBustedOutcome('player');
    playAgain = getPlayAgain();
    if (playAgain) continue;
    break;
  }

  getDealerTurn();

  if (busts('dealer')) {
    printBustedOutcome('dealer');
    playAgain = getPlayAgain();
    if (playAgain) continue;
    break;
  }

  let playerTotal = getTotal(playerHand);
  let dealerTotal = getTotal(dealerHand);
  let winner = getWinner(playerTotal, dealerTotal);
  printFullGameSit();
  printNoBustsOutcome(winner);
  playAgain = getPlayAgain();
} while (playAgain);
