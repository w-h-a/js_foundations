Problem:

Function takes two sorted arrays as arguments and returns a new array that contains all the elements from both input arrays in sorted order.

You may not sort the result array. You should build the result array one element at a time in the proper order.

- input: two arrays
- output: new array

- explicit:
  - the input arrays are already sorted
  - the output array must be sorted as it is built.
  - the output array must contain all the elements from both input arrays in sorted order.

- implicit:
  - the output array must contain only the elements from both input arrays in sorted order.
  - compare next element pair in line that have not been compared
    - if element of first array is smaller
      - send that element to result array
    - else
      - send the other element to result array

Test Cases:

merge([1, 5, 9], [2, 6, 8]);      // [1, 2, 5, 6, 8, 9]
merge([1, 1, 3], [2, 2]);         // [1, 1, 2, 2, 3]
merge([], [1, 4, 5]);             // [1, 4, 5]
merge([1, 4, 5], []);             // [1, 4, 5]

Pseudocode:

https://www.tutorialspoint.com/data_structures_algorithms/merge_sort_algorithm.htm
