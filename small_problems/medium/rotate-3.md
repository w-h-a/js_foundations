Problem:

Take the number 735291 and rotate the 7 digit (1st digit) to the end so that you end up with 352917. Next, rotate the 5 digit (new 2nd digit) to the end so that you end up with 329175. Next, rotate 9 (new 3rd) to get 321759. Next, rotate 7 (new 4th) to get 321597. Next, rotate 9 (new 5th) to get 321579.  The resulting number is called the 'maximum rotation' of the original number.

Write a function that takes any integer like 735291 and returns the maximum rotation of that integer.

- input: number
- output: number

- explicit
  - the output number should be the maximum rotation of the input number

- implicit
  - if there are leading zeros in the output number, they get dropped

Test Cases (Given):

maxRotation(735291);          // 321579
maxRotation(3);               // 3
maxRotation(35);              // 53
maxRotation(105);             // 15 -- the leading zero gets dropped
maxRotation(8703529146);      // 7321609845

Pseudocode:

1. SET array variable to an array version of the input number
2. SET idx variable to 0
3. WHILE idx is less than the length of the array minus 1
  - SET array variable to itself without element at idx
  - SET digit variable to removed element
  - SET array variable with digit pushed to back
  - SET idx to idx plus 1
4. SET array variable to string version and then number version of itself
5. RETURN (number version of) array variable.
