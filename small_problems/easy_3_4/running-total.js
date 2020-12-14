function runningTotal(arrayP) {
  return arrayP.reduce((acc, ele, idx) => {
    if (idx > 0) {
      acc.push(ele + acc[idx - 1]);
    } else {
      acc.push(ele);
    }
    return acc;
  }, []);
}

console.log(
  `${runningTotal([2, 5, 13])}\n` +           // [2, 7, 20]
  `${runningTotal([14, 11, 7, 15, 20])}\n` +  // [14, 25, 32, 47, 67]
  `${runningTotal([3])}\n` +                  // [3]
  `${runningTotal([])}`                       // []
);
