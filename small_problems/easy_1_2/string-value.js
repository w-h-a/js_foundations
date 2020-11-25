/*
1. Construct an array. Each element holds a character of the input string.
2. Map or reduce the array to an array with ASCII values.
3. Sum across mapped or reduced array and return value.
*/

function asciiValue(stringParam) {
  let arrayOChar = stringParam.split('');
  let reducedToValues = arrayOChar.reduce((acc, ele) => {
    acc.push(ele.charCodeAt());
    return acc;
  }, []);
  let reducedToSum = reducedToValues.reduce((acc, ele) => {
    acc += ele;
    return acc;
  }, 0);
  return reducedToSum;
}

console.log(
asciiValue('Four score'),         // 984
asciiValue('Launch School'),      // 1251
asciiValue('a'),                  // 97
asciiValue(''),                   // 0
)
