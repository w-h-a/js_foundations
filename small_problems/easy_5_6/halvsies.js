/*
START

1.  SET arrayOArrays to empty array;
2.  GET firstHalf
      WHILE the length of the firstHalf is less than input array
        PUSH shifted element from input array to firstHalf
3.  SET arrayOArrays to array1 as one element and input array as the other
4.  PRINT arrayOArrays

END
*/

function getFirstHalf(arrayP) {
  return arrayP.reduce(acc => {
    if (acc['length'] < arrayP['length']) {
      acc.push(arrayP.shift());
    }
    return acc;
  }, []);
}

function halvsies(arrayP) {
  let arrayOArrays = [];

  let array1 = getFirstHalf(arrayP);

  arrayOArrays.push(array1, arrayP);

  return arrayOArrays;
}

console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]
