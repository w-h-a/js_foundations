/*
START

1.  SET array to length of count
2.  SET array to include undefined in each element
3.  WHILE there are (undefined) elements
      SET element to number * (1 + idx)
4.  RETURN array

END
*/

function sequence(countP, numP) {
  let array = [];
  array['length'] = countP;
  return array.fill().reduce((acc, _, idx) => {
    acc.push(numP * (idx + 1));
    return acc;
  }, []);
}

console.log(sequence(5, 1));          // [1, 2, 3, 4, 5]
console.log(sequence(4, -7));         // [-7, -14, -21, -28]
console.log(sequence(3, 0));          // [0, 0, 0]
console.log(sequence(0, 1000000));    // []
