/*
Initial Recursion Approach:
START

IF the input number is not 0
  SET remainder to input number remainder 10
  SET resultArray to include remainder
  SET difference to input number minus remainder
  SET input number to difference divided by 10
  RETURN recursive result until input number is 0
ELSE
  RETURN/PRINT reversed resultArray

END

Additional Reduce Approach:
START

SET stringVersion to stringified number
SET arrayVersion to arrayified stringVersion
WHILE there are elements in the arrayVersion
  SET resultArray to include number version of arrayVersion element
  RETURN resultArray
RETURN/PRINT resultArray

END
*/

// initial recursion approach
function digitList1(numP, resultP = []) {
  if (numP !== 0) {
    let remainder = numP % 10;
    resultP.push(remainder);
    let difference = numP - remainder;
    numP = difference / 10;
    return digitList1(numP, resultP);
  } else {
    return resultP.reverse();
  }
}

// additional 'reduce' approach
function digitList2(numP) {
  return String(numP).split('').reduce((acc, ele) => {
    acc.push(Number(ele));
    return acc;
  }, []);
}

console.log(digitList1(12345));       // [1, 2, 3, 4, 5]
console.log(digitList1(7));           // [7]
console.log(digitList1(375290));      // [3, 7, 5, 2, 9, 0]
console.log(digitList1(444));         // [4, 4, 4]
console.log(digitList2(12345));       // [1, 2, 3, 4, 5]
console.log(digitList2(7));           // [7]
console.log(digitList2(375290));      // [3, 7, 5, 2, 9, 0]
console.log(digitList2(444));         // [4, 4, 4]
