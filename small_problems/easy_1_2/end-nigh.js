/*
ORIGINAL PROBLEM
1. The function splits the string into an array of words.
2. The function returns the penultimate word.
*/

function penultimate(stringParam) {
  let arrayOWords = stringParam.split(' ');
  return arrayOWords[arrayOWords['length'] - 2];
}

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true

/*
FURTHER EXPLORATION
1. Asks user for string of words.
2. If string is empty after trimming off white space, return error message and stop.
3. Splits the string into an array of words.
4. Removes all whitespace elements from the array of words.
5. Suppose length of array is odd.
    1. Divide length by 2 and round up. Call this 'result'.
    2. Return word at index result minus 1.
6. Suppose length is even.
    1. Divide length by 2. Call this 'result'.
    2. Return words: one at index result minus 1 and one at index result.
*/

function getString(userInputParam) {
  let rlSync = require('readline-sync');
  return rlSync.question(userInputParam);
}

function middle(stringParam) {
  if (stringParam.trim() === '') {
    return 'I am error';
  }
  let arrayOWords = stringParam.split(' ');
  let arrayWOWhiteSpace = arrayOWords.reduce((acc, ele) => {
    if (ele.trim() !== '') {
      acc.push(ele);
    }
    return acc;
  }, []);
  if (arrayWOWhiteSpace['length'] % 2 !== 0) {
    let result = Math.ceil(arrayWOWhiteSpace['length'] / 2);
    return [arrayWOWhiteSpace[result - 1]];
  } else {
    let result = (arrayWOWhiteSpace['length'] / 2);
    return [arrayWOWhiteSpace[result - 1], arrayWOWhiteSpace[result]];
  }
}

let input = getString("Enter a string of words.\n");
let middleOPack = middle(input);
console.log(middleOPack);
