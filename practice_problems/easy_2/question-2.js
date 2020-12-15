// The Array.prototype.reverse method reverses the order of elements in an array,
// and Array.prototype.sort can rearrange the elements in a variety of ways,
// including descending.
// Both of these methods mutate the original array as shown below.
// Write three distinct ways of reversing the array without
// mutating the original array.
// Use .reverse for the first solution, and .sort for the second.
// Read about .slice for the first solution and spread syntax for the second.
// The final way is your choice.

let numbers = [1, 2, 3, 4, 5];

let sliced = numbers.slice();
sliced.reverse();
console.log(numbers);
console.log(sliced); // [ 5, 4, 3, 2, 1 ]

let sorted = [...numbers];
sorted.sort((a, b) => b - a);
console.log(numbers);
console.log(sorted); // [ 5, 4, 3, 2, 1 ]

let reversed = [];
numbers.forEach((element) => {
  reversed.unshift(element);
});
console.log(numbers);
console.log(reversed);

let reduced = numbers.reduce((acc, ele) => {
  acc.unshift(ele);
  return acc;
}, []);
console.log(numbers);
console.log(reduced);
