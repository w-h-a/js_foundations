/*
ORIGINAL PROBLEM
1. Declare a square function that takes one argument.
2. The square function feeds its argument into the multiply function twice and
    returns the result.
*/

function square(numberParam) {
  return mult(numberParam, numberParam);
}

function mult(firstNumberParam, secondNumberParam) {
  return firstNumberParam * secondNumberParam;
}

console.log(square(-8));
console.log(square(5));

/*
FURTHER EXPLORATION
1. Declare a raisedToTheNPower function that takes two arguments:
    the number and n
2. The raisedToTheNPower function operates in the following way.
    1. If n = 0, then returns 1.
    2. If n = 1, then returns number.
    3. If n > 1, then
        (a) declare iteration variable and assign to it 2.
        (b) declare result variable and assign to it result of
            sending number and number into multiply function.
        (c) while iteration variable < n
            1. update result variable to the value of sending
                result and original number into multiply function
            2. increment iteration variable by 1.
        (d) return result.
*/

function raisedToTheNPower(numberParam, n) {
  if (n === 0) {
    return 1;
  } else if (n === 1) {
    return numberParam;
  } else if (n > 1) {
    let i = 2;
    let result = mult(numberParam, numberParam);
    while (i < n) {
      result = mult(result, numberParam);
      i += 1;
    }
    return result;
  }
}


console.log(raisedToTheNPower(2, 6));
