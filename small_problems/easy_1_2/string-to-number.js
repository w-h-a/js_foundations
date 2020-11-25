/*
1. Declare accumulator and set to 0.
2. Declare place variable and set to 1.
3. Check if first character is '-'. Save result.
4. Do the following from the last digit to the first:
    1. Check digit against '0' - '9';
    2. After match is found:
        1. Declare toBeAdded and assign digit multiplied by place variable
        2. Add toBeAdded to accumulator
    3. Update place variable so that it is place * 10.
4. Return accumulator variable with sign if needed.
*/

/*
My Solution using only primitive data types.
That's just code for: I did not think about using the dictionary-like object
*/

function stringToSignedInteger(stringParam) {
  let accumulator = 0;
  let place = 1;
  let sign = false;
  if (stringParam[0] === '-') {
    sign = true;
  }
  for (let i = stringParam['length'] - 1; i > -1; i -= 1) {
    if (stringParam[i] === '0') {
      let toBeAdded = 0 * place;
      accumulator += toBeAdded;
    } else if (stringParam[i] === '1') {
      let toBeAdded = 1 * place;
      accumulator += toBeAdded;
    } else if (stringParam[i] === '2') {
      let toBeAdded = 2 * place;
      accumulator += toBeAdded;
    } else if (stringParam[i] === '3') {
      let toBeAdded = 3 * place;
      accumulator += toBeAdded;
    } else if (stringParam[i] === '4') {
      let toBeAdded = 4 * place;
      accumulator += toBeAdded;
    } else if (stringParam[i] === '5') {
      let toBeAdded = 5 * place;
      accumulator += toBeAdded;
    } else if (stringParam[i] === '6') {
      let toBeAdded = 6 * place;
      accumulator += toBeAdded;
    } else if (stringParam[i] === '7') {
      let toBeAdded = 7 * place;
      accumulator += toBeAdded;
    } else if (stringParam[i] === '8') {
      let toBeAdded = 8 * place;
      accumulator += toBeAdded;
    } else if (stringParam[i] === '9') {
      let toBeAdded = 9 * place;
      accumulator += toBeAdded;
    }
    place *= 10;
  }
  if (sign === true) {
    accumulator = - accumulator;
  }
  return accumulator;
}


// Launch's more elegant solution:
/*
function hexadecimalToInteger(string) {
  const DIGITS = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    A: 10,
    B: 11,
    C: 12,
    D: 13,
    E: 14,
    F: 15
  };
  let arrayOfDigits = string.toUpperCase().split("").map(char => DIGITS[char]);
  let value = 0;
  arrayOfDigits.forEach(digit => (value = (16 * value) + digit));
  return value;
}
*/

console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true
//console.log(hexadecimalToInteger('4D9f') === 19871);
