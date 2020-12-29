/*
for alphabeticNumberSort
1. SET mapping object to include correspondence between English word and number
2. GET array of corresponding English words
3. SET array to be sorted by English words
4. RETURN array of corresponding numbers
*/

let engToNum = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  ten: 10,
  eleven: 11,
  twelve: 12,
  thirteen: 13,
  fourteen: 14,
  fifteen: 15,
  sixteen: 16,
  seventeen: 17,
  eighteen: 18,
  nineteen: 19
};

let numToEng = Object.entries(engToNum).reduce((acc, ele) => {
  acc[String(ele[1])] = ele[0];
  return acc;
}, {});

function alphabeticNumberSort(arrP) {
  return arrP.map(ele => numToEng[String(ele)]).sort().map(ele => engToNum[ele]);
}

let zeroToNineteen = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19
];

console.log(alphabeticNumberSort(zeroToNineteen));
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]

console.log(zeroToNineteen);
