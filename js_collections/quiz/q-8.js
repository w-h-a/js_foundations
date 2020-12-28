// Write a function that takes one argument, a positive integer,
// and returns an array that contains
// all of the positive integers less than that number.
// For instance, lessThan(5) should return [1, 2, 3, 4],
// while lessThan(1) should return [].

function lessThan(upperLimit) {
  let lengths = [];

  for (let candidate = 1; candidate < upperLimit; candidate += 1) {
    lengths.push(candidate);
  }

  return lengths;
}

console.log(lessThan(5));

console.log(lessThan(1));
