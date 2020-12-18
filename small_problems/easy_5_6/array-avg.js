const WEIGHTS = {
  0: 1 / 6,
  1: 1 / 6,
  2: 1 / 6,
  3: 1 / 6,
  4: 1 / 6,
  5: 1 / 6
};

function average(arrayP) {
  return Math.floor(arrayP.reduce((acc, ele, idx) => {
    return acc + ele * WEIGHTS[String(idx)];
  }, 0));
}

console.log(average([1, 5, 87, 45, 8, 8]));       // 25
console.log(average([9, 47, 23, 95, 16, 52]));    // 40
