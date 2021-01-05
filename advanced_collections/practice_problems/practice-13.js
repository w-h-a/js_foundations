// Given the following data structure,
// sort the array so that the sub-arrays are in ascending
// order based on the sum of the odd numbers that they contain.

let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

// => [ [ 1, 8, 3 ], [ 1, 6, 7 ], [ 1, 5, 3 ] ]

let sorted = arr.slice().sort((a, b) => {
  sum1 = a.filter(num => num % 2 !== 0).reduce((acc, ele) => acc + ele);
  sum2 = b.filter(num => num % 2 !== 0).reduce((acc, ele) => acc + ele);
  return sum1 - sum2;
})

console.log(sorted);

console.log(arr);
