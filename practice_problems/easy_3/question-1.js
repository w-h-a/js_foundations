// Write three ways to remove all the elements

let numbers1 = [1, 2, 3, 4];

let numbers2 = numbers1.slice();

let numbers3 = [...numbers1];

while (numbers1['length'] > 0) {
  numbers1.pop();
}

console.log(numbers1);

while (numbers2['length'] > 0) {
  numbers2.shift();
}

console.log(numbers2);

numbers3.splice(0, numbers3['length']);

console.log(numbers3);
