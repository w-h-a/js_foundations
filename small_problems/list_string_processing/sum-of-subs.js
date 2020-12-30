/*
for sumOfSums
1. SET result to 0
2. SET i to 0
3. WHILE i is less than length of input array
  - SET j to i
  - WHILE j is greater than -1
    1. SET result to result plus number at input array index j
    2. SET j to j minus 1
  - SET i to i plus 1
  - RETURN result
4. RETURN result
*/

function sumOfSums(arrayONumsP) {
  return arrayONumsP.reduce((acc, _, i, src) => {
    let j = i;
    while (j > -1) {
      acc += src[j];
      j -= 1;
    }
    return acc;
  }, 0);
}

console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35
