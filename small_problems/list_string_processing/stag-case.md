Problem:

Function takes a string as an argument and returns an identical string, except that every other character, starting from the first, is capitalized and is followed by a lowercase character.

- input: string
- output: string

- explicit
  - output string ought to be identical, except that every other character, starting from the first, is capitalized and is followed by a lowercase character

- implicit
  - nothing much

Test Cases (Given):

staggeredCase('I Love Launch School!');        // "I LoVe lAuNcH ScHoOl!"
staggeredCase('ALL_CAPS');                     // "AlL_CaPs"
staggeredCase('ignore 77 the 4444 numbers');   // "IgNoRe 77 ThE 4444 nUmBeRs"

Pseudocode:

for staggeredCase
1. SET char array to split string
2. SET map to empty string
3. WHILE char has elements
  - IF idx is even
    - SET map to include return value of char to uppercase
    ELSE
    - SET map to include return value of char to lowercase
  - RETURN map
4. RETURN map
