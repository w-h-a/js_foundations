/*
Problem:
Create a function that iteratively creates an array of multiples of
some given factors up to but not including a given target and, furthermore,
returns the sum of the multiples.

Test Cases:
Case 1
Input
**target: 20
**factors: [3, 5]
Output: 78

Case 2
Input
**target: 20
**factors: [3]
Output: 63

Case 3
Input
**target: 20
**factors: [5]
Output: 30

Case 4
Input
**target: 20
**factors: []
Output: 78

Case 5
Input
**target: 1
**factors: []
Output: 0

Case 6
Input
**target: 20
**factors: [19]
Output: 19

High-Level Program:
1. Create an empty array called ‘multiples’ that will contain the multiples.
2. Check whether the list of factors is empty. If there are no factors, set the list to [3, 5]. If there are factors, use those.
3. Declare an iteration variable and set it to 1.
4. While the iteration variable is less than the target
****1. For each factor, append the current iteration value to multiples if the value isn’t already in multiples and the value is divisible by the factor without remainder.
****2. Add 1 to the iteration variable.
5. Compute and return the sum of the numbers in multiples.

*/

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
