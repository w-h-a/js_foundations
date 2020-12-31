/*
for letterCaseCount
1. SET freqDist to
  - 'lowercase': 0
  - 'uppercase': 0
  - 'neither': length of input string
2. SET arrayOChar to string split by characters
3. WHILE there are elements in arrayOChar
  - IF element is both alpha and lowercase
    - SET 'lowercase' to current value plus 1
    - SET 'neither' to current value minus 1
    ELSE if element is both alpha and uppercase
    - SET 'uppercase' to current value plus 1
    - SET 'neither' to current value minus 1
  - RETURN freqDist
4. RETURN freqDist
*/

let lowerAlpha = 'abcdefghijklmnopqrstuvwxyz';

let upperAlpha = lowerAlpha.toUpperCase();

function letterCaseCount(stringP) {
  return stringP.split('').reduce((acc, ele) => {
    if (lowerAlpha.includes(ele)) {
      acc['lowercase'] += 1;
      acc['neither'] -= 1;
    } else if (upperAlpha.includes(ele)) {
      acc['uppercase'] += 1;
      acc['neither'] -= 1;
    }
    return acc;
  }, {lowercase: 0, uppercase: 0, neither: stringP['length']});
}

console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }
