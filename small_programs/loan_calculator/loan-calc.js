/*
START

1.  GET loan amount from user.
2.  IF user input is permissible
      SET loAmount to user input.
    ELSE
      WHILE user input is impermissible
        Go back to step 1.
3.  GET answer to 'Is the interest rate in years or months?'
4.  IF user input is permissible and 'y'
      SET isInterestYears to true
    ELSE IF user input is permissible and 'm'
      SET isInterestYears to false
    ELSE
      WHILE user input is impermissible
        Go back to step 3.
5.  GET interest rate from user
6.  IF user input is permissible and isInterestYears === true
      SET anIR to user input and moIR = anIR / 12
    ELSE IF user input is permissible and isInterestYears === false
      SET moIR to user input
    ELSE
      WHILE user input is impermissible
        Go back to step 5.
7.  GET answer to 'Is the loan term in years or months?'
8.  IF user input is permissible and 'y'
      SET isTermYears to true
    ELSE IF user input is permissible and 'm'
      SET isTermYears to false
    ELSE
      WHILE user input is impermissible
        Go back to step 7.
9.  GET loan term from user
10.  IF user input is permissible and isTermYears === true
      SET termYr to user input and termMo = termYr * 12
    ELSE IF user input is permissible and isTermYears === false
      SET termMo to user input
    ELSE
      WHILE user input is impermissible
        Go back to step 9.
11. GET moPayment.
12. PRINT moPayment in dollars and cents.

END
*/

const READLINE = require('readline-sync');

const MESSAGES = require('./calc-messages.json');

let doWelcome = true;

let loAmount;

let isInterestYears;
let anIR;
let moIR;

let isTermYears;
let termYr;
let termMo;

let toRepeat;

function getUserInput(inputP) {
  return READLINE.question(inputP);
}

function setUpLoanAmount(userInputP) {
  let joinedString = cleanUpTheString(userInputP);
  if (joinedString[0] === '$') {
    joinedString = joinedString.substring(1);
  }
  while (impermissibleNumber(joinedString)) {
    console.log(MESSAGES['num error']);
    joinedString = setUpLoanAmount(getUserInput(MESSAGES['$']));
  }
  return joinedString;
}

function setUpInterest(userInputP) {
  let joinedString = cleanUpTheString(userInputP);
  if (joinedString[joinedString['length'] - 1] === '%') {
    joinedString = joinedString.substring(0, joinedString['length'] - 1);
  }
  while (impermissibleInterest(joinedString)) {
    console.log(MESSAGES['interest error']);
    joinedString = setUpInterest(getUserInput());
  }
  return joinedString;
}

function setUpTerm(userInputP) {
  let joinedString = cleanUpTheString(userInputP);
  while (impermissibleNumber(joinedString)) {
    console.log(MESSAGES['num error']);
    joinedString = setUpTerm(getUserInput());
  }
  return joinedString;
}

function cleanUpTheString(userInputP) {
  let arrayOfWords = userInputP.split(' ');
  let noCommaNoSpaceArray = arrayOfWords.reduce((acc, ele) => {
    acc.push(ele.replace(/,/g, '').trim());
    return acc;
  }, []);
  let joinedString = noCommaNoSpaceArray.join('');
  return joinedString;
}

function impermissibleNumber(userInputP) {
  return Number.isNaN(Number(userInputP)) || Number(userInputP) <= 0;
}

function impermissibleInterest(userInputP) {
  return userInputP === '' || Number.isNaN(Number(userInputP)) || Number(userInputP) < 0;
}

function setUpCalculation(amountP, interestP, termP) {
  console.clear();
  console.log(`=> You've taken out a loan of $${amountP} with a ${interestP} monthly interest rate.\n=> You are to pay it back in ${termP} months.\n`);
  let firstUserCheck = getUserInput(MESSAGES['correct']).toLowerCase() === 'y';
  if (!firstUserCheck) return 'The user did not like some of the inputs.';
  console.clear();
  let rate = (1 + interestP);
  let secondUserCheck = getUserInput(MESSAGES['explanation']).toLowerCase() === 'y';
  if (secondUserCheck) {
    getVerbosePay(amountP, rate);
  }
  return getNonVerbosePay(amountP, interestP, rate, termP);
}

function getVerbosePay(amountP, rateP) {
  console.clear();
  let rateToPowerThree = rateP ** 3;
  let rateToPowerTwo = rateP ** 2;
  let moPaymentTermTwo = amountP * (rateToPowerTwo / (rateP + 1));
  let moPaymentTermThree = (
    amountP * (rateToPowerThree / (rateToPowerTwo + rateP + 1))
  );
  explLite(amountP, rateP, moPaymentTermTwo, moPaymentTermThree);
}

function explLite(amountP, rateP, payTermTwoP, payTermThreeP) {
  console.log(MESSAGES['rate']);
  console.log(`=> Then if you have two months to pay the loan, then:\n===> monthly payment = loan amount * (rate^2 / (rate + 1))\n=> That is, your monthly payment would be $${payTermTwoP.toFixed(2)}.\n`);
  console.log(`=> And if you have three months to pay the loan, then:\n===> monthly payment = loan amount * (rate^3 / (rate^2 + rate + 1))\n=> That is, your monthly payment would be $${payTermThreeP.toFixed(2)}.\n`);
  let thirdUserCheck = getUserInput(MESSAGES['sense']).toLowerCase() === 'y';
  if (thirdUserCheck) {
    generalExplanation();
  } else {
    noAlgExpl(amountP, rateP, payTermTwoP, payTermThreeP);
  }
}

function generalExplanation() {
  console.log(MESSAGES['general']);
  readyToContinue();
}

function noAlgExpl(amountP, rateP, payTermTwoP, payTermThreeP) {
  console.log(MESSAGES['no algebra term 2']);
  console.log(MESSAGES['no algebra term 3']);
  let fourthUserCheck = getUserInput(MESSAGES['sense']).toLowerCase() === 'y';
  if (fourthUserCheck) {
    generalExplanation();
  } else {
    firstAlgExpl(amountP, rateP, payTermTwoP, payTermThreeP);
  }
}

function firstAlgExpl(amountP, rateP, payTermTwoP, payTermThreeP) {
  console.clear();
  console.log(MESSAGES['algebra term 2']);
  console.log(MESSAGES['expanding term 2']);
  console.log(MESSAGES['adding term 2']);
  console.log(MESSAGES['factoring term 2']);
  console.log(MESSAGES['dividing term 2']);
  console.log(`=> Here your monthly payment would be ${amountP} * (${rateP}^2 / (${rateP} + 1)) = $${payTermTwoP.toFixed(2)}.\n`);
  readyToContinue();
  secondAlgExpl(amountP, rateP, payTermThreeP);
}

function secondAlgExpl(amountP, rateP, payTermThreeP) {
  console.log(MESSAGES['algebra term 3']);
  console.log(MESSAGES['expanding term 3']);
  console.log(MESSAGES['adding term 3']);
  console.log(MESSAGES['factoring term 3']);
  console.log(MESSAGES['dividing term 3']);
  console.log(`=> Here your monthly payment would be ${amountP} * (${rateP}^3 / (${rateP}^2 + ${rateP} + 1)) = $${payTermThreeP.toFixed(2)}.\n`);
  generalExplanation();
}

function readyToContinue() {
  let anotherUserCheck = getUserInput(MESSAGES['continue']).toLowerCase() === 'c';
  while (!anotherUserCheck) {
    console.log(MESSAGES['error']);
    anotherUserCheck = getUserInput();
  }
  console.clear();
}

function getNonVerbosePay(amountP, interestP, rateP, termP) {
  let onePlusMoInterestToPowerOfTerm = rateP ** termP;
  let power = termP - 1;
  let denomSeries = 0;
  while (power > -1) {
    denomSeries += rateP ** power;
    power -= 1;
  }
  let result = amountP * (onePlusMoInterestToPowerOfTerm / denomSeries);
  console.log(MESSAGES['summary']);
  return (`=> So, since you have ${termP} months to pay back the loan of $${amountP} with a ${interestP} monthly interest rate,\n=> your monthly payment would be:\n===> ${amountP} * (${rateP}^${termP} / ${denomSeries}) = $${result.toFixed(2)}\n=> Your total payment would be:\n===> $${(result * termP).toFixed(2)}\n=> The total interest would be:\n===> $${((result * termP) - amountP).toFixed(2)}`);
}

do {
  console.clear();
  if (doWelcome === true) {
    console.log(MESSAGES['welcome']);
    doWelcome = false;
  } else {
    console.clear();
  }

  let firstUserInput = setUpLoanAmount(getUserInput(MESSAGES['amount']));
  loAmount = Number(firstUserInput);

  let secondUserInput = getUserInput(MESSAGES['interest unit']).toLowerCase();
  while (!['y', 'm'].includes(secondUserInput)) {
    console.log(MESSAGES['error']);
    secondUserInput = getUserInput().toLowerCase();
  }
  if (secondUserInput.toLowerCase() === 'y') {
    isInterestYears = true;
  } else {
    isInterestYears = false;
  }

  let thirdUserInput = setUpInterest(getUserInput(MESSAGES['interest']));
  if (isInterestYears === true) {
    anIR = Number(thirdUserInput) / 100;
    moIR = anIR / 12;
  } else {
    moIR = Number(thirdUserInput) / 100;
  }

  let fourthUserInput = getUserInput(MESSAGES['term unit']).toLowerCase();
  while (!['y', 'm'].includes(fourthUserInput)) {
    console.log(MESSAGES['error']);
    fourthUserInput = getUserInput().toLowerCase();
  }
  if (fourthUserInput === 'y') {
    isTermYears = true;
  } else {
    isTermYears = false;
  }

  let fifthUserInput = setUpTerm(getUserInput(MESSAGES['term']));
  if (isTermYears === true) {
    termYr = Number(fifthUserInput);
    termMo = termYr * 12;
  } else {
    termMo = Number(fifthUserInput);
  }

  let moPayment = setUpCalculation(loAmount, moIR, termMo);
  if (moPayment !== 'The user did not like some of the inputs.') {
    console.log(moPayment);
  }

  console.log();
  toRepeat = getUserInput(MESSAGES['again']).toLowerCase() === 'y';
} while (toRepeat);
