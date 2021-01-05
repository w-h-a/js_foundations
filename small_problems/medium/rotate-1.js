/*
IF input is not array
  - RETURN undefined
ELSE
  - SET newArray to copy of original array
  - IF newArray is of length 0
    - RETURN newArray
    ELSE
    - SET newArray so that element at 0th index is pushed to back of array
    - RETURN newArray
*/

function getDeepCopy(arrayParam) {
  return JSON.parse(JSON.stringify(arrayParam));
}

function rotateArray(arrayParam) {
  if (!Array.isArray(arrayParam)) {
    return undefined;
  } else {
    let deepCopy = getDeepCopy(arrayParam);
    if (deepCopy['length'] === 0) {
      return deepCopy;
    } else {
      deepCopy.push(deepCopy.shift());
      return deepCopy;
    }
  }
}

console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
console.log(rotateArray(['a']));                    // ["a"]
console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([]));                       // []

// return `undefined` if the argument is not an array
console.log(rotateArray());                         // undefined
console.log(rotateArray(1));                        // undefined


// the input array is not mutated
let array = [1, 2, 3, 4];
console.log(rotateArray(array));                    // [2, 3, 4, 1]
console.log(array);                                 // [1, 2, 3, 4]
