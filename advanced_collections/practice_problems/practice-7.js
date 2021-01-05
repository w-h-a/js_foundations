// Given the following code,
// what will the final values of a and b be?
// Try to answer without running the code.

let a = 2;
let b = [5, 8];
let arr = [a, b];

arr[0] += 2;
arr[1][0] -= a;

console.log(a);
console.log(b);
console.log(arr);

// a === 2
// b refers to [3, 8]
// arr refers to [4, [3, 8]]
