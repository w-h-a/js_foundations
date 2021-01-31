/*
I didn't understand the description of the problem; so, I used the pseudocode found
[here](https://www.tutorialspoint.com/data_structures_algorithms/binary_search_algorithm.htm)
to try to come up with a solution.
*/

let yellowPages = ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot', 'Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'];

function binarySearch(arrParam, searchParam) {
  let size = arrParam['length'];
  let lowerBound = 0;
  let upperBound = size - 1;
  let midIdx;

  while (upperBound >= lowerBound) {
    midIdx = Math.floor(lowerBound + ((upperBound - lowerBound) / 2));
    if (arrParam[midIdx] < searchParam) lowerBound = midIdx + 1;
    if (arrParam[midIdx] > searchParam) upperBound = midIdx - 1;
    if (arrParam[midIdx] === searchParam) return midIdx;
  }

  return -1;
}

console.log(binarySearch(yellowPages, 'Pizzeria'));                   // 7
console.log(binarySearch(yellowPages, 'Apple Store'));                // 0

console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77));    // -1
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89));    // 7
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5));     // 1

console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter'));  // -1
console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler'));  // 6
