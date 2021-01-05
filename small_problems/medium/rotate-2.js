/*
I created a new problem. Because I didn't understand the problem statement, I had
to go completely off of the given test cases. Still, I believe the problem I invented
captures what launch was trying to get me to do (I still believe this after looking
at the solutions):

Function takes as input a number and a place value. The place value is a number
representing the place of the digit you wish to rotate. The function should move
the digit at the place value to the end and return the new number.

1. SET toSubtract variable to the length of the placeValueParam
2. SET array variable to an array version of the numberParam
3. SET array variable to itself without element at length minus toSubtract
4. SET digit variable to removed element
5. SET array variable to itself with digit pushed to back
6. SET array variable to string version and then number version of itself
7. RETURN (number version of) array variable
*/

function rotateADigit(numberParam, placeValueParam) {
  let toSubtract = String(placeValueParam)['length'];
  let array = String(numberParam).split('');
  let digit = array.splice(array['length'] - toSubtract, 1);
  array.push(digit[0]);
  return Number(array.join(''));
}

console.log(rotateADigit(735291, 1));      // 735291
console.log(rotateADigit(735291, 10));      // 735219
console.log(rotateADigit(735291, 100));      // 735912
console.log(rotateADigit(735291, 1000));      // 732915
console.log(rotateADigit(735291, 10000));      // 752913
console.log(rotateADigit(735291, 100000));      // 352917
