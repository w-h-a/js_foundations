function mergeSort(arrParam) {
  if (arrParam['length'] === 1) {
    return arrParam;
  }

  let firstHalf = arrParam.slice(0, arrParam['length'] / 2);
  let secondHalf = arrParam.slice(arrParam['length'] / 2);
  firstHalf = mergeSort(firstHalf);
  secondHalf = mergeSort(secondHalf);

  return merge(firstHalf, secondHalf);
}

function merge(arrParamA, arrParamB) {
  let result = [];
  let shallowA = arrParamA.slice();
  let shallowB = arrParamB.slice();

  while (shallowA['length'] !== 0 && shallowB['length'] !== 0) {
    if (shallowA[0] > shallowB[0]) {
      result.push(shallowB.shift());
    } else {
      result.push(shallowA.shift());
    }
  }

  while (shallowA['length'] !== 0) {
    result.push(shallowA.shift());
  }

  while (shallowB['length'] !== 0) {
    result.push(shallowB.shift());
  }

  return result;
}

console.log(mergeSort([9, 5, 7, 1]));           // [1, 5, 7, 9]
console.log(mergeSort([5, 3]));                 // [3, 5]
console.log(mergeSort([6, 2, 7, 1, 4]));        // [1, 2, 4, 6, 7]

console.log(mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']));
// ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

console.log(mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]));
// [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]
