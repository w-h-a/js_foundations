/*
The function checks whether the input number's absolute value is odd or even.
  1. If it is odd, the function should return true
  2. If it is even, the function should return false.
*/


// My solution:
function isOdd(integerParam) {
  let absoluteValue = Math.abs(integerParam);
  if (absoluteValue % 2 === 0) {
    return false;
  } else {
    return true;
  }
}

// Launch's more elegant solution:
/*
function isOdd(number) {
  return Math.abs(number) % 2 === 1;
}
*/

console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true
