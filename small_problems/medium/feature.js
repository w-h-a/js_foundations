/*
for featured(num)
SET num to num plus 1
IF num is either not a multiple of 7 or is a multiple of 2
  - SET num to GET nextMultiple(numP)
DO
  IF checkDigits(num) is true
    - RETURN num
  SET num to num plus 14
WHILE num is less than the big number
RETURN error string

for nextMultiple(num)
WHILE num is either not multiple of 7 or is a multiple of 2
  SET num to num plus 1
RETURN num

for checkDigits(num)
SET result to true
WHILE there are digits to check
  - IF num has no more than 1 of the same digit and result is true
    - SET result to true
    ELSE
    - SET result to false
RETURN result
*/

let digits = '0123456789';

function featured(numP) {
  numP += 1;

  if (numP % 7 !== 0 || numP % 2 === 0) numP = nextMultiple(numP);

  do {
    if (checkDigits(numP)) {
      return numP;
    }
    numP += 14;
  } while (numP < 9876543201);

  return "No number fulfills the requirements";
}

function nextMultiple(numP) {
  while (numP % 7 !== 0 || numP % 2 === 0) {
    numP += 1;
  }
  return numP;
}

function checkDigits(numP) {
  return digits.split('').reduce((acc, ele) => {
    return ((String(numP).split(ele)['length'] < 3) && (acc === true));
  }, true);
}

console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."
