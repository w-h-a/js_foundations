Problem:

Function takes an array of numbers and returns the sum of the sums of each leading subsequence for the array. For example, if the input is

[3, 5, 2]

then the output should be

(3) + (3 + 5) + (3 + 5 + 2)

or

21

You may assume that the array always contains at least one number.

- input: array
- output: number

- explicit rules
  - the input array contains numbers
  - the output number must be such that, e.g.,
    - if the input is [3, 5, 2], then the output should be
      - (3) + (3 + 5) + (3 + 5 + 2) or 21

- implicit rules
  - the input array only contains numbers

Test Cases (Given):

sumOfSums([3, 5, 2]);        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
sumOfSums([1, 5, 7, 3]);     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
sumOfSums([4]);              // 4
sumOfSums([1, 2, 3, 4, 5]);  // 35

Pseudocode:

for sumOfSums
1. SET result to 0
2. SET i to 0
3. WHILE i is less than length of input array
  - SET j to i
  - WHILE j is greater than -1
    1. SET result to result plus number at input array index j
    2. SET j to j minus 1
  - SET i to i plus 1
  - RETURN result
4. RETURN result
