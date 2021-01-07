/*
1. SET array variable to an array version of the input number
2. SET idx variable to 0
3. WHILE idx is less than the length of the array minus 1
  - SET array variable to itself without element at idx
  - SET digit variable to removed element
  - SET array variable with digit pushed to back
  - SET idx to idx plus 1
4. SET array variable to string version and then number version of itself
5. RETURN (number version of) array variable.
*/

function maxRotation(numberParam) {
  let array = String(numberParam).split('');

  for (let idx = 0; idx < array['length'] - 1; idx += 1) {
    let digit = array.splice(idx, 1);
    array.push(digit[0]);
  }

  return Number(array.join(''));
}

console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845
