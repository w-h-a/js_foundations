Problem:

Function takes a string as an argument and returns an array that contains every word from the string, where each word is followed by a space and the word's length. If the argument is an empty string or if no argument is passed, the function should return an empty array. You may assume that a single space separates words.

- input: string or undefined
- output: array

- explicit
  - if the the input is empty string or undefined, then
    - the array should have length 0
    else
    - the array contains strings
      - each string is a word from the original string followed by a whitespace and the word's length
  - words are just consecutive characters separated by a single whitespace

- implicit
  - ?

Test Cases (Given):

wordLengths('cow sheep chicken');
// ["cow 3", "sheep 5", "chicken 7"]

wordLengths('baseball hot dogs and apple pie');
// ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

wordLengths("It ain't easy, is it?");
// ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

wordLengths('Supercalifragilisticexpialidocious');
// ["Supercalifragilisticexpialidocious 34"]

wordLengths('');      // []
wordLengths();        // []

Pseudocode:

for wordLengths
IF input is string of length 0 or undefined
  - RETURN empty array
ELSE
  - SET word array to split string by whitespace
  - SET map array to empty array
  - WHILE word array has elements
    1. SET map array to include word plus space plus stringified word length
    2. RETURN map
  - RETURN map
