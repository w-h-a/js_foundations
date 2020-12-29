Problem:

Function returns a list of all palindromic substrings of a string.

The substrings in the returned list should be sorted by their order of appearance in the input string.

Duplicate substrings should be included multiple times.

For the purpose of this exercise, you should consider all characters and pay attention to case; that is, 'AbcbA' is a palindrome, but 'Abcba' and 'Abc-bA' are not.

In addition, assume that single characters are not palindromes.

- input: string
- output: array

- explicit
  - array includes every palindromic substrings
  - the substrings in the array should be in order of appearance?
  - duplicates should be included
  - case matters
  - all characters matter
  - palindromes are at least two characters and are identical forward and backward

- implicit
  - array includes only palindromic substrings
    - hence, no palindromes means 0 length array
  - I don't understand the order

Test Cases (Given):

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

Pseudocode:

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
    - SET listOPalindromes to include element
  - RETURN listOPalindromes
6. PRINT listOPalindromes
