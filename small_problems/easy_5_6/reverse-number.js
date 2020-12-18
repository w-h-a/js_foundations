function reverseNumber(numP, resultArrayP = []) {
  if (numP !== 0) {
    let remainder = numP % 10;
    resultArrayP.push(remainder);
    numP = (numP - remainder) / 10;
    return reverseNumber(numP, resultArrayP);
  } else {
    return Number(resultArrayP.join(''));
  }
}

console.log(reverseNumber(12345));    // 54321
console.log(reverseNumber(12213));    // 31221
console.log(reverseNumber(456));      // 654
console.log(reverseNumber(12000));    // 21 -- Note that leading zeros in the result get dropped!
console.log(reverseNumber(1));        // 1
