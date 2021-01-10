Problem:

Function takes a sentence as an argument and returns a string that is exactly like the input one except that every occurrence of a number word---'zero', 'one', etc.---is converted to its corresponding digit character.

- input: string
- output: string

- explicit
  - the output string is exactly the input string except that number words are replaced with digits

- implicit
  - none really

Test Cases (Given):

wordToDigit('Please call me at five five five one two three four. Thanks.');
// "Please call me at 5 5 5 1 2 3 4. Thanks."

Pseudocode:

1. SET array to split string by word
2. SET map to empty array
3. WHILE array has elements
  - IF element is number word
    - SET map to include digit version of word
    ELSE
    - SET map to include element
4. RETURN joined map
