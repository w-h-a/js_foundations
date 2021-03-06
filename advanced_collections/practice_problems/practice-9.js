// Given the following data structure,
// return a new array with the same structure,
// but with the subarrays ordered
// -- alphabetically or numerically as appropriate -- in ascending order.

let arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];

let mappedAndSorted = arr.map(ele => {
  if (typeof ele[0] === 'string') {
    return ele.slice().sort();
  } else {
    return ele.slice().sort((a, b) => a - b);
  }
})

console.log(mappedAndSorted);
