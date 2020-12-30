Problem:

Function takes a grocery list (a two-dimensional array) and returns a one-dimensional array. The grocery list is such that each element contains a fruit name and a number representing the desired quantity of that fruit. The output array is such that each fruit name appears the number of times equal to its desired quantity.

- input: array
- output: array

- explicit
  - the input array is a two-dimensional array
    - each element contains a fruit name and its desired quantity
  - the output array is a one-dimensional array
    - each fruit name appears the number of times equal to its desired quantity

- implicit
  - the input array only contains name-quantity pairs
  - the output array only contains names (repeated the same number as their desired quantity)

Test Cases (Given):

buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]);
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]

Pseudocode:

for buyFruit
1. SET result to empty array
2. SET idx to 0
3. WHILE idx is less than the length of the input array
  - SET rep to the number at index 1 of the current element
  - WHILE rep is greater than 0
    - SET result to include name at index 0 of the current element
    - SET rep to rep minus one
  - RETURN result
4. RETURN result
