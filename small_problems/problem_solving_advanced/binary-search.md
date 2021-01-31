Problem:


Implement a binarySearch function that takes an array and a search item as arguments and returns the index of the search item if found, or -1 otherwise.

You may assume that the array argument will always be sorted.

- input: array and search item
- output: index of the search item

- explicit
  - array will always be sorted
  - if search item is found, then the function returns the index of the search item; otherwise, the function returns -1

- implicit
  - the search item is either a string or number
  - ?

Test Cases (given):

let yellowPages = ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot', 'Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'];

let yellowPages = ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot', 'Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'];

console.log(binarySearch(yellowPages, 'Pizzeria'));                   // 7
console.log(binarySearch(yellowPages, 'Apple Store'));                // 0

console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77));    // -1
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89));    // 7
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5));     // 1

console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter'));  // -1
console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler'));  // 6

Pseudocode:

I didn't understand the description of the problem; so, I used the pseudocode found [here](https://www.tutorialspoint.com/data_structures_algorithms/binary_search_algorithm.htm) to try to come up with a solution.
