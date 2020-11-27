/*
START

Given an array of integers:

1. SET local variable called 'arrayParam' to the array of integers.
2. SET local variable called 'i' to 0.
3. SET local variable called 'accumulator' to an empty array.
4. WHILE i < length of arrayParam:
  1. If the ith element of the arrayParam is even
    push the element to accumulator.
  2. iterator += 1
5. PRINT accumulator.

END
*/

let array = [-1, 2, 0, 30, -17, -0, -0, -0, 4];

// for loop approach:
let accumulator = [];
for (let i = 0; i < array['length']; i += 1) {
  if (i % 2 === 0) {
    accumulator.push(array[i]);
  }
}
console.log(accumulator);

// reduce approach (first time trying out idx):
let reducedArray = array.reduce((acc, ele, idx) => {
  if (idx % 2 === 0) {
    acc.push(ele);
  }
  return acc;
}, []);
console.log(reducedArray);
