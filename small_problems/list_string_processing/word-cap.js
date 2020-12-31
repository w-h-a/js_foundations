/*
for wordCap
1. SET word array to split string at space
2. SET map1 to empty array
3. WHILE word array has elements
  - SET char array to split string
  - SET map2 to empty array
  - WHILE char array has elements
    - IF index of char is strictly identical to 0
      - SET map2 to include return value of uppercasing current element
      ELSE
      - SET map2 to include return value of lowercasing current element
  - SET map2 to joined string
  - SET map1 to include map2
4. SET map1 to joined string
5. RETURN map1
*/

function wordCap(stringP) {
  return stringP.split(' ').map(word => word.split('').map((char, idx) => (idx === 0 ? char.toUpperCase() : char.toLowerCase())).join('')).join(' ');
}

console.log(wordCap('four score and seven'));       // "Four Score And Seven"
console.log(wordCap('the javaScript language'));    // "The Javascript Language"
console.log(wordCap('this is a "quoted" word'));    // 'This Is A "quoted" Word'
