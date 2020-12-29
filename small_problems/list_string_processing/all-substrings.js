/*
for leadingSubstring
1. SET array to split string
2. SET idx to 0
3. WHILE array has elements
  - SET slash to slice of array from 0 to idx + 1
  - SET join to joined slash
  - SET accumulator to include join
  - RETURN accumulator
4. SET result to include accumulator
5. SET string to string with missing first character
6. GET substrings of string

for substrings
IF the length of the input string is not 0
  - GET leadingSubstrings of string
ELSE
  - PRINT result (if you don't want the result to be an array of arrays,
  then line 39 from `console.log(result);` to `console.log(result.flat());`)
*/

let result = [];

function leadingSubstrings(stringP) {
  result.push(
    stringP.split('').reduce((acc, _, idx, src) => {
      acc.push(src.slice(0, (idx + 1)).join(''));
      return acc;
    }, [])
  );
  stringP = stringP.slice(1);
  substrings(stringP);
}

function substrings(stringP) {
  if (stringP['length'] !== 0) {
    leadingSubstrings(stringP);
  } else {
    console.log(result);
  }
}

substrings('abcde');

/*
[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]
  */
