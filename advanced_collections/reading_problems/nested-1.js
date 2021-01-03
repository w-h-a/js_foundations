let a = [1, 3];
let b = [2];
let arr = [a, b];
console.log(arr) // => [ [ 1, 3 ], [ 2 ] ]
console.log(a); // => [1, 3]

a[1] = 5;
console.log(arr) // => [ [ 1, 5 ], [ 2 ] ]
console.log(a); // => [1, 5]

arr[0][1] = 8;
console.log(arr) // => [ [ 1, 8 ], [ 2 ] ]
console.log(a); // => [1, 8]

let x = 1
let y = 2
let ay = [x, y];
console.log(ay); // => [1, 2]
console.log(x); // => 1

x = 5;
console.log(ay); // => [1, 2]
console.log(x); // => 5

ay[0] = 8;
console.log(ay); // => [8, 2]
console.log(x); // => 5
