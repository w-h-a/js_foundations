/*
for sum function
1. GET string version of input number
2. GET array version of string
3. GET array version so that each element is a number
4. RETURN total by summing across array version
*/

function sum(numP) {
  return String(numP).split('').map(ele => Number(ele)).reduce((acc, ele) => acc + ele, 0);
}

console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45
