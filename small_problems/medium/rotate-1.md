Problem:

Function rotates an array by moving the first element to the end of the array. The function does not mutate the original array.

If the input is not an array, return undefined.

If the input is an empty array, return an empty array.

- permissible input: either an array or not
- obligatory output: either undefined or an _new_ array

- explicit rules
  - if the input is not an array, return undefined
  - if the input is an array, then
    - if the input is of length 0, then return a new array of length 0
    - if the input is of length > 0, then return a copy of the original array except that the first element of the original array is at the end of the new array.
  - the original array must not be mutated

- implicit rules:
  - if there is no input, return undefined

Test Cases (Given):

rotateArray([7, 3, 5, 2, 9, 1]);       // [3, 5, 2, 9, 1, 7]
rotateArray(['a', 'b', 'c']);          // ["b", "c", "a"]
rotateArray(['a']);                    // ["a"]
rotateArray([1, 'a', 3, 'c']);         // ["a", 3, "c", 1]
rotateArray([{ a: 2 }, [1, 2], 3]);    // [[1, 2], 3, { a: 2 }]
rotateArray([]);                       // []

// return `undefined` if the argument is not an array
rotateArray();                         // undefined
rotateArray(1);                        // undefined


// the input array is not mutated
let array = [1, 2, 3, 4];
rotateArray(array);                    // [2, 3, 4, 1]
array;                                 // [1, 2, 3, 4]

Pseudocode:

IF input is not array
  - RETURN undefined
ELSE
  - SET newArray to copy of original array
  - IF newArray is of length 0
    - RETURN newArray
    ELSE
    - SET newArray so that element at 0th index is pushed to back of array
    - RETURN newArray
