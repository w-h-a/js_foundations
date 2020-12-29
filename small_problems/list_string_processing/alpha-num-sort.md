Problem:

Function takes an array of integers between 0 and 19 and returns an array of those integers sorted based on the English word for each number (e.g., 'zero' goes with 0, 'one' goes with 1, etc).

- Input: array of integers between 0 and 19
- Output: sorted array of integers

- Explicit rules:
  - the output array is sorted based on English word for the number

- Implicit rules:
  - The function seems to only take an array of integers between 0 and 19

Test Cases (Given):

alphabeticNumberSort(
   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]

Pseudocode:

for alphabeticNumberSort
1. SET mapping object to include correspondence between English word and number
2. GET array of corresponding English words
3. SET array to be sorted by English words
4. RETURN array of corresponding numbers
