function multiply(arrayOfNumsP, transP) {
  arrayOfNumsP.forEach((ele, idx) => {
    arrayOfNumsP.splice(idx, 1, (ele * transP));
  });

  return arrayOfNumsP;
}

let myNumbers = [1, 4, 3, 7, 2, 6];
console.log(multiply(myNumbers, 3)); // => [3, 12, 9, 21, 6, 18]
