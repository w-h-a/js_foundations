Problem:

Function returns a list of all substrings of a string.
Order the returned list by where in the string the substring begins.
This means that all substrings that start at position 0 should come first,
then all substrings that start at position 1, and so on.
Since multiple substrings will occur at each position,
return the substring at a given position from shortest to longest. 

- input: string
- output: array

- explicit
  - array must include all substrings
  - the order of the substrings
    - all substrings that start at index 0 come first and then substrings that start at index 1 should come, and so on.
    - substrings that begin at index n (for all n) should be presented from shortest to longest

- implicit
  - array must include only substrings of input string

Test Cases (Given):

substrings('abcde');

// returns
[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]

Pseudocode:

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
  - PRINT result (if you don't want the result to be an array of arrays, then change    `console.log(result);` to `console.log(result.flat());`)
