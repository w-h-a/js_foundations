/*
for removeVowels
1. SET result to empty array
2. WHILE there are elements in the input array
  - SET charArray to split string by character
  - SET subResult to empty array
  - WHILE there are elements in the charArray
    - IF the set of vowels does not include the element
      - SET subResult to include the element
    - RETURN subResult
  - RETURN joined subResult
  - SET result array to include subResult
3. RETURN result
*/

let vowels = 'aeiou';

function removeVowels(arrayOStringsP) {
  return arrayOStringsP.reduce((acc, ele) => {
    let subResult = ele.split('').filter(char => !(vowels.includes(char.toLowerCase()))).join('');
    acc.push(subResult);
    return acc;
  }, []);
}

console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]
