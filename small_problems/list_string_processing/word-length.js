/*
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
*/

function wordLengths(stringP) {
  if (stringP === '' || stringP === undefined) {
    return [];
  } else {
    return stringP.split(' ').map(wordP => wordP + ' ' + String(wordP['length']));
  }
}

console.log(wordLengths('cow sheep chicken'));
// ["cow 3", "sheep 5", "chicken 7"]

console.log(wordLengths('baseball hot dogs and apple pie'));
// ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

console.log(wordLengths("It ain't easy, is it?"));
// ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

console.log(wordLengths('Supercalifragilisticexpialidocious'));
// ["Supercalifragilisticexpialidocious 34"]

console.log(wordLengths(''));      // []
console.log(wordLengths());        // []
