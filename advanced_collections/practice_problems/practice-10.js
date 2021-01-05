// Perform the same transformation of sorting
// the subarrays we did in the previous exercise with one difference;
// sort the elements in descending order.

let arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];

let mappedAndSorted = arr.map(ele => {
  if (typeof ele[0] === 'string') {
    return ele.slice().sort().reverse();
  } else {
    return ele.slice().sort((a, b) => b - a);
  }
})

console.log(mappedAndSorted);
console.log(arr);
