// Given the following data structure,
// use a combination of methods,
// including filter,
// to return a new array identical in structure to the original,
// but containing all and only the numbers that are multiples of 3.

let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

console.log(arr.map(ele => {
  return ele.filter(num => num % 3 === 0);
}));
