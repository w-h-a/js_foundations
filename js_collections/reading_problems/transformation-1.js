let fruits = ['apple', 'banana', 'pear'];
let transformedElements = [];
let counter = 0;

while (counter < fruits['length']) {
  let currentElement = fruits[counter];

  transformedElements.push(currentElement + 's');
  counter += 1;
}

console.log(transformedElements); // => ['apples', 'bananas', 'pears']
