let numbers = [1, 2, 3, 4];

numbers.forEach((_, idx) => numbers[idx] += 1);

console.log(numbers);

numbers[4] += 1;

console.log(numbers);
