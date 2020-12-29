/*
for leadingSubstring
1. SET array to split string
2. SET idx to 0
3. WHILE array has elements
  - SET slash to slice of array from 0 to idx + 1
  - SET join to joined slash
  - SET accumulator to include join
  - SET idx to idx + 1
  - RETURN accumulator
4. SET result to include accumulator
5. SET string to string with missing first character
6. GET substrings of string

for substrings
IF the length of the input string is not 0
  - GET leadingSubstrings of string

for palindromes
1. SET result array to empty array
2. GET substrings of input string
3. SET listOPalindromes to empty array
4. SET result array to flattened version
5. WHILE there are elements in result array
  - IF element is a palindrome
    1. SET listOPalindromes to include element
  - RETURN listOPalindromes
6. PRINT listOPalindromes
*/

let result = [];

function leadingSubstrings(stringP) {
  let toBePushed = stringP.split('').reduce((acc, _, idx, src) => {
    acc.push(src.slice(0, (idx + 1)).join(''));
    return acc;
  }, []);
  result.push(toBePushed);
  stringP = stringP.slice(1);
  substrings(stringP);
}

function substrings(stringP) {
  if (stringP['length'] !== 0) {
    leadingSubstrings(stringP);
  }
}

function palindromes(stringP) {
  result = [];
  substrings(stringP);
  let listOPalindromes = result.flat().reduce((acc, ele) => {
    if (ele['length'] > 1 && ele === ele.split('').reverse().join('')) {
      acc.push(ele);
    }
    return acc;
  }, []);
  console.log(listOPalindromes);
}

palindromes('abcd');       // []
palindromes('madam');      // [ "madam", "ada" ]

palindromes('hello-madam-did-madam-goodbye');
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

palindromes('knitting cassettes');
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]
