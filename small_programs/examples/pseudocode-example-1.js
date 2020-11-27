/*
START

Given a collection of integers called "numbers"

1. SET iterator = 1
2. SET savedNumber = value within numbers collection at space 1
3. WHILE iterator <= length of numbers
    1. SET currentNumber = value within numbers collection at space "iterator"
    2. IF currentNumber > savedNumber
        savedNumber = currentNumber
    3. ELSE
        skip to the next iteration
    4. iterator = iterator + 1
4. PRINT savedNumber

END
*/

function findGreatest(numbersParam) {
  let greatest = numbersParam.reduce((acc, ele) => {
    if (ele > acc) {
      acc = ele;
    }
    return acc;
  }, -Infinity);
  return greatest;
}

let numbers = [-1, 0, 4, 5, 1000, -1000];
let result = findGreatest(numbers);
console.log(result);
