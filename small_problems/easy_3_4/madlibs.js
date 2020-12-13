/*
START

1.  GET noun from user
2.  GET adjective from user
3.  GET verb from user
4.  GET adverb from user
5.  PRINT story with inputs

END
*/

let readline = require('readline-sync');

function getUserInput(userP) {
  return readline.question(userP);
}

function tellStory(noun1P, adje1P, noun2P, adje2P, verb1P, adve1P, verb2P, adve2P, verb3P, adve3P, verb4P, adve4P) {
  console.log(
    `You ${adve4P} ${verb4P} over at your ${noun1P} when you ${adve3P} ${verb3P} one day.\n` +
    `You ${adve2P} ${verb2P} and said, "I must do something about that ${noun1P} because it is so ${adje1P}."\n` +
    `After that you ${adve1P} ${verb1P} in your ${noun2P} instead. One could only describe your ${noun2P} as ${adje2P}.\n`
  );
}

let noun1 = getUserInput("Enter a noun:\n");
let adje1 = getUserInput("Enter an adjective:\n");
let noun2 = getUserInput("Enter another noun:\n");
let adje2 = getUserInput("Enter another adjective:\n");
let verb1 = getUserInput("Enter a past tense verb:\n");
let adve1 = getUserInput("Enter an adverb:\n");
let verb2 = getUserInput("Enter another past tense verb:\n");
let adve2 = getUserInput("Enter another adverb:\n");
let verb3 = getUserInput("Enter another past tense verb:\n");
let adve3 = getUserInput("Enter another adverb:\n");
let verb4 = getUserInput("Enter one more past tense verb:\n");
let adve4 = getUserInput("Enter one more adverb:\n");

tellStory(noun1, adje1, noun2, adje2, verb1, adve1, verb2, adve2, verb3, adve3, verb4, adve4);
