// Here's an exercise for you:
// suppose we wanted to transform the numbers based on
// their position in the array rather than their value?
// Try coding a solution that doubles the numbers that have odd indices:

function doubleOddNumbers(arrayOfNumsP) {
  return arrayOfNumsP.reduce((acc, ele, idx) => {
    if (idx % 2 !== 0) {
      acc.push(ele * 2);
    } else {
      acc.push(ele);
    }
    return acc;
  }, []);
}

let myNumbers = [1, 4, 3, 7, 2, 6];
console.log(doubleOddNumbers(myNumbers));  // => [1, 8, 3, 14, 2, 12]

// not mutated
console.log(myNumbers);                    // => [1, 4, 3, 7, 2, 6]
