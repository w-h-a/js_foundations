/*
START

IF input number is odd
    GET repeated '10' string for floor of input number / 2 and add a '1'
ELSE
    GET repeated '10' string for floor of input number / 2

END
*/

function stringy(integerP) {
  if (integerP % 2 !== 0) {
    let repeats = Math.floor(integerP / 2);
    return `${"10".repeat(repeats)}1`;
  } else {
    let repeats = integerP / 2;
    return `${"10".repeat(repeats)}`;
  }
}

console.log(
  stringy(6),    // "101010"
  stringy(9),    // "101010101"
  stringy(4),    // "1010"
  stringy(7),    // "1010101"
);
