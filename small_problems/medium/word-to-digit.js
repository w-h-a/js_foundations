/*
1. SET array to split string by word
2. SET map to empty array
3. WHILE array has elements
  - IF element is number word
    - SET map to include digit version of word
    ELSE
    - SET map to include element
4. RETURN joined map
*/

let numberWords = [
  'zero', 'one', 'two', 'three', 'four',
  'five', 'six', 'seven', 'eight', 'nine'
]

function wordToDigit(strParam) {
  return strParam.split(' ').map(wordParam => (numberWords.includes(wordParam) ? numberWords.indexOf(wordParam) : wordParam)).join(' ');
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 four. Thanks."
