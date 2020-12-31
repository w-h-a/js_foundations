Problem:

Function takes a string argument and returns true if all the alphabetic characters inside the string are uppercase; false otherwise. Ignore characters that are not alphabetic.

- input: string
- output: boolean

- explicit
  - function returns true if, and only if, all and only alphabetic characters are uppercase.
  - that's it

- implicit
  - everything is explicit!!!

Test Cases (Given):

isUppercase('t');               // false
isUppercase('T');               // true
isUppercase('Four Score');      // false
isUppercase('FOUR SCORE');      // true
isUppercase('4SCORE!');         // true
isUppercase('');                // true

Pseudocode:

for isUppercase
RETURN true if, and only if, all and only alphabetic characters are uppercase
