/*
for cWSwappigansCase
1. SET char array to split string
2. SET map string to empty string
3. WHILE element in char array
  - IF element is included in alphabet and lowercase
    - SET map to include return value of uppercasing element
    ELSE IF element is included in alphabet and uppercase
    - SET map to include return value of lowercasing element
    ELSE
    - SET map to include element
  - RETURN map
4. RETURN map
*/

let lowerAlpha = 'abcdefghijklmnopqrstuvwxyz';

let upperAlpha = lowerAlpha.toUpperCase();

function cWSwappigansCase(stringP) {
  return stringP.split('').reduce((acc, ele) => {
    if (lowerAlpha.includes(ele)) {
      acc += ele.toUpperCase();
    } else if (upperAlpha.includes(ele)) {
      acc += ele.toLowerCase();
    } else {
      acc += ele;
    }
    return acc;
  }, '');
}

console.log(cWSwappigansCase('CamelCase'));              // "cAMELcASE"
console.log(cWSwappigansCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"
