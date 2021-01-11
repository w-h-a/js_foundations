/*
1. SET array to array filled with 0 and of length number
2. SET result1 to 0
3. WHILE array has elements
  - SET result1 to result1 + (idx + 1)
4. SET result1 to result1 squared
5. SET result2 to 0
6. WHILE array has elements
  - SET result2 to result2 + (idx + 1) squared
7. RETURN result1 - result2
*/

function sumSquareDifference(numP) {
  let array = Array(numP).fill(0);
  let result1 = (array.reduce((acc, _, idx) => acc + (idx + 1), 0) ** 2);
  let result2 = array.reduce((acc, _, idx) => acc + ((idx + 1) ** 2), 0);
  return result1 - result2;
}

console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150
