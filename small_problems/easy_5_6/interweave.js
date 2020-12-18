/*
START

1.  SET result array to empty array
2.  WHILE there are still elements to add to result array
      SET result array to include ith element of each input array
      SET idx variable to idx plus 1
3.  RETURN/PRINT result array

END
*/

function interleave(firstArrayP, secondArrayP) {
  return firstArrayP.reduce((acc, _, idx) => {
    acc.push(firstArrayP[idx], secondArrayP[idx]);
    return acc;
  }, []);
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]
