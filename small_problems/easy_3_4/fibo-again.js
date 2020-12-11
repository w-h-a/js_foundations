/*
START

1.  SET fib idx to 1
2.  SET fib number to 1
3.  SET fib length to stringified fib length
4.  WHILE it is not true that input and stringified fib length are identical
      SET fib number = fib(fib idx)
      SET fib length
      SET fib idx to fix idx plus 1
5.  RETURN fib idx - 1

END
*/

function fibonacci(intP) {
  if (intP === 1) {
    return 1;
  } else if (intP === 2) {
    return 1;
  } else {
    return fibonacci(intP - 1) + fibonacci(intP - 2);
  }
}

function findFibonacciIndexByLength(lengthP) {
  let fibIdx = 1;
  let fibNumber = 1;
  let fibLength = fibNumber.toString()['length'];
  while (fibLength !== lengthP) {
    fibNumber = fibonacci(fibIdx);
    fibLength = fibNumber.toString()['length'];
    fibIdx += 1;
  }
  return fibIdx - 1;
}

console.log(
  findFibonacciIndexByLength(2),      // 7
  findFibonacciIndexByLength(10),      // 45
);

// Don't try any higher values until you read the solution Discussion
