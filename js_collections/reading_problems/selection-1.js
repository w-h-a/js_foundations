let numbers = [1, 3, 9, 11, 1, 4, 1];
let ones = [];

for (let counter = 0; counter < numbers['length']; counter += 1) {
  let currentNum = numbers[counter];

  if (currentNum === 1) {
    ones.push(currentNum); // appends currentNum to the ones array
  }
}

console.log(ones); // => [1, 1, 1]
