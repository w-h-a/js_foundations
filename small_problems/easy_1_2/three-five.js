/*
1. Create an empty array called ‘multiples’ that will contain the multiples.
2. Declare an iteration variable and set it to 1.
3. While the iteration variable is less than the target
    1. For each factor, append the current iteration value to multiples
        if the value isn’t already in multiples and
        the value is divisible by the factor without remainder.
    2. Add 1 to the iteration variable.
4. Compute and return the sum of the numbers in multiples.
*/

function multisum(targetParam, factorsParam) {
  let multiples = [];
  if (factorsParam === undefined) {
    factorsParam = [3, 5];
  }

  let iteration = 1;

  while (iteration < (targetParam + 1)) {
    factorsParam.forEach(element => {
      if (multiples.indexOf(iteration) === -1) {
        if (iteration % element === 0) {
          multiples.push(iteration);
        }
      }
    });
    iteration += 1;
  }

  return multiples.reduce((acc, ele) => {
    return acc + ele;
  }, 0);
}

console.log(
multisum(3),       // 3
multisum(5),       // 8
multisum(10),      // 33
multisum(20),      // 98
multisum(1000),    // 234168
);
