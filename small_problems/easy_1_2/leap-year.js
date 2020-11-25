/*
1. Asks user whether they want to take into account the fact that the
British Empire used the Julian Calendar before 1752.
2. Asks user for year greater than 0.
3. If non-Julian, then jump to 5.
4. If Julian/Gregorian mix and year is greater than or equal to 1752, jump to 6;
otherwise, jump to 5.
5. Determine whether we have a leap year or not. (Gregorian)
    if either
    (i) the year is
        (a) cleanly divisibly by 4, and
        (b) not cleanly divisibly by 100, or
    (ii) the year is cleanly divisible by 400, then leap year, otherwise not.
    Return true or false, depending on result.
6. Determine whether we have a leap year or not. (Julian)
    The year is a leap year if, and only if, the year is cleanly divisible by 4.
    Return true or false.
*/

function getUserInput(inputParam) {
  let rlSync = require('readline-sync');
  return rlSync.question(inputParam);
}

function gregorianMethod(yearParam) {
  if (((yearParam % 4 === 0) && (yearParam % 100 !== 0)) || (yearParam % 400 === 0)) {
    return true;
  } else {
    return false;
  }
}

function julianMethod(yearParam) {
  if (yearParam % 4 === 0) {
    return true;
  } else {
    return false;
  }
}

let historicalFact = getUserInput(
  "Welcome to leap year checker!\nDo you want to take into account the fact that years before 1752 were on Julian Calendar? Enter 'y' if so.\n"
);
let year = Number(getUserInput("Please enter a year greater than 0:\n"));

if (historicalFact !== 'y') {
  console.log(gregorianMethod(year));
} else if (year >= 1752) {
  console.log(gregorianMethod(year));
} else {
  console.log(julianMethod(year));
}
