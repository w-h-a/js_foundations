Problem:

Function takes an integer argument and returns 

- the square of the sum of each positive integer up to an including the input integer

minus

- the sum of the squares of each positive integer up to an including the input integer

- input: number
- output: number

Test Cases (Given):

sumSquareDifference(3);      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
sumSquareDifference(10);     // 2640
sumSquareDifference(1);      // 0
sumSquareDifference(100);    // 25164150

Pseudocode:

1. SET array to array filled with 0 and of length number
2. SET result1 to 0
3. WHILE array has elements
  - SET result1 to result1 + (idx + 1)
4. SET result1 to result1 squared
5. SET result2 to 0
6. WHILE array has elements
  - SET result2 to result2 + (idx + 1) squared
7. RETURN result1 - result2
