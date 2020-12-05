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
    console.log("=> Whoops! The input must be a number greater than 0.");
    joinedString = setUpLoanAmount(getUserInput());
  }
  return joinedString;
}

function setUpInterest(userInputP) {
  let joinedString = cleanUpTheString(userInputP);
  if (joinedString[joinedString['length'] - 1] === '%') {
    joinedString = joinedString.substring(0, joinedString['length'] - 1);
  }
  while (impermissibleInterest(joinedString)) {
    console.log("=> Whoops! The input must be a non-negative number.");
    joinedString = setUpInterest(getUserInput());
  }
  return joinedString;
}

function setUpTerm(userInputP) {
  let joinedString = cleanUpTheString(userInputP);
  while (impermissibleNumber(joinedString)) {
    console.log("=> Whoops! The input must be a number greater than 0.");
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
  let firstUserCheck = getUserInput("=> Enter 'y', if this is correct; otherwise, enter any key or press enter.\n").toLowerCase() === 'y';
  if (!firstUserCheck) return 'The user did not like some of the inputs.';
  console.clear();
  let rate = (1 + interestP);
  let secondUserCheck = getUserInput("=> Enter 'y', if you'd like an in-depth explanation of your monthly payment;\n=> otherwise, enter any key or press enter.\n").toLowerCase() === 'y';
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
  console.log(`=> To make things a bit simpler, let's say that a variable called 'rate' is (1 + monthly interest rate).\n`);
  console.log(`=> Then if you have two months to pay the loan, then:\n===> monthly payment = loan amount * (rate^2 / (rate + 1))\n=> That is, your monthly payment would be $${payTermTwoP.toFixed(2)}.\n`);
  console.log(`=> And if you have three months to pay the loan, then:\n===> monthly payment = loan amount * (rate^3 / (rate^2 + rate + 1))\n=> That is, your monthly payment would be $${payTermThreeP.toFixed(2)}.\n`);
  let thirdUserCheck = getUserInput("=> Enter 'y', if this makes sense; otherwise, enter any key or press enter for a fuller explanation.\n").toLowerCase() === 'y';
  if (thirdUserCheck) {
    generalExplanation();
  } else {
    noAlgExpl(amountP, rateP, payTermTwoP, payTermThreeP);
  }
}

function generalExplanation() {
  console.log(`=> So, if we generalize the pattern, then:\n=> monthly payment = loan amount * (rate^n / s)\n===> where, again, rate is (1 + monthly interest rate),\n===> where n is your loan term in months, and\n===> where s is the following series: rate^(n - 1) + rate^(n - 2) + ...\n`);
  readyToContinue();
}

function noAlgExpl(amountP, rateP, payTermTwoP, payTermThreeP) {
  console.log(`=> If you have two months to pay the loan, then:\n===> monthly payment = (loan amount * rate - monthly payment) * rate\n=> After some algebra, we get the above result:\n===> monthly payment = loan amount * (rate^2 / (rate + 1))\n`);
  console.log(`=> If you have three months to pay the loan, then:\n===> monthly payment = ((loan amount * rate - monthly payment) * rate - monthly payment) * rate\n=> After some algebra, we get the above result:\n===> monthly payment = loan amount * (rate^3 / (rate^2 + rate + 1))\n`);
  let fourthUserCheck = getUserInput("=> Enter 'y', if this makes sense; otherwise, enter any key or press enter for a fuller explanation.\n").toLowerCase() === 'y';
  if (fourthUserCheck) {
    generalExplanation();
  } else {
    firstAlgExpl(amountP, rateP, payTermTwoP, payTermThreeP);
  }
}

function firstAlgExpl(amountP, rateP, payTermTwoP, payTermThreeP) {
  console.clear();
  console.log(`=> If you have two months to pay the loan, then:\n\n===> monthly payment = (loan amount * rate - monthly payment) * rate <===\n`);
  console.log(`=> By expanding the right-hand side of the equation, we have:\n\n===> monthly payment = loan amount * rate^2 - monthly payment * rate <===\n`);
  console.log(`=> By adding monthly payment * rate to both sides, we have\n\n===> monthly payment + monthly payment * rate = loan amount * rate^2 <===\n`);
  console.log(`=> By factoring monthly payment out on the left-hand side of the equation, we have:\n\n===> monthly payment * (1 + rate) = loan amount * rate^2 <===\n`);
  console.log(`=> Finally, by dividing both sides by (1 + rate), we have\n\n===> monthly payment = loan amount * (rate^2 / (rate + 1)) <===\n`);
  console.log(`=> Here your monthly payment would be ${amountP} * (${rateP}^2 / (${rateP} + 1)) = $${payTermTwoP.toFixed(2)}.\n`);
  readyToContinue();
  secondAlgExpl(amountP, rateP, payTermThreeP);
}

function secondAlgExpl(amountP, rateP, payTermThreeP) {
  console.log(`=> If you have three months to pay the loan, then:\n\n===> monthly payment = ((loan amount * rate - monthly payment) * rate - monthly payment) * rate <===\n`);
  console.log(`=> By expanding the right-hand side of the equation, we have\n\n===> monthly payment = loan amount * rate^3 - monthly payment * rate^2 - monthly payment * rate <===\n`);
  console.log(`=> By adding to both sides twice, we have\n\n===> monthly payment + monthly payment * rate + monthly payment * rate^2 = loan amount * rate^3 <===\n`);
  console.log(`=> By factoring monthly payment out on the left-hand side of the equation, we have\n\n===> monthly payment * (rate^2 + rate + 1) = loan amount * rate^3 <===\n`);
  console.log(`=> Finally, by dividing both sides by (rate^2 + rate + 1), we have\n\n===> monthly payment = loan amount * (rate^3 / (rate^2 + rate + 1)) <===\n`);
  console.log(`=> Here your monthly payment would be ${amountP} * (${rateP}^3 / (${rateP}^2 + ${rateP} + 1)) = $${payTermThreeP.toFixed(2)}.\n`);
  generalExplanation();
}

function readyToContinue() {
  let anotherUserCheck = getUserInput("=> When you are ready to continue enter 'c'.\n").toLowerCase() === 'c';
  while (!anotherUserCheck) {
    console.log("=> Whoops!");
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
  console.log(`=> monthly payment = loan amount * (rate^n / s)\n===> where rate is (1 + monthly interest rate),\n===> where n is your loan term in months, and\n===> where s is the following series: rate^(n - 1) + rate^(n - 2) + ...\n`);
  return (`=> So, since you have ${termP} months to pay back the loan of $${amountP} with a ${interestP} monthly interest rate,\n=> your monthly payment would be:\n===> ${amountP} * (${rateP}^${termP} / ${denomSeries}) = $${result.toFixed(2)}\n=> Your total payment would be:\n===> $${(result * termP).toFixed(2)}\n=> The total interest would be:\n===> $${((result * termP) - amountP).toFixed(2)}`);
}

do {
  console.clear();
  if (doWelcome === true) {
    console.log("=> Welcome to the loan calculator!\n=> In a few quick steps, you can calculate your monthly payments!\n=> We can also walk you through the reasoning in more or less detail!");
    doWelcome = false;
  } else {
    console.clear();
  }

  let firstUserInput = setUpLoanAmount(getUserInput("=> Enter the loan amount: $"));
  loAmount = Number(firstUserInput);

  let secondUserInput = getUserInput("=> Is the interest in years (enter: 'y') or months (enter: 'm')?\n");
  while (!['y', 'm'].includes(secondUserInput.toLowerCase())) {
    console.log("=> Whoops!");
    secondUserInput = getUserInput();
  }
  if (secondUserInput.toLowerCase() === 'y') {
    isInterestYears = true;
  } else {
    isInterestYears = false;
  }

  let thirdUserInput = setUpInterest(getUserInput("=> Enter the interest rate as a percentage: "));
  if (isInterestYears === true) {
    anIR = Number(thirdUserInput) / 100;
    moIR = anIR / 12;
  } else {
    moIR = Number(thirdUserInput) / 100;
  }

  let fourthUserInput = getUserInput("=> Is the loan term in years (enter: 'y') or months (enter: 'm')?\n");
  while (!['y', 'm'].includes(fourthUserInput.toLowerCase())) {
    console.log("=> Whoops!");
    fourthUserInput = getUserInput();
  }
  if (fourthUserInput.toLowerCase() === 'y') {
    isTermYears = true;
  } else {
    isTermYears = false;
  }

  let fifthUserInput = setUpTerm(getUserInput("=> Enter the loan term: "));
  if (isTermYears === true) {
    termYr = Number(fifthUserInput);
    termMo = termYr * 12;
  } else {
    termMo = Number(fifthUserInput);
  }

  let moPayment = setUpCalculation(loAmount, moIR, termMo);
  if (moPayment !== 'The user did not like some of the inputs.') console.log(moPayment);

  console.log();
  toRepeat = getUserInput("=> Enter 'y', if you'd like to calculate a monthly loan payment; otherwise, enter any key or press enter.\n").toLowerCase() === 'y';
} while (toRepeat);
