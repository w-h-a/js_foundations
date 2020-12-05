/*
START

1. GET language preferences.
2. Check if input is permissible, otherwise, ask for another
3. GET the first number.
4. Check if input is permissible, otherwise, ask for another
5. GET the second number.
6. Check if input is permissible, otherwise, ask for another
7. GET the operator.
8. Check if input is permissible, otherwise, ask again
9. PRINT number operator number
10. GET user's answer to the question "Would you like to do another?"

END
*/

const READLINE = require('readline-sync');

const MESSAGES = require('./calculator-messages.json');

let language;

let toRepeat;

let toSetLangAndWelcome = true;

function getUserInput(inputParam) {
  return READLINE.question(inputParam);
}

function impermissibleNumber(numberParam) {
  return numberParam.trim() === '' || Number.isNaN(Number(numberParam));
}

function calculator(firstNumParam, secondNumParam, operationParam) {
  let output;
  switch (operationParam) {
    case '1':
      output = firstNumParam + secondNumParam;
      break;
    case '2':
      output = firstNumParam - secondNumParam;
      break;
    case '3':
      output = firstNumParam * secondNumParam;
      break;
    case '4':
      output = firstNumParam / secondNumParam;
      break;
  }
  return `${MESSAGES[language]['result']} ${output}`;
}

do {
  if (toSetLangAndWelcome === true) {
    language = getUserInput(MESSAGES['language']).toLowerCase();
    while (!['en', 'fr'].includes(language)) {
      console.log(MESSAGES['tryAgain']);
      language = READLINE.question().toLowerCase();
    }
    console.log(MESSAGES[language]['welcome']);
    toSetLangAndWelcome = false;
  } else {
    console.clear();
  }

  let number1 = getUserInput(MESSAGES[language]['firstNum']);
  while (impermissibleNumber(number1)) {
    console.log(MESSAGES[language]['error']);
    number1 = READLINE.question();
  }
  number1 = Number(number1);

  let number2 = getUserInput(MESSAGES[language]['secondNum']);
  while (impermissibleNumber(number2)) {
    console.log(MESSAGES[language]['error']);
    number2 = READLINE.question();
  }
  number2 = Number(number2);

  let operation = getUserInput(MESSAGES[language]['userOperation']);
  while (!['1', '2', '3', '4'].includes(operation)) {
    console.log(MESSAGES[language]['choose']);
    operation = READLINE.question();
  }

  let result = calculator(number1, number2, operation);
  console.log(result);

  if (language === 'en') {
    toRepeat = getUserInput(MESSAGES[language]['again']).toLowerCase() === 'y';
  } else if (language === 'fr') {
    toRepeat = getUserInput(MESSAGES[language]['again']).toLowerCase() === 'o';
  }
} while (toRepeat);
