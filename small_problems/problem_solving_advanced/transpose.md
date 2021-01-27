Problem:

Function takes an arbitrary matrix as argument and returns a new matrix that is the transpose of the input matrix.

- input: array
- output: new array

- explicit
  - the new array must be the transpose of the original
  - the input and output arrays represent matrices.

- implicit
  - not much

Test Cases:

const matrix = [
  [1, 5, 8, 5],
  [4, 7, 2, 0],
  [3, 9, 6, 1]
];

let newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6], [5, 0, 1]]
console.log(matrix);         // [[1, 5, 8, 5], [4, 7, 2, 0], [3, 9, 6, 1]]

transpose([[1, 2, 3, 4]]);            // [[1], [2], [3], [4]]
transpose([[1], [2], [3], [4]]);      // [[1, 2, 3, 4]]
transpose([[1]]);                     // [[1]]

transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]);
// [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]

Pseudocode

1. SET matrix to array of length 0
2. SET idx to 0
3. WHILE inner array has elements
  - WHILE input matrix has elements
    - SET matrix to include array of elements,
    each of which is at the current idx of each inner array
4. RETURN matrix
