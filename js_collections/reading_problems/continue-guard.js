let numbers = [ 1, 4, 3, 7, 6, 5, 2, 1 ];

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 !== 1) {
    let square = numbers[index] * numbers[index];
    console.log(square);
  }
}
