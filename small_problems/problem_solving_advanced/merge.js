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

console.log(merge([1, 5, 9], [2, 6, 8]));      // [1, 2, 5, 6, 8, 9]
console.log(merge([1, 1, 3], [2, 2]));         // [1, 1, 2, 2, 3]
console.log(merge([], [1, 4, 5]));             // [1, 4, 5]
console.log(merge([1, 4, 5], []));             // [1, 4, 5]
console.log(merge([9], [5]));
