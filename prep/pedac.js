function sumOfMultiples(targetParam, factorsParam) {
  let multiples = [];
  if (factorsParam['length'] === 0) {
    factorsParam = [3, 5];
  }

  let iteration = 1;

  while (iteration < targetParam) {
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
sumOfMultiples(20, [3, 5]),  // returns 78
sumOfMultiples(20, [3]),     // returns 63
sumOfMultiples(20, [5]),     // returns 30
sumOfMultiples(20, []),      // returns 78
sumOfMultiples(1, []),       // returns 0
sumOfMultiples(20, [19]),    // returns 19
);
