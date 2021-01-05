// Given the following data structure,
// write some code to return an array which
// contains all and only the objects that satisfy the following.
// Each array in the object is such that each number in the array is even.

let arr = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];

console.log(arr.filter(ele => {
  return Object.values(ele).every(array => array.every(num => num % 2 === 0));
}));
