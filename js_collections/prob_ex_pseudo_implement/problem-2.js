/*
for substrings()
Given an input string

START

1.  SET result to empty array
2.  SET startingIndex to 0
3.  WHILE startingIndex is less than length of string minus 1
      SET numChars to 2
      WHILE numChars < length of string - startingIndex + 1
        SET substring to sliced string from startingIndex to startingIndex plus numChars
        SET result array to include substring
        SET numChars to numChars plus 1
      SET startingIndex to startingIndex plus 1
4.  RETURN result array

END

for isPalindrome()
- check whether the string is strictly identical to the reversed string.
- return whether it is or not.

for palindromeSubstrings()
- declare a result variable and initialize it to an empty array
- create an array named 'substrArray' that contains all of the substrings
  of the input string that are at least 2 characters long. (see more details above)
- loop through the words in the substrArray array.
- if the word is a palindrome (see more details above),
  append that word to the result array.
- return the result array
*/

function substrings(strP) {
  let result = [];
  let startingIndex = 0;

  while (startingIndex < strP['length'] - 1) {
    let numChars = 2;
    while (numChars < strP['length'] - startingIndex + 1) {
      let substring = strP.slice(startingIndex, startingIndex + numChars);
      result.push(substring);
      numChars += 1;
    }
    startingIndex += 1;
  }

  return result;
}

function isPalindrome(strP) {
  return strP === strP.split('').reverse().join('');
}

function palindromeSubstrings(str) {
  let result = [];
  let substringsArr = substrings(str);

  substringsArr.forEach(substring => {
    if (isPalindrome(substring)) {
      result.push(substring);
    }
  });

  return result;
}

console.log(palindromeSubstrings("supercalifragilisticexpialidocious"));
// should return: ["ili"]

console.log(palindromeSubstrings("abcddcbA"));
// should return: ["bcddcb", "cddc", "dd"]

console.log(palindromeSubstrings("palindrome"));
// should log: []

console.log(palindromeSubstrings(""));
// should log: []
