function volume(height, width, depth) {
  let result = height * width * depth;
  console.log(result);
  return result;
}


let readline = require("readline-sync");

function askYesOrNo(prompt) {
  let answer = readline.question(prompt);
  return answer;
}


function multiply(a, b) {
  a * b;
}


let boo = "gar";

function setBoo() {
  boo = "xyz";
}
