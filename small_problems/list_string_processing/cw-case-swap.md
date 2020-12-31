Problem:

Function takes a string as an argument and returns a string that is identical to the input string, except that all and only alphabetic characters have their case swapped.

- input: string
- output: string

- explicit
  - output string is identical except that all and only alpha chars have their case swapped.

- implicit
  - nothing much after a rewrote the problem statement

Test Cases (Given):

swapCase('CamelCase');              // "cAMELcASE"
swapCase('Tonight on XYZ-TV');      // "tONIGHT ON xyz-tv"

Pseudocode:

for cWSwappigansCase
1. SET char array to split string
2. SET map string to empty string
3. WHILE element in char array
  - IF element is included in alphabet and lowercase
    - SET map to include return value of uppercasing element
    ELSE IF element is included in alphabet and uppercase
    - SET map to include return value of lowercasing element
    ELSE
    - SET map to include element
  - RETURN map
4. RETURN map
