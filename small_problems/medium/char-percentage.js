/*
1. SET array to split string at characters
2. SET freq to object w/ lowercase: 0, uppercase: 0, neither: length of input string
3. WHILE array has elements
  - IF char is letter & lowercase
    - SET freq[lowercase] += 1
    - SET freq[neither] -= 1
    ELSE IF char is letter & uppercase
    - SET freq[uppercase] += 1
    - SET freq[neither] -= 1
4. SET freq to entries array
5. SET map to array w/ length 0
6. WHILE elements in freq
  - SET map to include element but where element[1] = element[1] / length of input string and multiplied by 100 and rounded to 2
7. SET freq to object from entries of map
8. RETURN freq
*/

let lowerAlpha = 'abcdefghijklmnopqrstuvwxyz';

let upperAlpha = lowerAlpha.toUpperCase();

function letterPercentages(strParam) {
  return Object.fromEntries(Object.entries(strParam.split('').reduce((acc, ele) => {
    if (lowerAlpha.includes(ele)) {
      acc['lowercase'] += 1;
      acc['neither'] -= 1;
    } else if (upperAlpha.includes(ele)) {
      acc['uppercase'] += 1;
      acc['neither'] -= 1;
    }
    return acc;
  }, { lowercase: 0, uppercase: 0, neither: strParam['length'] })).map(ele => {
    ele[1] = ((ele[1] / strParam['length']) * 100).toFixed(2);
    ele = [ele[0], ele[1]];
    return ele;
  }));
}

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }
