/*
1. Asks user for their name. Assign the value to a variable called 'userName'.
2. Suppose userName is all caps or followed by exclamation mark.
    1. Declare actualName and assign it the value of userName.
    2. If userName ends with an exclamation mark, then assign actualName
        the contents of userName without the exclamation mark.
    3. Computer snaps back.
3. Suppose userName is neither all caps nor followed by exclamation mark.
    Then computer greets normally.
*/

function getName(userInputParam) {
  let rlSync = require('readline-sync');
  return rlSync.question(userInputParam);
}

function determineResponse(userNameParam) {
  if ((userName === userName.toUpperCase()) || (userName.endsWith('!'))) {
    let actualName = userName;
    if (userName.endsWith('!')) {
      actualName = userName.slice(0, -1);
    }
    return `HELLO ${actualName.toUpperCase()}! WHY ARE WE SCREAMING!?`;
  } else {
    return `Hello ${userNameParam}.`
  }
}

let userName = getName("What is your name, please?\n");
let result = determineResponse(userName);
console.log(result);
