/*
for getSequence
START

IF number is greater than 0
  SET sequence variable to include number
  SET number to number minus 1
  RETURN sequence from getSequence with number and sequence variable as arguments
ELSE
  RETURN sequence

END

for getSequence1
START

SET length of sequence variable to number
SET sequence variable to include undefined value from index 0 to final index
WHILE there are still (undefined) elements in sequence
  SET element to number minus current index
RETURN sequence

END
*/

// initial recursion solution
function getSequence(numP, sequenceP = []) {
  if (numP > 0) {
    sequenceP.unshift(numP);
    numP -= 1;
    return getSequence(numP, sequenceP);
  } else {
    return sequenceP;
  }
}

// additional reduce solution
function getSequence1(numP, sequenceP = []) {
  sequenceP['length'] = numP;
  return sequenceP.fill().reduce((acc, _, idx) => {
    acc.unshift(numP - idx);
    return acc;
  }, []);
}

console.log(getSequence(5));    // [1, 2, 3, 4, 5]
console.log(getSequence(3));    // [1, 2, 3]
console.log(getSequence(1));    // [1]

console.log(getSequence1(5));    // [1, 2, 3, 4, 5]
console.log(getSequence1(3));    // [1, 2, 3]
console.log(getSequence1(1));    // [1]
