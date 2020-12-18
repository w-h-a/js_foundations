function multiplicativeAverage(arrayP) {
  let multi = arrayP.reduce((acc, ele) => {
    acc *= ele;
    return acc;
  }, 1);
  return (multi / arrayP['length']).toFixed(3);
}

console.log(multiplicativeAverage([3, 5]));                   // "7.500"
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"
