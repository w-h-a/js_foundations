/*
1. Using Math.sign(), check if input number is negative, positive, or 0. Save result.
2. Using Math.abs(), get absolute value of number.
3. Declare variable and assign to it an empty array.
4. While number > 0:
    1. let r = number % 10;
    2. Push r to array.
    3. let difference = number - r;
    4. number = difference / 10;
5. Reduce or map array to string.
6. Add sign to front of array if needed. If no sign needed, then the input
    number was 0. Push 0 to array.
7. Join and return.
*/

function signedIntegerToString(numberParam) {
  let sign = Math.sign(numberParam);
  let abs = Math.abs(numberParam);
  let arrayODigits = [];
  while(abs > 0) {
    let r = abs % 10;
    arrayODigits.push(r);
    let difference = abs - r;
    abs = difference / 10;
  }
  let reducedToStrings = arrayODigits.reverse().reduce((acc, ele) => {
    if (ele === 0) {
      acc.push('0');
    } else if (ele === 1) {
      acc.push('1');
    } else if (ele === 2) {
      acc.push('2');
    } else if (ele === 3) {
      acc.push('3');
    } else if (ele === 4) {
      acc.push('4');
    } else if (ele === 5) {
      acc.push('5');
    } else if (ele === 6) {
      acc.push('6');
    } else if (ele === 7) {
      acc.push('7');
    } else if (ele === 8) {
      acc.push('8');
    } else if (ele === 9) {
      acc.push('9');
    }
    return acc;
  }, []);
  if (sign === -1) {
    reducedToStrings.splice(0, 0, '-');
  } else if (sign === 1) {
    reducedToStrings.splice(0, 0, '+');
  } else {
    reducedToStrings.push('0');
  }
  return reducedToStrings.join('');
}

console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");
console.log(signedIntegerToString(5000) === "+5000");
console.log(signedIntegerToString(1234567890) === "+1234567890");
