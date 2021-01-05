Problem:

The original problem statement was:

> "Write a function that rotates the last `count` digits of a `number`. To perform the rotation, move the first of the digits that you want to rotate to the end and shift the remaining digits to the left."

I created a new problem. Because I didn't understand the problem statement, I had to go completely off of the given test cases. Still, I believe the problem I invented captures what launch was trying to get me to do:

Function takes as input a number and a place value. The place value is a number representing the place of the digit you wish to rotate. The function should move the digit at the place value to the end and return the new number.

- input: number and place value
- output: new rotated number

- explicit
  - place value is a number that represents the place of the digit one wants to rotate
  - the digit at the place value should be moved to the end to create a new number

- implicit
  - the function should only do what is already explicitly stated

Test Cases (Given):

rotateRightmostDigits(735291, 1);      // 735291
rotateRightmostDigits(735291, 10);      // 735219
rotateRightmostDigits(735291, 100);      // 735912
rotateRightmostDigits(735291, 1000);      // 732915
rotateRightmostDigits(735291, 10000);      // 752913
rotateRightmostDigits(735291, 100000);      // 352917

Pseudocode:

1. SET toSubtract variable to the length of the placeValueParam
2. SET array variable to an array version of the numberParam
3. SET array variable to itself without element at length minus toSubtract
4. SET digit variable to removed element
5. SET array variable to itself with digit pushed to back
6. SET array variable to string version and then number version of itself
7. RETURN (number version of) array variable
